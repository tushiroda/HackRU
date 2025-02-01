require("dotenv").config();

async function getData() {
  try {
    let response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization:
            `Bearer ${process.env.APIKEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          messages: [
            {
              role: "user",
              content: "What is the meaning of life?",
            },
          ],
        }),
      }
    );

    const json = await response.json();
    console.log(json.choices[0].message);
  } catch (error) {
    console.error(error.message);
  }
}

getData();
console.log(process.env.APIKEY);
