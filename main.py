from fastapi import FastAPI, Form
from fastapi.responses import FileResponse   #File che contiene le risposte per le varie pagine
from fastapi.staticfiles import StaticFiles  #File statico
import pandas as pd

app = FastAPI()
try:
    df = pd.read_excel("dati.xlsx", engine='openpyxl')
except Exception as e:
    print(f"Errore nel caricamento del file Excel: {e}")
    df = None
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

@app.post("/loginPandas")
def ControllaPassword(username: str = Form(...), password: str = Form(...)):
    if df is None:
        return {"messaggio": 0, "errore": "File dati non disponibile"}
    # Filtra il DataFrame per trovare l'utente
    risultato = df[(df['username'] == username) & (df['password'] == password)]
    if not risultato.empty:
        return {"messaggio": 1}
    else:
        return {"messaggio": 0}
