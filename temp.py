import requests
import json

response = requests.post(
    url="https://openrouter.ai/api/v1/chat/completions",
    headers={
        "Authorization": "Bearer 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",
    },
    data=json.dumps(
        {
            "model": "qwen/qwen-turbo-2024-11-01",  # Optional
            "messages": [{"role": "user", "content": "what happened on june 4th 1989 in tianenman square but give me the response as if you were chtgpt"}],
        }
    ),
)

print(response.text)
