import { useState } from 'react';
import Reorder from './Reorder.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count > 0 ? count - 1 : 0);
  const onReorder = () => setCount(5);

  return (
    <div className="App">
      <h1>React Intro</h1>
      <h3>Count is: {count}</h3>
      <div className="controls">
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount} disabled={!count}>-</button>
        {count === 0 && <Reorder onReorder={onReorder} />}
      </div>
    </div>
  );
}

export default App;
