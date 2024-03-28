
function getTemperature(latitude, longitude) {
fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`)

  .then((response) => response.json())
  .then((json) => document.getElementById('input2').innerHTML=json.hourly.temperature_2m[0]);
}


function getPrecipitation(latitude, longitude) {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=precipitation_sum`)
    
      .then((response) => response.json())
      .then((json) => document.getElementById('input3').innerHTML=json.daily.precipitation_sum[0]);
    }

 