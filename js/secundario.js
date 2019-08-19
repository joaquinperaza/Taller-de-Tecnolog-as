var url='http://api.ipapi.com/check?access_key=0ff96fb0988bf189dbb2aeddc457ac1a&format=1';
const api1= new XMLHttpRequest();
$( document ).ready(function() {
	api1.open("GET",url,true);
	api1.send();
	api1.onreadystatechange = function (){
		if(this.status==200 && this.readyState==4){
			var r=JSON.parse(this.responseText);
			$("#ip").html("Su IP actual es: "+r.ip);
			$("#pais").html("Pais: "+r.country_name);
			$("#region").html("Region: "+r.region_name);
			$("#flag").attr('src',r.location.country_flag);

			
		}
	}
});