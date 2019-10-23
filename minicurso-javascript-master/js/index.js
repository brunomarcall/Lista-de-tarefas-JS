let inputElement = document.getElementById('entrada');
let buttonElement = document.getElementById('botao');
let ulElement = document.getElementById('lista');

let lista = ["Git e GitHub", "JavaScript", "Node", "React"];

buttonElement.onclick = function(){
   
   event.preventDefault();
   
  let value = inputElement.value;
 
  if(value!==""){
    lista.push(value);
    inputElement.value = "";
    render();      
} else{
    alert("para mano!");
}
 
    
}




function remove(index){
    lista.splice(index, 1);
    render();
}






function render() {

ulElement.innerHTML = "";





lista.map(function(element, index) { 
   let liElement = document.createElement('li');
   let pElement = document.createElement('p');
   pElement.appendChild(document.createTextNode(element));
   
   let btnElement = document.createElement('button');
   btnElement.appendChild(document.createTextNode("Deletar"));
   btnElement.setAttribute("type", "button");
   btnElement.setAttribute("onclick", "remove("+index+")"); 

   liElement.appendChild(pElement); 
   liElement.appendChild(btnElement); 

   ulElement.appendChild(liElement);
});
}
render();