setInterval(() => {
  document.querySelector(".clock").innerHTML = new Date().toLocaleTimeString()
}, 1000);
