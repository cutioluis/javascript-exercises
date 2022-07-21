function findInArray(array, number) {
  // Write a function that receives an array of integers and a number as arguments (array, number)
  // return true if the number is in the array, return false if not
  // ex:
  // findInArray([5, 2, 4, 5], 2) => true
  // findInArray([3, 4, 1], 2) => false
  // Code:

  return console.log(array.find((e) => e == number ? true : false))
}

findInArray([1,3,4], 3)
