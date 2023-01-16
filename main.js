let btnEncriptar = document.getElementById('texto-encriptado');
let btnDesencriptar = document.getElementById('texto-desencriptado');
let btnCopiar = document.getElementById('btn-copiar');


function encriptar(){
    // hace que lo es escriba el usuario se convieta en minusculas
    var frase = document.getElementById('texto-usuario').value.toLocaleLowerCase();

    // reemplaza los valores dados segun cada letra se coloca img porque i=tomar letras mayus y minus | m = hace que tome en cuenta multiples lineas es decir que si hago enter sigue reconociendo cada linea | g= tomar en cuenta toda la linea u oracion
    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById('text-area').innerHTML = textoEncriptado;
    document.getElementById('btn-copiar').style.display = 'show';
    document.getElementById('btn-copiar').style.display = 'inherit';
    document.getElementById('muñeco').style.display = 'none';
    document.querySelector('.mensaje-uno').style.display = 'none';
    document.querySelector('#text-area').style.margin = "-730px 10px 10px -197px"
    document.getElementById('btn-copiar').style.display = 'inherit';

    
}

function clear(){
    document.getElementById("texto-usuario").value = "";

}

btnEncriptar.addEventListener('click', encriptar);


function desencriptar(){
    // hace que lo es escriba el usuario se convieta en minusculas
    var frase = document.getElementById('texto-usuario').value.toLocaleLowerCase();

    // reemplaza los valores dados segun cada letra se coloca img porque i=tomar letras mayus y minus | m = hace que tome en cuenta multiples lineas es decir que si hago enter sigue reconociendo cada linea | g= tomar en cuenta toda la linea u oracion
    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById('text-area').innerHTML = textoEncriptado;

    
}

btnDesencriptar.addEventListener('click', desencriptar);

function copiar(){

    var copiarContenido = document.querySelector('#text-area');
    copiarContenido.select();
    document.execCommand('copy'); 
}

btnCopiar.addEventListener('click', copiar);
