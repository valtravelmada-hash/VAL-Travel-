import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';

let chatSession: Chat | null = null;
const imageCache: Record<string, string> = {};

const SYSTEM_INSTRUCTION = `
You are Val, the friendly and professional AI travel assistant for "Val Travel", a premium travel agency based in Nosy Be, Madagascar.

Your goal is to inspire users to visit Madagascar, specifically Nosy Be, and help them plan their trips.
You represent a company that values Authenticity, Trust, and Comfort.
Tone: Warm, inspiring, professional, and helpful.

Key Information to know:
- Locations: Nosy Be, Nosy Iranja (Turtle Island), Nosy Tanikely (Marine Reserve), Nosy Sakatia, Lokobe Nature Reserve.
- Services: Tailor-made trips, Group tours, Hotel bookings, 4x4 Car rentals, Airport transfers.
- Contact: WhatsApp +261 376 788 546, Email valtravelmada@gmail.com.
- If a user wants to book, guide them to the Contact section or suggest using the WhatsApp button.

Keep responses concise (under 100 words unless asked for a detailed itinerary). Use emojis to be friendly 🌴🐢☀️.
`;

export const getChatResponse = async (userMessage: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "I'm sorry, I'm currently offline (API Key missing). Please contact us via WhatsApp!";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }

    const result: GenerateContentResponse = await chatSession.sendMessage({
      message: userMessage,
    });

    return result.text || "I didn't quite catch that. Could you say it again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the travel network right now. Please try again later.";
  }
};

export const generateImage = async (prompt: string): Promise<string | null> => {
  if (!process.env.API_KEY) return null;
  
  // Simple in-memory cache to prevent refetching during session
  if (imageCache[prompt]) {
    return imageCache[prompt];
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        // config for aspect ratio could go here if the model supported it via config,
        // but flash-image often infers from prompt or defaults.
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        const imageUrl = `data:image/png;base64,${base64EncodeString}`;
        imageCache[prompt] = imageUrl;
        return imageUrl;
      }
    }
    return null;
  } catch (error) {
    console.error("Image Generation Error:", error);
    return null;
  }
};