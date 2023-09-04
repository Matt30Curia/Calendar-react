export function reducer(state, action) {
  let currYear = state.year;
  let currMonth = state.month;
  let currDay = state.day;

  switch (action.type) {
    case "nextMonth": {
      const [year, month, day] = new Date(currYear, currMonth , currDay + 1).toISOString().split("-");

      return { day: day.split('T')[0], month: month, year};
    }
    case "prevMonth": {

      const [year, month, day] = new Date(currYear, currMonth - 2 , currDay + 1).toISOString().split("-");

      return { day: day.split('T')[0], month: month, year};
    }
  }
}
