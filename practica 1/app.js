

//ocultar o mostrar los divs que contiene la lista
const hide = document.querySelector('#hideElements');
const listDiv = document.querySelector('#list')

//constantes para agregar elementos a la lista
const addItemInput = document.querySelector('#addItem'); //input
const addItemButton = document.querySelector('button#addItemButton');//Button

//eliminar el ultimo item
const removeItemButton = document.querySelector('button#removeItemButton');
//eliminar el item seleccionado
const removeItem = document.querySelector('button#removeItem')

var contador = 0
//mostrar y ocultar lista
hide.addEventListener('click', () => {

    if(listDiv.style.display =='none'){
        listDiv.style.display= 'block';
        hide.textContent = '<<';
    }else{
        listDiv.style.display = 'none';
        hide.textContent = '>>'
    }
});


//agregar elementos a la lista
addItemButton.addEventListener('click',()=>{
    let list = document.querySelector('ul');
    let li = document.createElement('li');
    let input = document.createElement("input")

    
    li.textContent = addItemInput.value;

    input.type = "checkbox"
    input.id = "cheque"
    
    list.appendChild(li); //agregar elemento a la lista
    li.appendChild(input);
    addItemInput.value="";


});



//elimiar ultimo elemento de la lista
removeItemButton.addEventListener('click', () => {
    let list = document.querySelector('ul');
    let li = document.querySelector('li:last-child');
    //let a = li.querySelector("#cheque")
    //console.log(a.checked)
    list.removeChild(li)
});



//eliminar elemento seleccionado
removeItem.addEventListener('click',() => {
    
    
    let elementos = document.querySelectorAll("li");

    for (let i = 0; i < elementos.length; i++) {

        let boton = elementos[i].querySelector("#cheque")

        if(boton.checked === true){
            elementos[i].remove(self)
        }
    }
  
    
   

    
        
    
});

