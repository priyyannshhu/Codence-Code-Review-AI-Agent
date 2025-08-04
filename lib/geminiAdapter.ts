// lib/geminiAdapter.ts

export type ChatModel = {
  id: string;
  name: string;
  provider: string;
  generate: (prompt: ChatPrompt) => Promise<ChatResponse>;
};

export type ChatPrompt = {
  system: string;
  messages: { role: "user" | "assistant"; content: string }[];
};

export type ChatResponse = {
  content: string;
  status: "success" | "error";
};

export const geminiChatAdapter: ChatModel = {
  id: "gemini-1.5-flash",
  name: "Gemini 1.5 Flash",
  provider: "Google",

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
    const responseText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "No response";

    return {
      content: responseText,
      status: "success",
    };
  },
};
