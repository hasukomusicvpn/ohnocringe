let number = prompt("Hãy cho tui một số bất kỳ: ");
let even = [];
for(let i = 4; i <= number; i++){
    if(i % 2 == 0){
        even.push(i);
    }
}
console.log(even);
function changecolor(x){
    x.style.backgroundColor = "blue";
}
function normal(x){
    x.style.backgroundColor = "black";
}
let pyra = "";
for(let n = 2; n < 7; n++){
    for(let k = 0; k < n - 1; k++){
        pyra += "1";
    }
    pyra += "\n";
}
let result = document.getElementsByClassName("result");
console.log(pyra);
//ko bt dua len html lam sao :((
    
let min = timeNow.getMinutes();
let sec = timeNow.getSeconds();
let hour = timeNow.getHour();
let clock = document.getElementsByClassName("clock");
clock.innerHTML = time;
//gòy xong luôn :((

