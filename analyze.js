function analyzeArray(array) {
  const object = {};
  object.average = function () {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return Math.floor(sum / array.length);
  };
  object.min = function () {
    let minimum = array[0];
    for (let i = 1; i < array.length; i++) {
      if (minimum > array[i]) {
        minimum = array[i];
      }
    }
    return minimum;
  };
  object.max = function () {
    let maximum = array[0];
    for (let i = 1; i < array.length; i++) {
      if (maximum < array[i]) {
        maximum = array[i];
      }
    }
    return maximum;
  };
  object.len = function () {
    return array.length;
  };
  return object;
}

function all(array) {
  const objectArray = analyzeArray(array);

  const object = {
    average: objectArray.average(),
    min: objectArray.min(),
    max: objectArray.max(),
    length: objectArray.len(),
  };
  return object;
}

console.log(all([1, 8, 3, 4, 2, 6]));

export { all };
