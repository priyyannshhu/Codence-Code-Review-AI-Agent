import { v } from "convex/values";
import { action } from "./_generated/server";
import { z } from "zod";

const createThreadSchema = z.object({
  prompt: z.string(),
  code: z.string().min(50),
});

// Helper to call Gemini API
async function generateCodeReview(prompt: string, code: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is missing");

  const finalPrompt = `${prompt}\n\nHere's the code to review:\n\`\`\`\n${code}\n\`\`\``;

  const res = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: finalPrompt }] }],
      }),
    }
  );

  // *** NEW: Check for an HTTP error status first ***
  if (!res.ok) {
    const errorData = await res.text(); // Get the raw error message
    throw new Error(`Gemini API returned an HTTP error: ${res.status} - ${errorData}`);
  }

  const data = await res.json();

  if (!data.candidates || !data.candidates.length) {
    // *** MODIFIED: Log the full response data for debugging ***
    console.error("Full Gemini API response:", JSON.stringify(data, null, 2));
    throw new Error("No candidates found in Gemini API response. Check for content safety issues or an invalid API key.");
  }

  return data.candidates[0].content.parts[0].text;
}

export const createCodeReviewThread = action({
  args: {
    prompt: v.string(),
    code: v.string(),
  },
  handler: async (ctx, args) => {
    const { prompt, code } = createThreadSchema.parse(args);

    const text = await generateCodeReview(prompt, code);

    return { threadId: null, text }; // threadId not used in this Gemini version
  },
});
