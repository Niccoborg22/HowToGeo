function initMap() {
  // Map options
  var options = {
    center: { lat: -34.397, lng: 150.644 },
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
  let  MarkerArray = [
    {
      location: { lat: -34.397, lng: 150.644 },
      content: "<h1>Marker 1</h1>",
    },
    { location: { lat: -34.55, lng: 150.55 } },
  ];

  // Loop through the MarkerArray to create markers
  for(let i = 0; i < MarkerArray.length; i++){
    addMarker(MarkerArray[i]);
  }
}
