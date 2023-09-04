export function reducer(state, action) {
  let currYear = state.year;
  let currMonth = state.month;
  let currDay = state.day;
  let lastDayInMonth = new Date(currDate.year, currDate.month, 0).getDay();

  switch (action.type) {
    case "nextMonth": {
      const [year, month, day] = new Date(currYear, currMonth , currDay + 1).toISOString().split("-");

      return { day: day.split('T')[0], month: month, year};
    }
    case "prevMonth": {
      currYear = state.month === 1 ? state.year - 1 : state.year;
      currMonth = state.month === 1 ? 12 : state.month - 1;

      return { day: state.day, month: currMonth, year: currYear };
    }
    case "nextDay": {
      currDay = lastDayInMonth === currDay + 1

      return { day: state.day, month: currMonth, year: currYear };
    }
    case "prevDay": {
      currYear = state.month === 1 ? state.year - 1 : state.year;
      currMonth = state.month === 1 ? 12 : state.month - 1;

      return { day: state.day, month: currMonth, year: currYear };
    }
  }
}
