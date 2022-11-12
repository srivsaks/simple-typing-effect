import "./styles.css";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ab estobcaecati laudantium neque eius consequatur. Nostrum minima distinctio eosnihil fugit dicta. Eveniet voluptatem, explicabo similique inventore doloreimpedit.";

const btn = document.querySelector(".click-me");
const textArea = document.querySelector(".content");
let index = 0;
let id = null;
function appendText() {
  textArea.textContent = textArea.textContent + text.charAt(index);
  index++;
}

btn.addEventListener("click", () => {
  if (index === text.length) {
    clearInterval(id);
    return;
  }
  id = setInterval(appendText, 100);
});
