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

export const getLast10WeekNumbers = () => {
  var weekNumbers = [];
  var currentDate = new Date();

  for (var i = 0; i < 10; i++) {
    var weekStartDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - (currentDate.getDay() + 7 * i));
    var weekNumber = getWeekNumber(weekStartDate);
    weekNumbers.push("uge " + weekNumber.toString());
  }

  return weekNumbers.reverse();
}

function getWeekNumber(date) {
  var target = new Date(date.valueOf());
  var dayNumber = (date.getUTCDay() + 6) % 7;
  target.setUTCDate(target.getUTCDate() - dayNumber + 3);
  var firstThursday = target.valueOf();
  target.setUTCMonth(0, 1);
  if (target.getUTCDay() !== 4) {
    target.setUTCMonth(0, 1 + ((4 - target.getUTCDay()) + 7) % 7);
  }
  return 1 + Math.ceil((firstThursday - target) / 604800000);
}

var last10WeekNumbers = getLast10WeekNumbers();

export const getRecentWorkData = (workData) => workData.slice(-10)