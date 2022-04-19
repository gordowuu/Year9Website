
var xValues = ["Rest of the World", "China", "India", "Nigeria", "Ethiopia", "Indonesia", "Democratic Republic of the Congo", "Bangladesh", "United Republic of Tanzania", "Sudan", "Kenya"];
var yValues = [292,119,97,66,46,43,36,28,21,18,17];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145",
  "#4ea1b1",
  "#27d845",
  "#d98526",
  "#e01f78",
  "#cb34c6",
  "#746996"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Number of People who did not have safe drinking water in 2012 (millions)"
    }
  }
});

var myQuestions = [
    {
      question: "In the DRC, how many people drink unsafe water everyday?",
      answers: {
        a: '51 million',
        b: '150 thousand',
        c: '20 million'
      },
      correctAnswer: 'a'
    },
    {
      question: "Where do most Congolese people get their water from?",
      answers: {
        a: 'The sink',
        b: 'Streams and rivers',
        c: 'Plastic water bottles'
      },
      correctAnswer: 'b'
    },
    {
      question: "What continent has the worst water sanitation problems?",
      answers: {
        a: 'South America',
        b: 'Asia',
        c: 'Africa'
      },
      correctAnswer: 'c'
    },
    {
      question: "How can you help support the Congolese?",
      answers: {
        a: 'Leave the sink on',
        b: 'Spread awareness and information',
        c: 'Waste water'
      },
      correctAnswer: 'b'
    },
    {
      question: "What should you do now?",
      answers: {
        a: 'Donate to charitywater.org',
        b: 'Take a long shower',
        c: 'Use plastic water bottles'
      },
      correctAnswer: 'a'
    }
   
  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  

  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton, resultsMessageContainer){
  
    function showQuestions(questions, quizContainer){
      //variables to store the output and the answer choices
      var output = [];
      var answers;
  
      // looping throught each question
      for(var i=0; i<questions.length; i++){
        
        //reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ... add an html radio button (multiple choice buttons)
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
      submitButton.style.visibility = "visible"
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // collects all answer tags from the quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // variable for their score
      var userAnswer = '';
      var numCorrect = 0;
      
      // loop for each question...
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.style.color = "#66fcf1"
      resultsContainer.style.fontSize = "30px"
      resultsContainer.style.fontFamily = "Verdana, serif"
      resultsContainer.style.textAlign = "center"
      resultsMessage.style.color = "#66fcf1"
      resultsMessage.style.fontSize = "30px"
      resultsMessage.style.fontFamily = "Verdana, serif"
      resultsMessage.style.textAlign = "center"
      resultsMessage.style.marginBottom = "50px"
      resultsContainer.innerHTML = 'Score: ' + numCorrect + ' out of ' + questions.length;
      if (numCorrect === questions.length) {

        resultsMessage.innerHTML = "You got a Perfect score!";
      }
      else if (numCorrect >= questions.length/2) { 
        resultsMessage.innerHTML = "Good job!";
      }
      else {
        resultsMessage.innerHTML = "Nice try, try again!";
      }
    }
    showQuestions(questions, quizContainer);
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }

    function playQuiz() {
      generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
      submitButton.style.visibility = "visible"
    }
    

    var facts = ["Many families struggle to live on less than $1.25 a day, often unable to afford the school uniforms, supplies and fees needed for their children to go to school.",
      "In Congo, only one in five people have adequate toilet facilities.",
      "Everyday 51 million Congolese people have no choice but to drink dirty water collected streams and rivers",
      "In Congo the rate of infant mortality is staggering, 168 children in every 1,000 are likely to die before 5 years",
      "The DRC is the most water-rich country in Africa. It accounts for approximately 52 percent of Africa's surface water reserves and 23 percent of Africa's internal renewable water resources."]
    
    function findFact(){
      var randomNum = Math.floor(Math.random() * 5);
      document.getElementById('showFact').innerHTML = facts[randomNum];
    }
    
