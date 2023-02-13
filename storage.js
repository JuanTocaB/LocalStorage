/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function comenzar(){
    var boton=document.getElementById("grabar");
    //lo ponemos a la escucha
    boton.addEventListener("click",itemNuevo,false);
}
function itemNuevo(){
    //asignamos a una variable clave el valor del componente "clave"
    var clave=document.getElementById("clave").value;
    console.log(clave);
    var valor=document.getElementById("valor").value;
    //este código se aplica cuando se está manejando un solo item
    localStorage.setItem(clave,valor);
   
    leer_mostrar(clave);
    //coloca en blanco el cuadro de texto
    document.getElementById("clave").value="";
    document.getElementById("valor").value="";
}

function leer_mostrar(clave){
   var lazonadatos=document.getElementById("zonadatos"); 
  
//El código siguiente se utiliza para cuando quieres manejar un solo item
//var elvalor=sessionStorage.getItem(clave);
//var elvalor=sessionStorage[clave];
//este código coloca el contenedor zonadatos a vacío.
 lazonadatos.innerHTML="";
 //este otro puede prescindir del de arriba y crea un espacio html para eliminar los registros
 lazonadatos.innerHTML='<div><button onclick="eliminarTodo()">Eliminar Todo</button></div>';
//lazonadatos.innerHTML="<div> Clave: "+ clave +"--" + "Valor: " + elvalor + "</div>";
//este código lo utilizas para recuperar muchos valores
    for(i=0;i< localStorage.length;i++){
    var clave=localStorage.key(i);
    var elvalor=localStorage.getItem(clave);
    //esta sentencia va generando un espacio para cada nuevo registro. 
    //lazonadatos.innerHTML+="<div> Clave: "+ clave +"--" + "Valor: " + elvalor + "</div>";
    //Ahora queremos agregar un boton eliminar por cada item
    lazonadatos.innerHTML+='<div> Clave: '+ clave +'--' + 'Valor: ' + elvalor + '<br><button onclick="eliminarItem(\''+ clave +'\')">Eliminar</button></div>';

}
}  
function eliminarTodo(){
    if(confirm("Estás seguro")){
        localStorage.clear();
        leer_mostrar();
    }
}

function eliminarItem(clave){
     if(confirm("Estás seguro")){
        localStorage.removeItem(clave);
        leer_mostrar();
    }
}
window.addEventListener("load",comenzar,false);

