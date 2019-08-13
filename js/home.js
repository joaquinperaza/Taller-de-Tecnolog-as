function login(){
	var usuarios=[]
	if(localStorage.getItem("userdb")){
	usuarios=JSON.parse(localStorage.getItem("userdb"));
	}
	var login=false;
	usuarios.forEach(function(u2){
		if(u2.usuario==$("#username").val() && atob(u2.pwd)==$("#password").val())
			login=true;
	});
	if(!login)
		alert("Credenciales invalidas.");
	else
		window.location.href='principal.html';

			

}