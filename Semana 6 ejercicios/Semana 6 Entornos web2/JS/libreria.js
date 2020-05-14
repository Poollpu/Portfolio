// JavaScript Document
function interes(){
	
	var lista=document.getElementsByName("chks");
	
	var s="Has seleccionado"+"\n";
	
	
	
	for(i=8; i<lista.length;i++){
		
		if(lista[i].checked==true)
			s += lista[i].value+"\n";
	}
	
	alert(s);
	
}