let fruits = ['apple', 'orange', 'pear'];

function printFruits() {
  let favFruit = fruits[2];
  console.log(fruits[1]);
  function printFavFruit() {
    console.log(favFruit);
  }

  let leastFav = fruits[2];
  console.log(fruits[2]);
}
  function printLeastFav() {
  console.log(leastFav);
}
  
(function (){
  alert('Work!')
})();  

printFruits();
printFavFruit();
printLeastFav();













