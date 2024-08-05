// Creating the map object
let myMap = L.map("map", {
  center: [13.7563, 100.5018],
  zoom: 3
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Load the GeoJSON data.
let geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// To do:

// Get the data with d3.
d3.json(geoData).then(function(data) {
  console.log(data);
  // Create a new choropleth layer.
  let geojson = L.choropleth(data)

    // Binding a popup to each layer
    onEachFeature: function(feature, layer){
      layer.bindPopup(feature.properties. + feature.properties.)
     }}).addTo(myMap);
    // Set up the legend.
     let legend = L.control({position: "bottomright"});
     legend.onAdd = function() {
      let div = L.domUtil.create('div', 'info legend');
      let limits = geojson.options.limits;
      let colors = geojson.options.colors;
      let labels = [];

      // Add minimum and maximum.
      let legendInfo = "<h1>Earthquakes<br />)...... "
      "div class=\"labels\">" +
      "div class=\"min\">" + limits[0] + "</div>" +
      "div class=\"max\">" + limits[limits.length -1] + "</div>" +
      "</div>";
      div.innerHTML = legendInfo;

      limits.foreach
     }
    
  
  // Adding the legend to the map
});