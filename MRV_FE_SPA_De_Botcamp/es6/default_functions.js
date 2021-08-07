//Desenvolvimento avançado com JavaScript ES6 - Default Function Arguments

//terminal > node  default_functions.js

/*Glosário
--- > NaN: Not a Number: valor numérico indefinido ou irrepresentável
--- > Verbose: . Código verboso é aquele que precisa de mais palavras, ou palavras mais longas,
 do que o necessário para expressar adequadamente a intenção do código. 

/*function multiply(a,b){
    b = b || 1; //Se utilizava o operador lógico "OU" para verificar se o usuário entrou com o paramêtro "b" ou seja(B SENÃO 1).
    b = typeof b === 'undefined' ? 1 :b; //Outra lógica que poderia ser feita, caso o usuário colocasse um valor <= 0 nesse caso
    if(typeof b === 'undefined'){  //Mesma lógica de cima porém com a condicional if, pórem essas maneiras de códigos são conhecidas como verbose.
        b=1;
    }
    return a*b;
}*/
// =================================================================================================



//Ao referenciar o outro parametro verifique ele vem posteriormente 
/*function multiply(a =12, b = a){ //Podemos atribuir valor padrão após o paramêtro

    return a * b;
}
console.log(multiply(undefined,undefined));//undefined = 12 conforme os paramêtros*/

//lazy evaluation //Utilizavél para criar id's aleatórios ou dispárar erros caso a pessoa esqueca de passar os parametros.

/*function randomNumber(){
    console.log('Gerando o número aleatório.')
    return Math.random() * 10;
}
function multiply(a , b = randomNumber()){
    return a * b;
}

console.log(multiply(12));
console.log(multiply(12));*/