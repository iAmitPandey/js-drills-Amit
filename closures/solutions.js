function counterFactory() {
  let counter = 0;

  return {
    increment: function () {
      counter++;
      return counter;
    },
    decrement: function () {
      counter--;
      return counter;
    },
  };
}

function limitFunctionCallCount(cb, n) {
  let counter = 0;
  return (data) => {
    if (counter < n) {
      counter++;
      return cb(data);
    } else {
      return null;
    }
  };
}

function cacheFunction(cb) {
    let cach = {};

  return (data) => {
    if(cach[data]){
        // console.log(cach)
        return cach[data]
    }else {
        let res = cb(data);
        cach[data] = res;
        return res;
    }
    
  };
}

export { counterFactory, limitFunctionCallCount, cacheFunction };
