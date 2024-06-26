createKnights(1);
createPriests(1);
//createArchers(2);
//createAssassins(2);
createEnemySword(2);

//source test

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

function createKnights(amount)
{
    for (let x = 1; x <= amount; x++)
    {
        let skills = [1,2];
        createUnitKnight(x, skills);
    }
}

function createPriests(amount)
{
    let remainder = getRemainingPlayerSlots();
    let slot = (4 - remainder) + 1;

    for (amount; amount > 0; amount--)
    {
        let skills = [1,2];
        createUnitPriest(slot, skills);
        slot++;
    }
}

function createArchers(amount)
{
    let remainder = getRemainingPlayerSlots();
    let slot = (4 - remainder) + 1;

    for (amount; amount > 0; amount--)
    {
        let skills = pickRandomSkills();
        createUnitArcher(slot, skills);
        slot++;
    }
}

function createAssassins(amount)
{
    let remainder = getRemainingPlayerSlots();
    let slot = (4 - remainder) + 1;

    for (amount; amount > 0; amount--)
    {
        let skills = pickRandomSkills();
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

function createEnemySword(amount)
{
    for (let x = 1; x <= amount; x++)
    {
        createUnitEnemySword(x, [1]);
    }
}

setTurns();

console.log(playerTurns + " " + aiTurns);
