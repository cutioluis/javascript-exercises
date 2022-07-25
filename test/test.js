function isVowel(letter) {
  // Write a function that receives a letter (letter) as an argument
  // if the letter is a vowel, should return "Is vowel", if not it should return "Is not vowel"
  // In case the argument is not a string or if it's a string with more than one letter
  // return "Incorrect data"
  // ex:
  // isVowel('a') => 'Is vowel';
  // isVowel(6) => 'Is not vowel';

  const vowels = ["a", "e", "i"];
  return letter.includes(vowels);
}

console.log(isVowel("a"));
