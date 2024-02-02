

function goUp(n = 1, stop = false) {
var upper = setInterval(myTimer, 1000);
var i = localStorage.n || n;
var j = 0;
var l = 0;
var stopper = document.getElementById('stop');
function stop() {
window.clearInterval(upper);
localStorage.n = i;
}
stopper.addEventListener("click",stop);
var clear = document.getElementById('clear');
function clearIt() {
document.getElementById("demo2").innerHTML = "";
localStorage.removeItem("n");
}
clear.addEventListener("click",clearIt);
function myTimer() {

j = Math.floor(i/60);
l = i % 60;
  for(var k = 0; k < 100; k++) {
  if(i/60 + 150 == k) {
  j++;
  } 
  l = i % 60;
  }

  if(l.toString().length > 1) {
  document.getElementById("demo2").innerHTML = j + ":" + l;
  } else {
  document.getElementById("demo2").innerHTML = j + ":0" + l;
  }
  i++;
}
}

function goDown(n) {
var inter = setInterval(myTimer, 1000);
var i = n;
var j = 0;
var l = 0;
var clear = document.getElementById("clear1");
function clearIt() {
document.getElementById("demo").innerHTML = "";
window.clearInterval(inter);
}
clear.addEventListener("click",clearIt);
function myTimer() {
j = Math.floor(i/60);
l = i % 60;
  for(var k = 0; k < 100; k++) {
  if((i/60) + 150  == k) {
  j--;
  } 
  l = (i % 60);
  }

  if(l.toString().length > 1) {
  document.getElementById("demo").innerHTML = j + ":" + l;
  } else {
  document.getElementById("demo").innerHTML = j + ":0" + l;
  }
  if(i > -1) {
  i--;
  } else {
  
  }
  if(i < 5 && i > 0) {
  document.getElementById("demo").style.animation = "hurry 3s infinite";
  } 
  else {
  document.getElementById("demo").style.animation = "none";
  }
  if(i == 0) {
  window.clearInterval(inter);
  playMusic();
  
  }
  if(i == 0) {
    alert("The timer has ended.");
	document.getElementById("demo").innerHTML = "";
  }
}
  if ( i == 0) {
  //playMusic();
  }
  console.log(i);
  
};

