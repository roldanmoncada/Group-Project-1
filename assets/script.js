// const burgerIcon = document.querySelector('#burger');
// const navbarMenu = document.querySelector('#nav-links');

// burgerIcon.addEventListener('click', () => {
//     navbarMenu.classList.toggle('is-active');
// });

const requestUrl =
      'https://api.unsplash.com/search/photos?query=london&client_id=FqwsiGk0s2Nox9oBbr-hudpZcsi7sQXZRbg9PvZ-UFo';
    const getImageButton = document.querySelector('#getImageButton');
    const imageToDisplay = document.getElementsByClassName("header-image");
    console.log(imageToDisplay[0])

    getImageButton.addEventListener('click', async () => {
      let randomImage = await getNewImage();
      console.log(randomImage);
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