// Add your functions here
function map (sourceArray , callingback){
  let newArr =[];
  for (let i = 0; i < sourceArray.length; i++) {
    let el= sourceArray[i]
    newArr.push(callingback(el))
  }

  return newArr;
}
function reduce(sourceArray,callingback,point){
  let result;
  if(!!point){
    result = point
  } 
  else{
   
     result = sourceArray[0]
  }
  let i = (!!point) ? 0 : 1
  for (; i < sourceArray.length; i++) {
    result = callingback(sourceArray[i],result);
  }
return result
}