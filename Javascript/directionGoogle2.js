// Set map options
var mylatlng = { lat: 45.4785, lng: 9.1214 };
var mapOptions = {
  center: mylatlng,
  zoom: 8,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
};

// create the 3 maps from the HTML
var map1 = new google.maps.Map(
  document.getElementById("googleMap1"),
  mapOptions
);
var map2 = new google.maps.Map(
  document.getElementById("googleMap2"),
  mapOptions
);
var map3 = new google.maps.Map(
  document.getElementById("googleMap3"),
  mapOptions
);

// create a Directions service object to get a result for our request
var directionsService = new google.maps.DirectionsService();

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

  // create an array to store the directions display objects for each map
  var directionsDisplays = [
    new google.maps.DirectionsRenderer({ map: map1 }),
    new google.maps.DirectionsRenderer({ map: map2 }),
    new google.maps.DirectionsRenderer({ map: map3 }),
  ];

  // execute each request using the directions service
  for (let i = 0; i < requestsArray.length; i++) {
    directionsService.route(requestsArray[i], (result, status) => {
      if (status == google.maps.DirectionsStatus.OK) {
        // set the output for each request
        var output;
        switch (i) {
          case 0:
            output = outputwalking;
            break;
          case 1:
            output = outputbicycling;
            break;
          case 2:
            output = outputdriving;
            break;
        }

        // display the distance and duration for each request
        output.innerHTML =
          "<div class='alert-info'><i class='fa-solid fa-steering-wheel'></i>" +
          "<strong>" +
          requestsArray[i].travelMode +
          "</strong><br />Distance: " +
          result.routes[0].legs[0].distance.text +
          "<br /><i class='fa-duotone fa-timer'></i>Duration: " +
          result.routes[0].legs[0].duration.text +
          "<br /></div>";

        // display the route for each request
        directionsDisplays[i].setDirections(result);
      } else {
        // delete route from map
        directionsDisplays[i].setDirections({ routes: [] });

        // center map in Milan
        map.setCenter(mylatlng);

        // show the error
        output.innerHTML =
          "<div class='alert-danger'><i class='fa-regular fa-bug'></i> Could not retrieve data</div>";
      }
    });
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
