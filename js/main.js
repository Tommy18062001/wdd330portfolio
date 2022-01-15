const ourList = document.getElementsByTagName("ol")[0];
const links = [
    {
      label: "Week1 Story Editor",
      url: "week1/story_editor.html",
    },
    {
      label: "Week2 Chapter 2: Programming basics",
      url: "week2/index.html",
    },
    {
      label: "Week2 Chapter 3: Array, logics, loops",
      url: "week2/array.html",
    },
    {
      label: "Week2 Team Activity",
      url: "teamweek2/index.html",
    }
  ]


links.forEach(link => {
    const listElement = document.createElement("li");
    const aElement = document.createElement("a");

    aElement.setAttribute("href", link.url);
    aElement.textContent = link.label;

    // add the element to its parent
    listElement.appendChild(aElement);
    console.log(listElement)

    ourList.appendChild(listElement);
});