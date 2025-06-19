let usuarios = []

function registar (event) {
   event.preventDefault();

   const campos = [
       "nombre", "email", 
     , "contraseña" 
       
   ];

   if (!validarCamposRequeridos(campos)) return;

   const email = document.getElementById("email").value.trim();
   const clave = document.getElementById("contraseña").value.trim();
   const nombre = document.getElementById("nombre").value.trim();

   if (!validarnombre(nombre)) return;
   if (!validarEmail(email)) return;
   if (!validarClave(clave))return;


   



   usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
};


  









