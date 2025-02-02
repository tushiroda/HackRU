export async function IngredientAPI(dish) {
  try {
    const prompt = `List the ingredients in making ${dish} with a serving size of one person. List only the ingredients and amounts needed in the format "ingredient => amount". Do not split into categories, just compile all ingredients needed into one list with no further comments. List each ingredient with double dashes as bullet points. At the end separated by 3 equal signs, print the same list of ingredients with "--" bullet points without any quantity or preperation and all capitalized.`;

    let response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_APIKEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const json = await response.json();
    return json.choices[0].message.content;
  } catch (error) {
    console.error(error.message);
  }
}
