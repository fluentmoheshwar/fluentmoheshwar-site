const currYear: number = new Date().getFullYear();
const age: number = currYear - 2011;
document.querySelector<HTMLSpanElement>("#age")!.innerHTML = age.toString();

export {};
