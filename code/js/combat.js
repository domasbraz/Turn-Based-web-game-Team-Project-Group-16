//TODO: change implementation of statusfx
var p1StatusNum, p2StatusNum, p3StatusNum, p4StatusNum, e1StatusNum, e2StatusNum, e3StatusNum, e4StatusNum;
p1StatusNum = p2StatusNum = p3StatusNum = p4StatusNum = e1StatusNum = e2StatusNum = e3StatusNum = e4StatusNum = 0;


function createUnit(unitSlot)
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
        "<div class='pHp" + unitSlot + " pInfo" + unitSlot + "' style='background-color: red; width: 100%; height: 100%; border: none;'></div>"
        +
        "</div>"
        +
        //hp styling
        "<div class='pInfo" + unitSlot + " pHpStyle" + unitSlot + "' style='grid-area: 82 / " + (67 - ((unitSlot - 1) * 21)) + " / span 4 / span 20; box-shadow: inset black 0px 0px 6px 0px; border: none;'></div>"
        +
        //max energy
        "<div class='pMaxEnergy" + unitSlot + " pInfo" + unitSlot + "' style='grid-area: 88 / " + (67 - ((unitSlot - 1) * 21)) + " / span 4 / span 20; border: 3px solid rgb(255, 194, 27); background-color: white;'>"
        +
        //current energy
        "<div class='pEnergy" + unitSlot + " pInfo" + unitSlot + "' style='width: 100%; height: 100%; background-color: rgb(255, 191, 0); border: none;'></div>"
        +
        "</div>"
        +
        //energy styling
        "<div class='pInfo" + unitSlot + " pEnergyStyle" + unitSlot + "' style='grid-area: 88 / " + (67 - ((unitSlot - 1) * 21)) + " / span 4 / span 20; box-shadow: inset black 0px 0px 6px 0px; border: none;'></div>"
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
        "<div class='eHp" + unitSlot + " eInfo" + unitSlot + "' style='background-color: red; width: 100%; height: 100%; border: none;'></div>"
        +
        "</div>"
        +
        //hp styling
        "<div class='eInfo" + unitSlot + " eHpStyle" + unitSlot + "' style='grid-area: 82 / " + (115 + ((unitSlot - 1) * 21)) + " / span 4 / span 20; box-shadow: inset black 0px 0px 6px 0px; border: none;'></div>"
        +
        //max energy
        "<div class='eMaxEnergy" + unitSlot + " eInfo" + unitSlot + "' style='grid-area: 88 / " + (115 + ((unitSlot - 1) * 21)) + " / span 4 / span 20; border: 3px solid rgb(255, 194, 27); background-color: white;'>"
        +
        //current energy
        "<div class='eEnergy" + unitSlot + " eInfo" + unitSlot + "' style='width: 100%; height: 100%; background-color: rgb(255, 191, 0); border: none;'></div>"
        +
        "</div>"
        +
        //energy styling
        "<div class='eInfo" + unitSlot + " eEnergyStyle" + unitSlot + "' style='grid-area: 88 / " + (115 + ((unitSlot - 1) * 21)) + " / span 4 / span 20; box-shadow: inset black 0px 0px 6px 0px; border: none;'></div>"
        ;
    }
    
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
//TODO: renamining
function switchGuiBot()
{

    var botGUI1 = document.querySelectorAll(".b1GUI");
    var botGUI2 = document.querySelectorAll(".b2GUI");

    //shows combat
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
    //shows cards
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

    deSelectUnit();
}


//adds skill icons
for (let x = 0; x < 4; x++)
{
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
        pCards[x].innerHTML = "<img draggable='false' width='100%' height='100%' src='../../img/png images/cards/" + playerHand[x] + "_sword_card.png'>";
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
        cardPlayed.innerHTML = "<img draggable='false' height='100%' width='100%' src='../../img/png images/cards/" + aiPlayed + "_sword_card.png'>";
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
        let result = document.getElementsByClassName("duelMsg")[0];
        let resultText = result.children[0];

        result.style.display = "block";

        //displays whether player has won or lost duel
        if (won)
        {
            resultText.textContent = "Duel Won!";
            resultText.style.color = "rgb(0, 255, 0)";
            wonLast = "player";
            playerTurns--;//TODO: change implementation
        }
        else
        {
            resultText.textContent = "Duel Lost!";
            resultText.style.color = "rgb(255, 0, 0)";
            wonLast = "ai";
            aiTurns--;
        }

        //hide message declaring winner after 3 seconds
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

//dueling process
function startDuel()
{
    //this is used for ending the game in the event that all units are defeated from either side
    if (gameActive)
    {

        //multiple condition set to determine who gets to act first
        if ((round % 2 == 0 && wonLast != "player" && isNaN(aiPlayed)) || (wonLast == "ai" && isNaN(aiPlayed)))
        {
            aiCard(cards.aiCards);
            
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
        if ((isNaN(playerPlayed) && (round % 2 == 1 && wonLast != "ai")) || (isNaN(playerPlayed) && !isNaN(aiPlayed)))
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
            //TODO: adjustment to remove player bias
            showResult(playerPlayed >= aiPlayed);
        }
        //tells ai to play their card if they havent already and the player has
        else if (!isNaN(playerPlayed))
        {
            aiCard(cards.aiCards);
        }
    }
}

var playerTurns = 4;
var aiTurns = 4;

//performes the next duel
function nextDuel()
{
    //hides the previous cards in play
    document.getElementsByClassName("cardPlayed")[0].style.display = document.getElementsByClassName("cardEnemy")[0].style.display = "none";

    //TODO: might be unecessary to use a seperate function
    resetPlayed();

    //checks if either side is out of turns
    //TODO: change implementation
    if (playerTurns == 0 || aiTurns == 0)
    {
        nextRound();
    }
    else
    {
        startDuel();
    }
}

//commences next round, hands reset
function nextRound()
{
    round++;
    resetHand();
    cards = dealCards();
    displayCards();
    playerTurns = aiTurns = 4;//TODO: implement proper turn calculation
    wonLast = null;
    regenEnergy();
    startDuel();
}

function regenEnergy()
{
    let units = document.querySelectorAll(".pUnits");

    units.forEach(function (unit)
    {
        let energy = unit.getAttribute("energy");

        let regen = unit.getAttribute("energyRegen");

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



function setUnit(unitSlot, type, stats, skills)
{
    createUnit(unitSlot);

    let unit = document.getElementsByClassName(unitSlot)[0];

    if (unitSlot.charAt(0) == "p")
    {
        unit.innerHTML = "<img draggable='false' width='100%' height='100%' src='../../img/png images/characters/" + type + "/" + type + ".png'>";
        unit.setAttribute("skills", skills[0] + " " + skills[1] + " " + skills[2] + " " + skills[3]);
    }
    else
    {
        unit.innerHTML = "<img draggable='false' width='100%' height='100%' src='../../img/png images/characters/enemies/" + type + ".png'>";
    }

    unit.setAttribute("hp", stats[0]);
    unit.setAttribute("atk", stats[1]);
    unit.setAttribute("def", stats[2]);
    unit.setAttribute("energy", stats[3]);
    unit.setAttribute("maxHp", stats[0]);
    unit.setAttribute("maxEnergy", stats[3]);
    unit.setAttribute("energyRegen", 10);
    
    unit.setAttribute("type", type);
    unit.setAttribute("id", type + unitSlot.charAt(5));
    
    
}

//test case
function setUnitKnight(position)
{
    let stats = [100, 100, 5, 100];
    let skills = [1, 2, 3, 4];

    setUnit("pUnit" + position, "knight", stats, skills);
}

function setUnitEnemy1(position)
{
    let stats = [100, 10, 5, 100];

    setUnit("eUnit" + position, "enemy1", stats);
}

//test case for placing units
for (let x = 1; x < 5; x++)
{
    setUnitKnight(x);
    setUnitEnemy1(x);
}


//selects the unit that called the funtion
function selectUnit(unit)
{
    //checks if cards gui is hidden, gui is hidden once a duel is over
    let duelPhaseOver = document.getElementsByClassName("b1GUI")[0].style.display == "none";

    if(duelPhaseOver)
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
            makeSkills(unit);
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
    unitSelected = false;
    removeSkills();
}

//displays unit's skills
function makeSkills(unit)
{
    let skills = unit.getAttribute("skills").split(" ");
    let type = unit.getAttribute("type");
    let origin = unit.getAttribute("id");

    for (let x = 0; x < skills.length; x++)
    {

        document.getElementsByTagName("div")[0].innerHTML += 
        "<div selected='false' class='skills skill" + (x + 1) + "' style='grid-area: 125 / " + (21 + (x * 13)) + " / span 15 / span 8;'></div>";

        let skillIcon = document.getElementsByClassName("skill" + (x + 1))[0];
        skillIcon.innerHTML = "<img draggable='false' width='100%' height='100%' src='../../img/png images/characters/" + type + "/" + type + "S" + skills[x] + ".png'>";
        skillIcon.setAttribute("onclick", "selectSkill(this); " + type + "S" + skills[x] + "(" + origin + ");");
        skillIcon.setAttribute("origin", origin); //might not be needed
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

function removeSkills()
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
}


//test case for skill description
function knightS1(origin)
{

    //for some unknown reason JS decides not to pass to correct value though the parameter so I must reset the correct value
    origin = origin.id;
    //description
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Basic Attack</h1><br><p>Attacks an enemy unit dealing 100% of your attack as damage<br><br>Cost: 15 energy</p>";

    enableTargeting(true, "knightS1Damage", origin);

}


function enableTargeting(isEnemy, skill, unitUsed)
{
    if (isEnemy)
    {
        document.querySelectorAll(".eUnits").forEach(function (e)
        {
            e.setAttribute("onmouseover", "applyEnemyTarget(this)");
            e.setAttribute("onmouseout", "removeEnemyTarget(this)");
            e.setAttribute("onclick", skill + "(this, " + unitUsed + ")")
        })
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
    }

    if (targeting)
    {
        document.querySelectorAll("[target='true']").forEach(function (target)
        {
            removeEnemyTarget(target);
        });
        //loop not entirely neccessary, just a failsafe
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

function knightS1Damage(target, origin)
{

    let energy = document.getElementById(origin.id).getAttribute("energy");

    let energyCost = 15;

    if (energy >= energyCost)
    { 
        let atk = document.getElementById(origin.id).getAttribute("atk");
        

        let dmgMultiplyer = 1;

        let dmg = Math.floor(atk * dmgMultiplyer);
        energy -= energyCost;

        document.getElementById(origin.id).setAttribute("energy", energy);

        finalAttackCalc(target, dmg);

        updateUnitEnergy(origin);
    }
    else
    {
        //TODO: inform user of insuficient energy
    }

}

function finalAttackCalc(target, skillDmg)
{
    let hp = target.getAttribute("hp");
    let def = target.getAttribute("def");

    if ((def / skillDmg) > 0.7)
    {
        def *= 0.7;
    }

    finalDmg = skillDmg - def;

    target.setAttribute("hp", hp - skillDmg);
    disableTargeting(true);
    deSelectUnit();
    updateUnitHp(target);
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
    else
    {
        newEnergy = Math.floor((newEnergy / maxEnergy) * 100);
    }

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

    remainingUnits.forEach(function (remainingUnit)
    {
        let positionUnit = remainingUnit.style.gridArea.split(" / ");
        let remainingUnitSlot = remainingUnit.getAttribute("class").split(" ")[1].charAt(5);
        let remainingUnitHp = document.getElementsByClassName(unitType + "MaxHp" + remainingUnitSlot)[0];
        let remainingUnitHpStyle = document.getElementsByClassName(unitType + "HpStyle" + remainingUnitSlot)[0];
        let remainingUnitEnergy = document.getElementsByClassName(unitType + "MaxEnergy" + remainingUnitSlot)[0];
        let remainingUnitEnergyStyle = document.getElementsByClassName(unitType + "EnergyStyle" + remainingUnitSlot)[0];

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
    });

}