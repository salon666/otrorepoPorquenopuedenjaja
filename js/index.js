// alert('hola')
// let nombre = prompt("ingresar nombre de usuario");
let contenedor=  document.querySelector('.container');


if(nombre === "Victor"){

    console.log("hola"+ " " + nombre);
    contenedor.innerHTML = (`
    <h2>victor</h2>
        <hr>
        <p>perfil verificado</p>
        <button>fotor</button>
        <button>correo</button>
        <button>contactos</button>
    `)

}else if(nombre === "josue"){
    contenedor.innerHTML = (`
    <h2>Josue</h2>
        <hr>
        <p>perfil verificado..</p>
        <button>fotor</button>
        <button>correo</button>
        <button>contactos</button>
    `)

}else if(nombre === "html"){
    contenedor.innerHTML = (`
    <h2>HTML</h2>
        <hr>
        <p>definición</p>
        <button>fotos</button>
        <p>el el lenguaje principal de la red con el cual se hacen las estricturas de html en la red</p>

        
    `)

}
else
{
    console.log("usuario incorrecto");
    alert("usuario no valido")

}