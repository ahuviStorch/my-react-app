// הגדרת פונקציית הקומפוננטה. 
// הפרמטר props הוא אובייקט שמכיל את כל המידע שנשלח לקומפוננטה מזו שקראה לה (קומפוננטת האב).
function Header(props) {
  return (
    // החזרת אלמנטים של HTML/JSX לתצוגה
    <header style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '20px' }}>
      {/*props.title מקבל את הטקסט של הכותרת שנשלח מהאב*/}
      <h1>{props.title}</h1>
      
      {/*props.userName מקבל את שם המשתמש שנשלח מהאב*/}
      <p>שלום, <strong>{props.userName}</strong></p>
    </header>
  );
}

// ייצוא הקומפוננטה כדי שנוכל להשתמש בה בקבצים אחרים (כמו App.jsx)
export default Header;