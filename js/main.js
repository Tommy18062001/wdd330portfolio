const ourList = document.getElementsByTagName("ol")[0];
const links = [
    {
      label: "Week1 Story Editor",
      url: "week1/story_editor.html",
    },
    {
      label: "Week1 Notes",
      url: "week1/notes.html",
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
      label: "Week2 Notes",
      url: "week2/notes.html",
    },
    {
      label: "Week3 Team Activity: Array Cardio 1",
      url: "teamweek3/arraycardio1.html",
    },
    {
      label: "Week3 Team Activity: Array Cardio 2",
      url: "teamweek3/arraycardio2.html",
    },
    {
      label: "Week3: Notes",
      url: "week3/notes.html",
    },
    {
      label: "Week4 Team Activity: Tic Tac Toe",
      url: "teamweek4/index.html",
    },
    {
      label: "Week5 Team Activity: Great Hikes",
      url: "teamweek5/index.html",
    },
    {
      label: "Challenge One: To Do App",
      url: "todo/index.html",
    }
    ,
    {
      label: "Week 07: Notes",
      url: "week7/notes.html",
    },
    {
      label: "Week 07 Activity: Comments",
      url: "teamweek7/index.html",
    },
    {
      label: "Week 08: Transforms, transitions, and animations",
      url: "week8/transform.html",
    },
    {
      label: "Week 08 Team Activity: Stars Wars Character",
      url: "teamweek8/index.html",
    },
    {
      label: "Week 09 Notes",
      url: "week9/notes.html"
    },
    {
      label: "Week 09 Team Activity: JS Drum Kit",
      url: "teamweek9/index.html"
    },
    {
      label: "Week 10 Notes",
      url: "week10/notes.html"
    },
    {
      label: "Week 10 Team Activity: Quake List",
      url: "teamweek10/index.html"
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