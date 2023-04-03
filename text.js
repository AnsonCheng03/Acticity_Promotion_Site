function scrollBox() {
  const objectToMoveReverse = document.querySelector(
    ".activity-list.reverse .flex-box"
  );
  const objectToMoveFront = document.querySelector(
    ".activity-list.front .flex-box"
  );
  const objWidth =
    objectToMoveFront.childElementCount *
    objectToMoveFront.firstElementChild.offsetWidth;
  const distanceCanMove = screen.height * 2;
  let DistanceMoved =
    screen.height - objectToMoveFront.getBoundingClientRect().top;
  DistanceMoved =
    DistanceMoved > distanceCanMove
      ? distanceCanMove
      : DistanceMoved < 0
      ? 0
      : DistanceMoved;
  const MoveDist =
    (DistanceMoved / distanceCanMove) * (objWidth - window.innerWidth);
  objectToMoveFront.style.transform = "translateX(-" + MoveDist + "px)";
  objectToMoveReverse.style.transform =
    "translateX(calc(" + MoveDist + "px + 100vw - 100%))";
}

new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      window.addEventListener("resize", scrollBox);
      window.addEventListener("scroll", scrollBox);
    } else {
      window.removeEventListener("resize", scrollBox);
      window.removeEventListener("scroll", scrollBox);
    }
  }
}).observe(document.querySelector(".text.first"));

document.querySelectorAll(".notEntered").forEach((element) => {
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            element.classList.add("entered");
            element.classList.remove("notEntered");
          }
        }
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.5,
      }
    ).observe(element);

    if (!element.classList.contains("nonRepeat"))
      new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              element.classList.add("notEntered");
            }
          }
        },
        {
          rootMargin: "100% 0px 100% 0px",
        }
      ).observe(element);
  } else {
    element.classList.remove("notEntered");
  }
});
