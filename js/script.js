var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=da997692cbca69a5a6d9c8fc210061a2&gallery_id=66911286-72157679773554794&format=json&nojsoncallback=1",
    "method": "GET",
    "headers": {}
};

$.ajax(settings).done(function (data) {
    //console.log(data);
    
    $("#titleGallery").append("'"+ data.photos.photo[0].title + "' - Flickr Gallery");
    for (var i = 0; i < 6; i++) {
        var gp = data.photos.photo[i];
        
        var farmId = gp.farm;
        var serverId = gp.server;
        var id = gp.id;
        var secret = gp.secret;

        //console.log(farmId + ", " + serverId + ", " + id + ", " + secret);

        //  https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

        $("#flickrGallery").append('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');           
    }    
});