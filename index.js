const app = "I don't do much."
var kittens =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
   kittens.append = [...kittens, "Ralph"]
  return kittens
  
  }
  
  function destructivelyPrependKitten(name) {
   kittens.prepend = "Bob"; 
  return kittens
  }