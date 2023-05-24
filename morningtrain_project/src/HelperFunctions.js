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

export const countLetterOccurrences = (tagsArray) => {
  const letterCounts = {};

  tagsArray.forEach((tag) => {
    if (letterCounts[tag]) {
      letterCounts[tag]++;
    } else {
      letterCounts[tag] = 1;
    }
  });

  const sortedLetterCounts = {};

  Object.keys(letterCounts)
    .sort()
    .forEach((key) => {
      sortedLetterCounts[key] = letterCounts[key];
    });

  const letterValues = Object.values(sortedLetterCounts);

  return letterValues;
};



export const getAllTagsInOrder = (employees) => {
  const allTags = [];

  employees.forEach((employee) => {
    allTags.push(...employee.tags);
  });

  return allTags.sort();
};