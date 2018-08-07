
    let greeting = prompt("Would you like to play a game?");

    if (greeting.toLowerCase() === "yes") {
        let userHealth = 40;
        let grantHealth = 10;
        let userName = prompt("What is your name?");
        let wins = 0;
    
        console.log(`Let's Begin! ${userName}'s Starting Health is ${userHealth}, and Grant's Starting Health is ${grantHealth}`);
    
        while (wins<3 && grantHealth >=0) {
            console.log(`${userName}'s Health: ${userHealth -= Math.floor((Math.random()* 2) + 1)}`);
            console.log(`Grant's Health: ${grantHealth -= Math.floor((Math.random() * 2) + 1)}`);
    
            if (grantHealth <= 0) {
               wins++;
                console.log(`${userName} wins: ${wins}`);
                grantHealth = 10;
             
            } else if (userHealth <= 0) {
                console.log("Game Over - Grant won!");      
        }
       }
       } else {
        console.log("Maybe next time?");
        }
    