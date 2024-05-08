from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from ai import call_ai
from utils import age_to_education_level
from _types import GeneratedQuestionRequest, QuestionRequest

app = FastAPI()

origins = [
    "http://localhost:5173/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():

    response_text = call_ai("Who are you?")

    return {"data": response_text}

@app.get("/summary")
def read_item(planet: str, age: int):

    education_level = age_to_education_level(age)

    response_text = call_ai(f"Generate a summary for a {education_level} student on the {planet}")

    return GeneratedQuestionRequest(
        data=response_text
    )

@app.get("/asked_question")
def read_item(req: QuestionRequest, planet: str, age: int):

    education_level = age_to_education_level(age)

    response_text = call_ai(f"Generate an answer for a {education_level} student on the {planet}: The question is: {req.question}")

    return GeneratedQuestionRequest(
        data=response_text
    )

@app.get("/generated_question")
def read_item(planet: str, age: int):

    education_level = age_to_education_level(age)

    response_text = call_ai(f"Generate a question for a {education_level} student on the {planet}")

    return GeneratedQuestionRequest(
        data=response_text
    )