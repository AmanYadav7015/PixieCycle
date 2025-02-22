from fastapi import FastAPI, Depends
from . import schemas, models
from .database import engine, sessionLocal
from sqlalchemy.orm import Session

app = FastAPI()

models.Base.metadata.create_all(bind=engine)
def get_db():
    db = sessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post('/')
def entry():
    return {'detail': 'chala ja bsdk'}

@app.post('/pixie')
def create(request: schemas.Pixie, db: Session = Depends(get_db)):
    new_data = models.Pixie(
        email=request.email, 
        name=request.name, 
        startDate=request.startDate,
        cycleLength=request.cycleLength, 
        periodLength=request.periodLength
    )
    db.add(new_data)
    db.commit()
    db.refresh(new_data)
    return new_data
