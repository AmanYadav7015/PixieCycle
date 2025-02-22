from fastapi import FastAPI
from pydantic import BaseModel
from datetime import date

class Pixie(BaseModel):
    email : str
    name : str
    startDate : date
    cycleLength : int
    periodLength : int
