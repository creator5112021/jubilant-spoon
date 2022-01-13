player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")

number1 = document.getElementById("number1").innerHTML = number1
number2 = document.getElementById("number2").innerHTML = number2

player1_score = 0
player2_score = 0

 document.getElementById("player1_score").innerHTML = player1_score
 document.getElementById("player2_score").innerHTML = player2_score

 document.getElementById("player_question").innerHTML = "Question turn ="+player1_name
 document.getElementById("player_answer").innerHTML = "Answer turn ="+player2_name

 function send() {
 header = "<center> <h1>Q. "+number1+" × "+number2+ "</h1>"
 input = "<br> Answer <input id='answer'>"
 button = "<br> <br> <button class='btn btn-success' onclick='check()'>Check</button> </center>"
 row = header + input + button;

 document.getElementById("output").innerHTML = row;
}