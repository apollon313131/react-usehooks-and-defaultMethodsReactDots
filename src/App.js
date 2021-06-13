import './App.css';
import React, { useState } from 'react';
import Count from './components/Count'
import IsFive from './components/IsFive'
import List from './components/List'

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  // let numbers = [1, 2, 3]
  const [visibleList, setvisibleList] = useState(true)

  const toggleVisibleList = () => {
    setvisibleList((visible) => !visible);
  }

  return (
    <div className='App'>
      <div>
        {visibleList && <List />}
        <button onClick={toggleVisibleList}>Показать / Скрыть</button>
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
