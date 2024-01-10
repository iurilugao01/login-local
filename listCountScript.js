counts = [];

function refresh() {
  const ul = document.querySelector("#countList");

  counts = JSON.parse(localStorage.getItem("counts")) || [];

  counts.array.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = element;

    ul.appendChild(li);
  });
}
refresh();
