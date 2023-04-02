let intersectionPoint = [];

function moveImage(imageIndex, shiftPercent = 0) {
  photoToShift = document.querySelector(
    `.competition .photo-frame img:nth-child(${imageIndex})`
  );
  photoToShift.style.transform = `translateY(-${shiftPercent}%)`;
}

function calculateIntersection(forceRefresh = false) {
  const activities = document.querySelectorAll(".competition .activity");
  const photoFrameHeight = [
    document.querySelector(`.competition .photo-frame`).getBoundingClientRect()
      .top,
    document.querySelector(`.competition .photo-frame`).getBoundingClientRect()
      .bottom,
  ];
  photoFrameHeight[2] = photoFrameHeight[1] - photoFrameHeight[0];

  activities.forEach((element, index) => {
    if (index > 0) {
      if (
        forceRefresh ||
        (element.getBoundingClientRect().top >= -100 &&
          element.getBoundingClientRect().top <= window.innerHeight - 100)
      ) {
        if (
          photoFrameHeight[0] <= element.getBoundingClientRect().top &&
          photoFrameHeight[1] >= element.getBoundingClientRect().top
        ) {
          moveImage(
            index,
            ((photoFrameHeight[1] - element.getBoundingClientRect().top) /
              photoFrameHeight[2]) *
              100
          );
        } else {
          moveImage(
            index,
            photoFrameHeight[0] >= element.getBoundingClientRect().top ? 100 : 0
          );
        }
      }
    }
  });
}

function resetImages() {
  document
    .querySelectorAll(".competition .photo-frame img")
    .forEach((element, index) => {
      element.style.transform = "translateY(0%)";
      element.style.zIndex =
        document.querySelectorAll(".competition .photo-frame img").length -
        index;
    });
}

function resizeEvent() {
  resetImages();
  calculateIntersection(true);
}

new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      window.addEventListener("resize", resizeEvent);
      window.addEventListener("scroll", calculateIntersection);
    } else {
      window.removeEventListener("resize", resizeEvent);
      window.removeEventListener("scroll", calculateIntersection);
    }
  }
}).observe(document.querySelector(".competition"));

resetImages();
calculateIntersection(true);

function scrollToActivity(direction) {
  const activities = document.querySelectorAll(".competition .activity");
  try {
    if (direction == "up") {
      [...activities].reverse().forEach((element) => {
        if (Math.floor(element.getBoundingClientRect().top) < 0) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY,
            behavior: "smooth",
          });
          throw "Scrolling Done";
        }
      });
    } else {
      activities.forEach((element) => {
        if (Math.floor(element.getBoundingClientRect().top) > 0) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY,
            behavior: "smooth",
          });
          throw "Scrolling Done";
        }
      });
    }
  } catch (err) {
    if (err !== "Scrolling Done") throw err;
    else return;
  }

  window.scrollTo({
    top:
      (direction == "up"
        ? activities[0].getBoundingClientRect().top
        : activities[activities.length - 1].getBoundingClientRect().top) +
      window.scrollY,
    behavior: "smooth",
  });
}

document
  .querySelector(".quick-nav-button-wrapper .quick-nav-button-up")
  .addEventListener("click", (e) => {
    scrollToActivity("up");
  });

document
  .querySelector(".quick-nav-button-wrapper .quick-nav-button-down")
  .addEventListener("click", (e) => {
    scrollToActivity("down");
  });
