const app = "I don't do much."
var kittens =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(Ralph){
  kittens.push("Ralph")
  return kittens
  
}
  
function destructivelyPrependKitten(Bob){
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function appendKitten()