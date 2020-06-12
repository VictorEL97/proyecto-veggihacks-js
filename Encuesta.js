
document.onkeypress = contar;

function contar(){
    var tx = document.getElementsByTagName('textarea')[0];
    var ct = document.getElementById('contador');
    var n = tx.value.length + 1;
    ct.innerHTML = 'Nº letras ' + n;
    if(n > 1000){
        document.getElementById('yoda').style.opacity = '1';
    }
    else{
        document.getElementById('yoda').style.opacity = '0';
    }
}