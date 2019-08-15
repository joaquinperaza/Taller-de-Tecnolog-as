const api1= new XMLHttpRequest();
const api2= new XMLHttpRequest();
const api3= new XMLHttpRequest();
function Api1(){
	var url="https://mindicador.cl/api/";
	api1.open("GET",url,true);
	api1.send();
	api1.onreadystatechange = function (){
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

function Api2(){
	var url="https://mindicador.cl/api/"+$("#moneda").val();
	api2.open("GET",url,true);
	api2.send();
	api2.onreadystatechange = function (){
		if(this.status==200 && this.readyState==4){
			var r=JSON.parse(this.responseText);
			console.log(r);
			console.log(r.serie[0].valor);
			console.log(r.serie[0].fecha);
			$("#tipo_cambio2").html(r.serie[0].valor);
			$("#nombre2").html(r.nombre);
			$("#fecha2").html(r.serie[0].fecha);
			$("#unidad2").html(r.unidad_medida);
			$("#codigo2").html(r.codigo);
		}
	}
}
function Api3(){
	var url="https://randomuser.me/api/";
	api3.open("GET",url,true);
	api3.send();
	api3.onreadystatechange = function (){
		if(this.status==200 && this.readyState==4){
			var r=JSON.parse(this.responseText);
			$("#titulo").html(r.results[0].name.title+"&nbsp;&nbsp;");
			$("#name").html(r.results[0].name.first+"&nbsp;&nbsp;");
			$("#apellido").html(r.results[0].name.last);
			$("#usr-img").attr('src', r.results[0].picture.medium);
		}
	}
}
function Api4(){
	var url="https://api.mercadolibre.com/sites/MLU/search?q="+$("#ml").val();
	api2.open("GET",url,true);
	api2.send();
	api2.onreadystatechange = function (){
		if(this.status==200 && this.readyState==4){
			var r=JSON.parse(this.responseText);
			var i=0;
			var fin=r.results.length;
			if(fin>3)
				fin=3;
			var contenido='';
			for (var i = 0; i < fin; i++) {
				r.results[i]
				contenido+='<img src="'+r.results[i].thumbnail+'" width=100><div id="venta">'+r.results[i].title+'</div><div><b id="moneda_venta">'+r.results[i].currency_id+'</b> <b id="precio_venta">'+r.results[i].price+'</b></div>';
			}
			$("#result").html(contenido);
			
		}
	}
}
https://api.mercadolibre.com/sites/MLU/search?q=
$( document ).ready(function() {
    Api1();
    $('#moneda').on('input',function(e){
    	Api2();
	});
	$('#ml').on('input',function(e){
    	Api4();
	});
	$('#usr-img').on('click',function(e){
    	Api3();
	});
	Api3();
});