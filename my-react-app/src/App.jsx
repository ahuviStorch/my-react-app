// ייבוא הקומפוננטות שיצרנו מהקבצים שלהן
import Header from './Header';
import TaskList from './TaskList';
import TaskSummary from './TaskSummary';

function App() {
  // הגדרת משתנה סטטי לשם המשתמש
  const userName = "ישראל ישראלי";
  
  // הגדרת מערך סטטי של אובייקטים, שכל אחד מהם מייצג משימה
  const tasks = [
    { id: 1, title: "ללמוד React", completed: true },
    { id: 2, title: "להכין שיעורי בית", completed: true },
    { id: 3, title: "לקרוא ספר", completed: false },
    { id: 4, title: "סידור החדר", completed: false }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', direction: 'rtl' }}>
      {/* 
        הקריאה לקומפוננטת Header:
        אנו מעבירים לה נתונים באמצעות תכונות (Props):
        - title מקבל טקסט קבוע
        - userName מקבל את המשתנה userName שהגדרנו למעלה
      */}
      <Header title="מערכת לניהול משימות" userName={userName} />

      {/* 
        הקריאה לקומפוננטת TaskList:
        מעבירים את המערך tasks תחת השם tasks
      */}
      <TaskList tasks={tasks} />

      {/* 
        הקריאה לקומפוננטת TaskSummary:
        מעבירים גם לה את אותו מערך tasks כדי שתוכל לחשב את הסיכום
      */}
      <TaskSummary tasks={tasks} />
    </div>
  );
}

export default App;