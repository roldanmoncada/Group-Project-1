// const burgerIcon = document.querySelector('#burger');
// const navbarMenu = document.querySelector('#nav-links');

// burgerIcon.addEventListener('click', () => {
//     navbarMenu.classList.toggle('is-active');
// });

// // #curl "https://worldtimeapi.org/api/Europe/London";

// let clientID="FqwsiGk0s2Nox9oBbr-hudpZcsi7sQXZRbg9PvZ-UFo";
// let endpoint="https://api.unsplash.com/photos/random/?client_id=FqwsiGk0s2Nox9oBbr-hudpZcsi7sQXZRbg9PvZ-UFo";
// //let endpoint='https://api.unsplash.com/photos/random/?client_id=${clientID}';

// let imageElement = document.querySelector("#unsplashImage");
// let imageLink = document.querySelector("#imageLink");
// let creator = document.querySelector("#creator");

// fetch(endpoint)
//     .then(function (response) {
//         console.log(response.json());
//         //return response.json();
//     })
//     .then(function (jsonData) {
//         console.log
//         //imageElement.src = jsonData.urls.full;
//     })

var requestUrl =
  "https://api.unsplash.com/search/photos?query=london&client_id=FqwsiGk0s2Nox9oBbr-hudpZcsi7sQXZRbg9PvZ-UFo";

const getImageButton = document.querySelector("#getImageButton");
const imageToDisplay = document.getElementsByClassName("header-image");
const timeToDisplay = document.getElementById("time-display");


async function getTime(searchInputVal) {
  const requestTimeUrl = `https://api.ipgeolocation.io/timezone?apiKey=940f164720034e1daf4ec3d43b503d1d&location=${searchInputVal}`;

  return fetch(requestTimeUrl)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
}


getImageButton.addEventListener("click", async () => {
  const searchInputEl = document.getElementById("search-input");
  const searchInputVal = searchInputEl.value;
  
  requestUrl = `https://api.unsplash.com/search/photos?query=${searchInputVal}&client_id=FqwsiGk0s2Nox9oBbr-hudpZcsi7sQXZRbg9PvZ-UFo` 

  let randomImage = await getNewImage();
  imageToDisplay[0].style.backgroundImage = `url(${randomImage})`;

  let newTime = await getTime(searchInputVal);
  timeToDisplay.innerText = newTime.date_time_txt;
  console.log(newTime.date)


    
});



async function getNewImage() {
  let randomNumber = Math.floor(Math.random() * 10);
  return fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => {
      let allImages = data.results[randomNumber];
      return allImages.urls.regular;
    });
}


// TIME API SECTION!!!!!!

fetch("http://worldtimeapi.org/api/timezone", {
    method: 'GET', 
    credentials: 'same-origin', 
    redirect: 'follow', 
})
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });



