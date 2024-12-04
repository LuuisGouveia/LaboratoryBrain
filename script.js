const select = document.getElementById("showType");

select.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  const content = document.getElementById("selectClientTable");
  if (selectedValue == "2") {
    const newSelect = document.createElement("select");
    content.appendChild(newSelect);
  }
});
