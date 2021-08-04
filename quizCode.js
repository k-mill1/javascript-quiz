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
  document.getElementById('resultsarea').style.display = 'none';
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
    calculateResults()
    document.getElementById("question5").style.display = "none";
    document.getElementById("resultsarea").style.display = "block";
  }
  