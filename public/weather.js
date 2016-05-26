function geoFindMe() {
  var output = document.getElementById("output");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + ' <br>Longitude is ' + longitude + '</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);

    /*var proccessResults = function() {
      var result = JSON.parse(this.responseText);
      console.log(result.main.temp - 273.15);
    };

    gettingData = true;
    var requestString = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=bb7e32d2bd79b5c05b67ed69fe904ebf";

    request = new XMLHttpRequest();
    request.addEventListener('load', proccessResults);
    request.open("get", requestString);
    request.send();*/

    $.ajax({
      type: 'GET',
      url: "http://localhost:3000/weather",
      data: { lat: latitude.toFixed(6), lng: longitude.toFixed(6) },
      success: function(result) {
        // console.log(result.main.temp - 273.15);
        output.innerHTML += '<div>'+ (result.main.temp - 273.15) +'</div>';
      }
    });
     
  };

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };

  output.innerHTML = "<p>Locating</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}

document.getElementById("button").addEventListener("click", function () {
  geoFindMe();
},false);

