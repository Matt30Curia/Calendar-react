export function reducer(state, action) {
  let currYear = state.year;
  let currMonth = state.month;
  let currDay = state.day;


  switch (action.type) {
    case "nextMonth": {
      currYear = state.month === 12 ? state.year + 1 : state.year;
      currMonth = state.month === 12 ? 1 : state.month + 1;

      return { day: state.day, month: currMonth, year: currYear };
    }
    case "prevMonth": {
      currYear = state.month === 1 ? state.year - 1 : state.year;
      currMonth = state.month === 1 ? 12 : state.month - 1;

      return { day: state.day, month: currMonth, year: currYear };
    }
   
  }
}
