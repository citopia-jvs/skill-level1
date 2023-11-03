export const daysUntilNextBirthday = (date: Date): number => {
  const birthdayDate = new Date(date);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const birthdayMonth = birthdayDate.getMonth();
  const birthdayDay = birthdayDate.getDate();

  // Create a new date for the birthday in the current year
  const nextBirthday = new Date(currentYear, birthdayMonth, birthdayDay);

  // If the birthday has already passed this year, add a year
  if (currentDate > nextBirthday) {
    nextBirthday.setFullYear(currentYear + 1);
  }

  // Calculate the number of milliseconds until the birthday
  const timeDifferenceInMilliseconds =
    nextBirthday.getTime() - currentDate.getTime();

  // Convert to days
  const daysDifference = timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24);

  return Math.floor(daysDifference);
};
