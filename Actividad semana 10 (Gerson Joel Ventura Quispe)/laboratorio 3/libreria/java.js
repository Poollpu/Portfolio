// JavaScript Document
var actual = 0;
			function puntos(n){
				var ptn = document.getElementsByClassName("punto");
				for(i = 0; i<ptn.length; i++){
					if(ptn[i].className.includes("activo")){
						ptn[i].className = ptn[i].className.replace("activo", "");
						break;
					}
				}
				ptn[n].className += " activo";
			}
			function mostrar(n){
				var imagenes = document.getElementsByClassName("imagen");
				for(i = 0; i< imagenes.length; i++){
					if(imagenes[i].className.includes("actual")){
						imagenes[i].className = imagenes[i].className.replace("actual", "");
						break;
					}
				}
				actual = n;
				imagenes[n].className += " actual";
				puntos(n);
			}
			
			
			var velocidad = 2000;
			
			
		