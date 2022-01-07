const ourList = document.getElementsByTagName("ol")[0];
const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
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