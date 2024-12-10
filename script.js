const apiKey = "3f1fa8904630caa8784bea1b11c770d0";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const geoDbApiUrl = "https://wft-geo-db.p.rapidapi.com/v1/geo/places"; // GeoDB Cities API
const geoDbApiKey = "f75752ef63msh9bcc27c0b1a035ep150dedjsn0a523ebc4ef8"; // Replace with your GeoDB API key
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherImages = {
  Clouds: "images/clouds.png",
  Clear: "images/clear.png",
  Rain: "images/rain.png",
  Drizzle: "images/drizzle.png",
  Mist: "images/mist.png",
  Haze: "images/haze.jpg",
};

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    const weatherCondition = data.weather[0].main;
    weatherIcon.src = weatherImages[weatherCondition] || "images/default.png";

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

/////////////////////////////Helpful js functions for practicing///////////////

const factorail = (num) => {
  if (num == 0) {
    return 1;
  } else {
    return num * factorail(num - 1);
  }
};
// console.log(factorail(5));

const arraySum = (arr) => {
  let i = 0;
  let sum = 0;
  if (arr.length === 0) {
    return 0;
  } else {
    console.log(" arr.slice(1):", arr[i], arr.slice(1));
    sum = arr[0] + arraySum(arr.slice(1));
    console.log(" Sum is: ", sum);
    return sum;
  }
};

let array = [1, 2, 3, 4, 5];
console.log("Sum of elements of an array: ", arraySum(array));

const reverseString = (str) => {
  if (str.length <= 1) {
    return str;
  }
  return reverseString(str.substring(1)) + str[0];
};
console.log(reverseString((str = "hello")));

const countDownToN = (n) => {
  if (n <= 0) return;
  console.log(n);
  return countDownToN(n - 1);
};

countDownToN(6);

const sumOfDigits = (n) => {
  if (n < 10) {
    return n;
  }
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
};

console.log(sumOfDigits(32890));
