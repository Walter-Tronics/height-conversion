window.onload=()=>{

//Selecting elements
let data = document.querySelector('#data'),
result = document.querySelector('#result'),
output = document.querySelector('#output'),
output2 = document.querySelector('#output2'),
input = document.querySelector('#input'),
input2 = document.querySelector('#input2'),
btn = document.querySelector('#btn'),
btn2 = document.querySelector('#btn2'),
sect = document.querySelector('#sect'),

sect2 = document.querySelector('#sect2'),
body = document.querySelector('body'),
link = document.querySelector('a');

//Showing the 'To Centimeter Section'
btn2.addEventListener('click',()=>{

    //hiding the to feet section
    sect.style.display="none";
    //showing the to centimeter section
    sect2.style.display="block";
    //changing the background color of the button
    btn2.style.background="#3498db";
    //changing the background color of the link
    btn.style.background="none";
    //changing the border color of the link
    btn.style.borderColor="#2ecc71";
    //changing the background color of the body
    body.style.background="#3498db";
    //adding a box shadow to the box
    link.style.boxShadow="5px 5px 7px #51afee, inset 5px 5px 7px #0b3a58";
});


//Returning back to the Feet and Inches Section
btn.addEventListener('click',()=>{

    //hiding the to centimeter section
    sect2.style.display="none";
    //showing the to feet section
    sect.style.display="block"
    //changing the background color of the button
    btn.style.background="#2ecc71";
    //changing the border color of the link
    btn2.style.borderColor="#3498db";
    //changing the background color of the link
    btn2.style.background="none";
    //changing the background color of the body
    body.style.background="#2ecc71";
    //adding a box shadow to the box
    link.style.boxShadow="5px 5px 7px #4aeb8d, inset 5px 5px 7px #094e26";
});


//Centimeters to Feet and Inches starts
//Selecting the button
var button = document.querySelector('#convert');
//adding an event listener to the button
button.addEventListener('click',()=>{
    //getting the value from the input field
    //if the value is not empty, then convert
    if (data.value!=="") {
    //divide the value by 2.54 to get the value in centimeter
    let cal = data.value/2.54;
    //converting the value to feet and inches
    output.value = Math.floor(cal/12);
    //getting the remainder of the value
    //fixing the value to the output field
    output2.value = (cal-12*output.value).toFixed(1);

    }else{
        //if the value is empty, then show an error message
        alert("Please input a value");
    }
});
//Centimeters to Feet and Inches ends


//Feet and Inches to centimeters starts
//Selecting the button
var button2 = document.querySelector('#convert2');
//Adding an event listener to the button
button2.addEventListener('click',()=>{
    //getting the value from the input field
    //if both the values are not empty, then convert
    if (input.value!=="" && input2.value!=="") {
        //multiply the value by 30.48 to get the value in centimeter
        //converting the value to feet and inches
        let cal = (input.value * 30.48 + input2.value * 2.54).toFixed(0);
        //fixing the value to the output field
        result.value=cal;  

    }else{
        //if both the values are empty, then show an error message
        alert("Please input your values"); 
    }
    
});
//Feet and Inches to Centimeters ends
}
