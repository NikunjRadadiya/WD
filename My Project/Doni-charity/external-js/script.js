// $(document).ready(function () {
//   $(".toggle-btn").click(function () {
//     $("ul").toggleClass("nav-show");
//   });
// });

const toggleButton = document.getElementsByClassName("toggle-btn")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];

toggleButton = addEventListener("click", () => {
  navLinks.classList.toggle("nav-shown");
});
