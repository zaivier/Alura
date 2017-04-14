var botao = document.querySelector('#btnteste') // Seleciona um elemento utilizando seletor css
var tabela = document.querySelectorAll('.table') // seleciona todos os elementos que contenham a classe table e coloca eles num array.

botao.addEventListener('click',function(event){
event.preventDefault(); // faz com que o clique do botao nao tenha seu efeito natural de refresh da página

var form = document.querySelector('#adicionar');

AddRowTable(form);

});
function AddRowTable(form) {

    var nome  = form.nome.value; //vira objeto pois identificou atributo name
    var endereco = form.endereco.value;
    var telefone = form.telefone.value;
    var sexo = form.sexo.value;
    var cidade = form.cidade.value;

    var tabletr = document.createElement('tr'); //funcao que cria elementos html para poderem ser manipulados

    var nometd = document.createElement('td');
    var enderecotd = document.createElement('td');
    var telefonetd = document.createElement('td');
    var sexotd = document.createElement('td');
    var cidadetd = document.createElement('td');
    
    nometd.textContent = nome;
    enderecotd.textContent = endereco;
    telefonetd.textContent = telefone;
    sexotd.textContent = sexo;
    cidadetd.textContent = cidade;

    tabletr.appendChild(nometd); // funcao que adiciona elementos dentro de outros elementos fazendo pais e filhos (tr-> td)
    tabletr.appendChild(enderecotd);
    tabletr.appendChild(telefonetd);
    tabletr.appendChild(sexotd);
    tabletr.appendChild(cidadetd);  

}

//tranformando variaveis em Objetos
function obtemJson (form)
{
    var Json = {
        nome: form.nome.value,
        endereco: form.telefone.value,
        sexo: form.sexo.value,
        cidade: form.cidade.value
    }

    return Json;

}
var form = document.querySelector('#adicionar');

var nome = form.nome; //ao utilizar o atributo nome o js entende como um objeto podendo pegar dentro do 
                      //input aquele nome e utilizar as propriedades dele sem selector
//essa função faz com que os eventos que estão dentro dela tenham um delay determinado na função
setTimeout(function (){

    

},500);

function MostrandoManiTAble()
{
    var tabela = document.querySelectorAll('table');

    tabela.addEventListener('dblclick',function (event){
        var alvoEvento = event.target; //quando clicar duas vezes ele vai pegar o evento na td

        var paiDoAlvo = alvoEvento.parentNode;//quando clicar duas vezes ele vai pegar o evento na tr da table     
    })


}

function MostrandoForEach()
{
    var tr = document.querySelectorAll('.tr')

//corre todos os elementos selecionados pelo queryselectorall
    tr.forEach(function (){
        tr.addEventListener('dblclick',function(){

        })

    })
}
