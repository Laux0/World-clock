function displayCityTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".city-date");
    let londonTimeElement = londonElement.querySelector(".city-time");
    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "hh:mm:ss[<small>]A[</small>]"
    );
  }

  let osloElement = document.querySelector("#oslo");
  if (osloElement) {
    let osloDateElement = osloElement.querySelector(".city-date");
    let osloTimeElement = osloElement.querySelector(".city-time");
    let osloTime = moment().tz("Europe/Oslo");
    osloDateElement.innerHTML = moment().format("MMMM Do YYYY");
    osloTimeElement.innerHTML = osloTime.format("hh:mm:ss[<small>]A[</small>]");
  }
}
setInterval(displayCityTime, 1000);

function updateCityLocation(event) {
  let cityTimezone = event.target.value;

  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }

  let cityName = cityTimezone.split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let cityElement = document.querySelector("#cities");

  if (event.target.value.length > 0) {
    cityElement.innerHTML = `<div class="city">
          <div class="city-left">
            <h3 class="city-name">${cityName}</h3>
            <div class="city-date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="city-right">
            <div class="city-time">${cityTime.format(
              "hh:mm:ss[<small>]A[</small>]"
            )}</div>
          </div>
        </div> <a href="/">All cities</a>`;
  } else {
    location.reload();
  }
}

let citySelectElement = document.querySelector("#city-choice");
citySelectElement.addEventListener("change", updateCityLocation);
