async function controllaCredenziali() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username|| !password) //! not username l'utente non ci ha scritto niente
        return alert("Scrivi uno username e una password!");
    const res = await fetch(`/login?username=${username}&password=${password}`); //  /login = endpoint
    const dati = await res.json();
    document.getElementById('Risultato').innerText = dati.messaggio;
     if (dati.messaggio == 1) {
        document.getElementById('Risultato').innerText = "Benvenuto nel mio sito";
        // nascondi campi
        document.getElementById('username').style.display = 'none';
        document.getElementById('password').style.display = 'none';
        document.getElementById('btn_registrati').style.display = 'none';
    } else {
        document.getElementById('Risultato').innerText = "Utente o password errati";
        //pulizia campi
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
    }
}

async function loggati() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password)
        return alert("Scrivi lo username e password");

    const res = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `username=${username}&password=${password}`
    });

    const json = await res.json();

    if (json.messaggio == 1){
        document.getElementById("risultato").innerText = "Accesso effettuato";
    }
    else {
        document.getElementById("risultato").innerText = "Accesso negato";
    }
}
async function loggatiPandas() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (!username || !password)
        return alert("Scrivi lo username e password");

    const res = await fetch("/loginPandas", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `username=${username}&password=${password}`
    });

    const json = await res.json();

    if (json.messaggio == 1){
        document.getElementById("risultato").innerText = "Accesso effettuato";
    }
    else {
        document.getElementById("risultato").innerText = "Accesso negato";
    }
}

document.getElementById('btn_registrati').addEventListener('click', controllaCredenziali);
document.getElementById('btn_post').addEventListener('click', loggati);
document.getElementById('btn_pandas').addEventListener('click', loggatiPandas);