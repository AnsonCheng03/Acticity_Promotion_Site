function scrollBoxReverse(reverse) {
  const objectToMove = reverse
    ? document.querySelector(".activity-list.reverse .flex-box")
    : document.querySelector(".activity-list.front .flex-box");
  const objectList = document.querySelector(".text");
  const objWidth =
    objectToMove.childElementCount * objectToMove.firstElementChild.offsetWidth;
  // const distanceCanMove =
  //   objectList.getBoundingClientRect().bottom -
  //   document.documentElement.scrollTop || document.body.scrollTop + objectList.getBoundingClientRect().top;
  const distanceCanMove = screen.height * 2;
  let DistanceMoved = screen.height - objectList.getBoundingClientRect().top;
  // console.log(objectList.getBoundingClientRect().top);
  // console.log()
  DistanceMoved =
    DistanceMoved > distanceCanMove
      ? distanceCanMove
      : DistanceMoved < 0
      ? 0
      : DistanceMoved;
  const MoveDist =
    (DistanceMoved / distanceCanMove) * (objWidth - window.innerWidth);
  objectToMove.style.transform = reverse
  ? "translateX(calc(" + MoveDist + "px + 100vw - 100%))"
  : "translateX(-" + MoveDist + "px)";
}

function scrollBox() {
  scrollBoxReverse(false);
  scrollBoxReverse(true);
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
    start: "top 70%",
  },
});

gsap.from(".text h2, .text h3", {
  autoAlpha: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".text h2",
    scrub: false,
    start: "top 70%",
  },
});

gsap.from(".text a.button", {
  autoAlpha: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".text a.button",
    scrub: false,
    start: "top 88%",
  },
});

gsap.from(".activity-list", {
  autoAlpha: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".activity-list",
    scrub: false,
    start: "top 90%",
  },
});

gsap.from(".text.last", {
  autoAlpha: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".text.last",
    scrub: false,
    start: "top 70%",
  },
});

gsap.from(".text i", {
  autoAlpha: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".text i",
    scrub: false,
    start: "top 50%",
  },
});