let counts = [];

document.getElementById("join").addEventListener("click", function () {
  const name = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;
  counts = JSON.parse(localStorage.getItem("counts")) || [];

  const userExists = counts.some(
    (user) => user.usuario === name && user.senha === password
  );

  if (userExists) {
    const mainAcess = document.querySelector("#mainAcess");
    const tittle = document.createElement("h1");
    tittle.innerText = "lista de contas";

    const refresh = document.createElement("button");
    refresh.innerText = "recarregar";
    refresh.id = "refresh";

    const countList = document.createElement("table");
    countList.id = "countList";

    mainAcess.appendChild(tittle && refresh && countList);
    document.getElementsByTagName("body").appendChild(mainAcess);
  } else {
    alert("Usuário ou senha inválidos");
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

document.getElementById("refresh").addEventListener("clicl", function () {
  counts = JSON.parse(localStorage.getItem("counts")) || [];

  for (let i = 0; i < counts.lenght; let++) {
    const tr = document.createElement("tr");
    const countList = document.querySelector("countList");

    const userTD = document.createElement("td");
    userTD.innerText = counts[i][0];
    const passTD = document.createElement("td");
    passTD.innerText = counts[i][1];

    tr.appendChild(userTD && passTD);
    countList.appendChild(tr);
  }
});
