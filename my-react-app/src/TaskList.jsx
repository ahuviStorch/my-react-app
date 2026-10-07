function TaskList(props) {
  return (
    <div>
      <h3>רשימת המשימות:</h3>
      <ul>
        {/*
          props.tasks מגיע מהאב ומכיל מערך (רשימה) של משימות.
          פונקציית map עוברת על כל איבר במערך וממירה אותו לאלמנט תצוגה של ברשימה (li).
        */}
        {props.tasks.map((task) => (
          // key הוא מזהה ייחודי ש-React דורשת כשמציגים רשימות, כדי לנהל את התצוגה בצורה יעילה
          <li key={task.id} style={{ marginBottom: '8px' }}>
            {/* הצגת שם המשימה */}
            <span>{task.title}</span> - 
            
            {/* בדיקה: אם task.completed הוא true יופיע "הושלם", אחרת יופיע "בביצוע" */}
            <strong>{task.completed ? 'הושלם' : 'בביצוע'}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;