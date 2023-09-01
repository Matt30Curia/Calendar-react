import arrow_back from "../asset/arrow_back.svg";
import arrow_forward from "../asset/arrow_forward.svg"

function CalendarHeader(){
  return (
    <nav className="calendarHeader">
      <section className="day-wiew-filter">
        <button className="button--day-wiew-filter">day</button>
        <button className="button--day-wiew-filter">month</button>
        <button className="button--day-wiew-filter">year</button>
      </section>
      <section className="day-slider">
        <button className="icon">
          <img className="icon" src={arrow_back} />
        </button>
        <p>september 1</p>
        <button className="icon">
          <img src={arrow_forward} />
        </button>
      </section>
      <button className="button--event">create an event</button>
    </nav>
  );
}

export default CalendarHeader