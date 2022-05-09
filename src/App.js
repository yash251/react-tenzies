import './style.css';
import Die from "./Die";
import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {

  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
        newDice.push({
          value : Math.ceil(Math.random() * 6),  //ceil starts from 1
          isHeld : false,
          id : nanoid()
        }); 
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  const diceElements = dice.map(die => <Die key={die.id} value={die.value} />)

  return (
    <main>
        <div className='dice-container'>
            {diceElements}
        </div>
        <button className='roll-dice' onClick={rollDice}>Roll Dice</button>
      </main>
  );
}

export default App;
