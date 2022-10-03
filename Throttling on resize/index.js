const loggerFunc = () => {
  console.count("Throttled Function");
}

const throttle = (fn, limit) => {
  let flag = true;
  return function(){
    let context = this;
    let args = arguments;
    if(flag){
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag=true;
      }, limit);
    }
  }
}

const betterLoggerFunction = throttle(loggerFunc, 1000);

window.addEventListener("resize",betterLoggerFunction);

// This is the normal Function without Throttling
//Check the console for the difference between the calls of Normal Function and the Throttled Function 
const normalFunc = () => {
  console.count("Normal Function");
}

window.addEventListener("resize",normalFunc);

