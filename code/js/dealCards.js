function dealtCardsAndSorted(){
//making the cards array
const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13];
//making a copy of the array so splice doesnt permanently alter the intial array
const cardsCopy= Array.from(cards);

function dealCards(cardsCopy){
    
        const randomNumber = Math.floor(Math.random() * cardsCopy.length);

        const CardsSelected = cardsCopy[randomNumber];
        //making it so theres in no duplicates when the cards are handed out
        cardsCopy.splice(randomNumber, 1);

        return CardsSelected;
    }

   
    
const card1 = dealCards(cardsCopy);
const card2 = dealCards(cardsCopy);
const card3 = dealCards(cardsCopy);
const card4 = dealCards(cardsCopy);
const card5 = dealCards(cardsCopy);
const card6 = dealCards(cardsCopy);
const card7 = dealCards(cardsCopy);
const card8 = dealCards(cardsCopy);
const card9 = dealCards(cardsCopy);
const card10 = dealCards(cardsCopy);

var playerCards = [card1, card3, card5, card7, card9];
var aiCards =  [card2, card4, card6, card8, card10];

//sorting cards from lowest to highest 
playerCards.sort(function(a,b){return a - b});
aiCards.sort(function(a,b){return a - b});

console.log("card selected for player is " +playerCards);
console.log("card selected for ai is " +aiCards);

//so playercards and aicards can be used in different functions
return {playerCards , aiCards};
}



function playerSelectsTheirCardAndPlays(playerCards){

        

      while(true){  
        chosenCard = parseInt(prompt("These are your cards, "+playerCards+ " Select a card between 1-13: "));
        //this doesnt work
        if (chosenCard === null) {
            console.log("User canceled. Exiting the game.");
            return null;
          }
      
          
        //for readability purposes , making so the card chosen has to be not null and it has to be included in the players cards
        const validCardChosen = !isNaN(chosenCard)&& playerCards.includes(chosenCard);

        if(validCardChosen){
            const cardIndex = playerCards.indexOf(chosenCard);
            playerCards.splice(cardIndex, 1);
            console.log("You played:", chosenCard);
            console.log("Your updated hand:", playerCards);
            break;
          } else {
            console.log("Invalid card. Please select a card from your hand.");
          } 
        }
        return chosenCard;
          
        }



function aiSelectsTheirCard(aiCards){
    
        const aiCardRandomNumber = (Math.floor(Math.random() * aiCards.length));
         aiCardPlayed = aiCards[aiCardRandomNumber];
            aiCards.splice(aiCardRandomNumber, 1);
            console.log("Computer played:", aiCardPlayed);
            console.log("AI's updated hand:", aiCards);

            return aiCardPlayed;
        }

        function mainGameLoop() {
        
                function determineTurnWinner() {
        
                  // if((playerTurns < 5 && playerTurns >= 0) || (aiTurns < 5 && aiTurns >= 0)){
                 
                         if (chosenCard > aiCardPlayed) {
                           console.log(`Player's card: ${chosenCard}' | AI's card: ${aiCardPlayed}`);
                             console.log("Player wins the round!");
                             currentWinner = 'player';
                         } else if (aiCardPlayed > chosenCard) {
                           console.log(`Player's card: ${chosenCard}' | AI's card: ${aiCardPlayed}`);
                             console.log("AI wins the round!");
                             currentWinner = 'ai';
                         }
                 
                       }
                     //}
        
                     function newRound(){
              
                      // Update rounds when both player and AI have no turns left
                      rounds++;
                      // Reset everything for the next round
                      console.log(`Round number: ${rounds}`);
                      playerTurns = 5;
                      aiTurns = 5; 
                      currentWinner = null;
                      var newHand = dealtCardsAndSorted();
                      playerCards = newHand.playerCards;
                      aiCards = newHand.aiCards;
                      
              }


              function checkWhoGoesFirst(){
                //if round is divided by 2 and has a remainder(if its odd), player goes fisrt, even ai goes first
                var playerGoesFirst = (rounds % 2) == 1;
                var aiGoesFirst = (rounds % 2) == 0;

                
                if (playerGoesFirst) {
                    playerTurns--;
                    chosenCard = playerSelectsTheirCardAndPlays(playerCards);
            
                    if (playerTurns < aiTurns) {
                        // once player takes their turn, ai will then choose theirs
                        aiTurns--;
                        aiCardPlayed = aiSelectsTheirCard(aiCards);
                    }
                }
            
                // if rounds even ai goes first, it's the same as the above code just vice versa
                if (aiGoesFirst) {
                    aiTurns--;
                    aiCardPlayed = aiSelectsTheirCard(aiCards);
            
                    if (playerTurns > aiTurns) {
                        playerTurns--;
                        chosenCard = playerSelectsTheirCardAndPlays(playerCards);
                    }
                }
              }
        
        
        
                var rounds = 1;
                var playerTurns = 5;
                var aiTurns = 5;
                var { playerCards, aiCards } = dealtCardsAndSorted();
                var currentWinner = null;
               
            
                // calling function to see who goes first
                checkWhoGoesFirst();
            
                while (rounds <= 3) {
                  
                   if((playerTurns < 5 && playerTurns >= 0) || (aiTurns < 5 && aiTurns >= 0)){
                   determineTurnWinner();
                }
                if(playerTurns == 0 && aiTurns == 0){
                  newRound();
                  if(rounds <= 3)
                  checkWhoGoesFirst();
                }
        
                  chosenCard, aiCardPlayed;
        
                    if (currentWinner == 'player') {
                        playerTurns--;
                        playerSelectsTheirCardAndPlays(playerCards);
            
                        if (playerTurns < aiTurns) {
                            // once player takes their turn, ai will then choose theirs
                            aiTurns--;
                            aiSelectsTheirCard(aiCards);
                        }
                    }
            
                    if (currentWinner == 'ai') {
                        aiTurns--;
                        aiSelectsTheirCard(aiCards);
            
                        if (playerTurns > aiTurns) {
                            playerTurns--;
                            playerSelectsTheirCardAndPlays(playerCards);
                        }
                    }
            
                    // using function to show who won the card battle
                   // determineTurnWinner(chosenCard, aiCardPlayed);
                   // console.log("player turns" + playerTurns + " aiTurns " + aiTurns);
            
                   
            
                    
      }
    }
            
            // Initial game setup
            mainGameLoop();

  
 /* function mainGameLoop() {

    function determineTurnWinner() {

      // if((playerTurns < 5 && playerTurns >= 0) || (aiTurns < 5 && aiTurns >= 0)){
     
             if (chosenCard > aiCardPlayed) {
               console.log(`Player's card: ${chosenCard}' | AI's card: ${aiCardPlayed}`);
                 console.log("Player wins the round!");
                 currentWinner = 'player';
             } else if (aiCardPlayed > chosenCard) {
               console.log(`Player's card: ${chosenCard}' | AI's card: ${aiCardPlayed}`);
                 console.log("AI wins the round!");
                 currentWinner = 'ai';
             }
     
           }
         //}

         function newRound(){
  
         
         // Update rounds when both player and AI have no turns left
         
         rounds++;
          // Reset everything for the next round
          console.log(`Round number: ${rounds}`);
          playerTurns = 5;
          aiTurns = 5; 
          currentWinner = null;
          var newHand = dealtCardsAndSorted();
          playerCards = newHand.playerCards;
          aiCards = newHand.aiCards;
         
  }



    var rounds = 1;
    var playerTurns = 5;
    var aiTurns = 5;
    var { playerCards, aiCards } = dealtCardsAndSorted();
    var currentWinner = null;
   

    // making so if rounds are odd player goes first, if even ai goes first
   
    while (rounds <= 3){

      var playerGoesFirst = (rounds % 2) == 1;
      var aiGoesFirst = (rounds % 2) == 0;
  
      if (playerGoesFirst) {
          playerTurns--;
          chosenCard = playerSelectsTheirCardAndPlays(playerCards);
  
          if (playerTurns < aiTurns) {
              // once player takes their turn, ai will then choose theirs
              aiTurns--;
              aiCardPlayed = aiSelectsTheirCard(aiCards);
          }
          determineTurnWinner();
      }
  
      // if rounds even ai goes first, it's the same as the above code just switched
      if (aiGoesFirst) {
          aiTurns--;
          aiCardPlayed = aiSelectsTheirCard(aiCards);
  
          if (playerTurns > aiTurns) {
              playerTurns--;
              chosenCard = playerSelectsTheirCardAndPlays(playerCards);
          }
          determineTurnWinner();
      }
  

      
     // if((playerTurns < 5 && playerTurns >= 0) || (aiTurns < 5 && aiTurns >= 0)){
     // if(playerTurns-- && aiTurns--){
      
    //}
    if(playerTurns==0 && aiTurns == 0){
      newRound();
      console.log("NEW ROUND works");
    }

      chosenCard, aiCardPlayed;

        if (currentWinner == 'player') {
            playerTurns--;
            playerSelectsTheirCardAndPlays(playerCards);

            if (playerTurns < aiTurns) {
                // once player takes their turn, ai will then choose theirs
                aiTurns--;
                aiSelectsTheirCard(aiCards);
            }
            determineTurnWinner();
        }

        if (currentWinner == 'ai') {
            aiTurns--;
            aiSelectsTheirCard(aiCards);

            if (playerTurns > aiTurns) {
                playerTurns--;
                playerSelectsTheirCardAndPlays(playerCards);
            }
            determineTurnWinner();
        }

        // using function to show who won the card battle
       // determineTurnWinner(chosenCard, aiCardPlayed);
        console.log("player turns " + playerTurns + " aiTurns " + aiTurns);

       

        
    }
}


// Initial game setup
mainGameLoop();

  */