

function enviar()
{
    var nombre= document.getElementById("nombre") .value;
    var email= document.getElementById("email") .value;
    var asunto= document.getElementById("asunto") .value;
    var mensaje= document.getElementById("mensaje") .value;
    var cap= document.getElementById("cap") .value;

    if (
        !nombre || !email || !asunto || !mensaje || !cap
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
                        
                    
        const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_te47swg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Listo!');
      this.reset();
      // la linea de abajo desactiva el boton al enviar los datos correctos, esto debido a unos errores al enviar los datos correctos
      // y apretar en el boton enviar con los datos vacios, envia un email vacio al servidor que no se tendria que enviar
      btn.disabled = true;
      
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


       console.log(usuario) ;

        alert ("analizaremos tu consulta, pronto recibiras respuestas")
    
    
        }
 }
