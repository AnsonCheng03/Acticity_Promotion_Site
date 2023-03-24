function scrollBox() {
  const objectToMove = document.querySelector(".activity-list .flex-box");
  const objectList = document.querySelector(".text");
  const objWidth =
    objectToMove.childElementCount * objectToMove.firstElementChild.offsetWidth;
  const distanceCanMove =
    objectList.getBoundingClientRect().bottom -
    objectList.getBoundingClientRect().top;
  let DistanceMoved = -objectList.getBoundingClientRect().top;
  DistanceMoved =
    DistanceMoved > distanceCanMove
      ? distanceCanMove
      : DistanceMoved < 0
      ? 0
      : DistanceMoved;
  const MoveDist =
    (DistanceMoved / distanceCanMove) * (objWidth - window.innerWidth);
  objectToMove.style.transform = "translateX(-" + MoveDist + "px)";
}

document.addEventListener("scroll", scrollBox);
document.addEventListener("resize", scrollBox);
