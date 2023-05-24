export const extractValuesFromArray = (array) => {
    const valuesArray = [];
  
    for (let i = 0; i < array.length; i++) {
      const obj = array[i];
  
      Object.values(obj).forEach((value) => {
        valuesArray.push(value);
      });
    }
  
    return valuesArray;
  }