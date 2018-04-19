({
    jsLoaded: function(component, event, helper) {
       var map = L.map('map', {zoomControl: false}).setView([39.7637, -86.1615], 16);
       L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
         {
               attribution: 'Tiles (c) Esri'
         }).addTo(map);
       component.set("v.map", map);
   }
 })