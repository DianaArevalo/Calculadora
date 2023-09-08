// agregar el valor a la pantalla
function agregar(valor) {
    document.getElementById('pantalla').value += valor
}

//borrar todo
function borrarTodo() {
    document.getElementById('pantalla').value = ''
}

//calcular con el metodo eval
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}

//BORRAR 1 CASILLA
function borrar() {
    var pantalla = document.getElementById('pantalla');
    var elementos = pantalla.value.split(''); // Split the value into an array of characters
    var index = elementos.length - 1; // Get the index of the last element

    if (index >= 0) {
        elementos.splice(index, 1); // Remove the element at the specified index
        pantalla.value = elementos.join(''); // Join the remaining characters back into a string
    }
}



