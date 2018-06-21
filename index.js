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

function appendKitten(Broom){
  var newKittens = [...kittens]
  newKittens.push("Broom")
  return newKittens
  
}
  
  function preprendKitten(Broom){
  var newKittens = [...kittens]
  newKittens.unshift("Broom")
  return newKittens
    
  }
  
function removeLastKitten(){
var newKittens = [...kittens]
newKittens.pop()
return newKittens
}

function removeFirstKitten(){
var newKittens = [...kittens]
newKittens.pop()
return newKittens
}