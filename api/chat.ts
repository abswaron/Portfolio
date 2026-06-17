import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTENT } from "../constants";

export default async function handler(req: any, res: any) {
  // Support CORS if needed, but since it's same-origin on Vercel, simple handlers are ideal.
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const { message, history } = req.body;
  
  // Retrieve Gemini API Key from environment variables safely on server-side
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY || process.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ 
      error: "GEMINI_API_KEY is not configured on the server. Please define it in your environment variables." 
    });
  }

  try {
    const ai = new GoogleGenAI({ 
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build-vercel',
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

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");

    for await (const chunk of responseStream) {
      if (chunk.text) {
        res.write(chunk.text);
      }
    }
    res.end();
  } catch (e: any) {
    console.error("Vercel Serverless API Chat Error:", e);
    return res.status(500).json({ error: e.message || "Internal server error occurred while retrieving chat response." });
  }
}
