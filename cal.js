function cal(){
    let num1=document.querySelector('n1').Value;
    let oper=document.getElementById('oper').Value;
    let num2=document.getElementById('n2').Value;
    let res;
    if(oper=='+'){
        res=parseFloat(num1)+parseFloat(num2);
        document.getElementById('output').innerHTML="Your Answer is" + "  "+res+"  "
    }
}