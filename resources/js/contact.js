/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */
function mostrarpagina() {
  

    setTimeout(function() {
        
   let divElement = document.getElementById('centrado');
   divElement.parentNode.removeChild(divElement);
   
   let eliminar_clase = document.getElementById("hidden");
   eliminar_clase.removeAttribute("id");
   
     //mostrar elementos
     document.body.style.display = "block";
       }, 1000);
    
   
   }
   function cargarPagina(){
     return new Promise(function(resolve){
      
     if(document.readyState==="complete"){//readyState describe el estado de carga del cocumento, si esta completo resuelve de  una la promesa 
       resolve();
       }
       else{
         window.addEventListener("load",resolve);
         
       }
   
       ;//settimeout(function(){},2000) no utilizo
     });//promise
   }//cargarPagina

   
   cargarPagina().then(mostrarpagina);
   
function hidebottom() {
    let ocultando= document.getElementsByClassName("link-button")[0];
    // Ocultar el botón cambiando su estilo
ocultando.style.display = "none";
    
}
hidebottom();   

// const Notificacion_de_enviado= document.getElementsByClassName("enviar")[0];
// Notificacion_de_enviado.addEventListener("click", function() {
//     // Mostrar mensaje de alerta
//     alert("Mensaje enviado. Gracias por tu contacto.");

//     setTimeout(function() {
// window.location.href="index.html"
        
//     }),1000;});

   

    const form = document.getElementsByClassName("formulario")[0];

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se envíe el formulario automáticamente

  // Obtén los valores de los campos del formulario
  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("emailcontacto").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Verifica si todos los campos están llenos
  if (fullName && email && phone && message) {
    // realizo la accion desea
    alert("Mensaje enviado. Gracias por tu contacto.");

    setTimeout(function() {
window.location.href="index.html"
        
    }),1000;
    // Resetear el formulario
    form.reset();
  } else {
    // Al menos un campo está vacío, muestra un mensaje de error
    alert("Por favor, completa todos los campos");
  }
});
