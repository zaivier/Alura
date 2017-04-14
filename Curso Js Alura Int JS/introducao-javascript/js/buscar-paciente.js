var botaoAdicionar = document.querySelector('#buscar-paciente');

botaoAdicionar.addEventListener('click',function (event){
event.preventDefault();

var xhr = new XMLHttpRequest(); //requisições http

xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

xhr.addEventListener('load',function (){
if (xhr.status == 200) {
    document.querySelector('#erro-ajax').classList.add('invisivel');
  var pacientes = JSON.parse(xhr.responseText);

pacientes.forEach(function(paciente){


    adicionaPacienteNaTabela(paciente);

})  
    
}
else{
console.log(xhr.status);
console.log(xhr.responseText);
document.querySelector('#erro-ajax').classList.remove('invisivel');

}




});

xhr.send();








});