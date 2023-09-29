const countryCapitalPairs = {
    "USA": "Washington",
    "Canada": "Ottawa",
    "France": "Paris",
    "Germany": "Berlin",
    "Japan": "Tokyo",
    "Australia": "Canberra",
    "Brazil": "Brasília",
    "India": "New Delhi",
    "China": "Beijing",
    "Russia": "Moscow"
  };
  const countriesWithoutCapitals = Object.keys(countryCapitalPairs);
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  document.addEventListener("DOMContentLoaded",()=>{
    const COUNTRY = document.getElementById("country");
    const BUTTON = document.getElementById('button');
    const FIELD = document.getElementById('field');
    function getRandomCountry(){
        
        COUNTRY.innerText = countriesWithoutCapitals[getRandomInt(0,9)];

    }
    getRandomCountry();
    function checkAnswer(){
        if(FIELD.value.toLowerCase() === countryCapitalPairs[COUNTRY.innerText].toLowerCase()){
            alert('You won');
        }
        else{
            alert('You lost, the rigth answer was '+ countryCapitalPairs[COUNTRY.innerText]);
        }
        
        getRandomCountry();
        FIELD.value='';
    }
    
    BUTTON.addEventListener('click',checkAnswer);
    document.addEventListener('keydown',(event)=>{
        if(event.code === 'Enter'){
            checkAnswer();

        }

    })
  });