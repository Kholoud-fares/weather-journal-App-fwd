/* Global Variables */

//base URL & API key for OpenWeatherMap
const baseURL='http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey='&appid=9beea9fde36dbc1be21ba0f1730201a&units=imperial';

// Create a new date instance dynamically with JS
let day = new Date();
let newDate = (day.getMonth()+1)+'/'+ day.getDate()+'/'+ day.getFullYear();
//event listener
document.getElementById('generate').addEventListener('click',action);
//action function
function action(e){
//user inputs
const zipNum=document.getElementById('zip').value;
const feelings=document.getElementById('feelings').value;
getWeather(baseURL,zipNum,apiKey)
  .then(function(data){
    console.log(data);
    //post request
    postData('/add',{date:day,temp:zipNum,content:feelings})
    //updateUI
    updateUI();
  })
};

// get web API Data
const getWeather= async (baseURL, zip, key) =>{
  const res= await fetch(baseURL+zip+key)
  try{
    const data = await res.json();
    return data;
  }catch(error){
    console.console.log("error",error);
  }
}

//post Data
const postData = async (url='',date ={}) => {
  console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringfy(data)

  });

  try{
    const newData = await response.json();
    console.log(newData)
    return newData;
  }catch(error){
    console.log("error",error);
    }
}

const updateUI = async () =>{
  const request = await fetch('/all')
  try{
    const allData = await request.json();
    console.log(allData)
    // new entry values
    document.getElementById('date').innerHTML=`Date:${allData.date}`;
    document.getElementById('temp').innerHTML= `Temperature:${allData.temp}`;
    document.getElementById('content').innerHTML= `I feel:${allData.content}`;
  }catch(err){
    console.log("error",err);
    }
}
