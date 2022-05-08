import './style.css';
import Die from "./Die";
import { useState } from 'react';

function App() {

  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
        newDice.push(Math.ceil(Math.random() * 6)); //ceil starts from 1
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  const diceElements = dice.map(die => <Die value={die} />)

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
