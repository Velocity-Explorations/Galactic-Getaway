from typing import List

from pydantic import BaseModel

# Request types

class QuestionRequest(BaseModel):
    question: str

# Response types

class QuestionResponse(BaseModel):
    data: str

class PageDataResponse(BaseModel):
    questions: List[str]
    answers: List[str]
    description: str
