play();

let isFirstThree = false;
    let isLastThree= false;
    let isSkillStatsActive = false;
    //knight skills
  
    const basicAttack = document.getElementById("basicAttack");
    const knightBasicAttack = document.getElementById('knightBasicAttack');
    const heavyAttack = document.getElementById("heavyAttack");
    const knightHeavyAttack = document.getElementById('knightHeavyAttack');
    const empower = document.getElementById("empower");
    const knightEmpower = document.getElementById("knightEmpower");
    const encourage = document.getElementById("encourage");
    const knightEncourage = document.getElementById("knightEncourage");
    const guard = document.getElementById("guard");
    const knightGuard = document.getElementById("knightGuard");
    const guardian = document.getElementById("guardian");
    const knightGuardian = document.getElementById("knightGuardian");
     //Assassin skills
     const stab = document.getElementById("stab");
     const assassinStab = document.getElementById("assassinStab");
     const smokeBomb= document.getElementById("smokeBomb");
     const assassinSmokeBomb = document.getElementById("assassinSmokeBomb");
     const slice= document.getElementById("slice");
     const assassinSlice = document.getElementById("assassinSlice");
     const backstab= document.getElementById("backstab");
     const assassinBackstab = document.getElementById("assassinBackstab");
     const taunt= document.getElementById("taunt");
     const assassinTaunt = document.getElementById("assassinTaunt");
     const sharpEdges= document.getElementById("sharpEdges");
     const assassinSharpEdges = document.getElementById("assassinSharpEdges");
     
    //archer skills
    const spreadshot= document.getElementById("spreadshot");
    const archerSpreadshot = document.getElementById("archerSpreadshot");
    const quickshot= document.getElementById("quickshot");
    const archerQuickshot= document.getElementById("archerQuickshot");
    const poisonCoating= document.getElementById("poisonCoating");
    const archerPoisonCoating = document.getElementById("archerPoisonCoating");
    const piercingShot= document.getElementById("piercingShot");
    const archerPiercingShot = document.getElementById("archerPiercingShot");
    const arrowRain= document.getElementById("arrowRain");
    const archerArrowRain = document.getElementById("archerArrowRain");
    const poisonFlask= document.getElementById("poisonFlask");
    const archerPoisonFlask = document.getElementById("archerPoisonFlask");
    //healer skills
    const quickHeal = document.getElementById("quickHeal");
    const priestQuickHeal = document.getElementById("priestQuickHeal");
    const curseOfPain= document.getElementById("curseOfPain");
    const priestCurseOfPain = document.getElementById("priestCurseOfPain");
    const poisonMist = document.getElementById("poisonMist");
    const priestPoisonMist = document.getElementById("priestPoisonMist");
    const divineBlessing= document.getElementById("divineBlessing");
    const priestDivineBlessing = document.getElementById("priestDivineBlessing");
    const purify= document.getElementById("purify");
    const priestPurify = document.getElementById("priestPurify");
    const bloodBoil= document.getElementById("bloodBoil");
    const priestBloodBoil = document.getElementById("priestBloodBoil");
     
function back(){
    document.getElementById("questBoard").style.display = 'none';
    document.getElementById("mainMenu").style.display = 'block';

}

function backToMenu(){
    document.getElementById("mainMenu").style.display = 'block';
    document.getElementById('credits').style.display = 'none';
    document.getElementById('questBoard').style.display = 'none';
    document.getElementById("partySelectionContainer").style.display = "none";
}

function credits(){
    document.getElementById("mainMenu").style.display = 'none';
    document.getElementById('credits').style.display = 'block';
    document.getElementById('questBoard').style.display = 'none';
    document.getElementById("partySelectionContainer").style.display = "none";
}

function play(){
    document.getElementById("questBoard").style.display = 'block';
    document.getElementById("mainMenu").style.display = 'none';
}

let gameNavBar=document.getElementById('gameNavBar');
selectedMenu=gameNavBar.getElementsByTagName('P');

const questBoard = document.getElementById("questBoard");
const questsInfo = questBoard.getElementsByClassName("questInfo");
const quests = questBoard.getElementsByTagName('IMG');
const noBtn = questBoard.getElementsByClassName('no');
let currentOpenQuest = null;

function closeCurrentQuest(){
    if(currentOpenQuest !== null){
        currentOpenQuest.style.display = 'none';
        currentOpenQuest = null;
    }
/*     currentOpenQuest.style.display = 'none';
    currentOpenQuest = null; */
}

for(let i = 0; i<quests.length; i++){
    quests[i].addEventListener('click', openQuest(i));
    noBtn[i].addEventListener('click', function(){
        questsInfo[i].style.display = 'none';
        currentOpenQuest = null;
    });
}



function openQuest(index)
{
    closeCurrentQuest();
    questsInfo[index].style.display = 'block';
    currentOpenQuest = questsInfo[index];
}



function toPartySelection(){
    document.getElementById('credits').style.display = 'none';
    document.getElementById("questBoard").style.display = "none";
    document.getElementById("partySelectionContainer").style.display = "block";
}

function backToQuest(element){
    document.getElementById('credits').style.display = 'none';
    document.getElementById("questBoard").style.display = "block";
    document.getElementById("partySelectionContainer").style.display = "none";
    element.style.backgroundColor = 'grey';
}

const characters = document.querySelectorAll('.characters');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');

const previousMemberButton = document.getElementById('previousMember');
const nextMemberButton = document.getElementById('nextMember');

let currentIndex = 0;

const characterSkills = document.getElementById("characterSkills");
const characterSkillsImages = characterSkills.getElementsByTagName("img");
const knightSkills = document.querySelectorAll(".knightSkills");
const archerSkills = document.querySelectorAll(".archerSkills");
const assassinSkills = document.querySelectorAll(".assassinSkills");
const priestSkills = document.querySelectorAll(".priestSkills");
let currentIndexArray = [[],[],[],[],[]];
let Stats = document.querySelectorAll(".Stats");

function showCharacter(index){

        characters.forEach(image => {
            image.style.display = 'none';
        });

        characters[index].style.display = 'block';
        return characters[index];
}
    
showCharacter(currentIndex);

function showCharacterStats(index) {

    Stats.forEach(div =>{
        div.style.display = 'none';
    });
    Stats[index].style.display = 'block';
}

function check(index){

    Stats[index].style.display = 'block';

    characterSkills.addEventListener('mouseenter', function(){
        showSkillStats()
        isSkillStatsActive = true;
        Stats.forEach(div =>{
            div.style.display = 'none';
        });
        console.log('skills active is '+isSkillStatsActive );
    });

    characterSkills.addEventListener('mouseleave', function(){
        showSkillStats()
        isSkillStatsActive = false;    
        showCharacterStats(currentIndex);
        console.log('skills active is '+isSkillStatsActive );
        
    });
    return Stats[index];
}

    check(currentIndex);  

    function showSkills(){
        if(currentIndex==0){
            knightSkills.forEach(image =>{
                image.style.display = 'block';
            })
            archerSkills.forEach(image =>{
                image.style.display = 'none';
            })
            assassinSkills.forEach(image =>{
                image.style.display = 'none';
            })
            priestSkills.forEach(image=>{
                image.style.display = 'none';
            })
            
        }else if(currentIndex==1){
            knightSkills.forEach(image =>{
                image.style.display = 'none';
            })
            archerSkills.forEach(image =>{
                image.style.display = 'block';
            })
            assassinSkills.forEach(image =>{
                image.style.display = 'none';
            }) 
            priestSkills.forEach(image=>{
                image.style.display = 'none';
            })
        }else if(currentIndex==2){
            knightSkills.forEach(image =>{
                image.style.display = 'none';
            })
            archerSkills.forEach(image =>{
                image.style.display = 'none';
            })
            assassinSkills.forEach(image =>{
                image.style.display = 'block';
            })
            priestSkills.forEach(image=>{
                image.style.display = 'none';
            })
        }else if(currentIndex==3){
                knightSkills.forEach(image =>{
                    image.style.display = 'none';
                })
                archerSkills.forEach(image =>{
                    image.style.display = 'none';
                })
                assassinSkills.forEach(image =>{
                    image.style.display = 'none';
                })
                priestSkills.forEach(image=>{
                    image.style.display = 'block';
                })
            }
        }

    let teamContainer = document.getElementById('teamContainer');
    let teamContainerDivs = teamContainer.getElementsByTagName('DIV');

        nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % characters.length;
        showCharacter(currentIndex);
        showCharacterStats(currentIndex);
        showSkills(currentIndex);
        resetSkillDiv();
        addedSkillArray[count] = [];
        removeCharacterSelection();
    });

    previousButton.addEventListener('click', function(){
    currentIndex = (currentIndex- 1 +characters.length)%characters.length;
    showCharacter(currentIndex);
    showCharacterStats(currentIndex);
    showSkills(currentIndex);
    resetSkillDiv();
    addedSkillArray[count] = [];  
    removeCharacterSelection(); 
    });

      //tried to make dyanmic adding and removing
    // nextMemberButton.addEventListener('click', function(){
    //     count = (count+1) % characters.length;
    //     hideBtns();
    //     showChosenSkills(count);
       
    // })

    // previousMemberButton.addEventListener('click', function(){
    //     count = (count-1+characters.length) % characters.length;
    //     hideBtns();
    //     showChosenSkills(count); 
    // })

    let firstCharacter=document.getElementById("firstCharacter");
    let secondCharacter=document.getElementById("secondCharacter");
    let thirdCharacter=document.getElementById("thirdCharacter");
    let fourthCharacter=document.getElementById("fourthCharacter");

    const selectedCharacters = document.getElementsByClassName("selectedCharacter");
    let count = 0;
    const teamContainerAdd = document.getElementById("teamContainer");
    const addButton = document.getElementById("add");
   

    //tried to make dyanmic adding and removing
    // function hideBtns(){
    //     if(count >= 3){
    //         nextMemberButton.style.visibility = 'hidden';
    //     }else{
    //         nextMemberButton.style.visibility = 'visible';
    //     }

    //     if(count == 0){
    //         previousMemberButton.style.visibility = 'hidden';
    //     }else{
    //         previousMemberButton.style.visibility = 'visible';
    //     }
    // }

    

    addButton.addEventListener('click', function(){      
            if(count < 4){
                if(addedSkillArray[count].length!=0){
                        addCharacter();
                        currentIndexArray[count] = currentIndex;
                        addedSkill();    
                        count++;
                        // hideBtns();
                        showChosenSkills(count);
                        showCharacter(currentIndex);
                        showSkills(currentIndex);
                        console.log("there are " +count+" characters added");
                    }   
                }
            });

        function addCharacter(){
            if(selectedCharacters[count].childElementCount == 0){  
                const characterImage = showCharacter(currentIndex);
                const characterImageDuplicate = characterImage.cloneNode(true);
                selectedCharacters[count].appendChild(characterImageDuplicate);
            }
        }

let emptyContainer;
let lastCharacter = selectedCharacters[selectedCharacters.length - 1];


//   //tried to make dyanmic adding and removing
// function fixCharacterImages() {
//     if(count < 3){
//         for (let i = 0; i <selectedCharacters.length; i++) {
//             let currentCharacterImageCount = selectedCharacters[i].childElementCount;
//             let nextNonEmptyContainerIndex = i + 1;
//             let nextCharacterImageCount = selectedCharacters[nextNonEmptyContainerIndex].childElementCount;
//             if (currentCharacterImageCount === 0) {

                
//                 for(;nextNonEmptyContainerIndex < selectedCharacters.length; nextNonEmptyContainerIndex++){
//                     if(nextCharacterImageCount > 0){
//                         break;
//                     }
//                 }
//             }
//                 // while (nextNonEmptyContainerIndex < selectedCharacters.length && selectedCharacters[nextNonEmptyContainerIndex].childElementCount === 0) {
//                 //     nextNonEmptyContainerIndex++;
//                 // }

//                 console.log("next none empty container is "+nextNonEmptyContainerIndex);

                
//                 if (nextNonEmptyContainerIndex < selectedCharacters.length) {
//                     if(nextNonEmptyContainerIndex != 0){
//                     let nextCharacterImage = selectedCharacters[nextNonEmptyContainerIndex].lastChild;
                    
//                     nextNonEmptyContainerIndex = 0;
//                     selectedCharacters[i].appendChild(nextCharacterImage);
//                     // removeCharacterSelection();
                    
                    
 
//                     let nextSkillDivsChildren = skillDivs[nextNonEmptyContainerIndex].children
//                     let nextSkillDivImageCount = skillDivs[nextNonEmptyContainerIndex].querySelectorAll('img');

//                     for(let j=0;j<nextSkillDivsChildren.length;j++){
//                         let skillDivsChild = nextSkillDivsChildren[j];
//                         if(skillDivsChild.tagName='IMG'){
//                         let skillImage = skillDivs[nextNonEmptyContainerIndex].lastChild;

                        
//                         // skillDivs[nextNonEmptyContainerIndex].removeChild(skillImage);

//                         skillDivs[i].appendChild(skillImage);
                            
//                         addedSkillArray[i] = addedSkillArray[nextNonEmptyContainerIndex];
//                         addedSkillArray[nextNonEmptyContainerIndex] = [];
//                         let thisIsReached=true;
//                         console.log("this is reached "+thisIsReached);
//                         }    
//                     }
//                 }
//             }
//         }
//     }
// }

 
let lastFullContainer;

function findLastFullContainer(){
    for(let i = 3;i>0;i--){
      if(selectedCharacters[i].childElementCount === 0){
        let lastFullContainer = i;
        return lastFullContainer;
      }
    }   
}

findLastFullContainer();

let i = 0;
  //tried to make dyanmic adding and removing
const removeButton = document.getElementById('removeMember');
// removeButton.addEventListener('click', function(){

//     if(count == 4){
//         let thisIsReached=true;
//         console.log("this is reached "+thisIsReached);
//         count -= 1;
//         console.log("there are " +count+" characters added");
//         showChosenSkills(count);
//         changeSkillDiv();  
//     }else if(count != 4){
        
//         let nextCharacter = i+1;
       
       
//         removeCharacterSelection();
//         resetSkillDiv();      
        
//         fixCharacterImages();  
        

//         currentIndex = (currentIndexArray[count+nextCharacter]);
//         console.log("there are " +count+" characters added");
//         console.log("I is "+i);
//         showSkills(currentIndex);
//         showCharacter(currentIndex)
//         i++;
// }
    // else if(addedSkillArray[count]!=lastFullContainer){
    //     fixCharacterImages();
    //     addedSkillArray[count-1] = addedSkillArray[count];
    //         addedSkillArray[count]=null;
    // }
    // }else if(addedSkillArray[count].length > 0 && addedSkillArray[count].length!=3){
    //     addedSkillArray[count-1] = addedSkillArray[count];
    //     addedSkillArray[count]=null;
    //     count--;
    //     fixCharacterImages();
    // }



    // if(addedSkillArray[count].length === 0 && count>0){
    //     resetSkillDiv();
    //     removeCharacterSelection();
    //     showChosenSkills(count);
    //     changeSkillDiv(); 
    // }


    // if(addedSkillArray[count].length > 0){
    //     addedSkillArray[count-1] = addedSkillArray[count];
    //     addedSkillArray[count]=null;
    //     count--;
    //     resetSkillDiv();
    //     removeCharacterSelection();
    //     // fixCharacterImages();
    // }
    
// });

removeButton.addEventListener('click', function(){

    // if(addedSkillArray[count].length === 0 && count > -1){
    //     if(count=-1){
    //         count = 0;
    //     }
    //     count--;
    //     showChosenSkills(count);
    //     changeSkillDiv(); 
    // }

    // if(addedSkillArray[count].length > 0){
    //     resetSkillDiv();
    //     removeCharacterSelection();
    // }

    // // fixCharacterImages();

    if(addedSkillArray[count].length === 0 && count > 0){
        count--;
        showChosenSkills(count);
        changeSkillDiv();
    }

    if(addedSkillArray[count].length > 0){
        resetSkillDiv();
        removeCharacterSelection();
    }
     
});

function resetSkillDiv() {
    let currentSkillContainer = skillDivs[count];
                
    let childElements = currentSkillContainer.children;
                
    for (let i = 0; i < childElements.length; i++) {
        let child = childElements[i];
        if (child.tagName === 'IMG') {
            currentSkillContainer.removeChild(child);
            i--;
            }
        }
    addedSkillArray[count] = [];
    }    
    
    function removeCharacterSelection(){
        if (selectedCharacters[count].childElementCount > 0) {
            let currentCharacterImage = selectedCharacters[count].lastChild;
            selectedCharacters[count].removeChild(currentCharacterImage);
            selectedCharacters[count].childElementCount = 0;
        }
    }

    

document.getElementById("characterSelection");
document.getElementById("characters");
       


showSkills(currentIndex);

const first = document.getElementsByClassName('CharacterSelectedSkills')[0];
const second = document.getElementsByClassName('CharacterSelectedSkills')[1];
const third = document.getElementsByClassName('CharacterSelectedSkills')[2];
const fourth = document.getElementsByClassName('CharacterSelectedSkills')[3];
const fifth = document.getElementsByClassName('CharacterSelectedSkills')[4]
const firstP = document.getElementById('firstP');
const secondP = document.getElementById('secondP');
const thirdP = document.getElementById('thirdP');
const fourthP = document.getElementById('fourthP');
const fifthP = document.getElementById('fifthP');
const skillDivs = [first , second , third , fourth , fifth];
const skillDivsP = [firstP, secondP, thirdP, fourthP, fifthP];

function showChosenSkills(count){
    for( let i = 0; i<skillDivs.length; i++){
        if(i === count){
            skillDivs[i].style.display = 'block'; 
            skillDivsP[i].style.display = 'block';
        }else{
            skillDivs[i].style.display = 'none';
            skillDivsP[i].style.display = 'none';
        }
    }
}

function changeSkillDiv(){
    xDiv = skillDivs[count];
}

   let xDiv;

   let selectedSkillSource;
   let newImageSource;
   let addedSkillArray = [[],[],[],[],[]];

   let currentSkill = addedSkillArray[count];

   let maxAddedSkill = 4;
   let addedSkills = 0;
   
    function addedSkill(){
        characterSkills.addEventListener('click', function(event) {
            const selectedSkill = event.target;
            if(count != 4){
                if (addedSkillArray[count].length < maxAddedSkill) {
                    if (selectedSkill.tagName === 'IMG') {
                        const newImage = document.createElement('img');
                        newImage.src = selectedSkill.src;
        
                        let isImageAlreadyAdded = false;
                        for (let i = 0; i < addedSkillArray[count].length; i++) {
                            if (addedSkillArray[count][i] === newImage.src) {
                                isImageAlreadyAdded = true;
                                break;
                            }
                        }
            
                    console.log(isImageAlreadyAdded);
    
                    if (!isImageAlreadyAdded) {
                        addedSkillArray[count].push(newImage.src);
                        newImage.style.width = '50%';
                        console.log("should be complete")
                        changeSkillDiv();
                        xDiv.appendChild(newImage);
                        console.log("addedSkill =" + addedSkillArray[0]);
                        }
                    }
                }
            }
        });
    }
    addedSkill();

  let knightSkillsP= document.querySelectorAll('.knightSkillsP');
  let assassinSkillsP=document.querySelectorAll('.assassinSkillsP');
  let archerSkillsP=document.querySelectorAll('.archerSkillsP');
  let priestSkillsP=document.querySelectorAll('.priestSkillsP');
    //knight skills in container hover function
function showSkillStats(){

    for(let i = 0; i < knightSkills.length; i++){
        knightSkills[i].addEventListener('mouseleave', function(){
            knightSkillsP[i].style.display='none';
        });

        knightSkills[i].addEventListener('mouseenter', function(){
            knightSkillsP[i].style.display = 'block';
        })
    }

    for(let i = 0; i < assassinSkills.length; i++){
        assassinSkills[i].addEventListener('mouseleave', function(){
            assassinSkillsP[i].style.display='none';
        });

        assassinSkills[i].addEventListener('mouseenter', function(){
            assassinSkillsP[i].style.display = 'block';
        })
    }

    for(let i = 0; i < archerSkills.length; i++){
        archerSkills[i].addEventListener('mouseleave', function(){
            archerSkillsP[i].style.display='none';
        });

        archerSkills[i].addEventListener('mouseenter', function(){
           archerSkillsP[i].style.display = 'block';
        })
    }

    for(let i = 0; i < priestSkills.length; i++){
        priestSkills[i].addEventListener('mouseleave', function(){
            priestSkillsP[i].style.display='none';
        });

        priestSkills[i].addEventListener('mouseenter', function(){
            priestSkillsP[i].style.display = 'block';
        })
    }
}


for(let i = 0; i<quests.length; i++){
    quests[i].removeEventListener('click', openQuest(i));
}

closeCurrentQuest();

/* let partySelectionNav = document.getElementById("partySelected");
let partySelectionNav2 = document.getElementById("partySelected2"); */

/* partySelectionNav.removeAttribute("onclick");
partySelectionNav2.removeAttribute("onclick"); */

tutorialMessage1();

function tutorialMessage1()
{
    document.body.innerHTML += 
    "<div class='tutorial' style='width: 100%; height: 100%; background-color: #00000070; display: block; position: absolute; top:0; z-index: 50'></div>"

    let tutorial = document.getElementsByClassName("tutorial")[0];

    tutorial.innerHTML =
    "<div class='tutorialMessage1' style='position: relative; width: 50%; height: 50%; margin: auto; border: 2px solid black; top: 25%; background-color: #784316; text-align: center; padding: 2%'></div>"

    let tutorialMessage1 = document.getElementsByClassName("tutorialMessage1")[0];

    tutorialMessage1.innerHTML =
    "<h1>Welcome To EVERGREEN!</h1>"
    +
    "<p>A game about completing quests and fighting enemies</p>"
    +
    "<p>You can try out different strategies and fight enemies in different difficulties</p>"
    +
    "<button onclick='tutorialMessage2()' style='font-size: 20px;'>Continue</button>";
}

function tutorialMessage2()
{
    let tutorialMessage1 = document.getElementsByClassName("tutorialMessage1")[0];

    tutorialMessage1.innerHTML =
    "<h1>Pick a Quest!</h1>"
    +
    "<p>Start by choosing a quest</p>"
    +
    "<p>Each quest has a set difficulty indicated by the number of skulls</p>"
    +
    "<button onclick='tutorialMessage3()' style='font-size: 20px;'>Continue</button>";
}

function tutorialMessage3()
{
    let tutorial = document.getElementsByClassName("tutorial")[0];
    tutorial.style.display = "none";

    document.body.innerHTML +=
    "<div class='tutorialMessage2' style='width: 20%; height: 20%; position: fixed; right: 0; top: 0; background-color: #784316; border: 2px solid black; text-align: center;'></div>";

    let tutorialMessage2 = document.getElementsByClassName("tutorialMessage2")[0];

    tutorialMessage2.innerHTML =
    "<h1>Start by selecting an easy quest</h1>";

    let easyQuest = document.getElementsByClassName("easyQ")[0];

    easyQuest.setAttribute("onclick", "openEasyQuest(); tutorialMessage4()");

    easyQuest.style.border = "2px solid red";
}

function openEasyQuest()
{
    let quest = document.getElementsByClassName("questInfo")[0];

    quest.style.display = "block";
}

function tutorialMessage4()
{
    let tutorialMessage2 = document.getElementsByClassName("tutorialMessage2")[0];

    tutorialMessage2.style.top = "50%";

    tutorialMessage2.innerHTML =
    "<h1>Click 'accept'</h1>";
}

function acceptQuest()
{
    toPartySelection();
    tutorialMessage5();
}

function tutorialMessage5()
{
    let tutorialMessage2 = document.getElementsByClassName("tutorialMessage2")[0];
    tutorialMessage2.style.display = "none";

    let tutorial = document.getElementsByClassName("tutorial")[0];

    let tutorialMessage1 = document.getElementsByClassName("tutorialMessage1")[0];

    tutorial.style.display = "block";

    tutorialMessage1.innerHTML =
    "<h1>Select Your Units</h1>"
    +
    "<p>After you have picked a quest, you will need to hire a crew to take it on</p>"
    +
    "<p>Each class has 6 skills to choose from but they can only bring 4 each and you can only bring 4 units at most so choose carefully</p>"
    +
    "<p>Tip: you can bring multiple units of the same type</p>"
    +
    "<button onclick='tutorialMessage6()' style='font-size: 20px;'>Continue</button>";
}

function tutorialMessage6()
{
    let tutorial = document.getElementsByClassName("tutorial")[0];
    tutorial.style.display = "none";

    let tutorialMessage2 = document.getElementsByClassName("tutorialMessage2")[0];

    tutorialMessage2.style.display = "block";

    tutorialMessage2.innerHTML = 
    "<p>Start by picking the basic attack skill for the knight";

    tutorialMessage2.style.top = "20%";
    tutorialMessage2.style.left = "50%";

    let skill1 = document.getElementById("basicAttack");
    skill1.style.border = "2px solid red";
    skill1.setAttribute("onclick", "addSkill('knight', 'S1'); tutorialMessage7()");
}

function addSkill(unit, skill)
{
    let container = document.getElementById("skillsContainer");

    container.innerHTML +=
    "<img class='addedSkills' style='width: 50%;' src='png images/characters/" + unit + "/" + unit + skill + ".png'>";
}

function tutorialMessage7()
{
    let skill1 = document.getElementById("basicAttack");
    skill1.style.border = "none";
    skill1.removeAttribute("onclick");

    let skill2 = document.getElementById("guard");
    skill2.style.border = "2px solid red";
    skill2.setAttribute("onclick", "addSkill('knight', 'S2'); tutorialMessage8()");

    let tutorialMessage2 = document.getElementsByClassName("tutorialMessage2")[0];
    tutorialMessage2.innerHTML = 
    "<p>Now select the guard skill</p>";
}

function tutorialMessage8()
{
    let skill2 = document.getElementById("guard");
    skill2.style.border = "none";
    skill2.removeAttribute("onclick");

    let addBtn = document.getElementById("add");
    addBtn.style.border = "2px solid red";
    addBtn.setAttribute("onclick", "addKnight(); tutorialMessage9()");

    let tutorialMessage2 = document.getElementsByClassName("tutorialMessage2")[0];
    tutorialMessage2.innerHTML = 
    "<p>Now let's add the knight to our party</p>";
}

function addKnight()
{
    let container = document.getElementById("firstCharacter");

    container.innerHTML +=
    "<img width='100%' height='100%' src='png images/characters/knight/knight.png'>"
}

function tutorialMessage9()
{
    let addBtn = document.getElementById("add");
    addBtn.style.border = "1px solid gray";
    addBtn.removeAttribute("onclick");

    let nextBtn = document.getElementById("next");
    nextBtn.style.border = "2px solid red";
    nextBtn.setAttribute("onclick", "showPriest(); tutorialMessage10()");

    let tutorialMessage2 = document.getElementsByClassName("tutorialMessage2")[0];
    tutorialMessage2.innerHTML = 
    "<p>Ok, next let's switch to the priest class</p>";
}

function showPriest()
{
    let classImg = document.getElementById("knightImg");
    classImg.src = "/img/png images/characters/priest/priest.png";

    let skills = document.getElementsByClassName("knightSkills");

    for (let index = 0; index < skills.length; index++)
    {
        let skill = skills[index];
        
        skill.src = "/img/png images/characters/priest/priestS" + (index + 1) + ".png";
    }

    let addedSkills = document.getElementsByClassName("addedSkills");
    addedSkills[1].parentNode.removeChild(addedSkills[1]);
    addedSkills[0].parentNode.removeChild(addedSkills[0]);

    let classStats = document.getElementsByClassName("Stats");
    classStats[0].style.display = "none";
    classStats[3].style.display = "block";

    let charVal = document.getElementById("firstP");
    charVal.textContent = "Second Character";
}

function tutorialMessage10()
{
    let nextBtn = document.getElementById("next");
    nextBtn.style.border = "1px solid gray";
    nextBtn.removeAttribute("onclick");

    let skill1 = document.getElementById("basicAttack");
    skill1.style.border = "2px solid red";
    skill1.setAttribute("onclick", "addSkill('priest', 'S1'); tutorialMessage11()");

    let tutorialMessage2 = document.getElementsByClassName("tutorialMessage2")[0];
    tutorialMessage2.innerHTML = 
    "<p>The priest can heal unit using the Quick Heal skill, let's select it</p>";
}

function tutorialMessage11()
{
    let skill1 = document.getElementById("basicAttack");
    skill1.style.border = "none";
    skill1.removeAttribute("onclick");

    let skill2 = document.getElementById("guard");
    skill2.style.border = "2px solid red";
    skill2.setAttribute("onclick", "addSkill('priest', 'S2'); tutorialMessage12()");

    let tutorialMessage2 = document.getElementsByClassName("tutorialMessage2")[0];
    tutorialMessage2.innerHTML = 
    "<p>Now let's select the Curse of Pain skill</p>";
}

function tutorialMessage12()
{
    let skill2 = document.getElementById("guard");
    skill2.style.border = "1px solid gray";
    skill2.removeAttribute("onclick");

    let addBtn = document.getElementById("add");
    addBtn.style.border = "2px solid red";
    addBtn.setAttribute("onclick", "addPriest(); tutorialMessage13()");

    let tutorialMessage2 = document.getElementsByClassName("tutorialMessage2")[0];
    tutorialMessage2.innerHTML = 
    "<p>Great, now let's add the priest to the party</p>";
}

function addPriest()
{
    let container = document.getElementById("secondCharacter");

    container.innerHTML +=
    "<img width='70%' src='png images/characters/priest/priest.png'>"
}

function tutorialMessage13()
{
    let addBtn = document.getElementById("add");
    addBtn.style.border = "1px solid gray";
    addBtn.removeAttribute("onclick");

    let tutorialMessage2 = document.getElementsByClassName("tutorialMessage2")[0];
    tutorialMessage2.innerHTML = 
    "<p>That should be enough for now, let's depart for battle!</p>";

    document.body.innerHTML +=
    "<button style='position: absolute; top: 10%; right: 10%; font-size: 20px; color: green; border: 2px solid red' onclick='redirectToCombat()'>Depart</button>";
}

function redirectToCombat()
{
    window.location.assign("combatTutorial.html");
}