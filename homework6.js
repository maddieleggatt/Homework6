var locations = [
    [
        "BWC",
        48.462114, -123.308927
    ],
    [
    		"David Turpin Building",
        48.464989, -123.314619
    ],
    [
    		"BEC",
        48.465459, -123.313066
    ],
  [
  			"Elliot Building",
        48.462786, -123.310165
  ],
]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(48.463649,  -123.311951),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

var count = locations.length

var cnt = 0;

function counting() {
cnt++;
alert(cnt);

}
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]+"    "+locations[i][1]+"   "+locations[i][2]+"    "+cnt++);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

