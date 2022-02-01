


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
    
    /*
    let showDiv = document.getElementById('list');
    let divAlert = document.createElement('div');
    let label = document.createElement('label');
    label.innerHTML = 'Se elimino el elemento ' + index;
    divAlert.classList.add('alert', 'alert-danger'); //clase de la alerta

    items[index].parentNode.removeChild(items[index]);
    divAlert.append(label);
    showDiv.appendChild(divAlert);
    */
   
    let elementos = document.querySelectorAll("li");

    for (let i = 0; i < elementos.length; i++) {

        let boton = elementos[i].querySelector("#cheque")

        if(boton.checked == true){
            elementos[i].remove(self)
        }
    }
    
        
    
});


let datos={
    encabezado:"<h1>Integrantes del grupo</h1>",
    datowilliam:"<b>William Rene Jimenez Guzman ---- SMIS031920</b>",
    datocesar:  "<b>Cesar Andre Chavez Herrera ---------- SMIS033320</b>",
    h2william:"<h2><i>William Rene Jimenez Guzman ---- SMIS031920</i></h2>",
    h2cesar:  "<h2><i>Cesar Andre Chavez Herrera ------- SMIS033320</i></h2>",
    peliculas:[
        {text:'Spider-Man: No Way Home',year:"17 de diciembre de 2021",checked: false},
        {text:'El rey león',year:"1992",checked: false},
        {text:'tarzan',year:"1999",checked: false},
        {text:'Super Mario Bros',year:"1993",checked: false}]
}
new Vue({
    el:'#principal',
    data:datos
})

/*
    "esta parte nunca me funciono"
function findIndex(elem){
    var i, len = items.lenght;
    for(i=0; i <len; i++){
        if(items[i] === elem){
            return i;
        }
    }
}


//obtener index of elemet in list
var list = document.getElementById("listItems"),
    items = list.getElementsByTagName("li");

list.onclick = function(e){
    var event = e || window.event,
    src = event.target || event.srcElement;
    var myIndex = findIndex(src);
    //alerta(myIndex);
    index = myIndex;
    console.log(myIndex);

    //CAMBIAR COLOR DEL ELEMENTO SELECCIONADO
    if(event.target.tagName === 'LI'){
        list.querySelectorAll('li').forEach(el =>el .classList.remove('alert', 'alert-success'));
        items[index].classList.add('alert', 'alert success');
    }

}
*/






