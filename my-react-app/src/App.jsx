import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const buttonStyle = { margin: '5px', padding: '10px 20px', fontSize: '16px' };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>פרויקט ריאקט ראשון</h1>
      <p>ערך המונה הנוכחי: {count}</p>

      <button onClick={increment} style={buttonStyle}>
        הגדל
      </button>
      <button onClick={decrement} style={buttonStyle}>
        הקטן
      </button>
      <button onClick={reset} style={{ ...buttonStyle, backgroundColor: '#ffcccc' }}>
        אפס
      </button>
    </div>
  );
}

export default App;