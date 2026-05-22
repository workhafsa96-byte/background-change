const btn = document.getElementById("btn");

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "black",
  "skyblue",
  "brown"
];

btn.addEventListener("click", function(){

  const randomNumber = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[randomNumber];

});
