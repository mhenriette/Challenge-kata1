const numberFormat = (number) => {
  let count = 0;
  const newNumbers = [];
  const text = number.toString().split("");
  for (let index = text.length - 1; index >= 0; index--) {
    count = count + 1;
    newNumbers.push(text[index]);

    if (count === 3 && index !== 0 && text[index - 1].match(/[0-9]/)) {
      newNumbers.push(",");
      count = 0;
    }
  }
  return newNumbers.reverse().join("");
};
