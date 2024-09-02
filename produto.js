
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');

var b1 = document.getElementById('butbotwd');
var b2 = document.getElementById('buthelld');
var b3 = document.getElementById('buthalo');
var modalImg = document.getElementById("img01");
var content = document.getElementsByClassName("product-content")

b1.onclick = function(){

  modal.style.display = "block";
  content.style.animationDirection = "normal";

}

b2.onclick = function(){

  modal2.style.display = "block";
  content.style.animationDirection = "normal";

}

b3.onclick = function(){

  modal3.style.display = "block";
  content.style.animationDirection = "normal";

}

function changeXbox(){

  window.location.href = "xbox.html"

}

function changePS(){

  window.location.href = "ps.html"

}

function changeNintendo(){

  window.location.href = "nintendo.html"

}


