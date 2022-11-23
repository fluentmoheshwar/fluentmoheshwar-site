"use strict";
import * as bootstrap from "bootstrap";
setInterval(() => {
    document.querySelector(".clock").innerHTML = new Date().toLocaleTimeString("en-US");
}, 1000);
let currYear = new Date().getFullYear();
let age = currYear - 2011;
document.getElementById("age").innerHTML = age;
navigator.serviceWorker.register("service-worker.js");
