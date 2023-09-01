function CalendarHeader(){
  return (
    <nav>
      <section className="day-wiew-filter">
        <button>day</button>
        <button>month</button>
        <button>year</button>
      </section>
      <section>
        <button>year</button>
        <h1>september 1</h1>
        <button>year</button>
      </section>
      <button>create an event</button>
    </nav>
  );
}

export default CalendarHeader