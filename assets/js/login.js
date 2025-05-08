document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = e.target[0].value;
    const password = e.target[1].value;

    if (username === "admin" && password === "123") {
      window.location.href = "home.html";
    } else {
      alert("Username atau password salah!");
    }
  });