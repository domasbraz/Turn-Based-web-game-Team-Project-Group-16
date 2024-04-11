
function displayUnit(unitSlot)
{
    //check if there is a unit in the slot already
    if (document.getElementsByClassName(unitSlot).length > 0)
    {
        removeUnit(document.getElementsByClassName(unitSlot)[0]);
    }

    if (unitSlot.charAt(0) == "p")
    {
        unitSlot = unitSlot.charAt(5);
        document.getElementsByTagName("div")[0].innerHTML += 
        //unit placement
        "<div class='pUnits pUnit" + unitSlot + "' style='grid-area: 10 / " + (67 - ((unitSlot - 1) * 21)) + " / span 70 / span 20;' onclick='selectUnit(this)' selected='false'></div>"
        +
        //max hp
        "<div class='pMaxHp" + unitSlot + " pInfo" + unitSlot + "' style='border: 3px solid red; grid-area: 82 / " + (67 - ((unitSlot - 1) * 21)) + " / span 4 / span 20; background-color: white;'>"
        +
        //current hp
        "<div class='pHp" + unitSlot + "' style='background-color: red; width: 100%; height: 100%; border: none;'></div>"
        +
        "</div>"
        +
        //hp styling
        "<div class='pHpStyle" + unitSlot + " pInfo" + unitSlot + "' style='grid-area: 82 / " + (67 - ((unitSlot - 1) * 21)) + " / span 4 / span 20; box-shadow: inset black 0px 0px 6px 0px; border: none;'></div>"
        +
        //max energy
        "<div class='pMaxEnergy" + unitSlot + " pInfo" + unitSlot + "' style='grid-area: 88 / " + (67 - ((unitSlot - 1) * 21)) + " / span 4 / span 20; border: 3px solid rgb(255, 194, 27); background-color: white;'>"
        +
        //current energy
        "<div class='pEnergy" + unitSlot + "' style='width: 100%; height: 100%; background-color: rgb(255, 191, 0); border: none;'></div>"
        +
        "</div>"
        +
        //energy styling
        "<div class='pEnergyStyle" + unitSlot + " pInfo" + unitSlot + "' style='grid-area: 88 / " + (67 - ((unitSlot - 1) * 21)) + " / span 4 / span 20; box-shadow: inset black 0px 0px 6px 0px; border: none;'></div>"
        ;
    }
    else
    {
        unitSlot = unitSlot.charAt(5);
        document.getElementsByTagName("div")[0].innerHTML += 
        "<div class='eUnits eUnit" + unitSlot + "' style='grid-area: 10 / " + (115 + ((unitSlot - 1) * 21)) + " / span 70 / span 20;'></div>"
        +
        //max hp
        "<div class='eMaxHp" + unitSlot + " eInfo" + unitSlot + "' style='border: 3px solid red; grid-area: 82 / " + (115 + ((unitSlot - 1) * 21)) + " / span 4 / span 20; background-color: white;'>"
        +
        //current hp
        "<div class='eHp" + unitSlot + "' style='background-color: red; width: 100%; height: 100%; border: none;'></div>"
        +
        "</div>"
        +
        //hp styling
        "<div class='eHpStyle" + unitSlot + " eInfo" + unitSlot + "' style='grid-area: 82 / " + (115 + ((unitSlot - 1) * 21)) + " / span 4 / span 20; box-shadow: inset black 0px 0px 6px 0px; border: none;'></div>"
        +
        //max energy
        "<div class='eMaxEnergy" + unitSlot + " eInfo" + unitSlot + "' style='grid-area: 88 / " + (115 + ((unitSlot - 1) * 21)) + " / span 4 / span 20; border: 3px solid rgb(255, 194, 27); background-color: white;'>"
        +
        //current energy
        "<div class='eEnergy" + unitSlot + "' style='width: 100%; height: 100%; background-color: rgb(255, 191, 0); border: none;'></div>"
        +
        "</div>"
        +
        //energy styling
        "<div class='eEnergyStyle" + unitSlot + " eInfo" + unitSlot + "' style='grid-area: 88 / " + (115 + ((unitSlot - 1) * 21)) + " / span 4 / span 20; box-shadow: inset black 0px 0px 6px 0px; border: none;'></div>"
        ;
    }
    
}


//add status effect to given unit
function addStatusFx(unit, status, duration)
{
    let unitClass = unit.getAttribute("class").split(" ")[1];
    let numFx;
    if (unit.hasAttribute("statusEffects"))
    {
        let statusFx = unit.getAttribute("statusEffects").split(" ");
        let newStatus = "";

        for (let index = 0; index < statusFx.length; index++)
        {
            let fx = statusFx[index];
            if (fx == status)
            {
                document.getElementsByClassName(unitClass + "Status")[index].setAttribute("duration", duration);
                if (fx == "poison")
                {
                    addPoisonStack(unitClass);
                }
                if (fx == "bleed")
                {
                    addBleedStack(unitClass);
                }
                
                return true;
            }
            else
            {
                newStatus += fx + " ";
            }
        }
        newStatus += status;
        unit.setAttribute("statusEffects", newStatus);
    }
    else
    {
        unit.setAttribute("statusEffects", status);
    }

    console.log(unit.hasAttribute("effects"));
    if (unit.hasAttribute("effects"))
    {
        numFx = parseInt(unit.getAttribute("effects"));
    }
    else
    {
        numFx = 0;
    }

    if (numFx < 4)
    {
        console.log(numFx);
        let statusIcon = status;

        if (status.slice(-4) == "Buff")
        {
            statusIcon = "buff";
        }
        else if (status.slice(-8) == "Guardian")
        {
            statusIcon = "guardian"
        }
        numFx++;
        let container = document.getElementsByClassName("combatContainer")[0];

        let unitType = unitClass.charAt(0);
        let unitSlot = unitClass.charAt(5);

        if (unitType == "p")
        {
            container.innerHTML += "<div class='" + unitClass + "Status" + " " + unitType + "Info" + unitSlot + " status" + numFx + "' statusType='" + status + "' duration='" + duration + "' style='border: 1px solid blue; grid-area: 94 / " + ((67 - ((unitSlot - 1) * 21)) + (5 * (numFx - 1))) + " / span 8 / span 4;'>"
            +
            "<img width='100%' height='100%' draggable='false' src='png images/status effects/" + statusIcon + ".png'>"
            +
            "</div>";
        }
        else
        {
            container.innerHTML += "<div class='" + unitClass + "Status" + " " + unitType + "Info" + unitSlot + " status" + numFx + "' statusType='" + status + "' duration='" + duration + "' style='border: 1px solid blue; grid-area: 94 / " + ((115 + ((unitSlot - 1) * 21)) + (5 * (numFx - 1))) + " / span 8 / span 4;'>"
            +
            "<img width='100%' height='100%' draggable='false' src='png images/status effects/" + statusIcon + ".png'>"
            +
            "</div>";
        }

        if (status == "poison")
        {
            addPoisonStack(unitClass);
        }
        if (status == "bleed")
        {
            addBleedStack(unitClass);
        }

        unit.setAttribute("effects", numFx);
        replaceAttributes(document.getElementById(unit.id), unit);
    }
    return false;
    
}

function removeStatusFx(unit, status)
{
    let unitInfo = unit.getAttribute("class").split(" ")[1];

    let statusFx = document.querySelectorAll("." + unitInfo + "Status");

    let unitStatusInfo = "";

    statusFx.forEach(function (fx, index)
    {
        if (fx.getAttribute("statusType") == status)
        {
            fx.parentNode.removeChild(fx);
            if (status == "poison")
            {
                let poison = document.getElementsByClassName(unitInfo + "PoisonStacks")[0];
                poison.parentNode.removeChild(poison);
            }
        }
        else
        {
            let fxClass = fx.getAttribute("class").split(" ");
            let inFirstPosition = fxClass[2].charAt(6) == "1";
            let spaceTaken = document.getElementsByClassName("status" + (index + 1)).length > 0;

            if (!inFirstPosition && !spaceTaken)
            {
                let posFx = fx.style.gridArea.split(" / ");

                posFx[1] -= 20;

                fx.style.gridArea = posFx[0] + " / " + posFx[1] + " / " + posFx[2] + " / " + posFx[3];

                if (fx.getAttribute("statusType") == "poison")
                {
                    let poison = document.getElementsByClassName(unitInfo + "PoisonStacks")[0];
                    poison.style.gridArea = posFx[0] + " / " + posFx[1] + " / " + posFx[2] + " / " + posFx[3];
                }

                fx.setAttribute("class", fxClass[0] + " " + fxClass[1] + " status" + (index + 1));
            }
            unitStatusInfo += fx.getAttribute("statusType") + " ";
        }
    });

    if (unitStatusInfo.length > 0)
    {
        unit.setAttribute("statusEffects", unitStatusInfo);
    }
    else
    {
        unit.removeAttribute("statusEffects");
    }

    let numFx = parseInt(unit.getAttribute("effects"));
    numFx--;
    unit.setAttribute("effects", numFx);
}

function addPoisonStack(unitClass)
{
    let poison = document.getElementsByClassName(unitClass + "PoisonStacks");

    if (poison.length > 0)
    {
        let stacks = parseInt(poison[0].textContent);

        stacks++;

        poison[0].textContent = stacks;
    }
    else
    {
        let unitType = unitClass.charAt(0);

        let poisonFx = document.querySelector("." + unitClass + "Status[statustype='poison']");

        let position = poisonFx.style.gridArea;

        let container = document.getElementsByClassName("combatContainer")[0];

        container.innerHTML += "<div class='" + unitClass + "PoisonStacks " + unitType + "Info" + unitClass.charAt(5) + "' style='grid-area:" + position + "'>1</div>";
    }
}

function addBleedStack(unitClass)
{
    let bleed = document.getElementsByClassName(unitClass + "BleedStacks");

    if (bleed.length > 0)
    {
        let stacks = parseInt(bleed[0].textContent);

        stacks++;

        bleed[0].textContent = stacks;
    }
    else
    {
        let unitType = unitClass.charAt(0);

        let bleedFx = document.querySelector("." + unitClass + "Status[statustype='bleed']");

        let position = bleedFx.style.gridArea;

        let container = document.getElementsByClassName("combatContainer")[0];

        container.innerHTML += "<div class='" + unitClass + "BleedStacks " + unitType + "Info" + unitClass.charAt(5) + "' style='grid-area:" + position + "'>1</div>";
    }
}

//switches between card gui
//TODO: renamining
function switchGuiBot(type)
{

    var botGUI1 = document.querySelectorAll(".b1GUI");
    var botGUI2 = document.querySelectorAll(".b2GUI");

    //shows combat
    if (type == "combat")
    {
        botGUI1.forEach(function(element) 
        {
            element.style.display = "none";
        });

        botGUI2.forEach(function(element)
        {
            element.style.display = "block";
        });
        document.getElementsByClassName("enemyInfo")[0].style.display = "none";
        //TODO: re-implement enemy info
    }
    //shows cards
    else if (type = "cards")
    {
        botGUI2.forEach(function(element)
        {
            element.style.display = "none";
        });

        botGUI1.forEach(function(element) 
        {
            element.style.display = "block";
        });
    }
    else
    {
        //not working 😊
        if (botGUI1[0].style.display != "none")
        {
            botGUI1.forEach(function(element) 
            {
                element.style.display = "none";
            });

            botGUI2.forEach(function(element)
            {
                element.style.display = "block";
            });
        }
        else
        {
            botGUI2.forEach(function(element)
            {
                element.style.display = "none";
            });

            botGUI1.forEach(function(element) 
            {
                element.style.display = "block";
            });
        }
    }

    deSelectUnit();
}

function hideGuiBot()
{
    deSelectUnit();
    var botGUI1 = document.querySelectorAll(".b1GUI");
    var botGUI2 = document.querySelectorAll(".b2GUI");
    botGUI1.forEach(function(element) 
    {
        element.style.display = "none";
    });
    botGUI2.forEach(function(element)
    {
        element.style.display = "none";
    }); 
}

var unitSelected = false;

//default unit info (unselected unit tooltip)
function unitInfo()
{
    if (!unitSelected)
    {
        let textBox = document.getElementsByClassName("statBoxText")[0];
        textBox.textContent = "Select a Unit";
        textBox.style.textAlign = "center";
        textBox.style.fontSize = "20px";
        textBox.style.fontWeight = "bold";
    }
}

unitInfo();


//function made by Aaron Smyth
function dealCards()
{
    //making the cards array
    const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13];
    //making a copy of the array so splice doesnt permanently alter the intial array
    const cardsCopy= Array.from(cards);
    
    function dealCards(cardsCopy)
    {
    
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
    const card11 = dealCards(cardsCopy);
    const card12 = dealCards(cardsCopy);
    const card13 = dealCards(cardsCopy);
    const card14 = dealCards(cardsCopy);
    
    var playerCards = [card1, card3, card5, card7, card9, card11, card13];
    var aiCards =  [card2, card4, card6, card8, card10, card12, card14];
    
    //sorting cards from lowest to highest 
    playerCards.sort(function(a,b){return a - b});
    aiCards.sort(function(a,b){return a - b});
    
    console.log("card selected for player is " +playerCards);
    console.log("card selected for ai is " +aiCards);
    
    //so playercards and aicards can be used in different functions
    return {playerCards , aiCards};

}

//sets cards in play
var cards = dealCards();
var playerPlayed;
var aiPlayed;

//displays the player cards in their hand
function displayCards()
{
    let hand = document.getElementsByClassName("hand")[0];

    let playerHand = cards.playerCards;

    for (let x = 0; x < playerHand.length; x++)
    {
        hand.innerHTML += "<div class='card' onclick='playCard(this)'></div>";
        let pCards = document.getElementsByClassName("card");
        pCards[x].innerHTML = "<img draggable='false' width='100%' height='100%' src='png images/cards/" + playerHand[x] + "_sword_card.png'>";
    }

    
}

displayCards();


//function made by Aaron Smyth for ai selecting a card
//Domas Brazdeikis: made slight adjustments to fit gui
function aiCard(aiCards)
{
    //delayed execution to more easily display what is happening
    setTimeout(function()
    {
        const aiCardRandomNumber = (Math.floor(Math.random() * aiCards.length));
        aiPlayed = aiCards[aiCardRandomNumber];
        aiCards.splice(aiCardRandomNumber, 1);

        //display the card that ai has chosen
        let cardPlayed = document.getElementsByClassName("cardEnemy")[0];
        cardPlayed.innerHTML = "<img draggable='false' height='100%' width='100%' src='png images/cards/" + aiPlayed + "_sword_card.png'>";
        cardPlayed.style.display = "block";

        startDuel();
        
    },
    1000
    );
    
}


//playing cards from hand
function playCard(card)
{
    //gets the child of the element that called the funtion, the child element should always be an <img> element with a source
    //we use the image source to identify the value of the card
    //image for the cards is set on line: 324
    let chosenCard = card.children[0];

    image = chosenCard.getAttribute("src");

    let cardPlayed = document.getElementsByClassName("cardPlayed")[0];
    
    //takes the card that was selected and displays it as the played card
    cardPlayed.innerHTML = "<img draggable='false' height='100%' width='100%' src='" + image + "'>";

    //makes the card in play vissible
    cardPlayed.style.display = "block";

    //removes the element, aka removes card from hand
    let hand = document.getElementsByClassName("hand")[0]
    hand.removeChild(card);
    //hides hand to prevent any other cards from being played during dueling process
    hand.style.display = "none";

    //set card value, only works if there are no other numeric values in the file or directory names
    playerPlayed = parseInt(image.replaceAll(/[^0-9]/g,""));

    startDuel();

}


//determines who won the duel
function showResult(won)
{
    //add 1 second before declaring result so it doesn't appear so suddenlly
    setTimeout(function()
    {
        /* let result = document.getElementsByClassName("gameMsg")[0];
        let resultText = result.children[0];

        result.style.display = "block"; */

        //displays whether player has won or lost duel
        if (won)
        {
            /* resultText.textContent = "Duel Won!";
            resultText.style.color = "rgb(0, 255, 0)"; */
            showGameMessage("Duel Won!", "rgb(0, 255, 0)");
            wonLast = "player";
        }
        else
        {
            /* resultText.textContent = "Duel Lost!";
            resultText.style.color = "rgb(255, 0, 0)"; */
            showGameMessage("Duel Lost!", "rgb(255, 0, 0)");
            wonLast = "ai";
        }

        //hide message declaring winner after 3 seconds
        setTimeout(function()
        {
            //result.style.display = "none";
            hideGameMessage();
            if (won)
            {
                switchGuiBot("combat");
            }
            else
            {
                aiPlayUnit();
            }
        },
        3000
        );
    },
    1000
    );
    
}



var round = 1;

var gameActive = true;

var wonLast;

var winner;

var playedFirst = null;

//dueling process
function startDuel()
{
    //this is used for ending the game in the event that all units are defeated from either side
    //TODO: implementation
    if (winner !== undefined || winner !== null)
    {

        //multiple condition set to determine who gets to act first
        if ((round % 2 == 0 && wonLast != "player" && isNaN(aiPlayed)) || (wonLast == "ai" && isNaN(aiPlayed)))
        {
            aiCard(cards.aiCards);
            playedFirst = "ai";
            
            //there is a rule that states that a trump card cannot be defended, in other words, whoever places a trump card first guarantees victory for that duel
            //trump card is set to value of 13 by default
            //value incremented to prevent oponent from blocking with their trump card
            if (aiPlayed == 13)
            {
                aiPlayed++;
            }
        }
        //read lines: 449-451
        else if (playerPlayed == 13)
        {
            playerPlayed++;
        }

        //checks if it is safe to reveal player hand, this is prevent a bug from happening if players play a card before ai gets to place theirs down
        if ((isNaN(playerPlayed) && ((round % 2 == 1 && wonLast != "ai") || (wonLast == "player"))) || (isNaN(playerPlayed) && !isNaN(aiPlayed)))
        {
            setTimeout(function ()
            {
                document.getElementsByClassName("hand")[0].style.display = "block";
            },
            500
            );
        }

        //checks if both player and ai have played their card
        if (!isNaN(playerPlayed) && !isNaN(aiPlayed))
        {
            //winning conition: whoever has the higher card
            let condition;
            if (playedFirst == "ai")
            {
                condition = playerPlayed >= aiPlayed;
            }
            else
            {
                condition = playerPlayed > aiPlayed;
            }
            showResult(condition);
        }
        //tells ai to play their card if they havent already and the player has
        else if (!isNaN(playerPlayed))
        {
            aiCard(cards.aiCards);
        }
    }
    else
    {
        endCombat();
    }
}

function endCombat()
{
    /* let result = document.getElementsByClassName("gameMsg")[0];
    let resultText = result.children[0];

    result.style.display = "block"; */

    if (winner == "player")
    {
        /* resultText.textContent = "Victory!";
        resultText.style.color = "rgb(0, 255, 0)"; */
        showGameMessage("Victory!", "rgb(0, 255, 0)");
    }
    else
    {
        /* resultText.textContent = "Defeat!";
        resultText.style.color = "rgb(255, 0, 0)"; */
        showGameMessage("Defeat!", "rgb(255, 0, 0)");
    }
        
}

//values set to 1 for failsafe purposes
var playerTurns = 1;
var aiTurns = 1;

function replaceAttributes(oldUnitInfo, newUnitInfo) 
{
    let newInfo = newUnitInfo.attributes;
    for (let x = 0; x < newInfo.length; x++) 
    {
        let info = newInfo[x];
        if (!oldUnitInfo.hasAttribute(info.name) || oldUnitInfo.getAttribute(info.name) !== info.value) 
        {
            oldUnitInfo.setAttribute(info.name, info.value);
        }
    }
}

//performes the next duel
function nextDuel(unit)
{
    if (unit != undefined)
    {
        replaceAttributes(document.getElementById(unit.id), unit);
    }
    remainingTurns();
    
    playedFirst = null;
    switchGuiBot("cards");
    document.getElementsByClassName("hand")[0].style.display = "none";
    //hides the previous cards in play
    document.getElementsByClassName("cardPlayed")[0].style.display = document.getElementsByClassName("cardEnemy")[0].style.display = "none";

    //TODO: might be unecessary to use a seperate function
    resetPlayed();

    let aiHasUnits = document.getElementsByClassName("eUnits").length > 0;
    let playerHasUnits = document.getElementsByClassName("pUnits").length > 0;

    if (aiHasUnits && playerHasUnits)
    {
        //checks if either side is out of turns
        if (playerTurns == 0 && aiTurns == 0)
        {
            nextRound();
        }
        else if (aiTurns == 0 && playerTurns > 0)
        {
            switchGuiBot("combat");
        }
        else if (playerTurns == 0 && aiTurns > 0)
        {
            aiPlayUnit();
        }
        else
        {
            startDuel();
        }
    }
    else if (playerHasUnits)
    {
        winner = "player";
        endCombat();
    }
    else
    {
        winner = "ai";
        endCombat();
    }

    
}

//commences next round, hands reset
function nextRound()
{
    round++;
    console.log("round: " + round);
    resetHand();
    cards = dealCards();
    displayCards();
    setTurns();
    wonLast = null;
    regenEnergy();
    postRoundConditionS();
    startDuel();
}

function regenEnergy()
{
    let units = document.querySelectorAll(".pUnits");

    units.forEach(function (unit)
    {
        let energy = parseInt(unit.getAttribute("energy"));

        let regen = parseInt(unit.getAttribute("energyRegen"));

        energy += regen;

        unit.setAttribute("energy", energy);

        updateUnitEnergy(unit);
    })
}

//removes any card elements still present in player's hand
function resetHand()
{
    let hand = document.querySelectorAll(".card");

    hand.forEach(function (card)
    {
        //takes the element's parent to then remove its child which is the same as th element selecting itself
        //this is really stupid but as far as I know removeChild is the only way to remove elements from the document
        card.parentNode.removeChild(card);
    });
}

function resetPlayed()
{
    playerPlayed = aiPlayed = NaN;
}

function createUnit(unitSlot, type, stats, skills)
{
    displayUnit(unitSlot);

    let unit = document.getElementsByClassName(unitSlot)[0];

    if (unitSlot.charAt(0) == "p")
    {
        unit.innerHTML = "<img draggable='false' width='100%' height='100%' src='png images/characters/" + type + "/" + type + ".png'>";
    }
    else
    {
        unit.innerHTML = "<img draggable='false' width='100%' height='100%' src='png images/characters/enemies/" + type + ".png'>";
    }

    let hasSkills = "";
    skills.forEach(function (skill)
    {
        hasSkills += skill + " ";
    });

    unit.setAttribute("skills", hasSkills);

    unit.setAttribute("hp", stats[0]);
    unit.setAttribute("atk", stats[1]);
    unit.setAttribute("def", stats[2]);
    unit.setAttribute("energy", stats[3]);
    unit.setAttribute("maxHp", stats[0]);
    unit.setAttribute("maxEnergy", stats[3]);

    let energyRegen;
    if (stats[4] == undefined || stats[4] == null)
    {
        energyRegen = 25;
    }
    else
    {
        energyRegen = stats[4];
    }
    unit.setAttribute("energyRegen", energyRegen);
    
    unit.setAttribute("type", type);
    unit.setAttribute("id", type + unitSlot.charAt(5));
    
    
}

//selects the unit that called the funtion
function selectUnit(unit)
{
    //checks if cards gui is hidden, gui is hidden once a duel is over
    let duelPhaseOver = document.getElementsByClassName("b2GUI")[0].style.display == "block";

    if(duelPhaseOver && unit.getAttribute("hasTurn") == "true")
    {
        //checks if user is trying to select a unit that is already selected
        if (unit.getAttribute("selected") == "true")
        {
            //do nothing
        }
        //checks if any units are already selected
        else if (!unitSelected)
        {
            //styling changes on unit to clearly see which unit is selected
            unit.style.border = "2px solid green";
            unitSelected = true;
            //set custom "selected" attribute to element for easy identification
            unit.setAttribute("selected", "true");
            showSkills(unit);
        }
        else
        {
            deSelectUnit();   
            selectUnit(unit);
        }
    }
}

//deselects any selected units
function deSelectUnit()
{
    let selectedUnit = document.querySelectorAll(".pUnits");

    selectedUnit.forEach(function(element)
    {
        let isSelected = element.getAttribute("selected");

        //checks if "selected" attribute is set to true
        if (isSelected == "true")
        {
            element.setAttribute("selected", "false");
            element.style.border = "1px solid black";
        }
    }
    );
    document.getElementsByClassName("skillInfo")[0].innerHTML = "";
    deSelectSkills();
    disableTargeting(true);
    disableTargeting(false);
    unitSelected = false;
    hideSkills();
}

//displays unit's skills
function showSkills(unit)
{
    let skills = unit.getAttribute("skills").split(" ");
    let type = unit.getAttribute("type");
    let origin = unit.getAttribute("id");

    for (let x = 0; x <= skills.length - 1; x++)
    {

        if (x < skills.length - 1)
        {
            document.getElementsByTagName("div")[0].innerHTML += 
            "<div selected='false' class='skills skill" + (x + 1) + "' style='grid-area: 125 / " + (21 + (x * 13)) + " / span 15 / span 8;'></div>";
    
            let skillIcon = document.getElementsByClassName("skill" + (x + 1))[0];
            skillIcon.innerHTML = "<img draggable='false' width='100%' height='100%' src='png images/characters/" + type + "/" + type + "S" + skills[x] + ".png'>";
            skillIcon.setAttribute("onclick", "selectSkill(this); " + type + "S" + skills[x] + "(" + origin + ");");
            skillIcon.setAttribute("origin", origin); //might not be needed
        }
        //skip turn skill
        else
        {
            document.getElementsByTagName("div")[0].innerHTML += 
            "<div selected='false' class='skills skill" + (x + 1) + "' style='grid-area: 125 / " + (21 + (x * 13)) + " / span 15 / span 8;'></div>";

            let skillIcon = document.getElementsByClassName("skill" + (x + 1))[0];
            skillIcon.innerHTML = "<img draggable='false' width='100%' height='100%' src='png images/skip button.png'>";
            skillIcon.setAttribute("onclick", "selectSkill(this); skipTurn(" + unit.id + ");");
            skillIcon.setAttribute("origin", origin); //might not be needed
        }
    }


    //get stat attributes from unit
    let atk = unit.getAttribute("atk");
    let hp = unit.getAttribute("hp");
    let def = unit.getAttribute("def");
    let energy = unit.getAttribute("energy");

    let textBox = document.getElementsByClassName("statBoxText")[0];
    //display unit stats
    textBox.innerHTML = "<br>Health: " + hp + "<br>Attack: " + atk + "<br>Defense: " + def + "<br>Energy: " + energy;
    textBox.style.textAlign = "left";
}

function hideSkills()
{
    document.querySelectorAll(".skills").forEach(function (skill)
    {
        skill.parentNode.removeChild(skill);
    });

    unitInfo();
}

var skillSelected = false;

function selectSkill(slot)
{
    if (!skillSelected)
    {
        slot.style.border = "2px solid blue";
        skillSelected = true;
        slot.setAttribute("selected", "true");
    }
    else
    {
        deSelectSkills();
        selectSkill(slot);
    }
}

function deSelectSkills()
{
    let skillIcons = document.querySelectorAll(".skills");

    skillIcons.forEach(function (skill)
    {
        if (skill.getAttribute("selected") == "true")
        {
            skill.style.border = "1px solid black";
            skill.setAttribute("selected", "false");
        }
    });

    skillSelected = false;
    disableTargeting(true);
    disableTargeting(false);
}


function enableTargeting(isEnemy, skill, unitUsed)
{
    if (isEnemy)
    {
        document.querySelectorAll(".eUnits").forEach(function (unit)
        {
            unit.setAttribute("onmouseover", "applyEnemyTarget(this)");
            unit.setAttribute("onmouseout", "removeEnemyTarget(this)");
            unit.setAttribute("onclick", skill + "(this, " + unitUsed + ")");
        });
    }
    else
    {
        document.querySelectorAll(".pUnits").forEach(function (unit)
        {
            if (unit.getAttribute("selected") != "true")
            {
                unit.setAttribute("onmouseover", "applyAllyTarget(this)");
                unit.setAttribute("onmouseout", "removeAllyTarget(this)");
                unit.setAttribute("onclick", skill + "(this, " + unitUsed + ")");
            }
        });
    }
}


function disableTargeting(isEnemy)
{
    if (isEnemy)
    {
        document.querySelectorAll(".eUnits").forEach(function (e)
        {
            /* e.removeEventListener("mouseover");
            e.removeEventListener("mouseout");
            e.removeEventListener("click"); */

            e.setAttribute("onmouseover", "");
            e.setAttribute("onmouseout", "");
            e.setAttribute("onclick", "");
        })
        if (targeting)
        {
            document.querySelectorAll("[target='true']").forEach(function (target)
            {
                removeEnemyTarget(target);
            });
            //loop not entirely neccessary, just a failsafe
        }
    }
    else
    {
        document.querySelectorAll(".pUnits").forEach(function (unit)
        {
            unit.setAttribute("onmouseover", "");
            unit.setAttribute("onmouseout", "");
            if (unit.getAttribute("hasturn") == "true")
            {
                unit.setAttribute("onclick", "selectUnit(this)");
            }
            else
            {
                unit.setAttribute("onclick", "");
            }
        });
        if (targeting)
        {
            document.querySelectorAll("[target='true']").forEach(function (target)
            {
                removeAllyTarget(target);
            });
            //loop not entirely neccessary, just a failsafe
        }
    }

    
}

var targeting = false;

function applyEnemyTarget(target)
{
    target.style.border = "2px solid red";
    targeting = true;
    target.setAttribute("target", "true");

    let atk = target.getAttribute("atk");
    let def = target.getAttribute("def");
    let hp = target.getAttribute("hp");
    let unitInfo = document.getElementsByClassName("enemyInfo")[0];

    unitInfo.innerHTML = "<p>Health: " + hp + "<br>Defense: " + def + "<br>Attack: " + atk + "</p>";
    unitInfo.style.backgroundColor = "grey";
}

function removeEnemyTarget(target)
{
    target.style.border = "1px solid black";
    targeting = false;
    target.setAttribute("target", "false");

    let unitInfo = document.getElementsByClassName("enemyInfo")[0];

    unitInfo.innerHTML = "";
    unitInfo.style.backgroundColor = "";
}

function applyAllyTarget(target)
{
    target.style.border = "2px solid green";
    targeting = true;
    target.setAttribute("target", "true");
}

function removeAllyTarget(target)
{
    target.style.border = "1px solid black";
    targeting = false;
    target.setAttribute("target", "false");
}

function finalAttackCalc(target, skillDmg, poison, bleed, duration)
{
    let hp = parseFloat(target.getAttribute("hp"));
    let def = parseFloat(target.getAttribute("def"));

    if ((def / skillDmg) > 0.7)
    {
        def *= 0.7;
    }

    let finalDmg = skillDmg - def;

    if (hasStatusFx(target, "curse"))
    {
        finalDmg *= 1.1;
    }
    if (hasStatusFx(target, "evasionBuff"))
    {
        let evasionChance = parseFloat(target.getAttribute("evasion"));
        evasionChance = 100 / evasionChance;

        let success = getRndInteger(1, evasionChance) == 1;
        if (success)
        {
            finalDmg = 0;
        }
        if (target.hasAttribute("taunt"))
        {
            let func = window[target.getAttribute("taunt")];
            func(target, success);
        }
    }
    

    target.setAttribute("hp", hp - finalDmg);
    disableTargeting(true);
    deSelectUnit();
    updateUnitHp(target);
    //showDmgDealt(finalDmg);
    if (poison)
    {
        addStatusFx(target, "poison", 99);
    }
    if (bleed)
    {
        addStatusFx(target, "bleed", 99);
    }
    if (finalDmg == 0)
    {
        return showEffect(target, "Evaded", "blue");
    }
    else
    {
        return showEffect(target, finalDmg, "red", duration);
    }
    
}

function showDmgDealt(dmg)
{
    /* let result = document.getElementsByClassName("gameMsg")[0];
    let resultText = result.children[0];

    result.style.display = "block";

    resultText.textContent = dmg + " Damage dealt"
    resultText.style.color = "rgb(255, 0, 0)"; */

    showGameMessage(dmg + " Damage dealt", "rgb(255, 0, 0)");

    //hide message declaring winner after 3 seconds
    setTimeout(function()
    {
        //result.style.display = "none";
        hideGameMessage();
        setTimeout(function()
        {
            nextDuel();
        },
        500 //because of how fast the ai acts, this timeout is needed to distinguish between seperate attacks
        );
        
    },
    3000
    );
}

function showGameMessage(text, colour)
{
    let result = document.getElementsByClassName("gameMsg")[0];
    let resultText = result.children[0];

    result.style.display = "block";

    resultText.textContent = text;
    resultText.style.color = colour;
}

function hideGameMessage()
{
    let result = document.getElementsByClassName("gameMsg")[0];
    result.style.display = "none";
}

function updateUnitHp(unit)
{
    let unitId = unit.getAttribute("class").split(" ")[1];

    let unitType = unitId.charAt(0);

    let unitSlot = unitId.charAt(5);

    //for whatever reason these values were converted to String, which gives inaccurate result in if statement
    let newHp = parseInt(unit.getAttribute("hp"));

    let maxHp = parseInt(unit.getAttribute("maxHp"));


    if (newHp <= 0)
    {
        removeUnitPreconditions(unit);
        removeUnit(unit);
    }
    else
    {
        if (newHp >= maxHp)
        {
            newHp = maxHp;
            unit.setAttribute("hp", newHp);
        }
        else
        {
            newHp = Math.floor((newHp / maxHp) * 100);
        }

        let currentHp = document.getElementsByClassName(unitType + "Hp" + unitSlot)[0];
        
        currentHp.style.width = newHp + "%";
    }
    
}

function updateUnitEnergy(unit)
{

    let unitId = unit.getAttribute("class").split(" ")[1];

    let unitType = unitId.charAt(0);

    let unitSlot = unitId.charAt(5);

    let newEnergy = parseInt(unit.getAttribute("energy"));

    let maxEnergy = parseInt(unit.getAttribute("maxEnergy"));

    if (newEnergy >= maxEnergy)
    {
        newEnergy = maxEnergy;
        unit.setAttribute("energy", newEnergy);
    }
    else if (newEnergy < 0)
    {
        newEnergy = 0;
    }
    
    newEnergy = Math.floor((newEnergy / maxEnergy) * 100);
    

    let currentEnergy = document.getElementsByClassName(unitType + "Energy" + unitSlot)[0];
    
    currentEnergy.style.width = newEnergy + "%";

}

function removeUnit(unit)
{
    
    let unitId = unit.getAttribute("class").split(" ")[1];

    let unitType = unitId.charAt(0);

    let unitSlot = unitId.charAt(5);

    let unitInfo = document.querySelectorAll("." + unitType + "Info" + unitSlot);

    unitInfo.forEach(function (info)
    {
        info.parentNode.removeChild(info);
    })
 
    unit.parentNode.removeChild(unit);


    let remainingUnits = document.querySelectorAll("." + unitType + "Units");

    remainingUnits.forEach(function (remainingUnit, index)
    {
        let inFirstPosition = remainingUnit.getAttribute("class").split(" ")[1].charAt(5) == "1";

        let spaceTaken = document.getElementsByClassName(unitType + "Unit" + (index + 1)).length > 0;

        if (!inFirstPosition && !spaceTaken)
        {
            let positionUnit = remainingUnit.style.gridArea.split(" / ");
            let remainingUnitSlot = remainingUnit.getAttribute("class").split(" ")[1].charAt(5);
            let remainingUnitHp = document.getElementsByClassName(unitType + "MaxHp" + remainingUnitSlot)[0];
            let remainingUnitHpStyle = document.getElementsByClassName(unitType + "HpStyle" + remainingUnitSlot)[0];
            let remainingUnitEnergy = document.getElementsByClassName(unitType + "MaxEnergy" + remainingUnitSlot)[0];
            let remainingUnitEnergyStyle = document.getElementsByClassName(unitType + "EnergyStyle" + remainingUnitSlot)[0];
            let remainingUnitHpcurrent = document.getElementsByClassName(unitType + "Hp" + remainingUnitSlot)[0];
            let remainingUnitEnergycurrent = document.getElementsByClassName(unitType + "Energy" + remainingUnitSlot)[0];
    
            if (unitType == "p")
            {
                positionUnit[1] = parseInt(positionUnit[1]) + 20;
            }
            else
            {
                positionUnit[1] = parseInt(positionUnit[1]) - 20;
            }
    
            let posHp = remainingUnitHp.style.gridArea.split(" / ");
            let posHpStyle = remainingUnitHpStyle.style.gridArea.split(" / ");
            let posEnergy = remainingUnitEnergy.style.gridArea.split(" / ");
            let posEnergyStyle = remainingUnitEnergyStyle.style.gridArea.split(" / ");
    
            remainingUnit.style.gridArea = positionUnit[0] + " / " + positionUnit[1] + " / " + positionUnit[2] + " / " + positionUnit[3];
            remainingUnitHp.style.gridArea = posHp[0] + " / " + positionUnit[1] + " / " + posHp[2] + " / " + posHp[3];
            remainingUnitHpStyle.style.gridArea = posHpStyle[0] + " / " + positionUnit[1] + " / " + posHpStyle[2] + " / " + posHpStyle[3];
            remainingUnitEnergy.style.gridArea = posEnergy[0] + " / " + positionUnit[1] + " / " + posEnergy[2] + " / " + posEnergy[3];
            remainingUnitEnergyStyle.style.gridArea = posEnergyStyle[0] + " / " + positionUnit[1] + " / " + posEnergyStyle[2] + " / " + posEnergyStyle[3];

            let statusFx = document.querySelectorAll("." + unitType + "Unit" + remainingUnitSlot + "Status");
            let posStatus;

            statusFx.forEach(function (fx)
            {
                posStatus = fx.style.gridArea.split(" / ");

                fx.style.gridArea = posStatus[0] + " / " + positionUnit[1] + " / " + posStatus[2] + " / " + posStatus[3];

                let statusValue = fx.getAttribute("class").split(" ")[2];

                fx.setAttribute("class", unitType + "Unit" + (index + 1) + "Status " + unitType + "Info" + (index + 1) + " " + statusValue);

                if (fx.getAttribute("statusType") == "poison")
                {
                    let poison = document.getElementsByClassName(unitType + "Unit" + remainingUnitSlot + "PoisonStacks")[0];

                    poison.style.gridArea = posStatus[0] + " / " + positionUnit[1] + " / " + posStatus[2] + " / " + posStatus[3];

                    poison.setAttribute("class", unitType + "Unit" + (index + 1) + "PoisonStacks " + unitType + "Info" + (index + 1));
                }
            });

            remainingUnit.setAttribute("class", unitType + "Units" + " " + unitType + "Unit" + (index + 1));

            remainingUnitHp.setAttribute("class", unitType + "MaxHp" + (index + 1) + " " + unitType + "Info" + (index + 1));

            remainingUnitHpStyle.setAttribute("class", unitType + "HpStyle" + (index + 1) + " " + unitType + "Info" + (index + 1));

            remainingUnitEnergy.setAttribute("class", unitType + "MaxEnergy" + (index + 1) + " " + unitType + "Info" + (index + 1));

            remainingUnitEnergyStyle.setAttribute("class", unitType + "EnergyStyle" + (index + 1) + " " + unitType + "Info" + (index + 1));

            remainingUnitEnergycurrent.setAttribute("class", unitType + "Energy" + (index + 1));

            remainingUnitHpcurrent.setAttribute("class", unitType + "Hp" + (index + 1));


            let remainingUnitId = remainingUnit.getAttribute("id").slice(0, -1);
            remainingUnit.setAttribute("id", remainingUnitId + (index + 1));

        }
    });

}

function setTurns()
{
    let pUnits = document.querySelectorAll(".pUnits");

    pUnits.forEach(function (unit)
    {
        unit.setAttribute("hasTurn", "true");
    })

    let eUnits = document.querySelectorAll(".eUnits");

    eUnits.forEach(function (unit)
    {
        unit.setAttribute("hasTurn", "true");
    })

    remainingTurns();
}

function remainingTurns()
{
    let pTurns;
    let eTurns;
    pTurns = eTurns = 0;

    let pUnits = document.querySelectorAll(".pUnits");

    pUnits.forEach(function (unit)
    {
        if (unit.getAttribute("hasTurn") == "true")
        {
            pTurns++;
        }
    })

    let eUnits = document.querySelectorAll(".eUnits");

    eUnits.forEach(function (unit)
    {
        if (unit.getAttribute("hasTurn") == "true")
        {
            eTurns++;
        }
    })

    playerTurns = pTurns;
    aiTurns = eTurns;
}

function usedTurn(unit)
{
    unit.setAttribute("hasTurn", "false");
    remainingTurns();
}

//TODO: better user experience
function skipTurn(unit)
{
    usedTurn(unit);
    deSelectUnit();

    /* let result = document.getElementsByClassName("gameMsg")[0];
    let resultText = result.children[0];

    result.style.display = "block";

    resultText.textContent = "Skipped Turn!"
    resultText.style.color = "rgb(255, 255, 255)"; */

    showGameMessage("Skipped  Turn!", "rgb(255, 255, 255)");

    //hide message after 3 seconds
    setTimeout(function()
    {
        //result.style.display = "none";
        hideGameMessage();
        nextDuel();
    },
    3000
    );
}

function postRoundConditionS()
{
    poisonDmg();
    bleedDmg();
    statusDurationDown();
    decreaseCooldowns();
    resetSelection();
}

function statusDurationDown()
{
    let playerUnits = document.querySelectorAll("pUnits");

    playerUnits.forEach(function (unit)
    {
        let unitClass = unit.getAttribute("class").split(" ")[1];
        if (unit.hasAttribute("statusEffects"))
        {
            let statusFx = document.querySelectorAll("." + unitClass + "Status");

            statusFx.forEach(function (fx)
            {
                let duration = parseInt(fx.getAttribute("duration"));

                duration--;

                if (duration < 1)
                {
                    removeEffect(unit, fx.getAttribute("statusType"));
                }
                else
                {
                    fx.setAttribute("duration", duration);
                }
            })
        }
    });

    let enemyUnits = document.querySelectorAll("eUnits");

    enemyUnits.forEach(function (unit)
    {
        let unitClass = unit.getAttribute("class").split(" ")[1];
        if (unit.hasAttribute("statusEffects"))
        {
            let statusFx = document.querySelectorAll("." + unitClass + "Status");

            statusFx.forEach(function (fx)
            {
                let duration = parseInt(fx.getAttribute("duration"));

                duration--;

                if (duration < 1)
                {
                    removeEffect(unit, fx.getAttribute("statusType"));
                }
                else
                {
                    fx.setAttribute("duration", duration);
                }
            })
        }
    });
}

function removeEffect(unit, effect)
{
    window["remove" + effect](unit.id);
}

function removeUnitPreconditions(unit)
{
    checkGuardian(unit);
}

function checkGuardian(unit)
{
    let protectedUnits = document.querySelectorAll("[protected]");

    let unitClass = unit.getAttribute("class").split(" ")[1];

    protectedUnits.forEach(function (protectedUnit)
    {
        let guardian = protectedUnit.getAttribute("protected");

        if (guardian == unitClass)
        {
            protectedUnit.removeAttribute("protected");
        }
    });
}

function resetSelection()
{
    let units = document.querySelectorAll(".pUnits");

    units.forEach(function (unit)
    {
        unit.setAttribute("onclick", "selectUnit(this)");
    });
}

function hasStatusFx(unit, status)
{
    if (unit.hasAttribute("statusEffects"))
    {
        let statusFx = unit.getAttribute("statusEffects").split(" ");

        //statusFx.forEach(function (fx)
        for (let index = 0; index < statusFx.length; index++)
        {
            let fx = statusFx[index];
            
            if (fx == status)
            {
                return true;
            }
        }
    }
    return false;
}

function setCooldown(unit, skill, duration)
{
    if (unit.hasAttribute("cooldowns"))
    {
        let existingCooldowns = unit.getAttribute("cooldowns");
        unit.setAttribute("cooldowns", existingCooldowns += " " + skill);
    }
    else
    {
        unit.setAttribute("cooldowns", skill);
    }

    unit.setAttribute(skill + "CD", duration);
}

function hasCooldown(unit, skill)
{
    if (unit.hasAttribute("cooldowns"))
    {
        let cooldowns = unit.getAttribute("cooldowns").split(" ");

        for (let index = 0; index < cooldowns.length; index++)
        {
            let cooldown = cooldowns[index];
            if (cooldown == skill)
            {
                return true;
            }
        }
        
    }
    return false;
}

function decreaseCooldowns()
{
    let units = document.querySelectorAll("[cooldowns]");

    units.forEach(function (unit)
    {
        let cooldowns = unit.getAttribute("cooldowns").split(" ");

        let newCooldowns = "";

        cooldowns.forEach(function (cooldown)
        {
            let duration = parseInt(unit.getAttribute(cooldown + "CD"));

            if (duration == 1)
            {
                unit.removeAttribute(cooldown + "CD");
            }
            else
            {
                duration--;
                unit.setAttribute(cooldown + "CD", duration);
                newCooldowns += cooldown + " ";
            }
        });

        if (newCooldowns == "")
        {
            unit.removeAttribute("cooldowns");
        }
        else
        {
            unit.setAttribute("cooldowns", newCooldowns);
        }
    })
}

function poisonDmg(target)
{
    if (target != undefined)
    {
        let targetClass = target.getAttribute("class").split(" ")[1];
        let poison = document.getElementsByClassName(targetClass + "PoisonStacks")[0];

        let stacks = parseInt(poison.textContent);

        let maxHp = parseFloat(target.getAttribute("maxHp"));

        let hp = parseFloat(target.getAttribute("hp"));

        let dmg = maxHp * (stacks / 100);

        hp -= dmg;

        target.setAttribute("hp", hp);

        updateUnitHp(target);
        return showEffect(unit, dmg, "red", 100);
    }
    else
    {
        let pUnits = document.getElementsByClassName("pUnits");
        let eUnits = document.getElementsByClassName("eUnits");

        //https://www.w3schools.com/howto/howto_js_spread_operator.asp
        let units = [...pUnits, ...eUnits];

        for (let index = 0; index < units.length; index++)
        {
            let unit = units[index];

            if (hasStatusFx(unit, "poison"))
            {
                let unitClass = unit.getAttribute("class").split(" ")[1];
                let poison = document.getElementsByClassName(unitClass + "PoisonStacks")[0];

                let stacks = parseInt(poison.textContent);

                let maxHp = parseFloat(unit.getAttribute("maxHp"));

                let hp = parseFloat(unit.getAttribute("hp"));

                let dmg = maxHp * (stacks / 100);

                hp -= dmg;

                unit.setAttribute("hp", hp);

                updateUnitHp(unit);

                stacks = parseInt(stacks / 2);

                if (stacks > 0)
                {
                    poison.textContent = stacks;
                }
                else
                {
                    removeStatusFx(unit, "poison");
                }

                return showEffect(unit, dmg, "red", 100);
            }
        }
    }
}

function bleedDmg(target)
{
    if (target != undefined)
    {
        let targetClass = target.getAttribute("class").split(" ")[1];
        let bleed = document.getElementsByClassName(targetClass + "BleedStacks")[0];

        let stacks = parseInt(bleed.textContent);

        let hp = parseFloat(target.getAttribute("hp"));

        let dmg = hp * (stacks / 50);

        hp -= dmg;

        target.setAttribute("hp", hp);

        updateUnitHp(target);
        return showEffect(unit, dmg, "red", 100);
    }
    else
    {
        let pUnits = document.getElementsByClassName("pUnits");
        let eUnits = document.getElementsByClassName("eUnits");

        //https://www.w3schools.com/howto/howto_js_spread_operator.asp
        let units = [...pUnits, ...eUnits];

        for (let index = 0; index < units.length; index++)
        {
            let unit = units[index];

            if (hasStatusFx(unit, "bleed"))
            {
                let unitClass = unit.getAttribute("class").split(" ")[1];
                let bleed = document.getElementsByClassName(unitClass + "BleedStacks")[0];

                let stacks = parseInt(bleed.textContent);

                let hp = parseFloat(unit.getAttribute("hp"));

                let dmg = hp * (stacks / 50);

                hp -= dmg;

                unit.setAttribute("hp", hp);

                updateUnitHp(unit);

                return showEffect(unit, dmg, "red", 100);
            }
        }
    }
}

function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * max) + min;
}


function showEffect(unit, display, colour, interval)
{
    return new Promise((resolve, reject) =>
    {
        if (colour == undefined)
        {
            colour = "red";
        }
        if (interval == undefined)
        {
            interval = 200;
        }
        let unitPos = parseInt(unit.style.gridArea.split(" / ")[1]);
        let container = document.getElementsByClassName("combatContainer")[0];
        let unitClass = unit.getAttribute("class").split(" ")[1];

        container.innerHTML += "<div class='" + unitClass + "dmgNumbers' style='border:none; color:" + colour + "; grid-area: 30 / " + (unitPos + 15) + " / span 10 / span 100; z-index:5; overflow:visible'></div>";

        let element = document.getElementsByClassName(unitClass + "dmgNumbers")[0];

        element.innerHTML = "<h1>" + display + "</h1>";

        let pos = element.style.gridArea.split(" / ");

        let posY = parseInt(pos[0]);
            
        unit.interval = setInterval(animation, interval);

        function animation()
        {
            if (posY == 20)
            {
                clearInterval(unit.interval);
                //element.style.gridArea = pos[0] + " / " + pos[1] + " / " + pos[2] + " / " + pos[3];
                element.parentNode.removeChild(element);
                resolve();
            }
            else
            {
                posY--;
                element.style.gridArea = posY + " / " + pos[1] + " / " + pos[2] + " / " + pos[3];
                //this variable is being rolled back or something idk, so i need to redefine it
                element = document.getElementsByClassName(unitClass + "dmgNumbers")[0];
            }
        }
        
    })
}

function hasEnoughtEnergy(unit, requiredEnergy)
{
    let availableEnergy = parseFloat(unit.getAttribute("energy"));

    if (availableEnergy < requiredEnergy)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function getNextUnit(unit)
{
    let unitClass = unit.getAttribute("class").split(" ")[1];
    let unitType = unitClass.charAt(0);
    let unitSlot = parseInt(unitClass.charAt(5));

    unitSlot++;

    let unitFound = document.getElementsByClassName(unitType + "Unit" + unitSlot).length > 0;

    if (unitFound)
    {
        return document.getElementsByClassName(unitType + "Unit" + unitSlot)[0];
    }
    else
    {
        return undefined;
    }

}


