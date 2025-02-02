// require("dotenv").config();

export async function getIngredients(dish) {
  try {
    let response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization:
            `Bearer ${process.env.REACT_APP_APIKEY}`,
            // `Bearer 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`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          messages: [
            {
              role: "user",
              content: `What are the ingredients in ${dish}. List only the ingredients and amounts needed. Do not split into categories, just compile all ingredients needed into one list with no further comments.`,
            },
          ],
        }),
      }
    );

    const json = await response.json();
    console.log(json.choices[0].message.content);
  } catch (error) {
    console.error(error.message);
  }
}