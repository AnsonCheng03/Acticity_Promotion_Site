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

gsap.from(".text h1", {
  autoAlpha: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".text h1",
    scrub: false,
    start: "top 50%",
  }
});

gsap.from(".text h2, .text h3", {
  autoAlpha: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".text h2",
    scrub: false,
    start: "top 50%",
  }
});

gsap.from(".text a.button", {
  autoAlpha: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".text a.button",
    scrub: false,
    start: "top 70%",
  }
});

gsap.from(".activity-list", {
  autoAlpha: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".activity-list",
    scrub: false,
    start: "top 70%",
  }
});

gsap.from(".text.last", {
  autoAlpha: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".text.last",
    scrub: false,
    start: "top 50%",
  }
});
