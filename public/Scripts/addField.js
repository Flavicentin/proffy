//Procurar o botão 
// tenho que pegar o documento -> document
//ouvir evento (add um novo horario, é um evento, e qual tipo do evento Click, e qual ação (isso vc cria, não o JS))
//Quando clicar no botão (+Novo Horario)
//Executar uma ação 
  //INTERAÇÕES DO FUNCTION CLONEFIELS():
  //Duplicar dois campos
    //Que campo tenho que duplicar?
    //document.querySelector('.schedule-item') -> peguei o campo que quero duplicar
    //cloneNode -> Função Duplicar
    //Blz agr vc ja conseguiu duplicar e precisa:
  //Colocar na pagina
    //Como colocar na pag?
    //1º Lugar Onde?
    //Pegar o lugar e definir onde quero coloca 
  //limpar os campos
  //Que campos?
// console.log(fields[0].value = "")
// console.log(fields[1].value = "")
//para cada campo, limpar 


document.querySelector("#add-time")
.addEventListener('click',cloneField) 

function cloneField(){
  const newFieldConteiner = document.querySelector('.schedule-item').cloneNode(true) //Boolean: true or false 
  const fields = newFieldConteiner.querySelectorAll("input")
  fields.forEach(function(field){
  console.log(field)
 })
  document.querySelector('#schedule-item').appendChild(newFieldConteiner)
}

