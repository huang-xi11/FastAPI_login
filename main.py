from fastapi import FastAPI
from fastapi.responses import FileResponse   #File che contiene le risposte per le varie pagine
from fastapi.staticfiles import StaticFiles  #File statico

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def home():
    return FileResponse('static/index.html')



