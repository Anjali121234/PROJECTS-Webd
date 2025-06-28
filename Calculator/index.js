function allclear(){
    document.getElementById("screen").value="";
    document.getElementById("display").textContent="0";
}
function display(num) {
  let num1=document.getElementById("screen").value;
  let num2=num;
  document.getElementById("screen").value=num1+num2;}

function backspace(){
    let word=document.getElementById('screen');
    word.value=word.value.slice(0,-1);
}
function factorial(){
  let num=document.getElementById("screen").value;
  let result=math.factorial(num);
  document.getElementById("screen").value=result;
}
function radian(){
  let num=document.getElementById("screen").value;
  let result=num*(Math.PI/180);
  document.getElementById("screen").value=result;
}



function sin(){
    let num=document.getElementById("screen");
    let radian=num.value*(Math.PI/180);
    // function sin(){
    document.getElementById("screen").value=Math.sin(radian);

}
function reciprocal(){
  let num=document.getElementById("screen");
  document.getElementById("screen").value=1/num.value;
}


 function switc() {
  document.body.classList.toggle("scientific-mode");
}

//   document.querySelectorAll('.btn').forEach(button => {
//   button.style.height = "40px";
//   button.style.marginTop ="5px";
  

// })
// document.querySelectorAll('.sci').forEach(button => {
//   button.style.display = "inline-block";
  
// })


function log(){
  let num=document.getElementById("screen").value;
  let result=Math.log10(num);
  document.getElementById("screen").value=result;
}



function solve() {
  let expression = document.getElementById("screen").value;
  let evalExpression = expression
  .replace(/√([0-9.]+)/g, "sqrt($1)")
  .replace(/×/g, "*")
  .replace(/÷/g, "/");
 



  try{
    document.getElementById("display").innerHTML=expression;
   let result=math.evaluate(evalExpression);
   document.getElementById("screen").value=result;
    }
   catch(error){
   try {
      let softResult = math.evaluate(evalExpression + ")");
      document.getElementById("display").innerHTML = expression;
      document.getElementById("screen").value = softResult;
    } catch {
      // Still an invalid expression — show original and let user fix it
      document.getElementById("screen").value = expression;
    }
  }

}

