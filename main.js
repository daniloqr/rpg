/* calculo de ataque */

function calcular (){

var ataqueTotal = document.querySelector ("#ataqueTotal").value;
var buffAtaque = document.querySelector ("#buffAtaque").value;
var dados = document.querySelector(".dados").value;

var ataqueComBuff = (ataqueTotal + buffAtaque) ;
var conversao = parseInt(ataqueComBuff);
alert (ataqueComBuff);

}
