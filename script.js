console.log("****running script");

const apiKey = "3759d45dfebd2a10d9906e37f0681040";

document.querySelector("#current-weather").addEventListener("submit", (e) => {
    e.preventDefault();

    // get the input
    const cityName = document.querySelector("#city-name").value

    // get the data 
    getCurrentWeather(cityName)

    // show the data
}); 



const getCurrentWeather = (cityName) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
    fetch(url).then((res) => res.json()).then((data) => {
        console.log(data);

        // uyour code goes here

        const template = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">
                        ${data.name}
                        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Girl in a jacket">
                    </h5>
                    <p class="card-text"></p>
                    <p>Temperature: ${data.main.temp}</p>
                    <p>Highest Temperature: ${data.main.temp_max}</p>
                    <p>Lowest Temperature: ${data.main.temp_min}</p>
                </div>
            </div>
        `;

    

        document.querySelector("#current-weather").innerHTML = template
    });

}