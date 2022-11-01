fetch("http://worldtimeapi.org/api/timezone",)
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
     