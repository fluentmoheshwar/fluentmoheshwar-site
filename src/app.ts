const currYear: number = new Date().getFullYear();
const age: number = currYear - 2011;
document.getElementById("age")?.innerHTML = age;
// navigator.serviceWorker.register("/service-worker.js");
export {};
