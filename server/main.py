from _types import PageDataResponse, QuestionRequest, QuestionResponse
from ai import call_ai, call_image_ai
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from utils import age_to_education_level

app = FastAPI()

origins = [
    "http://localhost:5173"
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

    response_text = call_image_ai("Generate an image of a dog")

    return {"data": response_text}

@app.get("/page_data")
def read_item(planet: str, age: int):

    education_level = age_to_education_level(age)

    description = call_ai(f"\n\nHuman: Generate a paragraph description about the {planet} for a {education_level} student \n\nAssistant:")

    questions_str = call_ai(f"\n\nHuman: Given the following description: {description}, generate 3 questions for a {education_level} student based on the description. Output the only the questions, and follow the format: 'Question 1 | Question 2 | Question 3' \n\nAssistant:")

    questions = questions_str.split("|") 

    answers_str = call_ai(f"\n\nHuman: Given the following questions: {questions}, generate the answers to each question using {description}. Output the only the answers, and follow the format: 'Answer 1 | Answer 2 | Answer 3' \n\nAssistant:")
  
    answers = answers_str.split("|")

    return PageDataResponse(
        description=description,
        questions=questions,
        answers=answers
    )

@app.get("/generate_image")
def gen_image(planet: str):
    response_text = call_image_ai(f"Generate a hyperrealistic image of what it would look like if you were standing on the surface of {planet}")

    return {"data": response_text}

@app.get("/asked_question")
def read_item(req: QuestionRequest, planet: str, age: int):

    education_level = age_to_education_level(age)

    response_text = call_ai(f"Generate an answer for a {education_level} student on the {planet}: The question is: {req.question}")

    return QuestionResponse(
        data=response_text
    )