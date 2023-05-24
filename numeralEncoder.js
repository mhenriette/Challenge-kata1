const solution = (number) => {
  const numerals = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };
  const numeralNumbers = Object.keys(numerals).map(Number).reverse();
  let roman = "";
  numeralNumbers.forEach((key) => {
    while (key <= number) {
      roman += numerals[key];
      number -= key;
    }
  });
  return roman;
};
