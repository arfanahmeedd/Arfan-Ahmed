
import { GoogleGenAI, Type } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async brainstormProject(keyword: string): Promise<{
    title: string;
    description: string;
    concepts: string[];
    suggestedColorPalette: string[];
  }> {
    const response = await this.ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a creative project concept based on the keyword: "${keyword}". Focus on high-end tech-editorial design.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            concepts: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            suggestedColorPalette: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["title", "description", "concepts", "suggestedColorPalette"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    return JSON.parse(text.trim());
  }
}

export const geminiService = new GeminiService();
