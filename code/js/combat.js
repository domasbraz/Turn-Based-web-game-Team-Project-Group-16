var p1StatusNum, p2StatusNum, p3StatusNum, p4StatusNum, e1StatusNum, e2StatusNum, e3StatusNum, e4StatusNum;
p1StatusNum = p2StatusNum = p3StatusNum = p4StatusNum = e1StatusNum = e2StatusNum = e3StatusNum = e4StatusNum = 0;

var pUnits = 4;

//adds player units
for (let x = 1; x <= pUnits; x++)
{
    document.getElementsByTagName("div")[0].innerHTML += 
    //unit placement
    "<div class='pUnits pUnit" + x + "' style='grid-area: 10 / " + (67 - ((x - 1) * 21)) + " / span 70 / span 20;' onclick='selectUnit(this)' selected='false'></div>"
    +
    //max hp
    "<div class='pMaxHp" + x + "' style='border: 3px solid red; grid-area: 82 / " + (67 - ((x - 1) * 21)) + " / span 4 / span 20; background-color: white;'>"
    +
    //current hp
    "<div class='pHp" + x + "' style='background-color: red; width: 100%; height: 100%; border: none;'></div>"
    +
    "</div>"
    +
    //hp styling
    "<div style='grid-area: 82 / " + (67 - ((x - 1) * 21)) + " / span 4 / span 20; box-shadow: inset black 0px 0px 6px 0px; border: none;'></div>"
    +
    //max energy
    "<div class='pMaxEnergy" + x + "' style='grid-area: 88 / " + (67 - ((x - 1) * 21)) + " / span 4 / span 20; border: 3px solid rgb(255, 194, 27); background-color: white;'>"
    +
    //current energy
    "<div class='pEnergy" + x + "' style='width: 100%; height: 100%; background-color: rgb(255, 191, 0); border: none;'></div>"
    +
    "</div>"
    +
    //energy styling
    "<div style='grid-area: 88 / " + (67 - ((x - 1) * 21)) + " / span 4 / span 20; box-shadow: inset black 0px 0px 6px 0px; border: none;'></div>"
    ;
}

var eUnits = 4;

//adds enemy units
for (let x = 1; x <= eUnits; x++)
{
    document.getElementsByTagName("div")[0].innerHTML += 
    "<div class='eUnit" + x + "' style='grid-area: 10 / " + (115 + ((x - 1) * 21)) + " / span 70 / span 20;'></div>"
    +
    //max hp
    "<div class='eMaxHp" + x + "' style='border: 3px solid red; grid-area: 82 / " + (115 + ((x - 1) * 21)) + " / span 4 / span 20; background-color: white;'>"
    +
    //current hp
    "<div class='eHp" + x + "' style='background-color: red; width: 100%; height: 100%; border: none;'></div>"
    +
    "</div>"
    +
    //hp styling
    "<div style='grid-area: 82 / " + (115 + ((x - 1) * 21)) + " / span 4 / span 20; box-shadow: inset black 0px 0px 6px 0px; border: none;'></div>"
    +
    //max energy
    "<div class='eMaxEnergy" + x + "' style='grid-area: 88 / " + (115 + ((x - 1) * 21)) + " / span 4 / span 20; border: 3px solid rgb(255, 194, 27); background-color: white;'>"
    +
    //current energy
    "<div class='eEnergy" + x + "' style='width: 100%; height: 100%; background-color: rgb(255, 191, 0); border: none;'></div>"
    +
    "</div>"
    +
    //energy styling
    "<div style='grid-area: 88 / " + (115 + ((x - 1) * 21)) + " / span 4 / span 20; box-shadow: inset black 0px 0px 6px 0px; border: none;'></div>"
    ;
}

//add status effect to given unit
function addStatusFx(unit)
{
    let numFx = window[unit + "StatusNum"];

    if (numFx < 4)
    {
        numFx++;

        window[unit + "StatusNum"]++;

        let doc = document.getElementsByTagName("div")[0];

        let slot = unit.replaceAll(/[^0-9]/g,"");

        if (unit.charAt(0) == "p")
        {
            doc.innerHTML += "<div class='" + unit + "Status" + numFx + "' style='border: 1px solid blue; grid-area: 94 / " + ((67 - ((slot - 1) * 21)) + (5 * (numFx - 1))) + " / span 8 / span 4;'></div>";
        }
        else
        {
            doc.innerHTML += "<div class='" + unit + "Status" + numFx + "' style='border: 1px solid blue; grid-area: 94 / " + ((115 + ((slot - 1) * 21)) + (5 * (numFx - 1))) + " / span 8 / span 4;'></div>";
        }
    }
}

//switches between card gui
function switchGuiBot()
{

    var botGUI1 = document.querySelectorAll(".b1GUI");
    var botGUI2 = document.querySelectorAll(".b2GUI");

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


//adds skill icons
for (let x = 0; x < 4; x++)
{
    document.getElementsByTagName("div")[0].innerHTML += 
    "<div class='b3GUI skill" + (x + 1) + "' style='grid-area: 125 / " + (21 + (x * 13)) + " / span 15 / span 8;'></div>";
}

var unitSelected = false;

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

function selectUnit(unit)
{
    let duelPhaseOver = document.getElementsByClassName("b1GUI")[0].style.display == "none";

    if(duelPhaseOver)
    {
        if (!unitSelected)
        {
            unit.style.border = "2px solid green";
            unitSelected = true;
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

function deSelectUnit()
{
    let selectedUnit = document.querySelectorAll(".pUnits");

    selectedUnit.forEach(function(element)
    {
        let isSelected = element.getAttribute("selected");

        if (isSelected == "true")
        {
            element.setAttribute("selected", "false");
            element.style.border = "1px solid black";
        }
    }
    );
    unitSelected = false;
    hideSkills();
}

function showSkills(unit)
{
    document.querySelectorAll(".b3GUI").forEach(function(element)
    {
        element.style.display = "block";
    });

    let atk = unit.getAttribute("atk");
    let hp = unit.getAttribute("hp");
    let def = unit.getAttribute("def");
    let energy = unit.getAttribute("energy");

    let textBox = document.getElementsByClassName("statBoxText")[0];
    textBox.innerHTML = "<br>Health: " + hp + "<br>Attack: " + atk + "<br>Defense: " + def + "<br>Energy: " + energy;
    textBox.style.textAlign = "left";
}

function hideSkills()
{
    document.querySelectorAll(".b3GUI").forEach(function(element)
    {
        element.style.display = "none";
    });

    unitInfo();
}


function assignStats(unit, hp, atk, def, energy)
{

    unit = document.getElementsByClassName(unit)[0];

    unit.setAttribute("hp", hp);
    unit.setAttribute("atk", atk);
    unit.setAttribute("def", def);
    unit.setAttribute("energy", energy);

}

//test case
assignStats("pUnit1", "100", "10", "5", "100");


function knightSkill1()
{
    document.getElementsByClassName("skillInfo")[0].innerHTML +=
    "<h1>Basic Attack</h1><br><p>Attacks an enemy unit dealing 100% damage</p>";
}

document.getElementsByClassName("skill1")[0].setAttribute("onclick", "knightSkill1()");


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

var cards = dealCards();
var playerPlayed;
var aiPlayed;

function displayCards()
{
    let hand = document.getElementsByClassName("hand")[0];

    let playerHand = cards.playerCards;

    for (let x = 0; x < playerHand.length; x++)
    {
        hand.innerHTML += "<div class='card' onclick='playCard(this)'></div>";
        let pCards = document.getElementsByClassName("card");
        pCards[x].innerHTML = "<img width='100%' height='100%' src='../../img/png images/cards/" + playerHand[x] + "_sword_card.png'>";
    }

    
}

displayCards();

function aiCard(aiCards)
{
    setTimeout(function()
    {
        const aiCardRandomNumber = (Math.floor(Math.random() * aiCards.length));
        aiPlayed = aiCards[aiCardRandomNumber];
        aiCards.splice(aiCardRandomNumber, 1);

        let cardPlayed = document.getElementsByClassName("cardEnemy")[0];
        cardPlayed.innerHTML = "<img height='100%' width='100%' src='../../img/png images/cards/" + aiPlayed + "_sword_card.png'>";
        cardPlayed.style.display = "block";

        startDuel();
        
    },
    1000
    );
    
}



function playCard(card)
{
    let chosenCard = card.children[0];

    image = chosenCard.getAttribute("src");

    let cardPlayed = document.getElementsByClassName("cardPlayed")[0];
    
    cardPlayed.innerHTML = "<img height='100%' width='100%' src='" + image + "'>";

    cardPlayed.style.display = "block";

    let hand = document.getElementsByClassName("hand")[0]
    hand.removeChild(card);
    hand.style.display = "none";

    playerPlayed = parseInt(image.replaceAll(/[^0-9]/g,""));

    startDuel();

}

function duel()
{
    showResult(playerPlayed >= aiPlayed);
}

function showResult(won)
{

    setTimeout(function()
    {
        let result = document.getElementsByClassName("duelMsg")[0];
        let resultText = result.children[0];

        result.style.display = "block";

        if (won)
        {
            resultText.textContent = "Duel Won!";
            resultText.style.color = "rgb(0, 255, 0)";
            wonLast = "player";
            playerTurns--;
        }
        else
        {
            resultText.textContent = "Duel Lost!";
            resultText.style.color = "rgb(255, 0, 0)";
            wonLast = "ai";
            aiTurns--;
        }

        setTimeout(function()
        {
            result.style.display = "none";
            nextDuel();
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

function startDuel()
{
    if (gameActive)
    {

        if ((round % 2 == 0 && wonLast != "player" && isNaN(aiPlayed)) || (wonLast == "ai" && isNaN(aiPlayed)))
        {
            aiCard(cards.aiCards);
            
            if (aiPlayed == 13)
            {
                aiPlayed++;
            }
        }
        else if (playerPlayed == 13)
        {
            playerPlayed++;
        }

        if ((isNaN(playerPlayed) && (round % 2 == 1 && wonLast != "ai")) || (isNaN(playerPlayed) && !isNaN(aiPlayed)))
        {
            setTimeout(function ()
            {
                document.getElementsByClassName("hand")[0].style.display = "block";
            },
            500
            );
        }

        if (!isNaN(playerPlayed) && !isNaN(aiPlayed))
        {
            duel();
        }
        else if (!isNaN(playerPlayed))
        {
            aiCard(cards.aiCards);
        }
    }
}

var playerTurns = 4;
var aiTurns = 4;

function nextDuel()
{
    document.getElementsByClassName("cardPlayed")[0].style.display = document.getElementsByClassName("cardEnemy")[0].style.display = "none";

    resetPlayed();

    if (playerTurns == 0 || aiTurns == 0)
    {
        console.log("round end");
        nextRound();
    }
    else
    {
        console.log("turn end");
        /* document.getElementsByClassName("hand")[0].style.display = "block"; */
        startDuel();
    }
}

function nextRound()
{
    console.log("next round");
    round++;
    resetHand();
    cards = dealCards();
    displayCards();
    playerTurns = aiTurns = 4;
    wonLast = null;
    startDuel();
}

function resetHand()
{
    let hand = document.querySelectorAll(".card");

    hand.forEach(function (card)
    {
        card.parentNode.removeChild(card);
    });
}

function resetPlayed()
{
    playerPlayed = aiPlayed = NaN;
}
