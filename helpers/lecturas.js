// helpers/lecturas.js
/*
import axios from "axios";

const generarLecturaGemini = async (fechaNacimiento, tipo) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("API Key no configurada");
    }

    console.log("📝 Conectando con Gemini API (AXIOS)...");

    const prompt =
      tipo === "principal"
        ? `Eres un experto numerólogo. Genera una lectura detallada para alguien nacido el ${fechaNacimiento}. Incluye misión de vida, talentos y propósito.`
        : `Dame una lectura numerológica diaria corta e inspiradora para hoy para alguien nacido el ${fechaNacimiento}.`;

  
    const url =
      "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent";

    const response = await axios.post(
      url,
      {
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY, // 🔥 AQUÍ está la clave
        },
      }
    );

    const text =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) throw new Error("Respuesta vacía de Gemini");

    console.log("✅ Gemini respondió correctamente");
    return text;
  } catch (error) {
    console.error("❌ Falló Gemini:", error.response?.data || error.message);
    return `Error Gemini: ${error.message}`;
  }
};

export { generarLecturaGemini };
*/