const _array = [4, [[5], [6, [7], 8], 9, 10]];

/**
 * The function to flatten the nested array
 */
const flatArray = (inputArray) => {
  
    return inputArray.reduce((final, current) => {
    return Array.isArray(current)
      ? final.concat(flatArray(current))
      : final.concat(current);
  }, []);
};
