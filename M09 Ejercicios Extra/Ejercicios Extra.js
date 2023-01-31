/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let array = [];
   for(let prop in objeto){
      array.push([prop, objeto[prop]]);
   }
   return array;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let array = string.split('').sort();
   let caracter;
   let obj = {};
   let contador;
   for(i=0; i<array.length; i++){
      if(!obj.hasOwnProperty(array[i])){
         caracter = array[i];
         obj[array[i]] = 1;
         contador = 1
      }else if(array[i] == caracter){
         contador++;
         obj[array[i]] = contador;
      }else{
         obj[array[i]] = contador;
         caracter = array[i];
      }
   };
   return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let minus = [];
   let mayus = [];
   string.split('').forEach(c => {
      if(c == c.toUpperCase())
         mayus.push(c)
      else
         minus.push(c)
   });
   return mayus.concat(minus).join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let array = frase.split(' ');
   let inverseArray = []
   array.forEach(palabra =>{
      let inverPalabra = [];
      for(i=0; i<palabra.length; i++){
         inverPalabra.unshift(palabra[i]);
      }
      inverseArray.push(inverPalabra.join(''));
   });
   return inverseArray.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:1
   let text = numero.toString();
   let longitud = text.length;
   for(i=0; i<= longitud/2; i++){
      if(!(text[i] == text[longitud-1-i]))
         return "No es capicua"
   }
   return "Es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let array = string.split('');
   let newArray = array.filter(caracter => !(caracter=='a'||caracter=='b'||caracter=='c'));
   return newArray.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   for(i=0; i<arrayOfStrings.length-1; i++){
      for(j=i+1; j<arrayOfStrings.length; j++){
         if(arrayOfStrings[i].length > arrayOfStrings[j].length){
            let temp = arrayOfStrings[i];
            arrayOfStrings.splice(i, 1, arrayOfStrings[j]);
            arrayOfStrings.splice(j, 1, temp);
         }
      }
   }
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let newArray = [];
   for(i=0; i<array1.length; i++){
      for(j=0; j<array2.length; j++){
         if(array1[i]==array2[j]){
            newArray.push(array1[i]);
         }
      }
   }
   return newArray;
}
buscoInterseccion([1, 2, 3], [1, 5, 8, 3]);
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
