let h1 = document.querySelector("h1");
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let reset = document.querySelector(".reset");

let count = 0;

inc.addEventListener("click", function(){
    count++;
    if(count>0){
        h1.style.color = "white";
        h1.innerText = count;
    }
})

dec.addEventListener("click", function(){
    count--;
    h1.innerText = count;
    if(count<=0){
        count = 0;
        h1.style.color = "red";
        h1.innerText = "0";
    }
})

reset.addEventListener("click", function(){
    count = 0;
    h1.innerText = count;
})