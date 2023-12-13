console.log("Hello, from javascript ...");

// --> Set current year in copyright
const yearElmnt = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearElmnt.textContent = currentYear;

// --> Make mobile navigation work
const btnNavElmnt = document.querySelector(".btn-mobile-nav");
const headerElmnt = document.querySelector(".header");

btnNavElmnt.style.zIndex = "9999";
btnNavElmnt.addEventListener("click", function () {
  headerElmnt.classList.toggle("nav-open");
});

// --> Smooth scrooling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scrool back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionElemnt = document.querySelector(href);
      sectionElemnt.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerElmnt.classList.toggle("nav-open");
    }
  });
});

// --> Sticky navigation
const sectionHeroElemnt = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroElemnt);
