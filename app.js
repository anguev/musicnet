function login() {
  fetch("https://musicnet-backend.onrender.com/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    })
  })
  .then(res => {
    if (!res.ok) throw new Error("Login incorrecto");
    return res.json();
  })
  .then(data => alert("Bienvenido " + data.name))
  .catch(() => alert("Error de login"));
}

