function transformArrayDeclarative(inputArray, callback) {
  return inputArray.map(callback);
}

function transformArrayImperative(inputArray, callback) {
  const outputArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    outputArray.push(callback(inputArray[i]));
  }

  return outputArray;
}
