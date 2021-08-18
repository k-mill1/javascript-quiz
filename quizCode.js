/**
 * hides element by id
 */
 function hideElement(id) {
  document.getElementById(id).style.display = 'none';
}

/**
 * shows element by id
 */
function showElement(id) {
  document.getElementById(id).style.display = 'block';
}

/**
 * Displays only the intro page when you open the page
 */
window.onload = () => {
  showElement('intro');
  hideElement('question1');
  hideElement('question2');
  hideElement('question3');
  hideElement('question4');
  hideElement('question5');
  hideElement('results-intro');
  hideElement('result1');
  hideElement('result2');
  hideElement('result3');
  hideElement('result4');
};

/**
 * hides current question and shows the next
 */
function nextPage(hide, show) {
  hideElement(hide);
  showElement(show);
}

/**
 * adds the selected answer for a specified question number into an array
 */
function getRadioVal(questionNum, array) {
  const name = 'quest' + questionNum;
  const radios = document.getElementsByName(name);

  for (let index = 0; index < radios.length; index++) {
    if (radios[index].checked) {
      array.push(radios[index].value);
      break;
    }
  }
}

/**
 * counts how many answers of the same value there are in an array
 */
function howMany(array, value) {
  let counter = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] == value)
      counter++;
  }
  return counter;
}

/**
 * displays the correct result 
 */
 function getResult(answer1, answer2, answer3) {
  if (answer1 > 2) {
    showElement('result1');
  } else if (answer2 > 2) {
    showElement('result2');
  } else if (answer3 > 2) {
    showElement('result3');
  } else {
    showElement('result4');
  }
}

/**
 * function called from index.html that calculates and displays the results
 */
function results(lastQuestion, questTotalNum) {
  hideElement(lastQuestion);
  showElement('results-intro');

  const array = [];
  // adds the answer to each question into the array
  for (let index = 1; index <= questTotalNum; index++) {
    getRadioVal(String(index), array);
  }

  // calculates how many times each answer appears in the array
  const answer1Count = howMany(array, 1);
  const answer2Count = howMany(array, 2);
  const answer3Count = howMany(array, 3);

  // displays the correct result
  getResult(answer1Count, answer2Count, answer3Count);
}
