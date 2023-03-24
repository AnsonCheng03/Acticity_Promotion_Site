const scrollTriggerParams = {
  trigger: ".intro",
  scrub: true,
  start: "top top",
  end: "bottom",
};

const textScrollTriggerParams = {
  trigger: ".intro",
  scrub: true,
  start: "top top",
  end: "25%",
};

gsap.to(".intro .cover-text", {
  autoAlpha: 0,
  ease: "none",
  scrollTrigger: textScrollTriggerParams,
});

gsap.from(".intro-display-wall-item", {
  autoAlpha: 0.75,
  ease: "none",
  scrollTrigger: textScrollTriggerParams,
});

gsap.from(".intro-display-wall-item.top", {
  yPercent: -250,
  ease: "none",
  scrollTrigger: scrollTriggerParams,
});

gsap.from(".intro-display-wall-item.bottom", {
  scale: 3,
  yPercent: 225,
  ease: "none",
  scrollTrigger: scrollTriggerParams,
});

gsap.from(
  ".intro-display-wall-item.center.left, .intro-display-wall-item.center.left-left",
  {
    xPercent: -250,
    ease: "none",
    scrollTrigger: scrollTriggerParams,
  }
);

gsap.from(
  ".intro-display-wall-item.center.right, .intro-display-wall-item.center.right-right",
  {
    xPercent: 150,
    ease: "none",
    scrollTrigger: scrollTriggerParams,
  }
);

gsap.from(".intro-display-wall-item.top.left-left", {
  xPercent: -30,
  ease: "none",
  scrollTrigger: scrollTriggerParams,
});

gsap.from(".intro-display-wall-item.top.left", {
  xPercent: -25,
  ease: "none",
  scrollTrigger: scrollTriggerParams,
});

gsap.from(".intro-display-wall-item.top.right", {
  xPercent: 15,
  ease: "none",
  scrollTrigger: scrollTriggerParams,
});

gsap.from(".intro-display-wall-item.top.right-right", {
  xPercent: 25,
  ease: "none",
  scrollTrigger: scrollTriggerParams,
});

gsap.from(".intro-display-wall-item.bottom.left", {
  xPercent: -200,
  ease: "none",
  scrollTrigger: scrollTriggerParams,
});

gsap.from(".intro-display-wall-item.bottom.right", {
  xPercent: 100,
  ease: "none",
  scrollTrigger: scrollTriggerParams,
});

scrollTriggerParams.pin = true;

gsap.from(".intro-display-wall-item.center.middle", {
  scale: 5,
  yPercent: -23,
  xPercent: (-22 / 71) * 144,
  ease: "none",
  scrollTrigger: scrollTriggerParams,
});
