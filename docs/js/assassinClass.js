function createUnitAssassin(position, skills)
{
    let stats = [50, 40, 5, 100];
    if (skills == undefined)
    {
        skills = [1, 2, 3, 4];
    }

    createUnit("pUnit" + position, "assassin", stats, skills);
}

function assassinS1(origin)
{
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Stab</h1><br><p>Attack an enemy dealing 75%-125% damage<br><br>Energy Cost: 15</p>";

    if (hasEnoughtEnergy(origin, 15))
    {
        enableTargeting(true, "assassinS1Attack", origin.id);
    }
    else
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML += "<p><b>Not Enough Energy</b></p>"
    }
}

function assassinS1Attack(target, origin)
{
    let atk = parseFloat(origin.getAttribute("atk"));

    let dmgMultiplyer = getRndInteger(75, 125);

    let dmg = Math.floor((atk * dmgMultiplyer) / 100);

    let energy = parseFloat(origin.getAttribute("energy"));

    energy -= 15;

    origin.setAttribute("energy", energy);

    updateUnitEnergy(origin);
    usedTurn(origin);
    hideGuiBot();
    checkBleedChance(target, origin);

    finalAttackCalc(target, dmg).then(() =>
    {
        nextDuel(origin)
    });
}

function assassinS2(origin)
{
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Smoke Bomb</h1><br><p>Grants you 10% evasion for 2 rounds<br><br>Cooldown: 2 rounds</p>";

    if (!hasCooldown(origin, "S2"))
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML +=
        "<button onclick='assassinS2Buff(" + origin.id + ")'>Use</button>"
    }
    else
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML += "<p><b>Currently on Cooldown</b></p>"
    }
}

function assassinS2Buff(origin)
{
    usedTurn(origin);
    setCooldown(origin, "S2", 2);
    hideGuiBot();

    let evasionChance;
    if (hasStatusFx(origin, "evasionBuff"))
    {
        evasionChance = parseFloat(origin.getAttribute("evasion"));
        evasionChance += 10;
    }
    else
    {
        evasionChance = 10;
    }
    origin.setAttribute("evasion", evasionChance);

    addStatusFx(origin, "evasionBuff", 2);

    showEffect(origin, "Evasion", "blue").then(() =>
    {
        nextDuel(origin);
    });
}

function assassinS3(origin)
{
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Slice</h1><br><p>Attack an enemy causing it to bleed<br><br>Energy Cost: 20</p>";

    if (hasEnoughtEnergy(origin, 50))
    {
        enableTargeting(true, "assassinS3Attack", origin.id);
    }
    else
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML += "<p><b>Not Enough Energy</b></p>"
    }
}

function assassinS3Attack(target, origin)
{
    usedTurn(origin);
    hideGuiBot();

    let energy = parseFloat(origin.getAttribute("energy"));

    energy -= 50;

    origin.setAttribute("energy", energy);
    updateUnitEnergy(origin);
    checkBleedChance(target, origin);

    addStatusFx(target, "bleed", 99);

    showEffect(target, "Bleeding").then(() =>
    {
        nextDuel(origin);
    });
}

function assassinS4(origin)
{
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Backstab</h1><br><p>Attack an enemy dealing 25% - 300% damage<br><br>Energy Cost: 80</p>";

    if (hasEnoughtEnergy(origin, 80))
    {
        enableTargeting(true, "assassinS4Attack", origin.id);
    }
    else
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML += "<p><b>Not Enough Energy</b></p>"
    }
}

function assassinS4Attack(target, origin)
{
    usedTurn(origin);
    hideGuiBot();

    let energy = parseFloat(origin.getAttribute("energy"));

    energy -= 80;

    origin.setAttribute("energy", energy);
    updateUnitEnergy(origin);
    checkBleedChance(target, origin);

    let atk = parseFloat(origin.getAttribute("atk"));

    let dmgMultiplyer = getRndInteger(25, 300);

    let dmg = Math.floor((atk * dmgMultiplyer) / 100);
    
    finalAttackCalc(target, dmg).then(() =>
    {
        nextDuel(origin);
    });
}

function assassinS5(origin)
{
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Taunt</h1><br><p>Forces the next enemy to attack and gives you 50% evasion chance, if you evade the attack you gain 50 energy<br><br>Cooldown: 3 rounds</p>";

    if (!hasCooldown(origin, "S5"))
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML +=
        "<button onclick='assassinS5Buff(" + origin.id + ")'>Use</button>"
    }
    else
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML += "<p><b>Currently on Cooldown</b></p>"
    }
}

function assassinS5Buff(origin)
{
    usedTurn(origin);
    hideGuiBot();
    setCooldown(origin, "S5", 3);

    let evasionChance;
    if (hasStatusFx(origin, "evasionBuff"))
    {
        evasionChance = parseFloat(origin.getAttribute("evasion"));
        evasionChance += 50;
    }
    else
    {
        evasionChance = 50;
    }

    origin.setAttribute("evasion", evasionChance);
    addStatusFx(origin, "evasionBuff", 2);

    origin.setAttribute("taunt", "assassinS5Taunt");

    showEffect(origin, "Taunt").then(() =>
    {
        nextDuel(origin);
    });
}

function assassinS5Taunt(unit, success)
{
    unit.removeAttribute("taunt");

    let evasionChance = parseFloat(unit.getAttribute("evasion"));

    evasionChance -= 50;

    if (evasionChance < 1)
    {
        unit.removeStatusFx(unit, "evasionBuff");
        unit.removeAttribute("evasion");
    }
    else
    {
        unit.setAttribute("evasion", evasionChance);
    }

    if (success)
    {
        let energy = parseFloat(unit.getAttribute("energy"));
        energy += 50;
        unit.setAttribute("energy", energy);
        updateUnitEnergy(unit);
    }
}

function assassinS6(origin)
{
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Sharp Edges</h1><br><p>Sharpens your weapon giving it a 20% chance to apply bleed on each attack<br><br>Can Stack<br>Energy Cost: 60</p>";

    if (hasEnoughtEnergy(origin, 60))
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML +=
        "<button onclick='assassinS6Buff(" + origin.id + ")'>Use</button>"
    }
    else
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML += "<p><b>Not Enough Energy</b></p>"
    }
}

function assassinS6Buff(origin)
{
    usedTurn(origin);
    hideGuiBot();

    let energy = parseFloat(origin.getAttribute("energy"));

    energy -= 60;

    origin.setAttribute("energy", energy);
    updateUnitEnergy(origin);

    addStatusFx(origin, "assassinS6Buff", 99);

    let bleedChance;
    if (origin.hasAttribute("bleedChance"))
    {
        bleedChance = parseInt(origin.getAttribute("bleedChance"));
        bleedChance += 20;
    }
    else
    {
        bleedChance = 20;
    }

    origin.setAttribute("bleedChance", bleedChance);

}

function checkBleedChance(target, origin)
{
    if (origin.hasAttribute("bleedChance"))
    {
        let bleedChance = parseInt(origin.getAttribute("bleedChance"));
        applyBleed(bleedChance);

        function applyBleed(bleedChance)
        {
            let chance = 100 / bleedChance;

            if (chance < 1)
            {
                addStatusFx(target, "bleed", 99);
                bleedChance -= 100;
                applyBleed(bleedChance);
            }
            else
            {
                let success = getRndInteger(1, chance) == 1;
                if (success)
                {
                    addStatusFx(target, "bleed");
                }
            }
        }
    }
}




