function descendingOrder(n) {
  let myFunc = (num) => Number(num);
  var intArr = Array.from(String(n), myFunc);
  const x = intArr.length; // we specify the array length here
  var myCat = [];
  for (let i = 0; i < x; i++) {
    var max = Math.max.apply(null, intArr); // get the max of the array
    myCat.push(intArr[intArr.indexOf(max)]); // we add to new array
    intArr.splice(intArr.indexOf(max), 1); // remove max from the array
  }

  return Number(myCat.join(""));
}
 