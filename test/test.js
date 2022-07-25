function randomNumbers(number) {
  // Write a function that receives an integer (between 1 and 99) as an argument (number)
  // return an array of random integers (do not repeat numbers) with "number" elements inside
  // ex:
  // randomNumbers(5); => [23, 11, 4, 76, 30]
  // randomNumbers(3); => [3, 54, 18]
  // Code:

  let nRandoms = [];

  for (let i = 0; i < number; i++) {
    let r = Math.random();
    let r100 = r * 100;
    nRandoms.push(Math.round(r100));
  }

  return nRandoms;
}

