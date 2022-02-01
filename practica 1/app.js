

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



/*
no me funciono esta parte del codigo

esta funcion si la entiendo , sirve para sacar el indice de dentro de un elemento

function findIndex(elem){
    var i, len = items.lenght;
    for(i=0; i <len; i++){
        if(items[i] === elem){
            return i;
        }
    }
    return -1;
}
 
    
    Esta parte no la comprendo para nada para que sirve 
    o que funcion hace o sobretodo que deberia hacer 

//obtener index of elemet in list

//ok aca si comprendo que va sacando lo que es elemento ul donde se guarda el los elemento añadido
var list = document.getElementById("listItems"),
    items = list.getElementsByTagName("li"); //y haca se saca lo que es los elemento items

// esta es la parte menos compleciba para mi 
list.onclick = function(e){// queremos asociar la funcion onclick osea cuando el usuario hace click al elemento lista osea el ul

    //en esta parte es la que entiendo muy poco ok a la variable event le ponemos el evento registrado en e o el vento registrado por window
    var event = e || window.event,
    
    src = event.target || event.srcElement; // no lo entiendo , se que deberia sacar el elemento que se seleciono 

    var myIndex = findIndex(src); //llamamos a la funcion anterior para sacar el index de la lista
    console.log(event)
    index = myIndex;
    console.log(myIndex);


    //CAMBIAR COLOR DEL ELEMENTO SELECCIONADO
    if(event.target.tagName === 'LI'){
        //en esta parte comprendo que sacamos todas los las etiquetas li que fueron creada y le cambiamos la lista de las clases para cambiar si fue selecionado o no
        list.querySelectorAll('li').forEach(el =>el.classList.remove('alert', 'alert-success'));
        items[index].classList.add('alert', 'alert success');
    }

}

//para mi gusto cuesta entender la parte anterior del codigo , quedo un poco incompresible

*/

//eliminar elemento seleccionado
removeItem.addEventListener('click',() => {
    
    /*
    let showDiv = document.getElementById('list');
    let divAlert = document.createElement('div');
    let label = document.createElement('label');
    label.innerHTML = 'Se elimino el elemento ' + index;
    divAlert.classList.add('alert', 'alert-danger'); //clase de la alerta
    divAlert.append(label);
    showDiv.appendChild(divAlert);
    */
    
    let elementos = document.querySelectorAll("li");

    for (let i = 0; i < elementos.length; i++) {

        let boton = elementos[i].querySelector("#cheque")

        if(boton.checked === true){
            elementos[i].remove(self)
        }
    }
  
    
   

    
        
    
});

