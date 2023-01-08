import dayjs from "dayjs";
const birthday = dayjs("2011-03-27");
const age = dayjs().diff(birthday, "years");
document.querySelector<HTMLSpanElement>("#age")!.innerHTML = age.toString();

export {};
