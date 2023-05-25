const solution = (roman) => {
  const romans = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let count = 0;
  let index = 0;

  while (index < roman.length) {
    const currentCharacter = roman[index];
    const nextCharacter = roman[index + 1];
    const currentValue = romans[currentCharacter];
    const nextValue = romans[nextCharacter];

    if (nextValue && nextValue > currentValue) {
      count += nextValue - currentValue;
      index += 2;
    } else {
      count += currentValue;
      index++;
    }
  }

  return count;
};
