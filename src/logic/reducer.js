export function reducer(state, action) {
  let currYear = state.year;
  let currMonth = state.month;
  let currDay = state.day;
  let lastDayInMonth = new Date(currDate.year, currDate.month, 0).getDay();

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

function nextDay(days, date){

  let {day, month, year} = date;

  let lastDayInMonth = new Date(currDate.year, currDate.month, 0).getDay();
  
  if (days === lastDayInMonth){
    let {nextMonth, nextYear} = nextMonth(month, year)
    day = 1; month = nextMonth; year = nextYear;
  }

  else{
    day++;
  }

  function nextMonth(month, year) {
    let currYear = month === 12 ? year + 1 : year;
    let currMonth = month === 12 ? 1 : month + 1;
    return { currMonth, currYear };
  }
  
}