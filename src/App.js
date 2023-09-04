import NavBar from "./compononents/NavBar";
import CalendarHeader from "./compononents/CalendarHeader";
import Calendar from "./compononents/Calendar";

import { useReducer, useState } from "react";
import { reducer } from "./logic/reducer";

import { getDays , getDaysOfMonth , getDaysOfWeek } from "./logic/dateUtils";

function App() {

  const [state, dispatch] = useReducer(reducer, 
  {
    day: 1,
    month: 9,
    year: 2023,
  });

  const [calendarView, setCalendarView] = useState( 'month' );

  return (
    <>
      <NavBar />

      <CalendarHeader
        dispatch={dispatch}
        currDate={state}
        view={setCalendarView}
        currView={calendarView}
      />
      <Calendar daysOfMonth={getDays(calendarView, state)} />
    </>
  );
}

export default App;
