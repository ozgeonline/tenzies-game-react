import './App.css';
import React from "react"
import Die from './components/Die';


function App() {

  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice(){
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      const number = Math.ceil(Math.random() * 6);
      newDice.push(number);
    }
    return newDice;
  }
  // console.log(allNewDice());
  const diceElements = dice.map(die => <Die value={die} />)

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
    </main>
  )
}

export default App;
