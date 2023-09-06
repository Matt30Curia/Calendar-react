function Calendar({ daysOfMonth }) {

  const monthDayStyle = {
    borderRadius: '15px',
    padding: '10px',
    minHeight: '100px',
    height:'15vh',
    backgroundColor:' #FFF',
    textAlign: 'end',
  }
  
  const singleDayStyle = {
    borderRadius: "15px",
    padding: "10px",
    height: "60vh",
    width: "85vw",
    fontSize: "1.75rem",
    backgroundColor: " #FFF",
    textAlign: "center",
  };

  const daysName = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  return (
    <div className="calendar-grid">
      {daysOfMonth.length > 2 && daysName.map((dayName) => <div>{dayName} </div>)}
      {daysOfMonth.map((day) => (
        <div style={daysOfMonth.length > 2 ? monthDayStyle: singleDayStyle}> {day} </div>
      ))}
    </div>
  );
}

export default Calendar;
