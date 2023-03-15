alert('Bienvenido a Store Fontana')
saludar()
function saludar (){
    let nombre=prompt ('cual es el nombre?');
    console.log ('Un gusto saludarte ' + nombre);
    alert ('bienvenido a StoreFontana ' + nombre);
    alert ('Somos un store de computación con mas de 20 años de trayectoria')
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

