function createUnitArcher(position, skills)
{
    let stats = [100, 30, 5, 100];
    if (skills = undefined)
    {
        skills = [1, 2, 3, 4];
    }

    createUnit("pUnit" + position, "archer", stats, skills);
}

function archerS1(origin)
{
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>SpreadShot</h1><br><p>Fires an arrow at the target and the enemy behind dealing 30% damage<br><br>Energy Cost: 25</p>";

    if (hasEnoughtEnergy(origin, 25))
    {
        enableTargeting(true, "archerS1Attack", origin.id);
    }
    else
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML += "<p><b>Not Enough Energy</b></p>"
    }
}

function archerS1Attack(target, origin)
{
    let atk = parseFloat(origin.getAttribute("atk"));

    let dmgMultiplyer = 30;

    let dmg = Math.floor((atk * dmgMultiplyer) / 100);

    let energy = parseFloat(origin.getAttribute("energy"));

    energy -= 25;

    origin.setAttribute("energy", energy);

    updateUnitEnergy(origin);
    usedTurn(origin);
    hideGuiBot();

    let poison = hasStatusFx(origin, "archerS3Buff");

    let nextTarget = getNextUnit(target);
    if (nextTarget != undefined)
    {
        finalAttackCalc(nextTarget, dmg, poison);
    }
    finalAttackCalc(target, dmg, poison).then(() =>
    {
        //checkArcherS3Buff(origin);
        nextDuel(origin)
    });
}

function archerS2(origin)
{
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Quick Shot</h1><br><p>Attacks the target dealing 50% damage<br><br>Energy Cost: 10</p>";

    if (hasEnoughtEnergy(origin, 10))
    {
        enableTargeting(true, "archerS2Attack", origin.id);
    }
    else
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML += "<p><b>Not Enough Energy</b></p>"
    }
}

function archerS2Attack(target, origin)
{
    let atk = parseFloat(origin.getAttribute("atk"));

    let dmgMultiplyer = 50;

    let dmg = Math.floor((atk * dmgMultiplyer) / 100);

    let energy = parseFloat(origin.getAttribute("energy"));

    energy -= 10;

    origin.setAttribute("energy", energy);

    updateUnitEnergy(origin);
    usedTurn(origin);
    hideGuiBot();

    let poison = hasStatusFx(origin, "archerS3Buff");

    finalAttackCalc(target, dmg, poison).then(() =>
    {
        //checkArcherS3Buff(origin);
        nextDuel(origin)
    });
}

function archerS3(origin)
{
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Poison Coating</h1><br><p>Makes your Attacks next round apply Poison<br><br>Cooldown: 2 rounds</p>";

    if (!hasCooldown(origin, "S3"))
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML +=
        "<button onclick='archerS3Buff(" + origin.id + ")'>Use</button>"
    }
    else
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML += "<p><b>Currently on Cooldown</b></p>"
    }
}

function archerS3Buff(origin)
{
    addStatusFx(origin, "archerS3Buff", 2);
    usedTurn(origin);

    showEffect(origin, "Buff", "green").then(() =>
    {
        setCooldown(origin, "S3", 2);
        nextDuel(origin);
    });
}

function checkArcherS3Buff(unit)
{
    if (hasStatusFx(unit, "archerS3Buff"))
    {
        removeStatusFx(unit, "archerS3Buff");
    }
}

function archerS4(origin)
{
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Piercing Shot</h1><br><p>Attacks all enemies dealing 25% damage<br><br>Energy Cost: 40</p>";

    if (hasEnoughtEnergy(origin, 40))
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML +=
        "<button onclick='archerS4Attack(" + origin.id + ")'>Use</button>"
    }
    else
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML += "<p><b>Not Enough Energy</b></p>"
    }
}

function archerS4Attack(origin)
{
    let atk = parseFloat(origin.getAttribute("atk"));

    let dmgMultiplyer = 25;

    let dmg = Math.floor((atk * dmgMultiplyer) / 100);

    let energy = parseFloat(origin.getAttribute("energy"));

    energy -= 40;

    origin.setAttribute("energy", energy);

    updateUnitEnergy(energy);
    usedTurn(origin);
    hideGuiBot();

    let poison = hasStatusFx(origin, "archerS3Buff");

    let targets = document.getElementsByClassName("eUnits");

    for (let index = 0; index < targets.length; index++)
    {
        let target = targets[index];

        if (index == (targets.length - 1))
        {
            finalAttackCalc(target, dmg, poison).then(() =>
            {
                nextDuel(origin);
            });
        }
        else
        {
            finalAttackCalc(target, dmg, poison);
        }
    }
}

function archerS5(origin)
{
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Arrow Rain</h1><br><p>Attacks 10 times targetting random enemies dealing 20% damage<br><br>Energy Cost: 50</p>";

    if (hasEnoughtEnergy(origin, 50))
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML +=
        "<button onclick='archerS5Attack(" + origin.id + ")'>Use</button>"
    }
    else
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML += "<p><b>Not Enough Energy</b></p>"
    }
}

async function archerS5Attack(origin)
{
    let atk = parseFloat(origin.getAttribute("atk"));

    let dmgMultiplyer = 20;

    let dmg = Math.floor((atk * dmgMultiplyer) / 100);

    let energy = parseFloat(origin.getAttribute("energy"));

    energy -= 50;

    origin.setAttribute("energy", energy);

    let poison = hasStatusFx(origin, "archerS3Buff");

    let targets = document.getElementsByClassName("eUnits");

    let slots = targets.length - 1;

    let numOfAtks = 10;

    updateUnitEnergy(origin);
    usedTurn(origin);
    hideGuiBot();

    for (numOfAtks; numOfAtks > 0; numOfAtks--)
    {
        let randomSlot = getRndInteger(1, slots);

        if (numOfAtks == 1)
        {
            finalAttackCalc(targets[randomSlot], dmg, poison, false, 20).then(() => 
            {
                nextDuel(origin);
            });
        }
        else
        {
            finalAttackCalc(targets[randomSlot], dmg, poison, false, 20).then(() => {});
        }
    }
}

function archerS6(origin)
{
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Poison Flask</h1><br><p>Applies 5 stacks of poison to the enemy<br><br>Cooldown: 3 rounds</p>";

    if (!hasCooldown(origin, "S6"))
    {
        enableTargeting(true, "archerS6Attack", origin.id);
    }
    else
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML += "<p><b>Currently on Cooldown</b></p>"
    }
}

async function archerS6Attack(target, origin)
{
    let numOfStacks = 5;

    usedTurn(origin);
    setCooldown(origin, "S6", 3)

    for (numOfStacks; numOfStacks > 0; numOfStacks--)
    {
        addStatusFx(target, "poison", 99);
        if (numOfStacks == 1)
        {
            showEffect(target, "Poisoned", "purple", 20).then(() =>
            {
                nextDuel(origin);
            });
        }
        else
        {
            showEffect(target, "Poisoned", "purple", 20).then(() => {});
        }
    }
}