

/*inputBox*/
function getInputValue(){
   var inputBox = document.getElementById("inputBox");
   return inputBox.value;
}

  var digital = new Date();
  var ultimahora=[];
    horas=digital.getHours();
    minutos = digital.getMinutes();
    segundos = digital.getSeconds();
    if(minutos<10){
      minutos="0"+minutos;
    }
    if(segundos<10){
      segundos = "0"+segundos;
    }
    if(horas<10){
      horas = "0"+horas;
    }
 


function tweet(e){
  var t=e.keyCode || e.wich;
  var inputBoxValue = getInputValue();
  if (e.which == '13') {
   if(inputBoxValue!=""){
       doTweet(inputBoxValue,horas,minutos);  

   }
    clean();
   }

};


// $('input#search').keypress(function(e) {
//   if (e.which == '13') {
//      alert("holi");
//    }
// });
function doTweet(tweetText,horas,minutos){
  var wasaps= document.getElementById("lista");
   //Crear elelmento
  var elemento = document.createElement("div");
  elemento.id='mensajes';
  elemento.className="personal"
  wasaps.appendChild(elemento);

  // var elemento1 = document.createElement("p");
  // elemento1.id="comentariosvarios";
  // wasaps.appendChild(elemento1);

  // var elemento3  = document.createElement("span");
  // elemento3.className="hora";
  // $(".hora").html(horas+":"+minutos);

  var elemento2 =  document.createElement("p");
  elemento2.id="contenido3";
  elemento2.className="comentarios"
  elemento2.innerHTML=tweetText+"<br>"+horas+":"+minutos;

  // elemento.appendChild(elemento1);
  elemento.appendChild(elemento2);

}
function clean(){
   var inputBox = document.getElementById("inputBox");
   inputBox.value="";
   inputBox.focus();
}


function limpiar(){

  var d = document.getElementById("lista");
  while (d.hasChildNodes())
  d.removeChild(d.firstChild);
  change_photo();

}

/*insertar imagen en col-7 la conversacion actual*/

function change_photo(){
  $(".users").click(function(){
   
    valordata=$(this).attr("data");
        var src=peru[valordata].image;

    $("#plusimagen").html("<img class='photografia' src='image/"+src+"'/>");
    $("#team").html(peru[valordata].name);
    
   // limpiar();
  });
    

}

$("#buscarname").on("keyup",buscar);

function buscar(){
  var usuarios=$(".name");
  var bloque=$(".users");
  bloque =$(".users");
  var texto = $("#buscarname").val();
  texto = texto.toLowerCase();
  usuarios.show();
  for(var i=0; i< usuarios.size(); i++){
    var contenido = usuarios.eq(i).text();
    contenido  = contenido.toLowerCase();
    var index = contenido.indexOf(texto);
    if(index==-1){
      bloque.eq(i).hide();
    }
  }
}

function emoticon(){
  $("#inputBox").append("<div class='nuevo-style' id='caja" + valordata+"'></div>");
}





// EMOTICONES
// 
// 
// 
// 
// // 
// // 
// // https://dashboard.pusher.com/apps/214522/keys
// // app_id = 214522
// key = "c3ebbe1bcc223808ee4a"
// secret = "563e00488d34fa382b1d"
//     //Cuando hacemos click en una carita formamos el mensaje a enviar
//     $('.emo').click(function(event) {
//         msg = '<img src="'+this.src+'"width="40" height="40"/>';
//         enviarMensaje(msg,true);
//     });
 
// });
 
 
// Esta funcion envia un mensaje al presionar "Enviar Mensaje", primero comprueba si ya existe un nombre de usuario
// si no, entonces crea uno (id unico),despues se usa la función $.get de jquery para enviarle el mensaje al server
 
// function enviarMensaje(msg,emo){
//     if(emo == undefined)emo = false;
 
//     //comprovamos que el mensaje no este vacio...si es haci no enviamos nada
//     if(trim(msg).length == 0)return;
     
//     //enviamos el mensaje al servidor mediante AJAX
//     $.get('server.php',{usuario:usuario,mensaje:msg,emoticone:emo},function(data) {
//     });
// }
 
// //Funcion que quita los espacios de una cadena
// function trim(cadena){
//        cadena=cadena.replace(/^\s+/,'').replace(/\s+$/,'');
//        return(cadena);
// }
