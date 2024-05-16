// API KEY : f2c9d4c17b4947fc9f6162750232402
// API :http://api.weatherapi.com/v1/search.json?key=f2c9d4c17b4947fc9f6162750232402&q=lond
// forecast.
// 5a0582bdf37313897ed90c2dfa2a4b01
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var afterTomorrow = new Date();
afterTomorrow.setDate(today.getDate() + 2);

var date={
    today:`${today.getDate()}/${ today.getMonth()+1}/${today.getFullYear()}`,
    tomorrow:`${tomorrow.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`,
    afterTomorrow:`${afterTomorrow.getDate()}/${ today.getMonth()+1}/${today.getFullYear()}`
};


console.log(`${date.today} ${date.tomorrow} ${date.afterTomorrow}`);
var search=document.getElementById("search");
var find =document.getElementById('find');


find.addEventListener('click',function(){
    weather(date.today,date.tomorrow,date.afterTomorrow,search.value);
})


 async function weather(today,tomorrow,afterTomorrow,city='alex'){
   
 var resToday= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f2c9d4c17b4947fc9f6162750232402&q=${city}&date=${today}`);
 var finalresToday=await resToday.json();

var restomorrow=  await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f2c9d4c17b4947fc9f6162750232402&q=${city}&date=${tomorrow}`);
var finaltomorrow=await restomorrow.json();

var resAfterTomorrow =  await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f2c9d4c17b4947fc9f6162750232402&q=${city}&date=${afterTomorrow}`);
var finalAfterTomorrow =await resAfterTomorrow.json();


//  today inf

 document.getElementById('city').innerHTML=finalresToday.location.name;
document.getElementById('today-temp').innerHTML=`${finalresToday.current.temp_c}<sup>o</sup>C`;
document.getElementById('today-icon').innerHTML=`<img src="${finalresToday.current.condition.icon}" alt="icon">`;
document.getElementById('today-condition').innerHTML=finalresToday.current.condition.text;

//tomorrow inf
console.log(finaltomorrow.forecast.forecastday[0].day.maxtemp_c);
document.getElementById('tomorrow-icon').innerHTML=`<img src="${finaltomorrow.forecast.forecastday[0].day.condition.icon}" alt="icon">`;
document.getElementById('tomorrow-tempMax').innerHTML=`${finaltomorrow.forecast.forecastday[0].day.maxtemp_c}<sup>o</sup>C`;
document.getElementById('tomorrow-tempMin').innerHTML=`${finaltomorrow.forecast.forecastday[0].day.mintemp_c}<sup>o</sup>C`;
document.getElementById('tomorrow-condition').innerHTML=`${finaltomorrow.forecast.forecastday[0].day.condition.text}`;

//aftertomorrow inf
console.log(finalAfterTomorrow.forecast.forecastday[0].day.maxtemp_c);
document.getElementById('Atomorrow-icon').innerHTML=`<img src="${ finalAfterTomorrow.forecast.forecastday[0].day.condition.icon}" alt="icon">`;
document.getElementById('Atomorrow-tempMax').innerHTML=`${ finalAfterTomorrow.forecast.forecastday[0].day.maxtemp_c}<sup>o</sup>C`;
document.getElementById('Atomorrow-tempMin').innerHTML=`${ finalAfterTomorrow.forecast.forecastday[0].day.mintemp_c}<sup>o</sup>C`;
document.getElementById('Atomorrow-condition').innerHTML=`${ finalAfterTomorrow.forecast.forecastday[0].day.condition.text}`;
 }
 
 weather(date.today,date.tomorrow,date.afterTomorrow);

function currentDate(){

let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let todayName = weekdays[today.getDay()];
let tomorrowName = weekdays[tomorrow.getDay()];
let afterTomorrowName = weekdays[afterTomorrow.getDay()];

    document.getElementById('today').innerHTML=todayName ;
    document.getElementById('tomorrow').innerHTML=tomorrowName;
    document.getElementById('Atomorrow').innerHTML=afterTomorrowName;
    document.getElementById('monthDay').innerHTML=`${today.getDate()} ${months[today.getMonth()]}`;
}

currentDate();





// Log the weekday names to the console




