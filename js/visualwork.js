document.addEventListener("DOMContentLoaded", () => {
  const bg = document.getElementById("bg");
  const defaultBg = 'black';
  let currentBg = 'black';

  function changeBackground(newBg) {
    if (newBg === currentBg) return;
    bg.style.backgroundImage = `url('${newBg}')`;
    currentBg = newBg;
  }

  document.querySelectorAll("div.cartelwork[data-bg]").forEach(link => {
    const img = link.getAttribute("data-bg");

    link.addEventListener("mouseenter", () => changeBackground(img));
    link.addEventListener("mouseleave", () => changeBackground(defaultBg));
  });
});
