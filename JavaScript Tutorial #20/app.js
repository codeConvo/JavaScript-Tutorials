// 1. Create an arrow function 'calcScore' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('TeamA' and 'TeamB'), and then logs the winner to the console, together with the victory points.
// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.

// TEST DATA 1: Team-A score 44, 23 and 71. Team-B score 65, 54 and 49
// To calculate average of 3 values, add them all together and divide by 3
// To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉



const calcScore = (a, b, c) => (a + b + c) / 3;
// console.log(calcScore(3,4,5));


let calTeamA = calcScore(44, 23, 71);
let calTeamB = calcScore(65, 54, 209);
console.log(calTeamA, calTeamB)


const checkWinner = (teamA, teamB) => {
    if (teamA >= 2 * teamB) {
        console.log(`TeamA Win Match ${calTeamA} vs ${calTeamB} `)
    } else if (teamB >= 2 * teamA) {
        console.log(`TeamB Win Match ${calTeamB} vs ${calTeamA} `)
    } else {
        console.log(`No One Wins`)
    }
}

checkWinner(calTeamA, calTeamB)


// TEST DATA 2: Team-A score 85, 54 and 41. Team-B score 23, 34 and 27

calTeamA = calcScore(85, 54, 41);
calTeamB = calcScore(23, 34, 27);

console.log(calTeamA,calTeamB);
checkWinner(calTeamA, calTeamB);
