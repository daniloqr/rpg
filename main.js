/* calculo de ataque */

function calcular (){

var ataqueTotal = document.querySelector ("#ataqueTotal").value;
var buffAtaque = document.querySelector ("#buffAtaque").value;
var dados = document.querySelector(".dados").value;

var ataqueComBuff = (parseFloat(ataqueTotal) + parseFloat(buffAtaque)) ;
var conversao = parseInt(ataqueComBuff);
alert (ataqueComBuff);

}
