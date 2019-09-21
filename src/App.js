import React, { useState, useEffect } from 'react';
import Info from './Components/Info/Info';
import Country from './Components/Country/Country';
import './App.css';

const App = () => {
  const  [cities, setCities] = useState([]);
  let [tempSymbol, setTempSymbol] = useState('C');
  useEffect(() => {
    (async function fetchData() {
      const response = await fetch('http://api.openweathermap.org/data/2.5/group?id=3452925,3448439&units=imperial&appid=40af4c7a896866ecce136a32e66d7f74');
      const data = await response.json();
      setCities(data.list);
    })();
  }, []);

  return (
    <main>
      <Info tempSymbol={tempSymbol} setTempSymbol={() => setTempSymbol(tempSymbol === 'F' ? 'C' : 'F')} />
      <Country cities={cities[0]} tempSymbol={tempSymbol}/>
      <Country cities={cities[1]} tempSymbol={tempSymbol}/>
    </main>
  );
}

export default App;