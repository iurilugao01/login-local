counts = [];

function refresh() {
  const ul = document.querySelector("#countList");
  ul.innerHTML = "";

  counts = JSON.parse(localStorage.getItem("counts")) || [];

  counts.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = JSON.stringify(element);

    ul.appendChild(li);
  });
}
document.querySelector("#deletAll").addEventListener("click", function () {
  counts = [];
  localStorage.removeItem("counts");

  const ul = document.querySelector("#countList");
  ul.innerHTML = "";
});

document.querySelector("#refreshBtn").addEventListener("click", refresh);
refresh();
