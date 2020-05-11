'use strict';
// console.log("hello World");
{

    const btn1 =document.getElementById("btn1");
    const btn2 =document.getElementById("btn2");
    const btn3 =document.getElementById("btn3");
const btn4 =document.getElementById("btn4");
const btn5 =document.getElementById("btn5");
const btn6 =document.getElementById("btn6");
const btn7 =document.getElementById("btn7");
const btn8 =document.getElementById("btn8");
const btn9 =document.getElementById("btn9");
const btn0 =document.getElementById("btn0");
const btn00 =document.getElementById("btn00");
const total =document.getElementById("total");
const btnP =document.getElementById("btnP");
const btnM =document.getElementById("btnM");
const btnT =document.getElementById("btnT");
const btnD =document.getElementById("btnD");
const btnC =document.getElementById("btnC");
const btnB =document.getElementById("btnB");



const number= document.querySelector("button");

let result= " ";
let result1 = 0; 
let result2 = 0;
let proc = 0; 

btn1.addEventListener("click", ()=>{
    result += "1";
    document.querySelector("main").textContent =result;
});
btn2.addEventListener("click", ()=>{
    result += "2";
    document.querySelector("main").textContent =result;
});
btn3.addEventListener("click", ()=>{
    result += "3";
    document.querySelector("main").textContent =result;
});
btn4.addEventListener("click", ()=>{
    result += "4";
    document.querySelector("main").textContent =result;
});
btn5.addEventListener("click", ()=>{
    result += "5";
    document.querySelector("main").textContent =result;
});
btn6.addEventListener("click", ()=>{
    result += "6";
    document.querySelector("main").textContent =result;
});
btn7.addEventListener("click", ()=>{
    result += "7";
    document.querySelector("main").textContent =result;
});
btn8.addEventListener("click", ()=>{
    result += "8";
    document.querySelector("main").textContent =result;
});
btn9.addEventListener("click", ()=>{
    result += "9";
    document.querySelector("main").textContent =result;
});
btn0.addEventListener("click", ()=>{
    result += "0";
    document.querySelector("main").textContent =result;
});
btn00.addEventListener("click", ()=>{
    result += "00";
    document.querySelector("main").textContent =result;
});
btnB.addEventListener("click", ()=>{
    if(result == " "){
        result += "0.";
        document.querySelector("main").textContent =result;
    }else{
        result += ".";
        document.querySelector("main").textContent =result;
    }
});


btnP.addEventListener("click", ()=>{
    // if(reslut3 > 0 || reslut3 < 0){
        //     result =0 ;
        // }
        if(proc > 4){
            result1 = Number(result);
            proc  = 1;
            result = "+" ;
        }else{
            result1 += Number(result);
            proc  = 1;
            result = "+" ;
        }
    });
    
    btnM.addEventListener("click", ()=>{
        if(proc > 4){
            result1 = Number(result);
            proc  = 1;
            result = "-" ;
        }else{
            result1 += Number(result);
            proc  = 1;
            result = "-" ;
        }
    });
    
    btnT.addEventListener("click", ()=>{
        if(proc > 4){
            result1 = Number(result);
            proc  = 2;
            result = " " ;
        }else{
            if(result1 > 0 || result1 < 0 ){
                result1 =result1 * Number(result);
                proc  = 2;
                result = "" ;        
            }else{
                result1 = Number(result);
                proc  = 2;
                result = "" ;        
            }
        }
    });
    
    btnD.addEventListener("click", ()=>{
        if(proc > 4){
            result1 = Number(result);
            proc  = 3;
            result = " " ;
        }else{
            if(result1 > 0 || result1 < 0 ){
                result1 =result1 / Number(result);
                proc  = 3;
                result = "" ;        
            }else{
                result1 = Number(result);
                proc  = 3;
                result = "" ;        
            }
        }
    });
    
    
    total.addEventListener("click", ()=>{
        if(proc < 5){
            result2 = Number(result);
        }
        
        if (proc === 1){
            console.log(result1);
            console.log(result2);
            console.log(result);
            result = result1 + result2;
            document.querySelector("main").textContent =result;
            proc = 5;
        }else if (proc === 2){
            console.log(result1);
            console.log(result2);
            result = result1 * result2;
            document.querySelector("main").textContent =result;
            proc = 5;
        }else if (proc === 3){
            console.log(result1);
            console.log(result2);
            result = result1 / result2;
            document.querySelector("main").textContent =result;
            proc = 5;
        }
        
    });
    
    //CLEARボタン 全部の変数をリセット
    btnC.addEventListener("click", ()=>{
        result1 = 0;
        result2 = 0;
        result = " " ;
        document.querySelector("main").textContent =0;
    });





}