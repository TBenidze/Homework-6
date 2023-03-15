const btn1 = document.getElementById('btn1');
const background = document.querySelector('body')
const form = document.getElementById('form')
const btn2 = document.getElementById('btn2');
const form2 = document.getElementById('form2')

btn1.addEventListener("click", ()=>{
    if(form.value == 'red'){
        background.style.backgroundColor = "red";
    }else if(form.value == 'green'){
        background.style.backgroundColor = "green";
    }else if(form.value == 'blue'){
        background.style.backgroundColor = "blue";
    }else if(form.value == 'black'){
        background.style.backgroundColor = "black";
    }else if(form.value == 'white'){
        background.style.backgroundColor = "white";
    }else{
        alert('that color is not available');
    }
});

function average() {

    const numberList = document.getElementById("form2").value;
    const numbers = numberList.split(":").map(Number);
    const sum = numbers.reduce((a, b) => a + b, 0);
    const average = sum / numbers.length;

    alert(average)
}

const modal = document.getElementById("modal");
const btn = document.getElementById("btn");


btn.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}