function createUnitKnight(position)
{
    //hp, atk, def, energy
    let stats = [100, 50, 5, 100];
    let skills = [1, 2, 3, 4];

    createUnit("pUnit" + position, "knight", stats, skills);
}

function knightS1(origin)
{
    //for some unknown reason JS decides not to pass to correct value though the parameter so I must reset the correct value
    origin = origin.id;
    //description
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Basic Attack</h1><br><p>Attacks an enemy unit dealing 100% of your attack as damage<br><br>Cost: 15 energy</p>";

    enableTargeting(true, "knightS1Damage", origin);
}

function knightS1Damage(target, origin)
{
    let energy = document.getElementById(origin.id).getAttribute("energy");

    let energyCost = 15;

    if (energy >= energyCost)
    { 
        let atk = document.getElementById(origin.id).getAttribute("atk");
        

        let dmgMultiplyer = 100;

        let dmg = Math.floor((atk * dmgMultiplyer) / 100);
        energy -= energyCost;

        document.getElementById(origin.id).setAttribute("energy", energy);

        updateUnitEnergy(origin);

        usedTurn(origin);

        finalAttackCalc(target, dmg);

        
    }
    else
    {
        //TODO: inform user of insuficient energy
    }
}

//TODO: add post conditions
function knightS2(origin)
{
    disableTargeting(true);
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Guard</h1><br><p>Increases your defense by 30%<br><br>Lasts 2 rounds<br></p><button onclick='knightS2Buff(" + origin.id + ", false)'>Use</button>";
}

function knightS2Buff(origin, remove)
{
    let element = document.getElementById(origin.id);
    let def = element.getAttribute("def");

    if (remove)
    {
        def *= (100/130);
        element.setAttribute("def", def);
    }
    else
    {
        let hasDuration = false;
        if (element.hasAttribute("duration"))
        {
            let durations = element.getAttribute("duration").split(" ");

            durations.forEach(function (skill)
            {
                if (skill == "s2")
                {
                    hasDuration = true;
                }
            })
        }
        if (hasDuration)
        {
            knightS2Duration(origin, "reset");
        }
        else
        {
            def *= 1.3;
            element.setAttribute("def", def);
            knightS2Duration(origin, "start");
        }
        usedTurn(element);
        deSelectUnit();
        nextDuel();
    }
}

//TODO: show status fx
function knightS2Duration(unit, type)
{
    unit = document.getElementById(unit.id);
    let duration;
    switch (type)
    {
        case "start":
            if (unit.hasAttribute("duration"))
            {
                let durations = unit.getAttribute("duration").split(" ");
                let durationInfo = "";
                durations.forEach(function (duration)
                {
                    if (duration == "s2")
                    {
                        s2duration(unit, "reset");
                        return;
                    }
                    durationInfo += duration + " ";
                });
                durationInfo += "s2"
                unit.setAttribute("duration", durationInfo);
            }
            else
            {
                unit.setAttribute("duration", "s2");
            }
            unit.setAttribute("s2Duration", "2");
            break;

        case "reset":
            duration = parseInt(unit.getAttribute("s2Duration"));

            if (duration < 2)
            {
                duration = 2;
                unit.setAttribute("s2Duration", "2");
            }
            break;

        case "down":
            duration = parseInt(unit.getAttribute("s2Duration"));
            duration--;
            if (duration < 1)
            {
                knightS2(unit, true);
            }
            break;
    }
}

function knightS3(origin)
{
    disableTargeting(true);
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Empower</h1><br><p>Increases defense of party by 10%<br>Reduces your max energy by 10%<br><br>Stacks up to 2 times<br></p><button onclick='knightS3Buff(" + origin.id + ")'>Use</button>";
}

function knightS3Buff(origin)
{
    let hasUsed = 0;

    if (origin.hasAttribute("s3Used"))
    {
        hasUsed = parseInt(origin.getAttribute("s3Used"));
        
    }
    if (hasUsed < 2)
    {
        
        let units = document.querySelectorAll(".pUnits");

        units.forEach(function (unit)
        {
            let def = parseFloat(unit.getAttribute("def"));
            //TODO: make scalable
            if (hasUsed == 1)
            {
                def = def * (100 / 110);
                def *= 1.2;
            }
            else
            {
                def *= 1.1;
            }
            unit.setAttribute("def", def);
        });
        let maxEnergy = parseInt(origin.getAttribute("maxEnergy"));
        if (hasUsed == 1)
        {
            maxEnergy *= (100 / 90);
            maxEnergy *= 0.8;
        }
        else
        {
            maxEnergy *= 0.9;
        }
        origin.setAttribute("maxEnergy", maxEnergy)
        
        hasUsed++;
        
        origin.setAttribute("s3Used", hasUsed);
        usedTurn(origin);
        deSelectSkills();
        nextDuel();
    }
    else
    {
        //TODO: inform user
    }
}


function knightS4(origin)
{
    origin = origin.id;
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Heavy Attack</h1><br><p>Attacks an enemy unit dealing 100%-200% of your attack as damage<br><br>Cost: 50 energy</p>";
    enableTargeting(true, "knightS4Damage", origin);
}


//TODO: implement armour pierce
function knightS4Damage(target, origin)
{
    let energy = document.getElementById(origin.id).getAttribute("energy");

    let energyCost = 50;

    if (energy >= energyCost)
    { 
        let atk = document.getElementById(origin.id).getAttribute("atk");
        
        let dmgMultiplyer = Math.floor(Math.random() * 101) + 101;;

        let dmg = Math.floor((atk * dmgMultiplyer) / 100);
        energy -= energyCost;

        document.getElementById(origin.id).setAttribute("energy", energy);

        updateUnitEnergy(origin);

        usedTurn(origin);

        finalAttackCalc(target, dmg);

    }
    else
    {
        //TODO: inform user of insuficient energy
    }
}