import arrow_back from "../asset/arrow_back.svg";
import arrow_forward from "../asset/arrow_forward.svg"

function CalendarHeader({ dispatch, currDate, handleView }) {

  var date = new Date(currDate.year, currDate.month, 0); //numero di giorni in un mese
  var monthName = date.toLocaleString("default", { month: "long" });

  

  return (
    <nav className="calendarHeader">
      <section className="day-wiew-filter">
        <button
          className="button-wiew-filter"
          onClick={() => handleView("day")}
        >
          day
        </button>
        <button
          className="button-wiew-filter"
          onClick={() => handleView("month")}
        >
          month
        </button>
        <button
          className="button-wiew-filter"
          onClick={() => handleView("week")}
        >
          week
        </button>
      </section>
      <section className="day-slider">
        <button
          className="icon"
          onClick={() => dispatch({ type: "prevMonth" })}
        >
          <img className="icon" src={arrow_back} />
        </button>
        <p>
          {currDate.day}, {monthName} {currDate.year}
        </p>
        <button
          className="icon"
          onClick={() => dispatch({ type: "nextMonth" })}
        >
          <img src={arrow_forward} />
        </button>
      </section>
      <button className="button--event">create an event</button>
    </nav>
  );
}

export default CalendarHeader