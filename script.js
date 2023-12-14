let Counts = 0;

document.querySelector("#join").addEventListener("click", function () {
  const name = document.querySelector("#name");
  const password = document.querySelector("#password");
});
document.querySelector("#newCoutn").addEventListener("click", function () {
  const name = document.querySelector("#name");
  const password = document.querySelector("#password");
  Counts = localStorage.getItem("counts");

  Counts++;
  localStorage.setItem("name" + Counts, name);
  localStorage.setItem("password" + Counts, password);
  localStorage.setItem("counts", Counts);
});
