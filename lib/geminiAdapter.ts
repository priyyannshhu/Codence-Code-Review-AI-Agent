// lib/geminiAdapter.ts
import { ChatModel, ChatPrompt, ChatResponse } from "@ai-sdk/provider"; // or shape it manually

export const geminiChatAdapter: ChatModel = {
  async generate(prompt: ChatPrompt): Promise<ChatResponse> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("GEMINI_API_KEY is missing");

    const textPrompt = prompt.messages.map((m) => m.content).join("\n");

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: textPrompt }] }],
        }),
      }
    );

    if (!res.ok) {
      const errorData = await res.text();
      throw new Error(`Gemini API error: ${res.status} - ${errorData}`);
    }

    const data = await res.json();

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "No response";
    return {
      text,
      finishReason: "stop",
      usage: {},
    };
  },
};
