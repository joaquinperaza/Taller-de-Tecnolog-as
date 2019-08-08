const api= new XMLHttpRequest();
function Api1(){
	var url="https://mindicador.cl/api";
	api.open("GET",url,true);
	api.send();
	api.onreadystatechange = function (){
		if(this.status==200 && this.readyState==4){
			var r=JSON.parse(this.responseText);
			$("#tipo_cambio").html(r.dolar.valor);
			$("#moneda").html(r.dolar.codigo);
			$("#fecha").html(r.dolar.fecha);
		}
	}
}
$( document ).ready(function() {
    Api1();
});