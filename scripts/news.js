const content = document.getElementById("content");

function generateNewsItem(item) {
  const newsItem = document.createElement("div");
  newsItem.classList.add("news-item");
  newsItem.innerHTML = `
        <div class="news-item-header">
        <img src="${item.image}" alt="${item.title}" />
        <h2>${item.title}</h2>
        </div>
        <div class="news-item-body">
        <h2>${item.title}</h2>
        <div>
        ${item.body
          .split("\n")
          .map((p) => `<p>${p}</p>`)
          .join("")}
          </div>
        </div>
    `;
  newsItem.addEventListener("click", (e) => {
    e.preventDefault();
    newsItem.classList.toggle("opened");
  });
  return newsItem;
}

// Loading news on scroll
// (Just a simulation, fetch is loading all the news at once)

let newsCount = 0;

fetch("db/news.json").then((response) => {
  response.json().then((data) => {
    if (newsCount === data.length) return;
    while (document.body.scrollHeight <= window.innerHeight) {
      content.appendChild(generateNewsItem(data[newsCount]));
      newsCount++;
    }
  });
});

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 30) {
    fetch("db/news.json").then((response) => {
      response.json().then((data) => {
        if (newsCount === data.length) return;
        content.appendChild(generateNewsItem(data[newsCount]));
        newsCount++;
      });
    });
  }
});
