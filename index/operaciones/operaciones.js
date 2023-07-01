const actions = document.querySelector("#actions");



//renderiza el menu de operaciones
const menuRender = () => { //selected es la variable que va a almacenar los datos de la persona que se logea
    let menu = `<div>
    <h1 class="titulo-bienvenida">Bienvenido(a), ${selected[0].nombre}</h1> 
    <div class="row mt-5 d-flex row-gap-2">
      <div class="col-md-3 col-sm-6">
        <a class="btn btn-primary col-12" href="#" role="button" onclick="consultar()">Consultar</a>
      </div>
      <div class="col-md-3 col-sm-6">
        <a class="btn btn-success col-12" href="#" role="button" onclick="depositar()">Depositar</a>
      </div>
      <div class="col-md-3 col-sm-6">
        <a class="btn btn-warning col-12" href="#" role="button" onclick="retirar()">Retirar</a>
      </div>
      <div class="col-md-3 col-sm-6">
        <a class="btn btn-dark col-12" href="#" role="button" onclick="salir()">Salir</a>
      </div>
    </div>
  </div>`
    wrapper.innerHTML = menu;
};


//Para consultar saldo
const consultar = () => {
    actions.innerHTML = `<p class="mt-4 resultado-consulta">Su saldo es ${selected[0].saldo} soles. </p>`
    console.log(selected[0].saldo);
};



//para depositar
const depositar = () => {
  actions.innerHTML ="";
  actions.innerHTML = 
  `<form id="formDeposito" class="mt-3" action="">
    <div class="input-group mx-2">
    <span class="input-group-text bg-oscuro" id="inputGroup-sizing-default">Ingresa monto</span>
    <input id="agregarSaldo" type="float" class="form-control bg-oscuro" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>
    <button type="submit" class="btn btn-dark">Ok</button>
  </form>`;
  const formularioDeposito = document.querySelector("#formDeposito");
  const agregarSaldo = document.querySelector("#agregarSaldo");

  formularioDeposito.addEventListener("submit", (event)=> {
    event.preventDefault();
    console.log(event);
    let userSaldo = parseFloat(selected[0].saldo); //saldo actual
    let saldoAgregar = parseFloat(agregarSaldo.value); //almacena el valor del input(saldo a agregar)
    let saldoNuevo = userSaldo + saldoAgregar; //almacena el valor nuevo del saldo
    console.log(saldoNuevo); 
    if(saldoNuevo <= 990){
      selected[0].saldo = saldoNuevo;
      console.log(selected);
      actions.innerHTML ="";
      actions.innerHTML = `<p class="mt-4 resultado-consulta">Su nuevo saldo es de: ${saldoNuevo} soles.</p>` 
    } else if(saldoNuevo > 990){
      alert("Su saldo final no puede ser mayor a 990 soles");
    } 
  });
};


//para retirar
const retirar = () => {
  actions.innerHTML ="";
  actions.innerHTML = 
  `<form id="formDeposito" class="mt-3" action="">
    <div class="input-group mx-2">
    <span class="input-group-text bg-oscuro" id="inputGroup-sizing-default">Ingresa monto</span>
    <input id="agregarSaldo" type="float" class="form-control bg-oscuro" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>
    <button type="submit" class="btn btn-dark">Ok</button>
  </form>`;
  const formularioDeposito = document.querySelector("#formDeposito");
  const agregarSaldo = document.querySelector("#agregarSaldo");
  
  formularioDeposito.addEventListener("submit", (event)=> {
    event.preventDefault();
    console.log(event);
    let userSaldo = parseFloat(selected[0].saldo); //saldo actual
    let saldoAgregar = parseFloat(agregarSaldo.value); //almacena el valor del input(saldo a agregar)
    let saldoNuevo = userSaldo - saldoAgregar; //almacena el valor nuevo del saldo
    console.log(saldoNuevo); 
    if(saldoNuevo >= 10){
      selected[0].saldo = saldoNuevo;
      console.log(selected);
      actions.innerHTML ="";
      actions.innerHTML = `<p class="mt-4 resultado-consulta">Su nuevo saldo es de: ${saldoNuevo} soles.</p>` 
    } else if(saldoNuevo < 10){
      alert("Su saldo final no puede ser menor a 10 soles");
    }
  });
};


//para salir
const salir = ()=>{
  location.reload();
};


