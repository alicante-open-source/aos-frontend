// Navbar

const NAVBAR_CONTENT = `
<h1 id="title" class="animated-type"></h1>
<div class="menu">
  <ul>
    <li><a href="index.html">Noticias</a></li>
    <li><a href="events.html">Eventos</a></li>
    <li><a href="repos.html">Repositorios</a></li>
    <li><a href="resources.html">Recursos</a></li>
  </ul>
</div>
`;

const navbar = document.getElementById("navbar");
navbar.innerHTML = NAVBAR_CONTENT;

// Set active link

const links = document.querySelectorAll("#navbar .menu ul li a");

for (let i = 0; i < links.length; i++) {
  if (links[i].href === window.location.href) {
    links[i].classList.add("active");
  }
}

const titles = [
  "Alicante Open Source",
  "alicanteOpenSource",
  "alicante-open-source",
  "AlicanteOpenSource",
  "alicante_open_source",
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
