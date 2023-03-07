// Set map options
var mylatlng = { lat: 45.4785, lng: 9.1214 };
var mapOptions = {
  center: mylatlng,
  zoom: 8,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
};

// create our Map
var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

// create a Directions service object to get a result for our request
var directionsService = new google.maps.DirectionsService();

// create a Directions Display object to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();

// bind the directions with the Display
directionsDisplay.setMap(map);

// function to execute directions
function calcRoute() {
  // requests array with the origin and destination inputted in directions.html
  let requestsArray = [
    {
      origin: document.getElementById("from").value,
      destination: document.getElementById("to").value,
      travelMode: google.maps.TravelMode.WALKING,
      unitSystem: google.maps.UnitSystem.IMPERIAL,
    },
    {
      origin: document.getElementById("from").value,
      destination: document.getElementById("to").value,
      travelMode: google.maps.TravelMode.BICYCLING,
      unitSystem: google.maps.UnitSystem.IMPERIAL,
    },
    {
      origin: document.getElementById("from").value,
      destination: document.getElementById("to").value,
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.IMPERIAL,
    },
  ];

  // loop variable
  loopRequests = 0;

  // Pass the request to route method
  for (let request in requestsArray) {
    directionsService.route(requestsArray[request], (result, status) => {
      if (status == google.maps.DirectionsStatus.OK) {
        // get distance and time
        if (loopRequests == 0) {
          outputwalking.innerHTML =
            "<div class = 'alert-info'><i class='fa-solid fa-steering-wheel'></i>" +
            "<strong>Walking</strong><br />Distance: " +
            result.routes[0].legs[0].distance.text +
            "<br /><i class='fa-duotone fa-timer'></i>Duration: " +
            result.routes[0].legs[0].duration.text +
            "<br /></div>";
        } else if (loopRequests == 1) {
          outputbicycling.innerHTML =
            "<div class = 'alert-info'><i class='fa-solid fa-steering-wheel'></i>" +
            "<strong>Bicycle</strong><br />Distance: " +
            result.routes[0].legs[0].distance.text +
            "<br /><i class='fa-duotone fa-timer'></i>Duration: " +
            result.routes[0].legs[0].duration.text +
            "<br /></div>";
        } else {
          outputdriving.innerHTML =
            "<div class = 'alert-info'><i class='fa-solid fa-steering-wheel'></i>" +
            "<strong>Car</strong><br />Distance: " +
            result.routes[0].legs[0].distance.text +
            "<br /><i class='fa-duotone fa-timer'></i>Duration: " +
            result.routes[0].legs[0].duration.text +
            "<br /></div>";
        }

        // display route
        directionsDisplay.setDirections(result);
      } else {
        // delete route from map
        directionsDisplay.setDirections({ routes: [] });

        // center map in Milan
        map.setCenter(mylatlng);

        // show the error
        output.innerHTML =
          "<div class='alert-danger'><i class='fa-regular fa-bug'></i> Could not retrieve data</div>";
      }
    });
    loopRequests++;
  }
}
// autocomplete object the from and to inputs
var options = {
  types: ["(cities)"], //stadium   park
};

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);
