let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".city-date");
let londonTimeElement = londonElement.querySelector(".city-time");
londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
londonTimeElement.innerHTML = "2:40:27<small>AM</small>";

let osloElement = document.querySelector("#oslo");
let osloDateElement = osloElement.querySelector(".city-date");
let osloTimeElement = osloElement.querySelector(".city-time");
osloDateElement.innerHTML = moment().format("MMMM Do YYYY");
osloTimeElement.innerHTML = "2:40:27<small>AM</small>";
