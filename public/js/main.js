
const instant = geoplugin_countryName();


const searchBtn = document.getElementById("searchBtn");
const cityHere = document.getElementById("cityHere");
const cityName =  document.getElementById("city_name")
const temp = document.getElementById("temp")
const dateTime = new Date();
const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

const date = dateTime.getDate() + monthArr[dateTime.getMonth()]
const time = `${dateTime.getHours()}:${dateTime.getMinutes() < 10 ? "0" : ""}${dateTime.getMinutes()}`
document.getElementById("today_date").innerText = date;
document.getElementById("todayTime").innerText = time

const getInfo = async() => {
    
    let cityVal = cityHere.value;
    if(cityVal === ""){
        alert("Hey , you can't search empty value")
    }else{
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=5106e6dc9d6f772c3ff5579b7fef1e87`
            const response = await fetch(url);
            const data = await response.json()
            const dataArr = [data]
            cityName.innerText = `${dataArr[0].name} , ${dataArr[0].sys.country}`
            temp.innerText = Math.ceil(dataArr[0].main.temp);
            
            
        } catch{
            cityName.innerText = "Enter The City Name Properly"
            temp.innerText = `😡`;
            tempStatus.innerText = `❌`
        }
        
    }
}
const getInitData = async () =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${instant}&units=metric&appid=5106e6dc9d6f772c3ff5579b7fef1e87`
            const response = await fetch(url);
            const data = await response.json()
            const dataArr = [data]
            cityName.innerText = `${dataArr[0].name} , ${dataArr[0].sys.country}`
            temp.innerText = Math.ceil(dataArr[0].main.temp);
}
searchBtn.addEventListener('click' , getInfo);
getInitData()

// document.getElementById("searchBtn").addEventListener('click' , () => {
    
//     fetch('http://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=5106e6dc9d6f772c3ff5579b7fef1e87')
//     .then(res => res.json())
//     .then(data => console.log(data))
// })