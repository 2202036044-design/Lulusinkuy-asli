
import { GoogleGenAI, Type } from "@google/genai";

export async function generateThesisTitles(topic: string): Promise<string[]> {
  if (!process.env.API_KEY) {
    console.error("API Key tidak ditemukan dalam environment.");
    return ["Gagal: API Key belum dikonfigurasi."];
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Berikan 5 ide judul skripsi yang unik, modern, dan relevan untuk topik berikut: ${topic}. Judul harus spesifik dan menarik secara akademis. Kembalikan hanya dalam format array JSON string.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.STRING,
          }
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("Respon kosong dari model.");
    }

    const jsonStr = text.trim();
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Failed to generate/parse Gemini response:", error);
    return ["Mohon maaf, terjadi gangguan pada server AI. Silakan coba lagi nanti."];
  }
}
