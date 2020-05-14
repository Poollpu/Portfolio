// JavaScript Document
var imgs=new Array(7);


imgs[0]="../img/banner0.jpg";
imgs[1]="../img/banner1.jpg";
imgs[2]="../img/banner2.jpg";
imgs[3]="../img/banner3.jpg";
imgs[4]="../img/banner4.jpg";
imgs[5]="../img/banner5.jpg";
imgs[6]="../img/banner6.jpg";

var c=0;


function rotacion(){
	
	window.document["imagen"].src=imgs[c];
	
	c++;
	if(c>=imgs.length) c=0;
	
	setTimeout("rotacion()",2000);
	
}