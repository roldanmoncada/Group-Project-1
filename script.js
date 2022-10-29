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
console.log(imageToDisplay[0]);


getImageButton.addEventListener("click", async () => {
  const searchInputEl = document.getElementById("search-input");
  const searchInputVal = searchInputEl.value;
  
  requestUrl = `https://api.unsplash.com/search/photos?query=${searchInputVal}&client_id=FqwsiGk0s2Nox9oBbr-hudpZcsi7sQXZRbg9PvZ-UFo` 

  let randomImage = await getNewImage();
  imageToDisplay[0].style.backgroundImage = `url(${randomImage})`;
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

    /*function getApi() {
      // fetch request gets a list of all the repos for the node.js organization
      var requestUrl = 'http://worldtimeapi.org/api/timezone';
    
      fetch(requestUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data)
        }); 
      }*/

var timeRequestUrl = "http://worldtimeapi.org/api";
console.log(timeRequestUrl)

