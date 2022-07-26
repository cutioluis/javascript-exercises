function highestRating(arr) {
  // Write a function that receives an array (arr) with information of players as an argument
  // return a string with the name of the player with highest rating and the rating
  // ex:
  // let players = [
  //   { name: 'Cintia', rating: 2000 },
  //   { name: 'Rafael', rating: 3000 },
  //   { name: 'Agustin', rating: 1200 },
  //   { name: 'Soledad', rating: 9999 },
  // ]
  //
  // highestRating(players) => 'The best player is Soledad, with 9999 points.'
  // Code:

  const res = [
    { name: "Cintia", rating: 2000 },
    { name: "Rafael", rating: 3000 },
    { name: "Agustin", rating: 1200 },
    { name: "Soledad", rating: 9999 },
  ];

  const a = res.sort((a, b) => b.rating - a.rating);
  const b = a.map((e) => {
    `The best player is ${e.name[0]} with ${e.rating[0]}`;
  });
  console.log(b);
}

highestRating();
