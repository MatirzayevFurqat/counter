let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let count = document.querySelector("#count");

let counter = 0;

minus.addEventListener('click', minusFun);
plus.addEventListener('click', plusFun);

function minusFun() {
  counter--;
  count.innerHTML = "<h1>"+counter+"</h1>";
}
function plusFun() {
  counter++;
  count.innerHTML = "<h1>"+counter+"</h1>";
}