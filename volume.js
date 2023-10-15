function Vol(){
    let r=Volume.querySelector('num1').Value;
    let res;
    res=4*3.14*r^3;
    Volume.getElementById('output').innerHTML="Your Answer is" + "  "+res+"  "
}