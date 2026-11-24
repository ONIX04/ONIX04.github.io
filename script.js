// Мобільне меню
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));

// Поточний рік у футері
document.getElementById("year").textContent = new Date().getFullYear();

// Форма зв'язку: відкриває нове issue в репозиторії портфоліо з заповненим текстом
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target;
  const title = encodeURIComponent("Повідомлення від " + f.name.value.trim());
  const body = encodeURIComponent(f.msg.value.trim());
  window.open(`https://github.com/ONIX04/ONIX04.github.io/issues/new?title=${title}&body=${body}`, "_blank");
});
