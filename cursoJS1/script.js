
//guardar en js objetos del html
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');
const pid = document.querySelector('#pid');
//const input = document.querySelector('input');

const pList = document.querySelectorAll('p');

// console.log(pList)
// console.log({h1, p, parrafo, pid, input})

// modificar el html dentro de la etiqueta seleccionada
//h1.innerHTML = 'Ola k ase<br>otro párrafo';

// modificar el texto dentro de la etiqueta seleccionada, efectivo para seguridad
//h1.innerText = 'Ola k ase<br>otro párrafo';

//console.log(h1.getAttribute('pantalla')) mostrar el valor de un atributo (el atributo puede ser inventado)

//h1.setAttribute('class', 'rojo') //reemplazar clases por otras

//h1.classList.add('rojo') agregar clases

//h1.classList.remove('rojo') eliminar clases

// input.value = 'abcd'; modificar valores de un input desde js

// const img = document.createElement('img'); //crear un elemento html desde js
// img.setAttribute('src', 'https://www.elespectador.com/resizer/7Qrq4cYkSIxGFJxs-iANZQQ-LtE=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/SQT6VSTKY5ALBBK4QFI22JCWNY.jpg');

// pid.innerHTML = ""; //vaciar contenido de una etiqueta.
// pid.append(img); //adjuntar variable creada en js justo dentro de una etiqueta html existente. No borra el contenido original. appendChild hace la misma funcion.


//funcion para tomar inputs y mostrar el resultado al presionar un boton
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const calcular = document.querySelector('#btnCalcular'); //btn
const result = document.querySelector('#result');
const formu = document.querySelector('#formulario');

formu.addEventListener('click', btnOnClick); //llamar funciones sin los ()

function btnOnClick(event){
    // console.log({event});
    // event.preventDefault(); //evitar cargar la pagina despues de activar un eventListener tipo submit
    result.innerText = "Resultado " + input1.value + input2.value;
}