 var errorNombre = document.getElementById ('errornombre');
 var errorTelefono = document.getElementById ('errortelefono');
 var errorEmail = document.getElementById ('erroremail');
 var errorMensaje = document.getElementById ('errormensaje');
 var errorEnviar = document.getElementById ('errorenviar');

 function validarNombre(){
     var nombre = document.getElementById('nombre-contacto').value;

     if (nombre.length == 0){
         errorNombre.innerHTML = 'Nombre requerido !'
         return false;
     }
     if (!nombre.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        errorNombre.innerHTML = 'Nombre requerido'
        return false;
     }
     errorNombre.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
    }
    
    function validarEmail(){

        var email = document.getElementById('email-contacto').value;

        if(email.length == 0){
            errorEmail.innerHTML = 'Email requerido !'
        }
        if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){

            errorEmail.innerHTML = 'Email invalido !'
            return false;
        }

        errorEmail.innerHTML = '<i class="fa-solid fa-check"></i>';
        return true;
       
    }

    function validarMensaje(){
        var mensaje = document.getElementById('mensaje-contacto').value;
        var required = 30;
        var left = required - mensaje.length;

        if(left > 0){
            errorMensaje.innerHTML = left + 'caracteres requeridos !';
            return false; 
        }

        errorMensaje.innerHTML = '<i class="fa-solid fa-check"></i>';
        return true;
    }

    function validarFormulario(){
        if(!validarNombre() || !validarEmail()  || !validarMensaje()){
            errorEnviar.style.display = 'block';
            errorEnviar.innerHTML = 'Por favor complete los campos !';
            setTimeout(function(){errorEnviar.style.display = 'none';}, 2500);
            return false;
        }
    }
    