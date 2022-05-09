import './style.css';
import Die from "./Die";
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

function App() {

  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    console.log("Dice State changed")
  }, [dice]);

  function generateNewDie() {
    return {
      value : Math.ceil(Math.random() * 6),  //ceil starts from 1
      isHeld : false,
      id : nanoid()
    }
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
        newDice.push(generateNewDie()); 
    }
    return newDice;
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ?
        die :
        generateNewDie()
    }));
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
        {...die, isHeld : !die.isHeld} :
        die
    }));
  }

  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)

  return (
    <main>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='dice-container'>
            {diceElements}
        </div>
        <button className='roll-dice' onClick={rollDice}>Roll Dice</button>
      </main>
  );
}

export default App;
