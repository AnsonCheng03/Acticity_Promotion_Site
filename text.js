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
  let DistanceMoved = screen.height - objectToMoveFront.getBoundingClientRect().top;
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
    start: "top 80%",
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

gsap.from(".result", {
  autoAlpha: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".result",
    scrub: false,
    start: "top 65%",
  },
});

// gsap.to(".text.last .text-container", {
//   scale: 1,
//   yPercent: 8,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".text.last",
//     scrub: true,
//     pin: true,
//     start: "center 50%",
//   },
// });
