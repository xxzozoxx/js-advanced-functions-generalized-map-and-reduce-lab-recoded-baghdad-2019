// Add your functions here
function map (sourceArray , callingback){
  let newArr =[];
  for (let i = 0; i < sourceArray.length; i++) {
    let el= sourceArray[i]
    newArr.push(callingback(el))
  }

  return newArr;
}
function reduce(sourceArray,point,callingback){
  
  for (let i = 0; i < sourceArray.length; i++) {
  }
}