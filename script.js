//VARIABLES

totalActiveCases = document.querySelector('.total-active-cases');

totalCases = document.querySelector('.total-cases');

totalDeaths = document.querySelector('.total-deaths');

totalNewCasesToday  = document.querySelector('.total-new-cases-today');

totalNewDeathsToday = document.querySelector('.total-new-deaths-today');

totalRecovered = document.querySelector('.total-recovered');

title = document.querySelector('.title')
//DOM MANIPULATION
function domManipulation(fact){
    let map = new Map();
    for(let i=1;i<=182;i++){
    map.set(fact.countryitems[0][i].title,i)
   }
   let countryname =document.getElementById('input').value;
   let countrycode= map.get(countryname);
   
   totalActiveCases.innerText = fact.countryitems[0][countrycode].total_active_cases;
   
   totalCases.innerText =  fact.countryitems[0][countrycode].total_cases;
   
   totalDeaths.innerText =  fact.countryitems[0][countrycode].total_deaths;

   totalNewCasesToday.innerText =  fact.countryitems[0][countrycode].total_new_cases_today;
   
   totalNewDeathsToday.innerText =  fact.countryitems[0][countrycode].total_new_deaths_today;

   totalRecovered.innerText =  fact.countryitems[0][countrycode].total_recovered;




   title.innerText =fact.countryitems[0][countrycode].title;
   console.log(fact.countryitems[0][countrycode].title);
}

// EVENT HANDLERS

document.getElementById("btn").addEventListener('click',search);



// FUNCTIONS
async function getUsers(){   
    fact = await (await fetch(`https://api.thevirustracker.com/free-api?countryTotals=ALL`)).json();
 
    // document.getElementById('show').innerText = fact.countryitems[0][countrycode].title;
    domManipulation(fact);
    return fact; 
}
function search(){

    getUsers().then(data=>console.log(data));
}