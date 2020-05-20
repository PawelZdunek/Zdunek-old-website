window.onload = zmienslajd; 
var numer = Math.floor(Math.random()*4)+1

function schowaj()
{
	$("#slider").fadeOut(500);
}

function zmienslajd()
{
	numer++; if (numer>4) numer =1;
	
	var plik = "<img src=\"slajdy/slajd" + numer + ".jpg\" class=\"zdjeciaglowna\" />" ;
	
	document.getElementById("slider").innerHTML = plik;
	$("#slider").fadeIn(500);
	
	setTimeout("zmienslajd()", 5000);
	setTimeout("schowaj()", 4500);
}