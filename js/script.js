var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=da997692cbca69a5a6d9c8fc210061a2&gallery_id=66911286-72157679773554794&format=json&nojsoncallback=1",
    "method": "GET",
    "headers": {}
};

$.ajax(settings).done(function (data) {
    $("#titleGallery").append("Flickr Gallery");
    for (var i = 0; i < 6; i++) {
        var gp = data.photos.photo[i];
        
        var title = gp.title;
        var farmId = gp.farm;
        var serverId = gp.server;
        var id = gp.id;
        var secret = gp.secret;

        $("#flickrGallery").append("<div class='flickrPhoto'>" +
            "<img src='https://farm" + farmId + ".staticflickr.com/" + serverId + "/" + id + "_" + secret + ".jpg'/>" +
            "<p class='flickrSubtitle'>" + title + "</p>" +
            "<hr>"+
            "</div >");           
    }    
});