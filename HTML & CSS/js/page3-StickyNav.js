const headingEl = document.getElementById("heading");

function stickyNav() {
  const navbar = document.querySelector(".header");
  const stickyPoint = 100;

  if (window.pageYOffset > stickyPoint) {
    headingEl.innerHTML = "";
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    headingEl.innerHTML = "Welcome to My Portfolio";
  }
}

window.onscroll = function () {
  stickyNav();
};

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);

    // Scroll back to top

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // // Close the mobile navigation
    // if (link.classList.contains("main-nav-link"))
    //   headerEl.classList.toggle("nav-open");
  });
});
