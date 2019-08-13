var usuarios=[]


function refresh(){
	if(localStorage.getItem("userdb")){
	usuarios=JSON.parse(localStorage.getItem("userdb"));
	var content="";
	var i=0;
	usuarios.forEach(function(u){
		content+='<br><div clas="row"><b>'+u.nombre+' </b> '+u.usuario+'<button onclick="edit(\''+u.usuario+'\')" class="btn btn-primary  float-right btn-sm">Modificar</button><button onclick="borrar(\''+u.usuario+'\')" class="btn btn-danger float-right btn-sm">Borrar</button><br></div>';
		i++;
	});
	$("#filaABM").html(content);
}
}


function crear(){
	
	var user={
		nombre: $("#nombre").val(),
		usuario: $("#usr").val(),
		pwd: btoa($("#pwd").val()),
	}
	if($("#btnmsg").html()=="Modificar")
			borrar($("#usr").val());
	usuarios.push(user);
	localStorage.setItem("userdb", JSON.stringify(usuarios));
	$("#msg").html("Usuario "+user.nombre+" creado!");
	$("#btnmsg").html("Guardar");
	refresh();

}
function borrar(u){
	usuarios.forEach(function(u2){
		if(u2.usuario==u)
		{
		if(usuarios.indexOf(u2)!=-1)
			usuarios.splice( usuarios.indexOf(u2), 1 );
		}
	});
	
	localStorage.setItem("userdb", JSON.stringify(usuarios));
	refresh();
}
function edit(usuario){
	usuarios.forEach(function(u){
		if(u.usuario==usuario)
		{
			$("#nombre").val(u.nombre);
			$("#usr").val(u.usuario);
			$("#pwd").val(atob(u.pwd));
			$("#btnmsg").html("Modificar");
		}
	});
}


refresh();