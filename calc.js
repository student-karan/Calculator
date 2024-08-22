let key = document.querySelector(".key");
let dis = document.querySelector(".display");
let AC = document.querySelector(".AC");
let DE = document.querySelector(".DE");
let per = document.querySelector(".per");
let calculate = document.querySelector(".eval");

key.addEventListener("click",()=>{
    display.value += key;
});
AC.addEventListener("click",()=>{
    display.value = "";
});
DE.addEventListener("click",()=>{
    display.value= display.value.toString().slice(0,-1);
});
per.addEventListener("click",()=>{
    display.value= (display.value.toString())/100;
})
calculate.addEventListener("click",()=>{
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error occured";
    }
});

