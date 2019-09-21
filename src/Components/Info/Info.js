import React from 'react';
import './Info.css';
import bg from '../../img/bg-shape.svg';

const Info = (props) => {
  return (
    <section>
      <img src={bg} alt='Background shape' id='bg' />
      <h1>PREVISÃO<br/>do<span>TEMPO</span></h1>
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />In rhoncus malesuada erat. Ut eget mi risus.</p>
      <div className='bottom'>
        <p>A previsão está sendo mostrada em:</p>
        <div className='buttons'>
          <div className='btn'>
            {props.tempSymbol === 'C' ?
              <button className='clicked'>C</button>
              :
              <button onClick={props.setTempSymbol}>C</button>
            }
            <p>Celsius</p>
          </div>
          <div className='btn'>
            {props.tempSymbol === 'F' ?
              <button className='clicked'>F</button>
              :
              <button onClick={props.setTempSymbol}>F</button>
            }
            <p>Fahrenheit</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;