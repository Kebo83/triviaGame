$(document).ready(function(){ 

   var questionArray =["Which Diamondback pitcher won the Cy Young Award in the National League for the Diamondbacks, for four consecutive years from 1999 through 2002?", 
                        "What year did the Arizona Diamondbacks win the World Series?", 
                        "Who had the winning hit in th Arizona Diamondbacks game 7 of the World Series?",
                        "Who was the winning pitcher for Arizona Diambacks game 7 or the World Series?",
                        "Who owns the MLB homerun record?",
                        "Who was the last player to win the MLB Triple Crown Award?",
                        "Which MLB team has the most World Series Victories?",
                        "What MLB pitcher owns the record MLB wins?",
                        "Which college football team has the most National Titles?",
                        "Which team is not a member of the colllege football South Eastern Coference (SEC)?",
                        "Which quaterback didn't play for the University of Alabama Football team?",
                        "Which hockey player has the most goals in a career?",
                        "Which NHL team has the most Stanely Cup wins?",
                        "Which NHL goalie has the most saves in a career?",
                        "What NBA player has the career record for points?",
                        "What NBA player has the record for the most championships in a career?",
                        "Which NBA team has the most NBA chamionships?",
                        "Which PGA golfer has the most career wins?",
                        "Which PGA golfer has the most PGA Major Titles?",
                        "Which  soccer team has the most FIFA World Cups?" ];
   
   var answerArray = [["Randy Johnson", "Curt Schilling","Byung-hyun Kim","Max Scherzer"],
                      ["2000","1998","2001","2004"],
                      ["Luis Gonzalez","Paul Goldschmidt","Craig Counsell","Steve Finley"],
                      ["Curt Schilling","Randy Johnson","Brandon Webb","Byung-hyun Kim"],
                      ["Hank Arron", "Barry Bonds", "Babe Ruth","Willie Mays"],
                      ["Álex Rodríguez","Barry Bonds","Mickey Mantle","Miguel Cabrera"],
                      ["Boston Red Sox", "St. Louis Cardinals", "New York Yankees","New York Giants"],
                      ["Cy Young", "Walter Johnson","Nolan Ryan","Greg Maddux"],
                      ["The Ohio State University", "The University of Alabama", "Notre Dame University", "Penn State University"],
                      ["The University of Alabama", "Mississippi State University","The University of Texas", "Arkansas University"],
                      ["Bart Starr", "Joe Namath", "Kenny Stabler", "Brett Farve"],
                      ["Wayne Gretzky", "Gordie Howe","Brett Hull","Jaromir Jagr"],
                      ["Detroit Red Wings","Toronto Maple Leafs:","Chicago Blackhawks","Montreal Canadiens"],
                      ["Patrick Roy","Terry Sawchuk","Martin Brodeur","Jacques Plante"],
                      ["Kobe Bryant","Michael Jordan","Kareem Abdul-Jabbar","LeBron James"],
                      ["Kobe Bryant","Michael Jordan","Bill Russell","Kareem Abdul-Jabbar"],
                      ["Golden State Warriors","Chicago Bulls","Los Angeles Lakers","Boston Celtics"],
                      ["Phil Mickelson","Arnold Palmer","Tiger Woods","Sam Snead"],
                      ["Jack Nicklaus", "Tiger Woods","Walter Hagen","Phil Mickelson"],
                      ["Brazil","Germany","USA","France"],
                      ];
   var correctAnswers = ["Randy Johnson",
                         "2001", 
                         "Luis Gonzalez",
                         "Randy Johnson",
                         "Barry Bonds",
                         "Miguel Cabrera",
                         "New York Yankees",                         
                         "Cy Young",
                         "The University of Alabama",
                         "The University of Texas",
                         "Brett Farve",
                         "Wayne Gretzky",
                         "Montreal Canadiens",
                         "Martin Brodeur",
                         "Kareem Abdul-Jabbar",
                         "Bill Russell",
                         "Boston Celtics",
                         "Sam Snead",
                         "Jack Nicklaus",
                         "Brazil",
                        ];
   var userChoice ;
   var interval;
   var correct = 0;
   var wrong = 0;
   var answerChosen=[];
   var selectedQanswers=[];
   var index = Math.floor(Math.random()*questionArray.length);

$('#start').click(function () {
  $('#display').text("1:00");
  hideButton();
  countdown();
  displayQuestion();
  clear();

  console.log(index);
  
 
 
});


function countdown() {
  clearInterval(interval);
  interval = setInterval( function() {
      var timer = $('#display').html();
      timer = timer.split(':');
      var minutes = timer[0];
      var seconds = timer[1];
      seconds -= 1;
      if (minutes < 0) return;
      else if (seconds < 0 && minutes != 0) {
          minutes -= 1;
          seconds = 59;
      }
      else if (seconds < 10 && length.seconds != 1) seconds = '0' + seconds;

      $('#display').html(minutes + ':' + seconds);

      if (minutes == 0 && seconds == 0){ clearInterval(interval);
      timeup();}
  }, 1000);
}

function answerCorrect() {
	correct++;
  $("#userscore").text(correct);
	alert("Correct!");
  displayQuestion();
	console.log("correct");
}

function answerWrong() {
	wrong++;
  $("#badScore").text(wrong);
	alert("Incorrect!");
  displayQuestion();
	console.log("wrong");
}

  function hideButton(){$("#start").hide();};

  function timeup(){
    $("#start").show();
    $("#question1").html("<h4> TIME IS UP </h4>");
    $("#buttonA").hide();
    $("#buttonB").hide();
    $("#buttonC").hide();
    $("#buttonD").hide();

  };

  function clear(){
   $("#buttonA").show();
    $("#buttonB").show();
    $("#buttonC").show();
    $("#buttonD").show();
    $("#badScore").empty();
    $("#userscore").empty();
     correct =0;
     console.log(correct);

    //  var wrong = 0;
    //  var answerChosen="";
    //  var checkAnswer="";
  };


function displayQuestion() {
	index = Math.floor(Math.random()*questionArray.length);
for(var i = 0; i <= index; i++)
	var question = questionArray[index];
  
		$("#question1").html("<h2>" + question + "</h2>");
		// for(var i = 0; i <= index; i++)
 var selectedQanswers= answerArray[index];
 var checkAnswer = correctAnswers[index]
 
 console.log(selectedQanswers);
 console.log(index); 


 $("#buttonA").text( selectedQanswers[0] );
 $("#buttonB").text( selectedQanswers[1] );
 $("#buttonC").text( selectedQanswers[2] );
 $("#buttonD").text( selectedQanswers[3] );
//  var answerChosen = selectedQanswers[0];
 

    $(".answerchoice").click(function() {
      if(this.id == 'buttonA') {
 	answerChosen = selectedQanswers[0];
 } else if(this.id == 'buttonB') {
 	answerChosen = selectedQanswers[1];
 } else if (this.id == 'buttonC') {
 	answerChosen = selectedQanswers[2];
 } else if (this.id == 'buttonD') {
 	answerChosen = selectedQanswers[3];
 } 

       if (answerChosen == checkAnswer){ 
         answerCorrect();
        alert("NICE");
         
         }
         else if (answerChosen != checkAnswer){
         answerWrong();
        ("NOT NICE")
console.log (answerChosen);
 } 
 	console.log (answerChosen);


    });
    console.log (answerChosen);
};
console.log (answerChosen);
});
console.log (answerChosen);

      //  });
    // });
    // $("#buttonB").click(function () {
    //   var userChoice=selectedQanswers[1];
    //    if (userChoice == correctAnswers[index]){ 
    //      $("#userscore").text(correct++);
    //      console.log("Correct");
    //        $(userChoice).val(null);
    //      $(index).val(0);
    //      nextQuestion();
    //      }
    //     else{
    //      $("#badScore").text(wrong++);
    //      console.log("Wrong");
    //        $(userChoice).val(0);
    //      $(index).val(0);
    //      nextQuestion();
    //      };
    // });
    // $("#buttonC").click(function () {
    //   var userChoice=selectedQanswers[2];
    //    if (userChoice == correctAnswers[index]){ 
    //      $("#userscore").text(correct++);
    //      console.log("Correct");
    //        $(userChoice).val(null);
    //      $(index).val(0);
    //      nextQuestion();
    //      }
    //   else{
    //      $("#badScore").text(wrong++);
    //      console.log("Wrong");
    //       $(userChoice).val(0);
    //      $(index).val(0);
    //      nextQuestion();
    //      };
    // });
    // $("#buttonD").click(function () {
    //   var userChoice=selectedQanswers[3];
    //    if (userChoice == correctAnswers[index]){ 
    //      $("#userscore").text(correct++);
    //      console.log("Correct");
    //      $(userChoice).val(null);
    //      $(index).val(0);
    //      nextQuestion();
    //      }
    //     else{
    //      $("#badScore").text(wrong++);
    //      console.log("Wrong");
    //        $(userChoice).val(null);
    //      $(index).val(0);
    //      nextQuestion();
    //      };
    // });

// };
