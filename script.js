 'use strict';


const cutFruitPieces = function(fruit){
   
    return fruit * 4
}
const fruitProcessor = function(fruit){
   const pieces = cutFruitPieces(fruit);
   return pieces;
}


console.log(fruitProcessor(2))
