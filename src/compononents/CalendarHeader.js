import arrow_back from "../asset/arrow_back.svg";
import arrow_forward from "../asset/arrow_forward.svg"

function CalendarHeader({ dispatch, currDate }) {

  var date = new Date(currDate.year, currDate.month, 0);
  var monthName = date.toLocaleString("default", { month: "long" });

  return (
    <nav className="calendarHeader">
      <section className="day-wiew-filter">
        <button className="button-wiew-filter">day</button>
        <button className="button-wiew-filter">month</button>
        <button className="button-wiew-filter">year</button>
      </section>
      <section className="day-slider">
        <button
          className="icon"
          onClick={() => dispatch({ type: "prevMonth" })}
        >
          <img className="icon" src={arrow_back} />
        </button>
        <p>{monthName} {currDate.year}</p>
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