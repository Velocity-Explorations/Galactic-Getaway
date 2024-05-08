from pydantic import BaseModel



# Request types

class QuestionRequest(BaseModel):
    question: str

# Response types

class QuestionResponse(BaseModel):
    data: str

class SummaryResponse(BaseModel):
    data: str

class GeneratedQuestionRequest(BaseModel):
    data: str