import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>פרויקט ריאקט ראשון</h1>
      <p>ערך המונה הנוכחי: {count}</p>
      
      <button onClick={increment} style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}>
        הגדל
      </button>
      <button onClick={decrement} style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}>
        הקטן
      </button>
    </div>
  );
}

export default App;