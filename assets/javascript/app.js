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
                      ["Álex Rodriguez","Barry Bonds","Mickey Mantle","Miguel Cabrera"],
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
 
   var interval;
   var correct = 0;
   var wrong = 0;
   var index = Math.floor(Math.random()*questionArray.length);

$('#start').click(function () {
  setup();
  $('#display').text("1:00");
  $(this).hide();
  countdown();
  displayQuestion();
  clear();
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
};
function setup() {
	index = 0;
	$('#startButton').on('click', function() {
		$(this).hide();
	 	$('#display').text("1:00");
  hideButton();
  countdown();
  loadQuestion(index);
  clear();
	});
}		
function answerCorrect() {
	correct++;
	alert("Correct!");
	$("#userscore").text( correct );
	console.log("correct");
};

function answerWrong() {
	wrong++;
	alert("Incorrect!");
  $("#badScore").text( wrong);
	console.log("wrong");
};

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
    correct=0;
     wrong=0; };
function end() {
	$('#question1').html("<h4>You have answered all of the questions!! <br> If you any incorrect answers, try again and this time take your time.</h4>");
	$("#badScore").text( wrong) ;
	$("#userscore").text(correct );
	 $("#start").show();
    $("#buttonA").hide();
    $("#buttonB").hide();
    $("#buttonC").hide();
    $("#buttonD").hide();
    clearInterval(interval);
	$('#display').text("0:00");
}
function displayQuestion() {
 $("#question1").html( questionArray[index]);
 $("#buttonA").text( answerArray[index][0] );
 $("#buttonB").text( answerArray[index][1] );
 $("#buttonC").text( answerArray[index][2] );
 $("#buttonD").text( answerArray[index][3] );
};
 
setup ();
    $(".answerchoice").click(function() {
if(this.id == 'buttonA') {
 	answerChosen = "A";
   
 } else if(this.id == 'buttonB') {
 	answerChosen = "B";
    
 } else if (this.id == 'buttonC') {
 	answerChosen = "C";
   
 } else if (this.id == 'buttonD') {
 	answerChosen = "D";
  
 } 

       if ((answerChosen == "A") && (answerArray[index][0]==correctAnswers[index]))
       { 
         answerCorrect();
       ;
         }
         else if (answerChosen == "A"){
         answerWrong();
        }
     
            if ((answerChosen == "B") &&(answerArray[index][1]==correctAnswers[index]))
       { 
         answerCorrect();
        ;
         }
         else if (answerChosen == "B"){
         answerWrong();
        }

            if ((answerChosen == "C") && (answerArray[index][2]==correctAnswers[index]))
       { 
         answerCorrect();
        ;
         }
         else if (answerChosen == "C"){
         answerWrong();
       }

         if ((answerChosen == "D") && (answerArray[index][3]==correctAnswers[index]))
       { 
         answerCorrect();
     
         }
         else if (answerChosen == "D"){
         answerWrong();}
 $("#question1").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	displayQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	end();
    }
});
});