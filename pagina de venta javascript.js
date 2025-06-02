
function confirmar()
{
  
    var nombre= document.getElementById("nombre") .value;
    var email= document.getElementById("email") .value;
    var asunto= document.getElementById("asunto") .value;
    var mensaje= document.getElementById("mensaje") .value;
    const btn = document.getElementById('boton'); 
    const recaptchaResponse= grecaptcha.getResponse() .value;

    if (
        !nombre || !email || !asunto || !mensaje || !recarptchaResponse === ""
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
      this.reset();
      // la linea de abajo desactiva el boton al enviar los datos correctos, esto debido a unos errores al enviar los datos correctos
      // y apretar en el boton enviar con los datos vacios, envia un email vacio al servidor que no se tendria que enviar
      btn.disabled = true;
      
    }, (err) => {
      
      alert(JSON.stringify(err));
      alert ("ponga un email correcto")
    });
});


       console.log(usuario) ;

       
    

}
}
