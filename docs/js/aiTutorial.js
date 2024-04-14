function aiPlayUnit(target)
{
    selectRandomEnemy(target);
}

function selectRandomEnemy(target)
{
    let eUnits = document.getElementsByClassName("eUnits").length;

    let slot = Math.floor((Math.random() * eUnits) + 1);

    let origin = document.getElementsByClassName("eUnit" + slot)[0];

    if (origin.getAttribute("hasTurn") == "true")
    {
        useRandomSkill(origin, target);
    }
    else
    {
        selectRandomEnemy(target);
    }
    
}


function useRandomSkill(origin, target)
{
    if (target == undefined)
    {
        let tauntedUnits = document.querySelectorAll(".pUnits[taunt]");
        if (tauntedUnits.length > 0)
        {
            target = tauntedUnits[0];
        }
        else
        {
            let playerUnits = document.getElementsByClassName("pUnits").length;

            let targetSlot = Math.floor((Math.random() * playerUnits) + 1);

            target = document.getElementsByClassName("pUnit" + targetSlot)[0];

            if (target.hasAttribute("protected"))
            {
                target = document.getElementsByClassName(target.getAttribute("protected"))[0];
            }
        }
    }

    let skills = origin.getAttribute("skills").split(" ");

    let skill = getRndInteger(1, skills.length - 1);

    let type = origin.getAttribute("type");

    let func = window[type + "S" + skill];

    func(target, origin);
}