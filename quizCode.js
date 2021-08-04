/**
 * Displays only the intro page when you open the page
 */
window.onload = function() {
  document.getElementById('intro').style.display = 'block';
  document.getElementById('question1').style.display = 'none';
  document.getElementById('question2').style.display = 'none';
  document.getElementById('question3').style.display = 'none';
  document.getElementById('question4').style.display = 'none';
  document.getElementById('question5').style.display = 'none';
  document.getElementById('result1').style.display = 'none';
  document.getElementById('result2').style.display = 'none';
  document.getElementById('result3').style.display = 'none';
  document.getElementById('result4').style.display = 'none';
  document.getElementById('results-intro').style.display = 'none';
}
/**
 * hides intro and show question 1
 */
 function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("question1").style.display = "block";
  }

  /**
 * hides question 1 shows question2
 */
function question2() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
  }

    /**
 * hides question 2 shows question3
 */
function question3() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "block";
  }

    /**
 * hides question 3 shows question4
 */
function question4() {
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "block";
  }

      /**
 * hides question 4 shows question5
 */
function question5() {
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "block";
  }
  
  /**
 * hides question 2 shows results
 */
  function results() {
    calculateResults();
    document.getElementById("question5").style.display = "none";
    document.getElementById("results-intro").style.display = "block";
    
  }

  /**
 * calculates and displays the results
 */
function calculateResults() {
  let array=[]
  const radios1 = document.querySelectorAll('input[name="quest1"]');
  let q1Value;
  for (const rb of radios1) {
      if (rb.checked) {
          q1Value = rb.value;
          array.push(q1Value);
          break;
      }
  }
  
  const radios2 = document.querySelectorAll('input[name="quest2"]');
  let q2Value;
  for (const rb of radios2) {
      if (rb.checked) {
          q2Value = rb.value;
          array.push(q2Value);
          break;
      }
  }

  const radios3 = document.querySelectorAll('input[name="quest3"]');
  let q3Value;
  for (const rb of radios3) {
      if (rb.checked) {
          q3Value = rb.value;
          array.push(q3Value);
          break;
      }
  }

  const radios4 = document.querySelectorAll('input[name="quest4"]');
  let q4Value;
  for (const rb of radios4) {
      if (rb.checked) {
          q4Value = rb.value;
          array.push(q4Value);
          break;
      }
  }

  const radios5 = document.querySelectorAll('input[name="quest5"]');
  let q5Value;
  for (const rb of radios5) {
      if (rb.checked) {
          q5Value = rb.value;
          array.push(q5Value);
          break;
      }
  }
  var a = 0;
  for(var i = 0; i < array.length; ++i){
      if(array[i] == 1)
          a++;
  }
  var b = 0;
for(var i = 0; i < array.length; ++i){
    if(array[i] == 2)
        b++;
}
  var c = 0;
  for(var i = 0; i < array.length; ++i){
      if(array[i] == 3)
          c++;
  }

  let result = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value) + Number(q5Value);

  if (a > 2 ) {
    document.getElementById("result1").style.display = "block";
  } else if (b > 2) {
    document.getElementById("result2").style.display = "block";
  } else if (c > 2) {
    document.getElementById("result3").style.display = "block";
  } else {
    document.getElementById("result4").style.display = "block";
  }

}

