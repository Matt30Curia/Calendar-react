export function reducer(state, action) {
  const currDate = new Date(state.year, state.month, state.day);

  let amountOfDay = 0,
    amountOfMonth = 0;

  switch (action.type) {
    case "nextMonth": {
      amountOfMonth = 0;
      break;
    }
    case "prevMonth": {
      amountOfMonth = -2;
      break;
    }
    case "nextDay": {
      amountOfDay = +1;
      break;
    }
    case "prevDay": {
      amountOfDay = -1;
      break;
    }
    case "nextWeek": {
      amountOfDay = +7;
      break;
    }
    case "prevWeek": {
      amountOfDay = -7;
      break;
    }
    default:
      Error("dispatch non previsto");
  }

  let getMonthDay = getMonthDays(currDate, amountOfDay);

  let newDate = new Date(
    currDate.getFullYear(),
    currDate.getMonth() + amountOfMonth
  );

  const [day, month, year] = getMonthDay
    ? getMonthDay
    : newDate.toLocaleDateString("it-IT").split("/");

  return { day: day, month: month, year: year };
}

function getMonthDays(dataInput, amountOfDay) {
  const nextDate = new Date(dataInput);

  // Aggiunge 1 giorno alla data successiva.
  nextDate.setDate(nextDate.getDate() + amountOfDay);

  if (amountOfDay !== 0) {
    return [nextDate.getDate(), nextDate.getMonth(), nextDate.getFullYear()];
  }

  return null;
}
