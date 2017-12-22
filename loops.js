function forLoop (array){
  for (var i = 1; i<26; i++){
    if (i == 1){
    array.push("I am 1 strange loops");
    } else {
      array.push("I am ${i} strange loops");
    }
  }
  return array;
}

function whileLoop(number){
  while (number>0)
}