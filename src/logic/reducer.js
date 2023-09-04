export function reducer(state, action) {

  const currDate = new Date(state.year, state.month, 2);

  let amountOfDay = 0,
      amountOfMonth = 0;
  
  switch (action.type) {
    case "nextMonth": {
      amountOfMonth = +1;
      break;
    }
    case "prevMonth": {
      amountOfMonth = -1;
      break
    }
    default:
      throw("sto esplodendo")
  }

  const newDate = new Date(
    currDate.getFullYear(),
    currDate.getMonth() + amountOfMonth
  );

  

  const [year, month] = newDate.toISOString().split("-");

  return { day: 1, month: month, year: year };

}
