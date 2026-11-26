/* CIVILIZATIONS SLIDER */
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const sliderSection = document.getElementById("civilizations");

// Only run the slider code on pages that HAVE a slider (the home page).
// On other pages getElementById returns null, and using null would crash the script.
if (slider) {
  // How far one click moves: one card (300px) + the gap (24px)
  const step = 324;

  // Next button: glide the row to the right
  nextBtn.addEventListener("click", function () {
    slider.scrollBy({ left: step, behavior: "smooth" });
  });

  // Previous button: glide the row to the left
  prevBtn.addEventListener("click", function () {
    slider.scrollBy({ left: -step, behavior: "smooth" });
  });

  /* Automatic slow sliding */
  let direction = 1;     // 1 = move right, -1 = move left
  let paused = false;    // true while the mouse is over the section

  function autoSlide() {
    if (paused) {
      return; // do nothing while paused
    }

    // Move the row 1 pixel
    slider.scrollLeft = slider.scrollLeft + direction;

    // The furthest the row can scroll
    const end = slider.scrollWidth - slider.clientWidth;

    // At the end, turn around. At the start, go forward again
    if (slider.scrollLeft >= end - 1) {
      direction = -1;
    }
    if (slider.scrollLeft <= 0) {
      direction = 1;
    }
  }

  // Run autoSlide every 30 milliseconds (about 33 pixels per second)
  setInterval(autoSlide, 30);

  // Pause while the mouse is over the slider, so people can read and click
  sliderSection.addEventListener("mouseenter", function () {
    paused = true;
  });

  sliderSection.addEventListener("mouseleave", function () {
    paused = false;
  });
}

/* BACK-TO-TOP BUTTON */
const toTop = document.getElementById("toTop");

// Every time the page scrolls, check how far down we are
window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    toTop.classList.add("show");     // show the button
  } else {
    toTop.classList.remove("show");  // hide it again near the top
  }
});

// Click: glide back to the top of the page
toTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* FOOTER YEAR */
// Write the current year into <span id="year">
document.getElementById("year").textContent = new Date().getFullYear();
/* MOBILE MENU */
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

// Click the hamburger: open the menu, or close it if it's already open
menuBtn.addEventListener("click", function () {
  nav.classList.toggle("open");
  menuBtn.classList.toggle("open");

  // Tell screen readers whether the menu is open (true or false)
  menuBtn.setAttribute("aria-expanded", nav.classList.contains("open"));
});
