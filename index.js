let btnAdd1 = document.querySelector("#add1");
let btnAdd2 = document.querySelector("#add2");
let btnAdd3 = document.querySelector("#add3");
let btnAdd4 = document.querySelector("#add4");

let btnSubtract1 = document.querySelector("#subtract1");
let btnSubtract2 = document.querySelector("#subtract2");
let btnSubtract3 = document.querySelector("#subtract3");
let btnSubtract4 = document.querySelector("#subtract4");

let btnPlace = document.querySelector("#place");

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let input4 = document.querySelector("#input4");

let count1 = document.querySelector("#count1");
let count2 = document.querySelector("#count2");
let count3 = document.querySelector("#count3");
let count4 = document.querySelector("#count4");

let point1 = document.querySelector("#point1");
let point2 = document.querySelector("#point2");
let point3 = document.querySelector("#point3");
let point4 = document.querySelector("#point4");


btnAdd1.addEventListener('click', () => {
  input1.value = parseInt(input1.value) + 1;
  count1.value = parseInt(count1.value) + 1;
  point1.value = parseInt(point1.value) + 50;
});

btnAdd2.addEventListener('click', () => {
  input2.value = parseInt(input2.value) + 1;
  count2.value = parseInt(count2.value) + 1;
  point2.value = parseInt(point2.value) + 50;
});

btnAdd3.addEventListener('click', () => {
  input3.value = parseInt(input3.value) + 1;
  count3.value = parseInt(count3.value) + 1;
  point3.value = parseInt(point3.value) + 50;
});

btnAdd4.addEventListener('click', () => {
  input4.value = parseInt(input4.value) + 1;
  count4.value = parseInt(count4.value) + 1;
  point4.value = parseInt(point4.value) + 50;
});


btnSubtract1.addEventListener('click', () => {
  input1.value = parseInt(input1.value) - 1;
  count1.value = parseInt(count1.value) - 1;
  point1.value = parseInt(point1.value) - 50;
});

btnSubtract2.addEventListener('click', () => {
  input2.value = parseInt(input2.value) - 1;
  count2.value = parseInt(count2.value) - 1;
  point2.value = parseInt(point2.value) - 50;
});

btnSubtract3.addEventListener('click', () => {
  input3.value = parseInt(input3.value) - 1;
  count3.value = parseInt(count3.value) - 1;
  point3.value = parseInt(point3.value) - 50;
});

btnSubtract4.addEventListener('click', () => {
  input4.value = parseInt(input4.value) - 1;
  count4.value = parseInt(count4.value) - 1;
  point4.value = parseInt(point4.value) - 50;
});

btnPlace.addEventListener('click', () => {
  alert("Order Placed Successfully");
})
