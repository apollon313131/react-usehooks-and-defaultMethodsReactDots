import './App.css';
import React, { useState } from 'react';
import Count from './components/Count'
import IsFive from './components/IsFive'

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  // let numbers = [1, 2, 3]
  const [numbers, setNumbers] = useState([1, 2, 3]);


  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 10)
    const newArr = [...numbers, randNumber]
    setNumbers(newArr) //TODO добавить случайное число
    // numbers.push(4)
  }

  const addNextNumber = (newArr) => {
    let lastNumber = numbers[numbers.length - 1]
    let plusNumber = []
    if (numbers.length === 0) {
      numbers.push(1)
      lastNumber = numbers[numbers.length - 1]
    }
    if (numbers.length > 1 && lastNumber >= 1) {
      console.log(numbers.length);
      plusNumber = ++lastNumber
      console.log('bolshe');
    } else {
      console.log('1');
      plusNumber = lastNumber++
    }

    newArr = [...numbers, plusNumber]
    setNumbers(newArr) //TODO добавить следующее число
  }

  const cleatNumbers = () => {
    setNumbers([]) //TODO сбросить
    // numbers.push(4)
  }


  return (
    <div className='App'>
      <div>
        <h1>UseState</h1>
        <ul>
          {
            numbers.map((num, index) => (<li key={index}>{num}</li>)) //TODO компонент-список выводим через map
          }
        </ul>
        <button onClick={addNumber}>Новое случайное число</button>
        <button onClick={addNextNumber}>+1</button>
        <button onClick={cleatNumbers}>Очистить</button>
      </div>
      <hr />
      <div>
        <h1>UseMemo+React.Memo</h1>
        <h5>Счетчик 1:</h5>
        <div className='counter'>
          <button onClick={() => setCount1(count1 + 1)}>+</button>
          <Count id={1} value={count1} />
        </div>

        <h5>Счетчик 2: </h5>
        <div className='counter'>
          <button onClick={() => setCount2(count2 + 1)}>+</button>
          <Count id={2} value={count2} />
          <IsFive value={count2} />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default App;
