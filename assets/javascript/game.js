// Selects a random number between 19 and 120
$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)

$('#randomNumber').text(Random);
// assign a random number to each crystal between 1 and 12   
var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1)

//set variables to 0 
var totalScore= 0; 
var wins= 0;
var losses = 0;

$('#numberWins').text(wins);
$('#numberLosses').text(losses);

function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        totalScore= 0;
        $('#score').text(totalScore);
    } 

function winner(){
alert("Winner, winner, chicken dinner!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
    }

function loser(){
alert ("You lose this round!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
}

$('#green').on ('click', function(){
    totalScore = totalScore + num1;
    console.log("New totalScore= " + totalScore);
    $('#score').text(totalScore); 
        if (totalScore == Random){
        winner();
        }
        else if ( totalScore > Random){
        loser();
        }   
    })  

$('#purple').on ('click', function(){
    totalScore = totalScore + num2;
    console.log("New totalScore= " + totalScore);
    $('#score').text(totalScore); 
        if (totalScore == Random){
            winner();
        }
        else if ( totalScore > Random){
            loser();
        }        
    })  

$('#red').on ('click', function(){
    totalScore = totalScore + num3;
    console.log("New totalScore= " + totalScore);
    $('#score').text(totalScore);
        if (totalScore == Random){
            winner();
        }
        else if ( totalScore > Random){
            loser();
        } 
    }) 

$('#yellow').on ('click', function(){
    totalScore = totalScore + num4;
    console.log("New totalScore= " + totalScore);
    $('#score').text(totalScore); 

        if (totalScore == Random){
            winner();
        }
        else if ( totalScore > Random){
            loser();
        }
    });   
}); 