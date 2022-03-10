# Modal using REACT

Este proyecto trata de mostrar una ventana emergente que se puede abrir y cerrar
tantas veces como el usuario lo desee.

Para abrir el modal, tan solo hay que pulsar en el botón que aparece nada más
arrancar la aplicación, donde se puede leer "Show modal".

Para cerrarlo, existen dos alternativas:
    1. Cerrarlo haciendo click en el círculo rojo con una X.
    2. Cerrarlo haciendo click en la palabra "here".

Por otro lado, si el desarrollador desea cambiar el icono de la X por cualquier
otro a su gusto, puede hacerlo cambiando el `src` en el código siguiente:

`<button class="toggle-button" onClick={this.onClose}> `
    `<img class="close-icon" src="close.png" alt="close"/>`
`</button>`

Por ejemplo, si lo desea, puede probar a escribir `src="heart.png"` y verá que
el icono se cambia por el de un corazón.

Tampoco tiene por qué ser un `img`, puede ser un link, un div... Cualquier elemento.
Esto es posible porque se ha delegado en el elemento `button` la lógica de 
cerrar el modal, por lo que cualquier componente que se coloque dentro de él, cerrará
la ventana.

## Ejecución

En el directorio del proyecto, puedes ejecutar:
### `npm start`

Y se lanzará la aplicación.