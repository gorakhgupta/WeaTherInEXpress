const subBtn = document.getElementById("subBtn");
const cityname=document.getElementById("cityname");
let date = new Date();
let day = document.getElementById('day');
day.innerHTML=date;

const getInfo = async(e)=>{
    e.preventDefault();
    const value= cityname.value;
    let city_name=document.getElementById('city_name');
    let temp_real=document.getElementById('temp_real');
    let temp_status=document.getElementById('temp_status');
    city_name.innerText =value;
    if(value ==="")
    alert('Plz Enter');

    else{
    try{
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=72c1d9f2a0dbed7695f8c0cac1854c38`;
     const response = await fetch(url);
     const orgData = await response.json();
     const Data = [orgData];
    //  console.log(Data[0]);
    
     temp_real.innerHTML = Data[0].main.temp;
     let mood = Data[0].weather[0].main;
     console.log(mood);
     if(mood === "Clear")
     temp_status.innerHTML=`<i class="fa fa-sun" style="color:#eccc68 " aria-hidden="true"></i>`;
     else if(mood === "Clouds")
     temp_status.innerHTML=`<i class="fa fa-cloud" style="color:#f1f2f6 " aria-hidden="true"></i>`;
     else if(mood === "Rain")
     temp_status.innerHTML=`<i class="fa fa-cloud-rain" style="color:#a4b0be "  aria-hidden="true"></i>`;
     else
     temp_status.innerHTML=`<i class="fa fa-sun" style="color:#eccc68"  aria-hidden="true"></i>`;
     temp.style.visibility="visible";
     temp_status.style.visibility="visible";
     
    }
    catch{
        
        alert('Invalid');
        window.location.reload();

    }
}
}
subBtn.addEventListener('click',getInfo);