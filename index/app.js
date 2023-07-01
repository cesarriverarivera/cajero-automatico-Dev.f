var formulario = document.querySelector("form");
const select = document.querySelector("select");
const wrapper = document.querySelector("#wrapper");
let selected = [];

var cuentas = [
    { id: 1, nombre: "Mali", saldo: 200, pin:"0123" },
    { id: 2, nombre: "Gera", saldo: 290, pin:"8976" },
    { id: 3, nombre: "Maui", saldo: 47, pin:"0043" },
    { id: 4, nombre: "Cesar", saldo: 357, pin:"0343" },
    { id: 5, nombre: "Carlos", saldo: 607, pin:"0013" },
  ];

 // (mamera propia) crea dinamicamente etiquetas option dentro del formulario 
// let yaClickeado = false; //variable establecida en false para indicar que aun no se ha dado click
// function agregarElemento (){
//     if (yaClickeado === false) { //es mi mismo que if( !yaclickeado) //se valida que si no se ha dado click se ejecute la funcion
//     const contenedor = document.getElementById("opciones");
//       cuentas.forEach(agreEle => {
//         const div =document.createElement("option");
//         div.innerHTML = agreEle.nombre;
//         contenedor.appendChild(div);
//       });
//     yaClickeado =true; // se da valor true,para que al volver a dar click no se vuelva a ejecutar la funcion
//   }  
// }


//crea dinamicamente etiquetas option dentro del formulario
cuentas.forEach((cuenta) => { //recorre todo el array de objetos
  let option = document.createElement("option");
  option.value = cuenta.id;
  option.innerText = cuenta.nombre;
  select.appendChild(option); //para crear las etiquetas option hijos, dentro de etiqueta select
});


//al dar click en el boton tipo submit
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  let userID = event.target["cuenta"].value;
  console.log(userID);
  let pin = prompt("ingrese su clave secreta", "");
    if (pin != null) {
      validarpin(userID, pin);
  }
});



//validacion de pin con metodo filter
const validarpin = (id, pin) => {
  selected = cuentas.filter((cuenta) =>{
  return cuenta.id === parseInt(id);
  });
  console.log(selected);
  if (selected[0].pin == pin) {
    alert("bienvenido");
    wrapper.innerHTML = "";
    menuRender();
    //location.href = "/index/operaciones/operaciones.html";
  } else {
    alert("contraseña incorrecta");
  }
};












  