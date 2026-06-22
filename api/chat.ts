import { GoogleGenAI } from "@google/genai";

const RESUME_CONTENT = `
ABHISHEK KARMAKAR
Software Engineer @MindgateSolutions | FinTech | Angular
Location: Chennai, Tamil Nadu, India
Contact: 9875491383, abswaron31@gmail.com, linkedin.com/in/abhishekkarmakar31

Summary:
Experienced Software Engineer in Angular, Front-End development, FinTech, and building scalable micro frontend architectures, delivering scalable and maintainable UI solutions.
Expertise in key banking modules like Payments, Beneficiaries, Reports, Bulk Transactions, and all phases of the Software Development Life Cycle. Strong in architectural design and client communication.
Key role in driving technical excellence, optimizing performance, and ensuring consistent outcomes across multiple engineering teams.

Skills:
Angular (v13–v18), TypeScript, HTML, CSS, Bootstrap, Kendo UI, Java, Spring Boot, Git, Jenkins, Jira, System Design, HLD (High Level Design), LLD (Low Level Design).

Experience:
1. Mindgate Solutions - Software Engineer
   September 2022 - Present (3 years 4 months total tenure at company)
   Chennai, Tamil Nadu, India
2. Mindgate Solutions - Software Engineering Trainee
   June 2022 - August 2022 (3 months)
   Chennai, Tamil Nadu, India

Education:
SJC institute of technology
Bachelor of Engineering - BE, Information Technology (2015 - 2019)
`;

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  // Retrieve Gemini API Key from environment variables safely on server-side
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY || process.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ 
      error: "GEMINI_API_KEY is not configured on your Vercel deployment. Please add an environment variable named GEMINI_API_KEY with your API key as the value in Vercel settings, then redeploy your project." 
    });
  }

  try {
    const { message, history } = req.body || {};

    const ai = new GoogleGenAI({ 
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build-vercel-node',
        }
      }
    });
    
    const contents = [
      {
        role: "user",
        parts: [{ text: `System Context:\nYou are a helpful and professional AI assistant for Abhishek Karmakar's portfolio website.\nYour knowledge base is strictly limited to the following resume content:\n\n${RESUME_CONTENT}\n\nStrict Instructions:\n1. Answer questions clearly and concisely based *only* on the provided resume content.\n2. If asked about a skill, project, or experience not mentioned in the resume, politely state that it is not mentioned in the resume.\n3. Keep answers relatively short (under 3-4 sentences unless explicitly asked for a long summary).\n4. Speak on behalf of the portfolio (refer to Abhishek as "Abhishek" or "he").` }]
      },
      {
        role: "model",
        parts: [{ text: "Understood! I am ready to answer professional questions about Abhishek's resume and capabilities." }]
      },
      ...(history || []).map((h: any) => ({
        role: h.role === "user" ? "user" : "model",
        parts: [{ text: h.text || "" }]
      })),
      {
        role: "user",
        parts: [{ text: message || "" }]
      }
    ];

    // Implement highly robust fallback options and exponential retry backoff
    const modelsToTry = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-1.5-flash", "gemini-3.5-flash"];
    let responseStream = null;
    let lastError: any = null;

    for (const model of modelsToTry) {
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          responseStream = await ai.models.generateContentStream({
            model,
            contents,
          });
          break; // Succeeded! Break the retry loop
        } catch (err: any) {
          lastError = err;
          if (attempt < 1) {
            await new Promise((resolve) => setTimeout(resolve, (attempt + 1) * 300));
          }
        }
      }
      if (responseStream) break; // Break reference array search loop if model output stream succeeded
    }

    if (!responseStream) {
      throw lastError || new Error("All fallback models failed due to high service demand.");
    }

    res.writeHead(200, {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      "Connection": "keep-alive",
      "X-Accel-Buffering": "no",
    });

    for await (const chunk of responseStream) {
      if (chunk.text) {
        res.write(chunk.text);
      }
    }
    res.end();
  } catch (e: any) {
    console.error("Vercel Serverless API Chat Error:", e);
    // If headers are already written, we send a suffix error. Otherwise, standard 500 error.
    if (!res.headersSent) {
      return res.status(500).json({ error: e.message || "An internal error occurred." });
    } else {
      res.write(`\n[Connection Error: ${e.message || e}]`);
      res.end();
    }
  }
}
