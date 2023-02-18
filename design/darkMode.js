const btn = document.querySelector("#btn-mode");
 
btn.addEventListener("change", () => {
  if (btn.checked == true) {
    // dark mode
    document.body.classList.remove("light-theme");

    document.body.classList.add("dark-theme");

    document.head.classList.add("dark-theme");

    document.head.classList.remove("light-theme");


  } else {
    // light mode
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  }
});
