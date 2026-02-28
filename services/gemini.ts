import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTENT } from "../constants";

let chatSession: any = null;

const getAiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY is missing from environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = () => {
  const ai = getAiClient();
  if (!ai) return null;

  chatSession = ai.chats.create({
    model: 'gemini-flash-latest',
    config: {
      systemInstruction: `You are a helpful and professional AI assistant for Abhishek Karmakar's portfolio website. 
      Your knowledge base is strictly limited to the following resume content:
      
      ${RESUME_CONTENT}
      
      Instructions:
      1. Answer questions clearly and concisely based *only* on the provided resume information.
      2. If asked about a skill or experience not listed, politely state that it is not mentioned in the resume.
      3. Maintain a professional, polite, and encouraging tone.
      4. Keep answers relatively short (under 3-4 sentences) unless asked for a detailed summary.
      5. You are speaking on behalf of Abhishek's portfolio, so you can refer to him as "Abhishek" or "he".`,
    },
  });
  return chatSession;
};

export const sendMessageToGemini = async function* (message: string) {
  if (!chatSession) {
    initializeChat();
  }
  
  if (!chatSession) {
    yield "I'm sorry, I cannot connect to the AI service at the moment. Please check the API key configuration.";
    return;
  }

  try {
    const result = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of result) {
       if (chunk.text) {
         yield chunk.text;
       }
    }
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    yield "I encountered an error while processing your request. Please try again later.";
  }
};
