setInterval(() => {
  document.querySelector(".clock").innerHTML = new Date().toLocaleTimeString();
}, 1000);

currYear = new Date().getFullYear();
age = currYear - 2011;
document.getElementById("age").innerHTML = age;
