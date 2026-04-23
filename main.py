from fastapi import FastAPI, Form
from fastapi.responses import FileResponse   #File che contiene le risposte per le varie pagine
from fastapi.staticfiles import StaticFiles  #File statico
import pandas as pd

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def home():
    return FileResponse('static/index.html')

@app.get("/login")
def controlla(username: str, password: str):
    print("username", username, "password", password)
    if username == "admin" and password == "xxx123":
        risposta = {"messaggio" : 1}
    else:
        risposta = {"messaggio" : 0}
    return(risposta)

@app.post("/login")
def Controlla(username: str = Form(...), password: str = Form(...)):
    if username.lower() == "admin" and password == "xxx123##":
        return {"messaggio": 1}
    else:
        return {"messaggio": 0}


