async function controllaCredenziali() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username|| !password) //! not username l'utente non ci ha scritto niente
        return alert("Scrivi uno username e una password!");
    const res = await fetch(`/login?username=${username}&password=${"password"}`); //  /login = endpoint
    const dati = await res.json();
    document.getElementById('risultato').innerText = dati.messaggio;
}
document.getElementById('btn_registrati').addEventListener('click', controllaCredenziali);