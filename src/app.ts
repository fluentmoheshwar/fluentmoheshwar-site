const currYear: number = new Date().getFullYear();
const age: number = currYear - 2011;
const ageElement = document.getElementById("age");
ageElement.innerText = age;

export {};
