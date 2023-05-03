const num1=document.getElementById('num1');
const num2=document.getElementById('num2');
const addBtn=document.getElementById('add');
const subtractBtn=document.getElementById('subtract');
const multiplyBtn=document.getElementById('multiply');
const divideBtn=document.getElementById('divide');
const result=document.getElementById('result');

addBtn.addEventListener("click", function(){
  result.innerHTML=parseInt(num1.value) + parseInt(num2.value);
});

subtractBtn.addEventListener("click", function(){
  result.innerHTML=parseInt(num1.value) - parseInt(num2.value);
});

multiplyBtn.addEventListener("click", function(){
  result.innerHTML=parseInt(num1.value) * parseInt(num2.value);
});

divideBtn.addEventListener("click", function(){
  result.innerHTML=parseInt(num1.value) / parseInt(num2.value);
});