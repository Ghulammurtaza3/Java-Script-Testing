//   Rock , paper, scissors logic 
     function rps(player1, player2) {

       if ( player1 === "rock" && player2 === "paper") return "player2";
       if (player1 === "paper" && player2 === "rock") return "player1";
       if (player1 === "scissor" && player2 === "rock" ) return "player2";
       if (player1 === "rock" && player2 === "scissor") return "player1";
       if (player1 === "scissor" && player2 === "paper") return "player1";
       if (player1 === "paper" && player2 === "scissor") return "player2";

       return "draw";
       
       }
       
     console.log(rps("rock", "rock" ));