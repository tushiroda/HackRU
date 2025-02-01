fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    Authorization: "Bearer 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",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "liquid/lfm-7b",
    messages: [
      {
        role: "user",
        content: "What is the meaning of life?",
      },
    ],
  }),
});
