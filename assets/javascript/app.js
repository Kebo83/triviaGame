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
                      ["The Ohio State University", "The University of Alabama", "Notre Dame University", "Penn State Univeristy"],
                      ["The Univeristy of Alabama", "Mississippi State University","The University of Texas", "Arkansas Univeristy"],
                      ["Bart Starr", "Joe Namath", "Kenny Stabler", "Brett Farve"],
                      ["Wayne Gretzky", "Gordie Howe","Brett Hull","JAROMIR JAGR"]
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
                         "The Univeristy of Alabama",
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
   var userpick ;
   var clockRunning = false;
   var clockrunning;
   
   var clock= {
       t:12000,
       StartTime: 120000,
      reset: function () {
          StartTime:12000,
          $("#display").html("2:00");
          // console.log(clock); 
          },
       start: function(){
           if(!clockRunning) {clockRunning= 
           setInterval(function() {
            clock.t--;
          // $("#display").html(clock.t);
          $("#display").text(clock.count);
                    
            if( clock.t<=0){
             clearInterval( clockRunning);
              $("#display").html("0:00");
               //  console.log(clock.StartTime)
                // console.log(clock.timeConverter());
                // console.log(clock.count());
          
    }}) }
       },
   
  count: function() {
            clock.start();
    // DONE: increment time by 1, remember we cant use "this" here.
    // clock.t--;


    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = clock.timeConverter(clock.t);
    
    // console.log(converted);- THIS WORKS

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  },
  timeConverter: function(t) {

    var minutes = Math.floor(clock.t / 6000);
    var seconds = Math.floor (clock.t- minutes*60);
    // clock.t -100 ;
    // console.log (clock.count()); 

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};

//display question and loop though and display possible answers
function displayQuestion() {
	//generate random index in array
	index = Math.floor(Math.random()*questionArray.length);
	userpick = questionArray[index];

		$("#question1").html("<h2>" + userpick + "</h2>");
		for(var i = 0; i < index; i++) {
			var userChoices = 
      // $("<div>");
			// userChoice.addClass("answerchoice");
			userChoice.html(userpick[i]);
			//assign array position to it so can check answer
			userChoice.attr("data-guessvalue", i);
			$("#answers").append(userChoice);
//		}
}
};

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

     $("#start").on("click", function() {
        //  setInterval 
  clock.count ();
  displayQuestion();

  
});


        
})