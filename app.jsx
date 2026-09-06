import { useState } from 'react';

function App() {
  // הגדרת State עבור המונה - התחלה מ-0
  const [count, setCount] = useState(0);

  // פונקציות לעדכון ה-State
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>פרויקט ריאקט ראשון</h1>
      <p>ערך המונה הנוכחי: {count}</p>
      
      <button onClick={increment} style={{ margin: '5px', padding: '10px' }}>
        הגדל
      </button>
      <button onClick={decrement} style={{ margin: '5px', padding: '10px' }}>
        הקטן
      </button>
    </div>
  );
}

export default App;