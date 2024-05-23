const resp= 'excadrill';
var puntaje = 0;
var intento = 3;


function elegir_opcion(nombre){
    var img = document.getElementById("imagen");
    var cua = document.getElementById("resultado");
    

    if(resp === nombre){
        img.innerHTML = "<img src='/img/pcolor.jpg' alt='Error al cargar imagen'>";
        cua.innerHTML = "<h3>Feliciadades es la respuesta correcta</h3>";
        score()
    }else{
        cua.innerHTML = "<h3>Respuesta incorrecta sigue intendo</h3>";
    }
}

function score(){
    var punt = document.getElementById("puntaje").value;
    var int = document.getElementById("intento");

}