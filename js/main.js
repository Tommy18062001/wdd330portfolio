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
      url: "Teamweek2/index.html",
    },
    {
      label: "Week3 Team Activity: Array Cardio 1",
      url: "teamweek3/arraycardio1.html",
    },
    {
      label: "Week3 Team Activity: Array Cardio 2",
      url: "teamweek3/arraycardio2.html",
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