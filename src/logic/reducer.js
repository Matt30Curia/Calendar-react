export function reducer(state, action) {
  const currDate = new Date(state.year, state.month, state.day);

  let amountOfDay = 0,
    amountOfMonth = new Date(state.year, state.month, 0).getDate() +1;

  switch (action.type) {
    case "nextMonth": {
      console.log(amountOfMonth);
      amountOfDay = amountOfMonth;
      break;
    }
    case "prevMonth": {
      amountOfDay = -amountOfMonth;
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
    default:
      Error("dispatch non previsto");
  }

  const [day, month, year] = getMonthDays(currDate, amountOfDay);

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
