let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".city-date");
let londonTimeElement = londonElement.querySelector(".city-time");
let londonTime = moment().tz("Europe/London");
londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonTime.format("hh:mm:ss[<small>]A[</small>]");

let osloElement = document.querySelector("#oslo");
let osloDateElement = osloElement.querySelector(".city-date");
let osloTimeElement = osloElement.querySelector(".city-time");
let osloTime = moment().tz("Europe/Oslo");
osloDateElement.innerHTML = moment().format("MMMM Do YYYY");
osloTimeElement.innerHTML = osloTime.format("hh:mm:ss[<small>]A[</small>]");
