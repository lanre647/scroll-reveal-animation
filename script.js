const revealElemments = document.querySelectorAll("[data-reveal]");

function scrollReveal() {
  for (let i = 0, len = revealElemments.length; i < len; i++) {
    const isElementsOnScreen =
      revealElemments[i].getBoundingClientRect().top < window.innerHeight;

    if (isElementsOnScreen) {
      revealElemments[i].classList.add("revealed");
    } else {
      revealElemments[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
