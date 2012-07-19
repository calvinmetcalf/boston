$(function() {
    var g = google.maps;
  var m = new g.Map(document.getElementById('map'), {
      center: new g.LatLng(42.32987,-71.066437),
      zoom: 12,
      mapTypeId: 'roadmap'
});
   new g.FusionTablesLayer({
 query:{select:'geometry',
 from:"1wMC4r0JmTbKEmqaZY_qeVOvksdkhFqs09W4NbvE"},
 map:m
     
 }
 );
});