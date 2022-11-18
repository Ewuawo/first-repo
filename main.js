/*Ejercicio 1
 Crea tu primer hola mundo por consola!*/

 console.log ("Hola Mundo");

 /*Ejercicio 2
 Crea una variable llamada nombre y asígnale tu nombre como valor.
 Crea una variable llamada edad y asígnale tu edad como valor.
 Crea una variable llamada mayorDeEdad y asígnale un valor booleano que indique si eres mayor de edad.
 Crea una variable llamada direccion y asígnale un objeto con tu dirección.
 Crea una variable llamada coloresFavoritos y asígnale un array con tus colores favoritos.
 Crea una variable llamada lenguajesFavoritos y asígnale un array con tus lenguajes de programación favoritos.
 Crea una variable llamada mejorLenguaje y asígnale el primer elemento del array lenguajesFavoritos.
 Crea una variable llamada peorLenguaje y asígnale el último elemento del array lenguajesFavoritos.*/
const nombre = "Eduardo Balbastro";
const edad = 41;
const mayorDeEdad = true;
const direccion = {calle: "San Martin",
numero:1125,
Piso:"Planta Baja",
Departamento: "A",}; 
const coloresFavoritos = ["verde","azul","rojo"];
const lenguajesFavortitos = ["javascrip", "java", "python"];
const mejorLenguaje = lenguajesFavortitos [0];
const peorLenguaje = lenguajesFavortitos[lenguajesFavortitos.length - 1];

/*Ejercicio 3
 Crea dos variables, una llamada numero1 y otra llamada numero2.
 Suma las dos variables y muestra el resultado por consola.
 Crea otras variables de tipo number y realiza las operaciones de resta, multiplicación y división. Mostrando el resultado por consola.*/

let numero1 = 10
let numero2 = 5
let suma = numero1 + numero2;
console.log (suma);
let resta = numero1 - numero2;
console.log (resta);
let division = numero1 / numero2;
console.log (division);
let multiplicacion = numero1 * numero2;
console.log (multiplicacion);

/*Ejercicio 4
 Crea una variable llamada saludo y asígnale un string que contenga hola.
 Comprueba con un if si el string saludo es igual a hola. Y saca por consola un mensaje que diga "Ha saludado".*/


const saludo = "hola";
if(saludo == "hola"){
    console.log("Ha Saludado")
}

/*Ejercicio 5
 Crea un array de 3 pokemons.
 Muestra por consola el nombre de cada pokemon.
 Bonus de investigación: ¿Cómo se puede mostrar el nombre de cada pokemon en una línea?
 Bonus extra: ¿Cómo se pueda hacer esto con bucles?*/

let pokemon = ["pikachu", "Vulpix", "Charmander"];
console.log(pokemon);
let i = 0;
for (i = 0; i<pokemon.length; i++)
{
    console.log(pokemon);
}

/*Ejercicio 6
 Crea un array de 3 pokemons, el tipo de dato a usar será un objeto. Deberá contener nombre, tipoDePokemon.
 Crea una condición y si el tipo de pokemon es fuego muestra por consola el mensaje ¡Es un pokemon de fuego!.*/

let pokemonFuego = [
{nombre:"Squirtle", tipodePokemon:"fuego"},
{nombre:"Squirtler", tipodePokemon: "agua"},
{nombre:"Ponyta", tipodePokemon: "fuego"},
];

if (pokemonFuego[0].tipodePokemon === "fuego"){
    console.log("Es fuego");
}
    

