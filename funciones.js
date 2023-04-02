const mouse={
    marca: "Genius",
    modelo: "l209",
    color:"negro",
    precio:1000,
    disponibilidad: true
}

const mouse2={
    marca: "logitech",
    modelo: "l301",
    color:"blanco",
    precio:1200,
    disponibilidad: true
}
const mouse3={
    marca: "verbatim",
    modelo: "l399",
    color:"azul",
    precio:1300,
    disponibilidad: true
}

const teclado={
    marca: "verbatim",
    modelo: "m44",
    color:"negro",
    precio:1700,
    disponibilidad: true
}

const teclado2={
    marca: "redragon",
    modelo: "md3",
    color:"negro",
    precio:3000,
    disponibilidad: true
}

console.log(mouse);



alert('Bienvenido a Store Fontana')
saludar()
function saludar (){
    let nombre=prompt ('cual es el nombre?');
    console.log ('Un gusto saludarte ' + nombre);
    alert ('bienvenido a StoreFontana ' + nombre);
    alert ('Somos un store de computación con mas de 20 años de trayectoria')
}

for(let i=1;i<1;i++){
    saludar();
}

let carrito=0;

let mensaje = prompt('Desea comprar un producto de la StoreFontana? (s-si / n-no)')
while (mensaje == 's'){
let producto = prompt ('1- Mouse Genius l209\n2-Mouse logitech l301\n3-Mouse verbatim l399\n4-Teclado verbatim m44\n5-Teclado redragon md3');
if(producto == '1'){
    alert ('Mouse genius l209 $1000 AGREGADO AL CARRITO');
   carrito+=1000;
  alert('su total es de: '+carrito);
}
else if (producto == '2'){
    alert ('Mouse logitech l301 $1200 AGREGADO AL CARRITO');
    carrito+=1200;
    alert('su total es de: '+carrito);
}

else if (producto == '3'){
    alert ('Mouse verbatim l399 $1300 AGREGADO AL CARRITO');
    carrito+=1300;
    alert('su total es de: '+carrito);

    }
  else if (producto == '4'){
        alert ('Teclado verbatim m44 $1700 AGREGADO AL CARRITO');
        carrito+=1700;
        alert('su total es de: '+carrito);
    }

else if (producto == '5'){
    alert ('Teclado redragon md3 $3000 AGREGADO AL CARRITO');
    carrito+=3000;
    alert('su total es de: '+carrito);
    }

else {
    alert ('codigo de producto inexistente');
   
}
mensaje = prompt('Desea comprar otro producto de la StoreFontana? (s-si / n-no)');


}

let frase = "storefontana"
console.log ("esta frase tiene " + frase.length + " caracteres") 

//listas

const listaitems = ["mouse 1", "mouse2", "mouse3", "teclado1", "teclado2"];

//console

for (let i=0; i<listaitems.length ; i++)
console.log ((i+1) +" - "+ listaitems [i]);

let itemsbuscado = prompt (" ingresa el item y vere si esta en mi lista");
let posicion = listaitems.indexOf (itemsbuscado);

if (posicion != -1){
    console.log ("el items ya se encuentra en la lista");
    
}
else{
    console.log ("el items aun no se encuentra en la lista");
    }
