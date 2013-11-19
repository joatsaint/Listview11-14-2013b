function initialize() {
    var mapCenter = new google.maps.LatLng(30.085680, -94.097603),
    myOptions = {
        zoom:16,
        padding:0,
        margin:0,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: mapCenter
    },
			
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    
    
    var myLatlng = new google.maps.LatLng(30.085422, -94.097176);
			var marker = new google.maps.Marker({
				position : myLatlng,
				map : map,
				title : 'Hello World!'
			});

			
			// To add the marker to the map, call setMap();
			marker.setMap(map);
    
}





$( document ).on( 'pageshow', '#map-page',function(event){
  initialize();
});

$( document ).on( 'click', '#map-anchor', function(event){
  event.preventDefault();
  $.mobile.changePage( "map.html", { transition: "slide" } );
});

