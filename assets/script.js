const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});

// #curl "https://worldtimeapi.org/api/Europe/London";

let clientID="FqwsiGk0s2Nox9oBbr-hudpZcsi7sQXZRbg9PvZ-UFo";
let endpoint="https://api.unsplash.com/photos/random/?client_id=FqwsiGk0s2Nox9oBbr-hudpZcsi7sQXZRbg9PvZ-UFo";
//let endpoint='https://api.unsplash.com/photos/random/?client_id=${clientID}';

let imageElement = document.querySelector("#unsplashImage");
let imageLink = document.querySelector("#imageLink");
let creator = document.querySelector("#creator");

fetch(endpoint)
    .then(function (response) {
        console.log(response.json());
        //return response.json();
    })
    .then(function (jsonData) {
        console.log
        //imageElement.src = jsonData.urls.full;
    })