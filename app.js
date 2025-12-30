function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("https://musicnet-backend.onrender.com/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
  .then(res => {
    if (!res.ok) throw new Error("Login incorrecto");
    return res.json();
  })
  .then(data => {
    alert("Bienvenido " + data.name);
  })
  .catch(() => {
    alert("Credenciales incorrectas");
  });
}
