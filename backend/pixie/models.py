from sqlalchemy import Column, Integer, String, Date
from .database import Base

class Pixie(Base):
    __tablename__ = 'pixie'
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, nullable=False)
    name = Column(String(100), nullable=False)
    startDate = Column(Date, nullable=False)
    cycleLength = Column(Integer, nullable=False)
    periodLength = Column(Integer, nullable=False)
