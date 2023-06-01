//0810c7556821ab1620b9fe65956fc3cf
let user = localStorage.getItem('user');
user = JSON.parse(user);
// localStorage.clear();

const search6 = [];

if (user) {
    $("#loginView").addClass("hidden");
    $("#Exit").removeClass("hidden");
    $("#ProfileView").removeClass("hidden");
    $("#modaleHome").addClass("hidden");
    $("#animationHome").addClass("hidden");
    $("#cardView").removeClass("hidden");
    $("#ProfileView p").text(user.name);
}
$("#Exit").on("click", function () {
    $("#loginView").removeClass("hidden");
    $("#Exit").addClass("hidden");
    $("#ProfileView").addClass("hidden");
    $("#modaleHome").removeClass("hidden");
    $("#animationHome").removeClass("hidden");
    $("#cardView").addClass("hidden");
    localStorage.clear();
});

$("#searchweather").on("click", function () {
    if (!user) {
        alert("Please login first!");
        return;
    }
    $("#loading").removeClass("hidden");
    $("#cardView").addClass("hidden");
    let cityName = $("#searchInput").val();
    if (cityName.length != "") {
        search6.push(cityName);
        localStorage.setItem("search", JSON.stringify({array:search6}));
        localStorage.setItem("search", user);
    }
    apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=0810c7556821ab1620b9fe65956fc3cf';
    $.ajax({
        url: apiUrl,
        type: 'GET',
        success: function (data) {
            $("#cardView").removeClass("hidden");
            $('#historySearch').addClass("hidden");
            $("#imgCardView").attr('src', 'https://api.openweathermap.org/img/w/' + data["weather"][0]["icon"]);
            $("#loading").addClass("hidden");
            $("#nameCity").text('name: ' + data['name']);
            $("#description").text('description: ' + data['weather'][0]['description']);
            $("#country").text('country: ' + data['sys']['country']);
            $("#FeelsLike").text('Feels Like: ' + data['main']['feels_like']);
            $("#temp").text('temp: ' + data['main']['temp']);
            $("#tempMin").text('temp min: ' + data['main']['temp_min']);
            $("#tempMax").text('temp max: ' + data['main']['temp_max']);
        },
        error: function (xhr, status, error) {
            $("#loading").addClass("hidden");
            console.log('An error occurred');
        }
    });
});

$("#searchInput").on("click", function () {
    if (user) {
        $('#historySearch').removeClass("hidden");
        let getsearch = localStorage.getItem('search');
        console.log(getsearch);
        getsearch = JSON.parse(getsearch);
        getsearch.forEach(element => {
            $('#historySearch').append(`<p>${element}/p>`);
        });
    }
});