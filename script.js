let buttonPlus = document.getElementsByClassName("plus");
let answer = document.getElementsByClassName("answer-hidden");

for (let i = 0; i < buttonPlus.length; i++) {
  buttonPlus[i].addEventListener("click", function () {
    buttonPlus[i].classList.toggle("minus");
    if (buttonPlus[i].getAttribute("src") === "assets/images/icon-plus.svg") {
      buttonPlus[i].setAttribute("src", "assets/images/icon-minus.svg");
    }

    else if (buttonPlus[i].getAttribute("src") === "assets/images/icon-minus.svg") {
      buttonPlus[i].setAttribute("src", "assets/images/icon-plus.svg");
    }

    answer[i].classList.toggle("answer-display");
  });
}
