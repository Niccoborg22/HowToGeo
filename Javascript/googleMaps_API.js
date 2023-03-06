function initMap() {
  // Map options
  var options = {
    center: { lat: 45.4785, lng: 9.1214 },
    zoom: 8,
  };

  // New map
  map = new google.maps.Map(document.getElementById("map"), { options });

  // Function to add Marker
  function addMarker(property) {
    // Create a marker
    const marker = new google.maps.Marker({
      position: property.location,
      map: map,
    });

    // Conditional property to check if a marker is inputted
    if (property.content) {
      // Add a detail window
      const detailWindow = new google.maps.InfoWindow({
        content: property.content,
      });
      marker.addListener("mouseover", () => {
        detailWindow.open(map, marker);
      });
    }
  }

  // Add Marker Arrays
  let MarkerArray = [
    {
      location: { lat: 45.4785, lng: 9.1214 },
      content: "<h4>San Siro Stadium: the home of A.C. Milan</h4>",
    },
    {
      location: { lat: 45.62, lng: 9.2879 },
      content: "<h4>Autodromo di Monza: the temple of speed in F1</h4>",
    },
  ];

  // Loop through the MarkerArray to create markers
  for(let i = 0; i < MarkerArray.length; i++){
    addMarker(MarkerArray[i]);
  }
}
