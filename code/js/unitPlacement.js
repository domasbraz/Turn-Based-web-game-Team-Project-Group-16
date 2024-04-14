start()

function start()
{
    let partyInfo = localStorage.getItem("playerUnits");

    let units = partyInfo.split(" ");

    for (let i = 0; i < units.length - 1; i++)
    {
        let unit = units[i];

        let unitInfo = unit.split("%");

        let unitType = unitInfo[0];

        unitType = unitType.charAt(0).toLocaleUpperCase() + unitType.slice(1);

        let skills = [];

        for (let j = 1; j < unitInfo.length; j++)
        {
            skills.push(unitInfo[j]);
        }

        let func = window["create" + unitType + "s"];

        console.log(partyInfo);

        func(1, skills);
    }

    let difficulty = localStorage.getItem("difficulty");

    let stats;
    switch (difficulty)
    {
        
        case "easy":
            
            stats = [100, 20, 10, 100];
            createEnemySword(2, stats);

            break;

        case "medium":

            stats = [150, 40, 20, 100];
            createEnemySword(4, stats);
            break;

        case "hard":

            stats = [400, 50, 40, 100];
            createEnemySword(2, stats);
            break;
    }
}

setTurns();

//console.log(playerTurns + " " + aiTurns);

function userKnightInput()
{
    let knightAmount = parseInt(prompt("Enter how many knights will be in battle (max 4)"));

    if (knightAmount > 0 && knightAmount < 5)
    {
        createKnights(knightAmount);
        if (knightAmount < 4)
        {
            userPriestInput();
        }
    }
    else
    {
        alert("'" + knightAmount + "' is an invalid value.\r\nPlease enter a value between 1 and 4");
        userKnightInput();
    }
}

function userPriestInput()
{
    let remainder = getRemainingPlayerSlots();

    let priestAmount = parseInt(prompt("Enter how many priests will be in battle (max " + remainder + ")"));

    if (priestAmount <= remainder && priestAmount > 0)
    {
        createPriests(priestAmount)
    }
    else if (priestAmount != 0)
    {
        alert("'" + priestAmount + "' is an invalid value.\r\nPlease enter a value between 0 and " + remainder);
        userPriestInput();
    }
}

function userEnemySwordInput()
{
    let enemy1Amount = parseInt(prompt("Enter how many enemies will be in battle (max 4)"));

    if (enemy1Amount > 0 && enemy1Amount < 5)
    {
        createEnemy1s(enemy1Amount);
    }
    else
    {
        alert("'" + enemy1Amount + "' is an invalid value.\r\nPlease enter a value between 1 and 4");
        userEnemy1Input();
    }
}

function getRemainingPlayerSlots()
{
    let taken = document.getElementsByClassName("pUnits").length;

    return (4 - taken);
}

function getRemainingEnemySlots()
{
    let taken = document.getElementsByClassName("eUnits").length;

    return (4 - taken);
}

function createKnights(amount, skills)
{
    let remainder = getRemainingPlayerSlots();
    let slot = (4 - remainder) + 1;

    for (amount; amount > 0; amount--)
    {
        createUnitKnight(slot, skills);
        slot++;
    }
}

function createPriests(amount, skills)
{
    let remainder = getRemainingPlayerSlots();
    let slot = (4 - remainder) + 1;

    for (amount; amount > 0; amount--)
    {
        createUnitPriest(slot, skills);
        slot++;
    }
}

function createArchers(amount, skills)
{
    let remainder = getRemainingPlayerSlots();
    let slot = (4 - remainder) + 1;

    for (amount; amount > 0; amount--)
    {
        createUnitArcher(slot, skills);
        slot++;
    }
}

function createAssassins(amount, skills)
{
    let remainder = getRemainingPlayerSlots();
    let slot = (4 - remainder) + 1;

    for (amount; amount > 0; amount--)
    {
        createUnitAssassin(slot, skills);
        slot++;
    }
}

function pickRandomSkills()
{
    let skills = [1,2,3,4,5,6];
    for (let x = skills.length - 1; x > 0; x--) 
    {
        const y = Math.floor(Math.random() * (x + 1));
        [skills[x], skills[y]] = [skills[y], skills[x]];
    }
    let array = [skills[0], skills[1], skills[2], skills[3]]
    return array;
}

//added for exclusive testing
function pickRandomSkills2()
{
    let skills = [1,2,3,4,6];
    for (let x = skills.length - 1; x > 0; x--) 
    {
        const y = Math.floor(Math.random() * (x + 1));
        [skills[x], skills[y]] = [skills[y], skills[x]];
    }
    let array = [skills[0], skills[1], skills[2], skills[3]]
    return array;
}

function createEnemySword(amount, stats)
{
    let remainder = getRemainingEnemySlots();
    let slot = (4 - remainder) + 1;

    for (amount; amount > 0; amount--)
    {
        createUnitEnemySword(slot, stats);
        slot++;
    }
}

setTurns();

console.log(playerTurns + " " + aiTurns);
