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
    "<div class='pHp" + x + "' style='background-color: red; width: 80%; height: 100%; border: none;'></div>"
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
    "<div class='pEnergy" + x + "' style='width: 80%; height: 100%; background-color: rgb(255, 191, 0); border: none;'></div>"
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
    "<div class='eHp" + x + "' style='background-color: red; width: 80%; height: 100%; border: none;'></div>"
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
    "<div class='eEnergy" + x + "' style='width: 80%; height: 100%; background-color: rgb(255, 191, 0); border: none;'></div>"
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
    "<div class='b3GUI skill" + x + "' style='grid-area: 125 / " + (21 + (x * 13)) + " / span 15 / span 8;'></div>";
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
