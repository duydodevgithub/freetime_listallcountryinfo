// create AJAX request

//create XMLHttpRequest object
var xhr = new XMLHttpRequest();
var queryURL = "https://restcountries.eu/rest/v2/all";

//Response
xhr.onload = function() {
    if(xhr.status == 200) {
        var responseObject = JSON.parse(xhr.responseText);
        for(var i = 0; i < responseObject.length; i++) {
            var output = "";
            output += "<span>" + "Country name: " + responseObject[i].name + "</span>";
            output += "<span>" + "-----Capital: " + responseObject[i].capital + "</span>";
            output += "<span>" + "-----Timezone: " + responseObject[i].timezones + "</span>" + "<br>";
            $(".content").append(output);   
        }
    }
}
// prepare the request
xhr.open("GET", queryURL, true);
// send the request
xhr.send(null);