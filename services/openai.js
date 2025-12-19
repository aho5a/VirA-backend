const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_KEY
});

exports.generateReply = async (text) => {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are VirA, a clinic front desk AI. Do not give medical advice. Only help with appointments."
      },
      { role: "user", content: text }
    ]
  });

  return response.choices[0].message.content;
};
