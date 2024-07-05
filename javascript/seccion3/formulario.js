const formulario = document.getElementById('Formulario');
const inputs = document.querySelectorAll('#Formulario input');
const expresiones = {
	nombre:/^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
  apellido: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras, numeros, guion y guion_bajo
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  contraseña: /^.{4,12}$/, // 4 a 12 digitos.
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  pasaporte: /^\d{7,14}$/
}
const validarFormulario = (e) => {
  switch (e.target.name) {
    case "Nombre":
      if(expresiones.nombre.test(e.target.value)){
        document.getElementById('Nombre').classList.remove('bg-red-400bg');
      }
      else{
        document.getElementById('Nombre').classList.add('bg-red-400bg');
      }
    break;
    case "Apellido":

    break;
    case "Correo_Electronico":

    break;
    case "Contraseña":

    break;
    case "Confirmar_Contraseña":

    break;
    case "Telefono":

    break;
    case "Pasaporte":

    break;
  }
}

inputs.forEach((input) =>{
  input.addEventListener('keyup',validarFormulario);
  input.addEventListener('blur',validarFormulario);
});

formulario.addEventListener('submit', (e) =>{
  e.preventDefault();
});

