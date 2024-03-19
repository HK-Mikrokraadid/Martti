// Ringi Pindala

// Kirjuta funktsioon `circleArea`, mis arvutab ringi pindala raadiuse põhjal.
// Ringi pindala arvutamise valem on πr². Kasuta `Math.PI` väärtust π jaoks.

function circleArea(radius) {
  const area = Math.PI * radius * radius;
  return area;
}

const radius = 2;

const result = circleArea(radius);

console.log(result);
