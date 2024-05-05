//ejercicio 1
/* Escribe una función llamada processNumbers que tome este array como argumento y realice las siguientes operaciones:

Utiliza map para crear un nuevo array con todos los números multiplicados por 3.
Utiliza filter para obtener un nuevo array con todos los números mayores que 6.
Utiliza reduce para calcular la suma de todos los números en el array resultante de la operación de filtrado. */
const numbers=[3,7,9,12,5,8,4,15];

function processNumbers(numbers){
    // no se como llamar multiplicados en ingles lo dejo en español
    const numbersMultiplicadosPorTres=numbers.map(number => number *3);
    const numbersOlder=numbers.filter(number => number >6);
    const totalNumbers=numbers.reduce((total,number) => total+=number);
    return{
        numbersMultiplicadosPorTres,
        numbersOlder,
        totalNumbers
    }
}

console.log(processNumbers(numbers))
//ejercicio 2
/* Escribe una función llamada manageProducts que tome este array como argumento y realice las siguientes operaciones:

Utiliza map para crear un nuevo array con objetos que contengan el nombre del producto y su precio con un descuento del 10%.
Utiliza filter para obtener un nuevo array con productos cuyo precio sea superior a 30.
Utiliza reduce para calcular el precio total de todos los productos en el array resultante de la operación de filtrado */
const products = [
    { name: "Camisa", price: 25 },
    { name: "Pantalón", price: 40 },
    { name: "Zapatos", price: 60 },
    { name: "Bufanda", price: 15 }
  ];
  
function manageProducts(products) {
    //recorremos el array y nos devuelve un array con el 10% de cada producto
    const productsDto = products.map(product => ({
      name: product.name,
      price: product.price - (product.price * 0.10)
    }));
  
    const productsOlder = products.filter(product => product.price > 30);
  
    const totalProduct = products.reduce((total, product) => total + product.price, 0);
  
    return {
        productsDto,
        productsOlder,
        totalProduct
    };
  }
console.log(manageProducts(products));


//ejercicio 3
/* Escribe una función llamada manageStudents que tome este array como argumento y realice las siguientes operaciones:

Utiliza filter para obtener un nuevo array con estudiantes mayores de 23 años.
Utiliza map para incrementar en 1 año la edad de cada estudiante en el array resultante de la operación de filtrado. */
const students = [
    { name: "Ana", age: 22 },
    { name: "Pedro", age: 25 },
    { name: "María", age: 22 },
    { name: "Juan", age: 24 }
    ];

function manageStudents(students){
    const studentsOlder=students.filter(student => student.age >23);

    const studentsIncrementAge=studentsOlder.map(student => ({
        name:student.name,
        age:student.age + 1
    }));

    return {
        studentsOlder,studentsIncrementAge
    }

}

console.log(manageStudents(students));

//ejercicio 4
/* Escribe una función llamada processPhrases que tome este array como argumento y realice las siguientes operaciones:

Utiliza map para crear un nuevo array con el número de palabras en cada frase.
Utiliza filter para obtener un nuevo array con frases que contengan la palabra "vida".
Utiliza reduce para concatenar todas las frases en el array resultante de la operación de filtrado. */
const phrases = [
    "El agua es vida",
    "La vida es bella",
    "Bella es la naturaleza",
    "La naturaleza nos sorprende"
  ];
  
  function processPhrases(array) {
    // Utiliza map para crear un nuevo array con el número de palabras en cada frase
    const wordCounts = array.map(phrase => phrase.split(" ").length);
  
    // Utiliza filter para obtener un nuevo array con frases que contengan la palabra "vida"
    const phrasesWithVida = array.filter(phrase => phrase.includes("vida"));
  
    // Utiliza reduce para concatenar todas las frases en el array resultante de la operación de filtrado
    const concatenatedPhrases = phrasesWithVida.reduce(
      (accumulator, currentValue) => accumulator + " " + currentValue,
      ""
    );
  
    return { wordCounts, phrasesWithVida, concatenatedPhrases };
  }
  
  const result = processPhrases(phrases);
  console.log("Número de palabras en cada frase:", result.wordCounts);
  console.log("Frases que contienen la palabra 'vida':", result.phrasesWithVida);
  console.log(
    "Concatenación de todas las frases con la palabra 'vida':",
    result.concatenatedPhrases
  );
  




//ejercicio 5
/* Escribe una función llamada removeDuplicateNames que tome este array como argumento y 
devuelva un nuevo array con nombres únicos, sin duplicados. */
const names = ["Juan", "María", "Pedro", "María", "Ana", "Juan"];

function removeDuplicateNames(names){
    const nameNoDuplicates= Array.from(new Set(names));
    return nameNoDuplicates;
}
console.log(removeDuplicateNames(names));

//ejercicio 6
/* Escribe una función llamada removeDuplicateStudents que tome este array como argumento 
y devuelva un nuevo array con estudiantes únicos, donde la unicidad se define por el 
valor de la propiedad name y la propiedad age . Es decir, si hay dos objetos con el mismo 
nombre y la misma edad, se consideran duplicados y solo uno de ellos debe estar en el array resultante. */
const students2 = [
    { id: 1, name: "Ana", age: 20 },
    { id: 2, name: "Pedro", age: 22 },
    { id: 3, name: "Ana", age: 20 },
    { id: 4, name: "María", age: 21 }
  ];
  
  function removeDuplicateStudents(array) {
    return array.filter((student, index) => {
      return (
        index ===
        array.findIndex(
          obj => obj.name === student.name && obj.age === student.age
        )
      );
    });
  }
  
  const uniqueStudents = removeDuplicateStudents(students2);
  console.log(uniqueStudents);
  