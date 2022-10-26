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
