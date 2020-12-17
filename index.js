let audio = null;

const noOfExecutions = document.querySelectorAll("button").length;
for (i = 0; i < noOfExecutions; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", Click);
}
function Click(event) {
  console.log(event);
  let buttonClicked = this.innerHTML;
  makeSound(buttonClicked);
}
document.addEventListener("keypress", xyz);

function xyz(event) {
  makeSound(event.key);
  console.log(event);
}

function makeSound(key) {
  switch (key) {
    case "c":
      audio = new Audio("tom-1.mp3");
      console.log(audio);
      audio.play();
      break;
    case "o":
      audio = new Audio("tom-2.mp3");
      audio.play();
      break;
    case "m":
      audio = new Audio("tom-3.mp3");
      audio.play();
      break;
    case "p":
      audio = new Audio("tom-4.mp3");
      audio.play();
      break;
    case "r":
      audio = new Audio("snare.mp3");
      audio.play();
      break;
    case "e":
      audio = new Audio("crash.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("lol.mp3");
      audio.play();
      break;
    default:
      console.log(key);
  }
}
