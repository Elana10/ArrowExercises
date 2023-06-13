const double = (arr) => arr.map((num) => num * 2);

// const squareEvens4 = arr => arr.filter(num => {(num * num) % 2 === 0});
//Where is this going wrong? 

const squareEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0);
