/* import logo from './logo.svg'; */
import './App.css';
import Countries from './Components/Countries/Countries';
import Header from './Components/Header/Header';

/* import { useEffect, useState } from 'react'; */


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}
export default App;


/*
function Countries(){
const [countries, setCountries]= useState([]);

useEffect(()=>{
  fetch('https://restcountries.eu/rest/v2/all')
  .then(res => res.json())
  .then(data => setCountries(data));
},[]);
  return(
<div>
  <h2>Traveling around the world!</h2>
  <h4>Countries Available: {countries.length}</h4>
  {
    countries.map(country=><Country name={country.name} capital={country.capital}></Country>)
  }
</div>
  )
}


function Country (props){

  return(
<div>
  <h2>Name: {props.name}</h2>
  <p>Capital: {props.capital}</p>
</div>
  );
} 
*/


