window.onload=function(){
let data = document.querySelector('#data');
let result = document.querySelector('#result');
let output = document.querySelector('#output');
let output2 = document.querySelector('#output2');
let input = document.querySelector('#input');
let input2 = document.querySelector('#input2');
let btn = document.querySelector('#btn');
let btn2 = document.querySelector('#btn2');
let sect = document.querySelector('#sect');
let sect2 = document.querySelector('#sect2');
let body = document.querySelector('body');
let link = document.querySelector('a');

//Showing the 'To Centimeter Section'
btn2.addEventListener('click',()=>{
    sect.style.display="none";
    sect2.style.display="block";
    btn2.style.background="#3498db";
    btn.style.background="none";
    btn.style.borderColor="#2ecc71";
    body.style.background="#3498db";
    link.style.boxShadow="5px 5px 7px #51afee, inset 5px 5px 7px #0b3a58";
});

//Returning back to the Feet and Inches Section
btn.addEventListener('click',()=>{
    sect2.style.display="none";
    sect.style.display="block"
    btn.style.background="#2ecc71";
    btn2.style.borderColor="#3498db";
    btn2.style.background="none";
    body.style.background="#2ecc71";
    link.style.boxShadow="5px 5px 7px #4aeb8d, inset 5px 5px 7px #094e26";
});

//Centimeters to Feet and Inches starts
var button = document.querySelector('#convert');
button.addEventListener('click',()=>{
    if (data.value!=="") {
    let cal = data.value/2.54;
    output.value = Math.floor(cal/12);
    output2.value = (cal-12*output.value).toFixed(1);
    }else{
        alert("Please input a value");
    }
});
//Centimeters to Feet and Inches ends

//Feet and Inches to centimeters starts
var button2 = document.querySelector('#convert2');
button2.addEventListener('click',()=>{
    if (input.value!=="" && input2.value!=="") {
        let cal = (input.value * 30.48 + input2.value * 2.54).toFixed(0);
        result.value=cal;  
    }else{
        alert("Please input your values"); 
    }
});
//Feet and Inches to Centimeters ends
}