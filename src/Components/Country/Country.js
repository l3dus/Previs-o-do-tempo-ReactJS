import React from 'react';
import './Country.css';

import ca from '../../img/pic-1.jpg'
import sun from '../../img/sun-icon.svg';
import ru from '../../img/pic-2.jpg';
import snow from '../../img/snow-icon.svg';

const Country = (props) => {

  let currentTemp = 0;

  if (props.cities) {
    let fahrenheit = parseInt(props.cities.main.temp);
    let celsius = parseInt((fahrenheit - 32) * (5 / 9));
    if (props.tempSymbol === 'F') {
      currentTemp = fahrenheit;
    } else {
      currentTemp = celsius;
    }
  }

  return (
    <section>
      <div className='floater'>
        <div className='icon-temp'>
          {props.cities && props.cities.name === 'Porto Alegre' ?
            <img src={sun} alt='Icon' />
            :
            <img src={snow} alt='Icon' />
          }
          <p id='temp'>{props.cities ? currentTemp : ''}°</p>
        </div>
        <p>{props.cities ? props.cities.weather[0].main.toUpperCase() : ''}</p>
      </div>
      {props.cities && props.cities.name === 'Porto Alegre' ?
        <img src={ca} alt='Porto Alegre' id='country-img' />
        :
        <img src={ru} alt='São Paulo' id='country-img' />
      }
      <div className='country'>
        {props.cities && props.cities.name === 'Porto Alegre' ?
          <div>
            <p>{props.cities.name}</p>
            <p>Rio Grande do Sul</p>
          </div>
          :
          <div>
            <p>São Paulo</p>
            <p>São Paulo</p>
          </div>
        }
      </div>
    </section>
  );
}

export default Country;