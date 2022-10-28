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

const requestUrl =
      'https://api.unsplash.com/search/photos?query=london&client_id=FqwsiGk0s2Nox9oBbr-hudpZcsi7sQXZRbg9PvZ-UFo';
    const getImageButton = document.querySelector('#getImageButton');
    const imageToDisplay = document.getElementsByClassName("header-image");
    console.log(imageToDisplay[0])
    imageToDisplay[0].style.backgroundImage = "url('https://media.wired.co.uk/photos/607d91994d40fbb952b6ad64/4:3/w_2664,h_1998,c_limit/wired-meme-nft-brian.jpg')"

    getImageButton.addEventListener('click', async () => {
      let randomImage = await getNewImage();
      console.log(randomImage);
      imageToDisplay.src = randomImage;
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