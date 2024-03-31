const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search Button");
const apiKey = "b3ff0f44cd5733199adb04c967f9950e";


searchBtn.addEventListener('click',()=>{
    let city = searchBox.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    console.log(apiUrl);

    async function  getWeather(){
        const response = await fetch(apiUrl);
        if(response.status!==404){
            const data = await  response.json();
        console.log(data);
        showData(data);
        }
        else{
            alert('invalid city')
        }
        
    }
    getWeather()
})

function showData(data){
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed;
}