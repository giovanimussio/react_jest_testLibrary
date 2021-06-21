import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

export function replaceCamelWithSpaces(colorname){
  return colorname.replace(/\B([A-Z])\B/g, ' $1');

}
function App() {
  const [ buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [ disabled, setdisabled ] = useState(false);
  const newButtonColor = buttonColor === 'MediumVioletRed'?'MidnightBlue' : 'MediumVioletRed';

  return (
    <div>
      <button 
          style={{backgroundColor: disabled ? 'gray': buttonColor}}
          onClick={() => setButtonColor(newButtonColor)}
          disabled={disabled}
        > Change to {newButtonColor} </button>
        <br/>
        <input 
          type="checkbox"
          id="disable-button-checkbox"
          defaultChecked={disabled}
          aria-checked={disabled}
          onChange={(e) => setdisabled(e.target.checked)}/>
          <label htmlFor="disable-button-checkbox">Disable button</label>

    </div>
  );
}

export default App;
