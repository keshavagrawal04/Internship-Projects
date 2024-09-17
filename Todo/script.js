const menuBtn = document.querySelector(".menu-btn");
const menuOptions = document.getElementById("menu-options");

menuBtn.addEventListener("click", () => {
  if (menuOptions.style.display === "none") {
    menuOptions.style.display = "block";
  } else {
    menuOptions.style.display = "none";
  }
});

const personalTodos = document.getElementById("personal-todos-container");
const categoriesWrapper = document.getElementById("categories-wrapper");

const handleTabChange = (id) => {
  switch (id) {
    case "personal-todos":
      personalTodos.style.display = "block";
      categoriesWrapper.style.display = "none";
      break;
    default:
      console.log("Invalid Id");
  }
  console.log(id);
};
