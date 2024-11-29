// HOW NESTED IF STATEMWNT CAN BE USED FOR GAME DEVELOPMENT TO CHECK LEVELS AND SCORES
// STEP 1: level unlocking
const playerLevel = 5;
const playerScore = 1000;
const requuireScore = 500;
if (playerLevel >= 5){
    if (playerScore >= requuireScore){
        console.log("Level 6 unlock!");
    }
}