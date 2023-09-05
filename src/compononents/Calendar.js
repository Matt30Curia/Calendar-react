function Calendar({ daysOfMonth }) {
  console.log("render")
  return (
    <div className="calendar-grid">
      <div >domenica</div>
      <div>lunedì</div>
      <div>martedì</div>
      <div>mercoledì</div>
      <div>giovedì</div>
      <div>venerdì</div>
      <div>sabato</div>
      {daysOfMonth.map((day) => (
        <div className="calendar-day"> {day} </div>
      ))}
    </div>
  );
}

export default Calendar;


