
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');

var img = document.getElementById('myImg');
var img2 = document.getElementById('myImg2');
var img3 = document.getElementById('myImg3');
var modalImg = document.getElementById("img01");
var content = document.getElementsByClassName("product-content")

img.onclick = function(){

  modal.style.display = "block";
  content.style.animationDirection = "normal";

}

img2.onclick = function(){

  modal2.style.display = "block";
  content.style.animationDirection = "normal";

}

img3.onclick = function(){

  modal3.style.display = "block";
  content.style.animationDirection = "normal";

}

function closeProduct(){

  modal.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
  
}



