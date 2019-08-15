var url='http://apilayer.net/api/historical?access_key=a34e998119a429b28cc393a74d570dc1&date=2010-08-15&currencies=USD,UYU,format=1';
const api1= new XMLHttpRequest();
$( document ).ready(function() {
	api1.open("GET",url,true);
	api2.send();
	api1.onreadystatechange = function (){
		if(this.status==200 && this.readyState==4){
			var r=JSON.parse(this.responseText);

			
		}
	}
});