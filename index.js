// Your code here
let dodger=document.getElementById('dodger');

document.addEventListener("Keydown", function(e){
  
  if(e.Key==="ArrowLeft"){
    let leftNumbers=dodger.style.left.replace("px","");//
    let left=parseInt(leftNumbers,10);
    dodge.style.left='${left}-1';
    
  }
}




);
