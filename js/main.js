
//const config={apiKey:`${weather.env.WEATHER_API_KEY}`}

document.getElementById("search").onclick=getWeather;

function getWeather()
{
    let obtenerCiudad=document.getElementById('city').value
    let obtenerPais=document.getElementById('country').value
    console.log(obtenerCiudad)
    
   
    const url=`http://api.weatherapi.com/v1/current.json?key=2abd921c3ecf4dfa854152735262209&q=${obtenerCiudad}}&aqi=no`
    fetch(url)
        .then((res) => res.json()) // parse response as JSON
         //object
        .then((data) => {
            if(obtenerCiudad!==''){
                console.log(data)
                console.log(data.current.condition.text)
                let httpIcon=`http:${data.current.condition.icon}`;
                console.log(httpIcon)
                document.querySelector(".weather-details").style.display="block";
                document.getElementById('name').innerText=data.location.name;
                document.getElementById('country').innerText=data.location.country;
                        // let html=`<span class="material-symbols-outlined">partly_cloudy_day</span>
                        // <h3>${data.current.temp_f}</h3>`;
                document.getElementById('temp').innerText=`${data.current.temp_f}`;
                document.getElementById('condition').innerText=`${data.current.condition.text}`;
                document.getElementById('temp-icon').src=httpIcon;
                document.getElementById('dato1').innerText=`${data.current.humidity} %`;
                document.getElementById('dato2').innerText=`${data.current.wind_kph} Km/h`;
                document.getElementById('dato3').innerText=`${data.current.vis_km} Km`;
                document.getElementById('dato4').innerText=`${data.current.feelslike_f} °`;

            }else{
                alert('Please add a City')
            }
            
              
               
           
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
function change()
{

}
