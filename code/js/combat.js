var p1StatusNum, p2StatusNum, p3StatusNum, p4StatusNum, e1StatusNum, e2StatusNum, e3StatusNum, e4StatusNum;
p1StatusNum = p2StatusNum = p3StatusNum = p4StatusNum = e1StatusNum = e2StatusNum = e3StatusNum = e4StatusNum = 0;

var units = 4;

for (let x = 1; x <= units; x++)
{
    document.getElementsByTagName("div")[0].innerHTML += 
    //this shit looks retarded 💀
    "<div class='pUnit" + x + "' style='grid-area: 10 / " + (67 - ((x - 1) * 21)) + " / span 70 / span 20;'></div>"
    +
    "<div class='pMaxHp" + x + "' style='border: 3px solid red; grid-area: 82 / " + (67 - ((x - 1) * 21)) + " / span 4 / span 20; background-color: white;'>"
    +
    "<div class='pHp" + x + "' style='background-color: red; width: 80%; height: 100%; border: none;'></div>"
    +
    "</div>"
    +
    //✨makes health bar pretty✨ 😊
    "<div style='grid-area: 82 / " + (67 - ((x - 1) * 21)) + " / span 4 / span 20; box-shadow: inset black 0px 0px 6px 0px; border: none;'></div>"
    +
    "<div class='pMaxEnergy" + x + "' style='grid-area: 88 / " + (67 - ((x - 1) * 21)) + " / span 4 / span 20; border: 3px solid rgb(255, 194, 27); background-color: white;'>"
    +
    "<div class='pEnergy" + x + "' style='width: 80%; height: 100%; background-color: rgb(255, 191, 0); border: none;'></div>"
    +
    "</div>"
    +
    "<div style='grid-area: 88 / " + (67 - ((x - 1) * 21)) + " / span 4 / span 20; box-shadow: inset black 0px 0px 6px 0px; border: none;'></div>"
    ;
}


function addStatusFx(unit)
{
    let numFx = window[unit + "StatusNum"];

    if (numFx < 4)
    {
        numFx++;

        window[unit + "StatusNum"]++;

        let doc = document.getElementsByTagName("div")[0];

        let slot = unit.replaceAll(/[^0-9]/g,"");

        doc.innerHTML += "<div class='" + unit + "Status" + numFx + "' style='border: 1px solid blue; grid-area: 94 / " + ((67 - ((slot - 1) * 21)) + (5 * (numFx - 1))) + " / span 8 / span 4;'></div>";
    }
}

function switchGuiBot()
{

    var botGUI1 = document.querySelectorAll(".b1GUI");

    botGUI1.forEach(function(element) 
    {
        element.style.display = "none";
    });
}