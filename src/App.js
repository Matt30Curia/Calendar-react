import NavBar from "./compononents/NavBar";
import CalendarHeader from "./compononents/CalendarHeader";
import Calendar from "./compononents/Calendar";

import { useReducer } from "react";

function getDaysOfMonth(month, year) {
  const days = new Date(`${month} 1, ${year}`).getDay() - 1;
  const prevMonthDaysNumberOfDay = new Date(year, month - 1, 0).getDate();
  const currMonthDaysNumberOfDay = new Date(year, month, 0).getDate();

  let daysOfMonth = [];
  for (let i = 0; i <= days; i++)
    daysOfMonth.unshift(prevMonthDaysNumberOfDay - i);
  for (let i = 1; i <= currMonthDaysNumberOfDay; i++) daysOfMonth.push(i);

  return daysOfMonth;
}

function reducer(state, action) {

  let currYear = state.year;
  let currMonth = state.month;

  switch (action.type) {
    case "nextMonth": {
      currYear = state.month === 12 ? state.year + 1 : state.year;
      currMonth = state.month === 12 ? 1 : state.month + 1;
      
      return { month: currMonth, year: currYear };
    }
    case "prevMonth": {
      currYear = state.month === 1 ? state.year - 1 : state.year ;
      currMonth = state.month === 1 ? 12 : state.month - 1;
      
      return { month: currMonth, year: currYear };
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {month : 9, year:2023 });

  return (
    <>
      <NavBar />

      <CalendarHeader 
        dispatch={dispatch} 
        currDate={state}
      />
      <Calendar daysOfMonth={getDaysOfMonth(state.month, state.year)} />
    </>
  );
}

export default App;
