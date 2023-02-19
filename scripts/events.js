fetch("db/events.json").then((response) => {
  response.json().then((data) => {
    const content = document.getElementById("content");
    const sortedByDate = data.sort((a, b) => {
      const dateA = new Date(a.start_date);
      const dateB = new Date(b.start_date);
      return dateA - dateB;
    });
    sortedByDate.forEach((event) => {
      const eventItem = document.createElement("div");
      eventItem.classList.add("event-item");
      if (new Date(event.start_date) < new Date()) {
        eventItem.classList.add("past");
      }
      eventItem.innerHTML = `
            <div class="event-item-start-date">
            <h2>${getMonthNameAbbreviation(event.start_date)}. ${new Date(
        event.start_date
      ).getDate()}</h2>
            </div>
            <div class="event-item-content">
            <h2>${event.name}</h2>
            </div>
        `;
      eventItem.addEventListener("click", (e) => {
        e.preventDefault();
        eventItem.classList.toggle("opened");
      });
      content.appendChild(eventItem);
    });
  });
});

function getMonthNameAbbreviation(date) {
  const month = new Date(date).getMonth();
  switch (month) {
    case 0:
      return "Ene";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Abr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Ago";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dic";
  }
}
