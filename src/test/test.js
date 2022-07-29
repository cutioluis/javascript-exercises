function showRespectToRiquelme(arr) {
  // Write a function that receives an array (arr) of objects as an argument
  // look for Riquelme and add him a property showing your respect
  // return the same arr with the change
  // ex:
  // let people = [
  //   { name: 'Cintia' },
  //   { name: 'Rafael' },
  //   { name: 'Agustin' },
  //   { name: 'Soledad'},
  //   { name: 'Riquelme'},
  //   { name: 'Anatolii'},
  //   { name: 'Camila'},
  //   { name: 'Simon'},
  // ]
  //
  // showRespectToRiquelme(people) => [
  //   { name: 'Cintia' },
  //   { name: 'Rafael' },
  //   { name: 'Agustin' },
  //   { name: 'Soledad'},
  //   { name: 'Riquelme', respect: 'You are the best' },
  //   { name: 'Anatolii'},
  //   { name: 'Camila'},
  //   { name: 'Simon'},
  // ]
  // Code:

  let employee = {
    name: "Cinthia",
    age: 32,
    city: "CABA",
    company: "Viseven",
  };
  //
  // objectKeys(employee) => ['name', 'age', 'city', 'company']
  // Code:

  console.log(Object.keys(employee))
}

showRespectToRiquelme();
