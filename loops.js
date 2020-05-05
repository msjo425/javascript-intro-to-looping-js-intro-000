// let myArray = [];

function forLoop(array) {
for (let i = 0; i<25; i++){

array.push(`I am ${i} strange loop${i === 1 ? '': 's'}.`);
}

// console.log(array)

return array
}


function whileLoop(starter){
  while (starter >= 0) {
    console.log(starter)
    starter -=  1
  }
}
