function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        alert("Geolocation is not supported by this browser");
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    console.log("Your coordinates are  Latitude: " + lat + "longitude");

    redirect(lat, lon);
}

function redirect(lat, lon) {
    if (lat >= 30 && lon <= 100) {
        window.location.href = "western.html";
    }
    else {
        window.location.href = "eastern.html";
    }
}
if (navigator.userAgent.indexOf("Windows") !== -1) {
    alert("Welcome, Windows user!");
    getLocation();
}
else if (navigator.userAgent.indexOf("Mac") !== -1) {
    alert("Welcome, Mac user!");
    getLocation();
}
else {
    alert("I don't know what your using")
}