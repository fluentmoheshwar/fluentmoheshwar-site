/* eslint-disable */
import * as bootstrap from "bootstrap";
/* eslint-enable */

setInterval(() => {
  document.querySelector(".clock").innerHTML = new Date().toLocaleTimeString(
    "en-US",
  );
}, 1000);
const currYear = new Date().getFullYear();
const age = currYear - 2011;
document.getElementById("age").innerHTML = age;
navigator.serviceWorker.register("/service-worker.js");
