import json
import boto3

session = boto3.Session()
bedrock = session.client(service_name='bedrock-runtime')

MODEL_ID = "ai21.j2-ultra-v1"

def call_ai(prompt: str) -> str:
    bedrock_model_id = MODEL_ID

    body = json.dumps({
        "prompt": prompt, 
        "maxTokens": 1024, 
        "temperature": 0, 
        "topP": 0.5, 
        "stopSequences": [], 
        "countPenalty": {"scale": 0 }, 
        "presencePenalty": {"scale": 0 }, 
        "frequencyPenalty": {"scale": 0 }
    })


    response = bedrock.invoke_model(body=body, modelId=bedrock_model_id, accept='application/json', contentType='application/json')

    response_body = json.loads(response.get('body').read())

    return response_body.get("completions")[0].get("data").get("text") 