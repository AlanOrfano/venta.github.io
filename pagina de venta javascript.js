

function enviar()
{
    var nombre= document.getElementById("nombre") .value;
    var email= document.getElementById("email") .value;
    var asunto= document.getElementById("asunto") .value;
    var mensaje= document.getElementById("mensaje") .value;
    const recaptchaResponse = grecaptcha.getResponse();
    console.log(recaptchaResponse);
    if (
        !nombre || !email || !asunto || !mensaje || !recarpchaResponse
        )
        {
            alert ("complete los datos")
            
        }
    
    else 
    {   var usuario=
        {
        nombre: nombre ,
        email: email ,
        asunto: asunto ,
        mensaje: mensaje 
                         } ;
       // envia al emailjs //
                        
                    
        

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   

   const serviceID = 'default_service';
   const templateID = 'template_te47swg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
     
      alert('Listo!');
      //this.reset();
      // la linea de abajo desactiva el boton al enviar los datos correctos, esto debido a unos errores al enviar los datos correctos
      // y apretar en el boton enviar con los datos vacios, envia un email vacio al servidor que no se tendria que enviar
      
      
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


       console.log(usuario) ;

        alert ("analizaremos tu consulta, pronto recibiras respuestas")
    
    
        }
 }
