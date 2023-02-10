const titles = [
  "> Alicante Open Source",
  "> alicanteOpenSource",
  "> alicante-open-source",
  "> AlicanteOpenSource",
  "> alicante_open_source",
];

const titleIndex = localStorage.getItem("titleIndex");
if (!titleIndex) {
  document.getElementById("title").innerHTML = titles[0];
  localStorage.setItem("titleIndex", 0);
} else {
  const newTitleIndex =
    titleIndex < titles.length - 1 ? parseInt(titleIndex) + 1 : 0;
  document.getElementById("title").innerHTML = titles[newTitleIndex];
  localStorage.setItem("titleIndex", newTitleIndex);
}