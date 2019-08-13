const api= new XMLHttpRequest();
function Api1(){
	var url="https://mindicador.cl/api";
	api.open("GET",url,true);
	api.send();
	api.onreadystatechange = function (){
		if(this.status==200 && this.readyState==4){
			var r=JSON.parse(this.responseText);
			$("#tipo_cambio").html(r.dolar.valor);
			$("#nombre").html(r.dolar.nombre);
			$("#fecha").html(r.dolar.fecha);
			$("#unidad").html(r.dolar.unidad_medida);
			$("#codigo").html(r.dolar.codigo);
		}
	}
}
$( document ).ready(function() {
    Api1();
});