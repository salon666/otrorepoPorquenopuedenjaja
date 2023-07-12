 // metodo push agrega un elemento al final de un arreglo
 let miarreglo = [1, 2, 3, 4, 5];
 console.log(miarreglo);
  
 miarreglo.push('6');
 console.log(miarreglo)
 miarreglo.push(12)
 console.log(miarreglo);
 console.log('######################');

 //metodo 'pop' elimina el ultimo elemento de una rreglo 

 console.log(miarreglo);
 miarreglo.pop();
 console.log(miarreglo)
 miarreglo.pop();
 console.log(miarreglo);

 console.log('###################');

 //el metodo shift elimina el primer elemento de un arreglo 
 let frutas = ['pera','manzana','mango'];
 console.log(frutas);
 frutas.shift();
 console.log(frutas);
 console.log('#####################');

 //el metodo unshift agrega uno o mas elementos al erreglo la nueva longitus del arreglo;

 console.log(frutas);
 frutas.push('pera');
 console.log(frutas);
 frutas.unshift(miarreglo);
 console.log(frutas);
 console.log(frutas.unshift(miarreglo));


