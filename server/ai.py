import base64
import json

import boto3

session = boto3.Session()
bedrock = session.client(service_name='bedrock-runtime')

MODEL_ID = "anthropic.claude-3-sonnet-20240229-v1:0"

def call_ai(prompt: str) -> str:
    bedrock_model_id = MODEL_ID

    body = json.dumps({
       "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 1024,
        "messages": [
            {
                "role": "user",
                "content": [{"type": "text", "text": prompt}],
            }
        ],
    })


    response = bedrock.invoke_model(body=body, modelId=bedrock_model_id, accept='application/json', contentType='application/json')

    # Process and print the response
    result = json.loads(response.get("body").read())
    input_tokens = result["usage"]["input_tokens"]
    output_tokens = result["usage"]["output_tokens"]
    output_list = result.get("content", [])

    print("Invocation details:")
    print(f"- The input length is {input_tokens} tokens.")
    print(f"- The output length is {output_tokens} tokens.")

    print(f"- The model returned {len(output_list)} response(s):")
    for output in output_list:
        print(output["text"])

    return "\n".join([output["text"] for output in output_list])

def call_image_ai(prompt: str) -> str:

    bedrock = boto3.client(service_name='bedrock-runtime')

    accept = "application/json"
    content_type = "application/json"

    body = json.dumps({
        "taskType": "TEXT_IMAGE",
        "textToImageParams": {
            "text": prompt
        },
        "imageGenerationConfig": {
            "numberOfImages": 1,
            "height": 1024,
            "width": 1024,
            "cfgScale": 8.0,
            "seed": 0
        }
    })

    response = bedrock.invoke_model(
        body=body, modelId='amazon.titan-image-generator-v1', accept=accept, contentType=content_type
    )
    response_body = json.loads(response.get("body").read())

    base64_image = response_body.get("images")[0]

    return base64_image