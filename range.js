const range = function (start, end, step) {
  const rangeArray = [];
  if (step <= 0){
    return rangeArray;
  } else if (start > end) {
    return rangeArray;
  } else {
    steps = (( end - start ) - (( end - start) % step )) / step;
    for (i = 0 ; i <=  steps ; i++) {
      
      let value = start + i * step;
      rangeArray.push(value);
    }
    return rangeArray;
  }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
