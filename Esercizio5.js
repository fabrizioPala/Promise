/*function callback_BasedFunction(arg1, arg2, callback) { 
  setTimeout(() => { 
  const result = arg1 + arg2; 
  if (result % 2 !== 0) { 
  callback(null, result); 
  } else { 
  callback(new Error('Result is not odd!'), null); } }, 1000);
*/
function promise_BasedFunction(arg1, arg2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = arg1 + arg2;
      if (result % 2 == 0) {
        resolve(result);
      } else {
        reject("Result is not odd!");
      }
    }, 1000);
  });
}
promise_BasedFunction(2,2)
.then((res)=>console.log(res))
.catch((error)=>console.log(error))