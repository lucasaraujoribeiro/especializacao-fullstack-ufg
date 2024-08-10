const assincrono = async ()=> { 
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
       .then(response => response.json())
       .then(json => console.log(json))
    }
    assincrono();
    
console.log("Executa 1");
console.log("Executa 2");
console.log("Executa 3");