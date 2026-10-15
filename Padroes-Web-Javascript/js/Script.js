function digaOla(idioma) {
    return function(nome){
        switch (idioma) {
            case 'es': console.log(`Hola ${nome}`); break;
            case 'en': console.log(`Hello ${nome}`); break;
            case 'fr': console.log(`Bonjour ${nome}`); break;
            default: console.log(`Olá ${nome}`); break;
        }
    } 
}


let ola = digaOla('fr');
ola('Juan'); // Output: Bonjour Juan
ola('Maria'); // Output: Bonjour Maria