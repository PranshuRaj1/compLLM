import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export async function getGroqChatCompletion(query) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: query,
      },
    ],
    model: "llama3-8b-8192",
  });
}
