let counts = [];

document.getElementById("join").addEventListener("click", function () {
  const name = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;
  counts = JSON.parse(localStorage.getItem("counts")) || [];

  const userExists = counts.some(
    (user) => user.usuario === name && user.senha === password
  );

  if (userExists) {
    window.location.href = "listCount.html";
  }
});

document.getElementById("newCount").addEventListener("click", function () {
  const name = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;
  counts = JSON.parse(localStorage.getItem("counts")) || [];

  const newUser = { usuario: name, senha: password };
  counts.push(newUser);
  localStorage.setItem("counts", JSON.stringify(counts));
});
