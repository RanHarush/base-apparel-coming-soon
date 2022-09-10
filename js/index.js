let input = document.getElementById("input");
let inputBtn = document.getElementById("input-btn");
let errorIcon = document.getElementById("error-icon");
let errorMsg = document.getElementById("error-msg");
let successMsg = document.getElementById("success-msg");

const isInputEmpty = () => {
  if (input.value == "") {
    errorIcon.classList.remove("hidden");
    errorMsg.classList.remove("hidden");
    successMsg.classList.add("hidden");
    input.style.border = "2px solid hsl(0, 93%, 68%)";
  } else {
    errorIcon.classList.add("hidden");
    errorMsg.classList.add("hidden");
    successMsg.classList.remove("hidden");
    input.style.border = "1px solid rgba(hsl(0, 36%, 70%), 0.5)";
  }
};

const isEmailValid = () => {
  let firstCheck = false;
  let secondCheck = false;
  for (let i of input.value) {
    if (i == "@" || firstCheck) {
      firstCheck = true;
      if (i == ".") {
        secondCheck = true;
        successMsg.classList.remove("hidden");
        errorMsg.classList.add("hidden");
        input.style.border = "1px solid rgba(206, 151, 151, 0.5)";
        break;
      } else {
        errorMsg.classList.remove("hidden");
        successMsg.classList.add("hidden");
      }
    } else {
      errorMsg.classList.remove("hidden");
      successMsg.classList.add("hidden");
    }
  }
};

inputBtn.addEventListener("click", isInputEmpty);
inputBtn.addEventListener("click", isEmailValid);

const checkScreenSize = () => {
  let desktopImg = document.querySelector(".desktop-img");
  let mobileImg = document.querySelector(".mobile-img");

  if (screen.width > 420) {
    desktopImg.classList.remove("hidden");
    mobileImg.classList.add("hidden");
  } else {
    desktopImg.classList.add("hidden");
    mobileImg.classList.remove("hidden");
  }
};

checkScreenSize();
window.addEventListener("resize", checkScreenSize);