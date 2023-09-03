
export function getDays(calendarView, state) {
    switch (calendarView) {
      case "month": {
        return getDaysOfMonth(state.month, state.year);
      }
      case "week": {
        return getDaysOfWeek(state, );
      }
    }
  }


export function getDaysOfMonth(month, year) {
  const days = new Date(`${month} 1, ${year}`).getDay() - 1;
  const prevMonthDaysNumberOfDay = new Date(year, month - 1, 0).getDate();
  const currMonthDaysNumberOfDay = new Date(year, month, 0).getDate();

  let daysOfMonth = [];
  for (let i = 0; i <= days; i++)
    daysOfMonth.unshift(prevMonthDaysNumberOfDay - i);
  for (let i = 1; i <= currMonthDaysNumberOfDay; i++) daysOfMonth.push(i);

  return daysOfMonth;
}

export function getDaysOfWeek(state) {
  return []


}

