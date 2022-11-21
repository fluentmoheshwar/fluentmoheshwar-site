setInterval(() => {
  document.querySelector(".clock").innerHTML = new Date().toLocaleTimeString(
    "en-US"
  );
}, 1000);

currYear = new Date().getFullYear();
age = currYear - 2011;
document.getElementById("age").innerHTML = age;

navigator.serviceWorker.register("service-worker.js");
