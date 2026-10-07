function TaskSummary(props) {
  // חישוב סך כל המשימות לפי אורך המערך שנשלח ב-props
  const totalTasks = props.tasks.length;
  
  // סינון המערך כדי למצוא רק את המשימות שבהן completed שווה ל-true, ולקיחת הכמות שלהן
  const completedTasks = props.tasks.filter(task => task.completed).length;

  return (
    <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f9f9f9' }}>
      <h3>סיכום משימות:</h3>
      {/* הצגת המשתנים שחושבו למעלה בתוך הטקסט */}
      <p>יש {totalTasks} משימות, מתוכן {completedTasks} הושלמו.</p>
    </div>
  );
}

export default TaskSummary;