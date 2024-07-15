export default function dropdown() {
  const classes = document.getElementsByClassName("close");
  const array = document.getElementsByClassName("dropbtn");
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const content = classes[index];
    element.addEventListener("mouseover", () => {
      element.classList.toggle("button_hover");
      content.classList.toggle("dropdown_content");
      content.classList.toggle("close");
    });
    content.addEventListener("mouseout", () => {
      element.classList.toggle("button_hover");
      content.classList.toggle("dropdown_content");
      content.classList.toggle("close");
    });
  }
}
