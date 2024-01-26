let numeroSecreto = 0;
let intentos=0; 
let listaNumerosSorteados = [];
let numeroMaximo=10;
// console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroUSuario = parseInt(document.querySelector('#valorUsuario').value);
    
    if (numeroUSuario==numeroSecreto){
        asignarTextoElemento('p', `¡Acertaste el numero! , en ${intentos} ${(intentos===1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }
    
    else {
        if (numeroUSuario>numeroSecreto){
            asignarTextoElemento('p', 'El numero es menor:');
        }
        else {
            asignarTextoElemento('p', 'El numero es mayor:');
        }
        intentos++;
        limpiarCaja();
        
    }
    return;

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(numeroMaximo==listaNumerosSorteados.length){
        asignarTextoElemento('p','Has alcanzado el numero maximo :c')

    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

      
        
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}
function condicionesIniciales(){
    asignarTextoElemento('h1', '¡Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;       
}
function reiniciarJuego(){
    
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');    
    }
condicionesIniciales();