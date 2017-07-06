var  clientId = 'b2gwaYBFtlhmTn7zR15pL'
var  clientSecretId = '07IT2b3WUu4693Dro38UcQ4oSoTti0cyfscacMah'



$(document).ready(function() {
$('#btn').click(function(){
	var city = $("#city").val();
	console.log(city);



    console.log( "ready!" );
 var sunriseUrl = 'https://api.aerisapi.com/sunmoon/chanhassen,mn?from=+1day&to=+1week&limit=7&client_id=' + clientId + '&client_secret=' + clientSecretId + '&fields=sun.riseISO,sun.rise';
        //Start fetching our sunrise ISO time
        $.getJSON(sunriseUrl, function (data) {
            data.response.forEach(function (sunrise) {
                //Now use that sunrise time in the forecast endpoint and grab the forecast
                var forecastUrl = 'https://api.aerisapi.com/forecasts/chanhassen,mn?from=' + sunrise.sun.riseISO + '&to=' + sunrise.sun.riseISO + '&filter=1hr&limit=1&client_id=' + clientId + '&client_secret=' + clientSecretId;
                //Fetch the forecast object
             
                $.getJSON(forecastUrl, function (fcstData) {
                    // Send forecast object to function to create html and append
                    console.log(fcstData);
                    // var appendhtml = CreateForecastHtml(sunrise.sun.riseISO,fcstData);
                    // $('div.forecast-area').append(appendhtml);
                });
            });
        });
     });
});