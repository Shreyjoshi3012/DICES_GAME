let rollcount = 0;

function myfunction() {
  rollcount++;
  document.getElementById("rollcount").innerText = rollcount;
  var a = Math.floor(Math.random() * 6 + 1);
  var b = Math.floor(Math.random() * 6 + 1);
  var c = "/images/dice" + a + ".png";
  var d = "/images/dice" + b + ".png";
  var randomimg1 = document.querySelectorAll("img")[0];
  var randomimg2 = document.querySelectorAll("img")[1];
  randomimg1.setAttribute("src", c);
  randomimg2.setAttribute("src", d);

  if (a > b) {
    document.querySelector("h2").textContent = "Player 1 wins!";
  } else if (a < b) {
    document.querySelector("h2").textContent = "Player 2 wins!";
  } else {
    document.querySelector("h2").textContent = "It's a tie! scroll  again";
  }

  document.getElementById("put").innerHTML = "Refreshed";
  document.querySelector("body").style.backgroundColor = "skyblue";
  document.querySelector("h1").style.color = "red";
  document.querySelector("h2").style.color = "red";
  document.querySelector("strong").style.color = "red";
  document.querySelectorAll("h3").forEach(h3 => {
    h3.style.color = "red";

  });
  document.querySelector("strong").style.backgroundColor = "white";
  document.getElementById("rolling").style.backgroundColor = "white";



}
