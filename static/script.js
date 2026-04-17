async function controllaCredenziali() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username|| !password) return alert("Scrivi uno username o password!");
    const res = await fetch(`/login?username=${username}&password=${"password"}`);
    const dati = await res.json();
    document.getElementById('risultato').innerText = dati.messaggio;
}
document.getElementById('btn_registrati').addEventListener('click', controllaCredenziali);