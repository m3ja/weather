const API = '64929040b1f2c19079d8a59d206b7759';
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');

button.addEventListener('click', function(name){
    let city = input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`)
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];
          
            main.innerHTML = nameValue;
            desc.innerHTML = "Desc - "+descValue;
            temp.innerHTML = "Temp - "+tempValue;
            input.value ="";
        })
        .catch(err => alert("Wrong city name!(please try again)"));
});