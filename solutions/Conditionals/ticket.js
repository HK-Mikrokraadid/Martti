/* eslint-disable no-console */
const age = 18; // Muuda seda väärtust vastavalt testitavale vanusele
const weekday = 'esmaspäev'; // Muuda seda vastavalt testitavale nädalapäevale

if (age >= 65 || age < 18) {
  console.log('6 eurot');
} else if (weekday === 'laupäev' || weekday === 'pühapäev') {
  console.log('12 eurot');
} else {
  console.log('10 eurot');
}
