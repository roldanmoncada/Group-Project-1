var requestUrl =
  "https://api.unsplash.com/search/photos?query=london&client_id=FqwsiGk0s2Nox9oBbr-hudpZcsi7sQXZRbg9PvZ-UFo";

const getImageButton = document.querySelector("#getImageButton");
const imageToDisplay = document.getElementsByClassName("header-image");
console.log(imageToDisplay[0]);

getImageButton.addEventListener("click", async () => {
  const searchInputEl = document.getElementById("search-input");
  const searchInputVal = searchInputEl.value;

  var pastSearches = [];
  var searchesUL = document.getElementById("search-history");

  if (localStorage["pastSearches"]) {
    pastSearches = JSON.parse(localStorage["pastSearches"]);
  }

  if (pastSearches.indexOf(searchInputVal) == -1) {
    pastSearches.unshift(searchInputVal);
    if (pastSearches.length > 5) {
      pastSearches.pop();
    }

    searchesUL.innerHTML = "";
    console.log(pastSearches.length);

    for (var i = 0; i < pastSearches.length; i++) {
      var searchItem = document.createElement("li");
      searchItem.innerText = pastSearches[i];
      // searchItem.className = "file";
      console.log(searchItem);
      searchesUL.appendChild(searchItem);
    }

    localStorage["pastSearches"] = JSON.stringify(pastSearches);
    console.log(pastSearches);
  }

  requestUrl = `https://api.unsplash.com/search/photos?query=${searchInputVal}+landscape&client_id=FqwsiGk0s2Nox9oBbr-hudpZcsi7sQXZRbg9PvZ-UFo`;

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
