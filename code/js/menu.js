function back(){
    document.getElementById("questBoard").style.display = 'none';
    document.getElementById("mainMenu").style.display = 'block';
}
function play(){
    document.getElementById("questBoard").style.display = 'block';
    document.getElementById("mainMenu").style.display = 'none';
   
}

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
}

for(let i = 0; i<quests.length; i++){
    quests[i].addEventListener('click', function(){
        closeCurrentQuest();
        questsInfo[i].style.display = 'block';
        currentOpenQuest = questsInfo[i];
    });
    noBtn[i].addEventListener('click', function(){
        questsInfo[i].style.display = 'none';
        currentOpenQuest = null;
    });
}

function toPartySelection(){
    document.getElementById("questBoard").style.display = "none";
    document.getElementById("partySelectionContainer").style.display = "block";
}

function backToQuest(){
    document.getElementById("questBoard").style.display = "block";
    document.getElementById("partySelectionContainer").style.display = "none";
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


function showCharacter(index){

        characters.forEach(image => {
            image.style.display = 'none';
        });

        characters[index].style.display = 'block';
        return characters[index];
      
    }
    
    showCharacter(currentIndex);


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
        }
            else if(currentIndex==3){
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
    

        nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % characters.length;
        showCharacter(currentIndex);
        showSkills(currentIndex);
        resetSkillDiv();
        addedSkillArray[count] = [];
        removeCharacterSelection();
  
    });

    previousButton.addEventListener('click', function(){
    currentIndex = (currentIndex- 1 +characters.length)%characters.length;
    showCharacter(currentIndex);
    showSkills(currentIndex);
    resetSkillDiv();
    addedSkillArray[count] = [];  
    removeCharacterSelection(); 
  
    });

    // nextMemberButton.addEventListener('click', function(){
    //     count = (count+1) % characters.length;
    //     showChosenSkills(count);
    //     removeCharacterSelection();
    // })

    // previousMemberButton.addEventListener('click', function(){
    //     count = (count-1+characters.length) % characters.length;
    //     showChosenSkills(count);
    //     removeCharacterSelection();
    // })

    let firstCharacter=document.getElementById("firstCharacter");
    let secondCharacter=document.getElementById("secondCharacter");
    let thirdCharacter=document.getElementById("thirdCharacter");
    let fourthCharacter=document.getElementById("fourthCharacter");
 
    const selectedCharacters = document.getElementsByClassName("selectedCharacter");
    let count = 0;
    const teamContainerAdd = document.getElementById("teamContainer");
    const addButton = document.getElementById("add");
  
    addButton.addEventListener('click', function(){      
    
        if(count == 0){       
            if(addedSkillArray[count].length!=0){
              
                if(firstCharacter.childElementCount == 0){
                    const characterImage = showCharacter(currentIndex);
                    const characterImageDuplicate = characterImage.cloneNode(true);
                    firstCharacter.appendChild(characterImageDuplicate);
                    currentIndexArray[count] = currentIndex;
                    addedSkill();    
                    count++; //count = 1
                    showChosenSkills(count);
                    console.log("there are " +count+" characters added");
                    }   
            }

        }else if(count == 1){
            if(addedSkillArray[count]!=0){
                  
                if(secondCharacter.childElementCount == 0){        
                const characterImage = showCharacter(currentIndex);
                const characterImageDuplicate = characterImage.cloneNode(true);
                secondCharacter.appendChild(characterImageDuplicate);
                currentIndexArray[count] = currentIndex;
                addedSkill(); 
                count++; //count = 2
                showChosenSkills(count);
                console.log("there are"+count+" characters added");
                }   
            }

        }else if(count == 2){
            if(addedSkillArray[count]!=0){
              
                if(thirdCharacter.childElementCount == 0){  
                const characterImage = showCharacter(currentIndex);
                const characterImageDuplicate = characterImage.cloneNode(true);
                thirdCharacter.appendChild(characterImageDuplicate);
                // thirdCharacterFull = true;
                currentIndexArray[count] = currentIndex;
                addedSkill();
                count++;//count = 3
                showChosenSkills(count);
                console.log("there are"+count+" characters added");
                }
            }

        }else if(count == 3){
            if(addedSkillArray[count]!=0){
            
                if(fourthCharacter.childElementCount == 0){  
                const characterImage = showCharacter(currentIndex);
                const characterImageDuplicate = characterImage.cloneNode(true);
                fourthCharacter.appendChild(characterImageDuplicate);
                fourthCharacterFull = true;
                currentIndexArray[count] = currentIndex;
                addedSkill();
                count++; //count = 4
                showChosenSkills(count);
                console.log("there are"+count+" characters added");
                
                }
            }
        }
    });

    
const removeButton = document.getElementById('removeMember');
removeButton.addEventListener('click', function(){

   

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
            
function removeCharacterSelection() {
    if (count === 0) {
        if (firstCharacter.childElementCount > 0) {
  
            let firstCharacterImage = firstCharacter.lastChild;
            firstCharacter.removeChild(firstCharacterImage);
        }
    } else if (count === 1) {
        if (secondCharacter.childElementCount > 0) {

            let secondCharacterImage = secondCharacter.lastChild;
            secondCharacter.removeChild(secondCharacterImage);
        }
    } else if (count === 2) {
        if (thirdCharacter.childElementCount > 0) {
            let thirdCharacterImage = thirdCharacter.lastChild;
            thirdCharacter.removeChild(thirdCharacterImage);
  
        }
    } else if (count === 3) {
        if (fourthCharacter.childElementCount > 0) {
            let fourthCharacterImage = fourthCharacter.lastChild;
            fourthCharacter.removeChild(fourthCharacterImage);

        }
    }  
}

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
                        // addedSkills++;
                        console.log("addedSkill =" + addedSkillArray[0]);
                        }
                    }
                }
            }
        });
    }

    addedSkill();

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

    //knight skills in container hover function
    basicAttack.addEventListener('mouseleave', function(){
        knightBasicAttack.style.display='none';        
    });

    basicAttack.addEventListener('mouseenter', function(){
        knightBasicAttack.style.display='block';        
    });

    guard.addEventListener('mouseleave', function(){
        knightGuard.style.display='none';        
    });

    guard.addEventListener('mouseenter', function(){
        knightGuard.style.display='block';        
    });

    empower.addEventListener('mouseleave', function(){
        knightEmpower.style.display='none';        
    });

    empower.addEventListener('mouseenter', function(){
        knightEmpower.style.display='block';        
    });

    heavyAttack.addEventListener('mouseleave', function(){
        knightHeavyAttack.style.display='none';        
    });

    heavyAttack.addEventListener('mouseenter', function(){
        knightHeavyAttack.style.display='block';        
    });

    encourage.addEventListener('mouseleave', function(){
        knightEncourage.style.display='none';        
    });

    encourage.addEventListener('mouseenter', function(){
        knightEncourage.style.display='block';        
    });

    guardian.addEventListener('mouseleave', function(){
        knightGuardian.style.display='none';        
    });

    guardian.addEventListener('mouseenter', function(){
        knightGuardian.style.display='block';        
    });

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
    
    
    stab.addEventListener('mouseleave', function(){
        assassinStab .style.display='none';        
    });

    stab.addEventListener('mouseenter', function(){
        assassinStab .style.display='block';        
    });

    smokeBomb.addEventListener('mouseleave', function(){
        assassinSmokeBomb.style.display='none';        
    });

    smokeBomb.addEventListener('mouseenter', function(){
        assassinSmokeBomb.style.display='block';        
    });

    slice.addEventListener('mouseleave', function(){
        assassinSlice.style.display='none';        
    });

    slice.addEventListener('mouseenter', function(){
        assassinSlice.style.display='block';        
    });

    backstab.addEventListener('mouseleave', function(){
        assassinBackstab .style.display='none';        
    });

    backstab.addEventListener('mouseenter', function(){
        assassinBackstab.style.display='block';        
    });

    taunt.addEventListener('mouseleave', function(){
        assassinTaunt.style.display='none';        
    });

    taunt.addEventListener('mouseenter', function(){
        assassinTaunt.style.display='block';        
    });

    sharpEdges.addEventListener('mouseleave', function(){
        assassinSharpEdges.style.display='none';        
    });

    sharpEdges.addEventListener('mouseenter', function(){
        assassinSharpEdges.style.display='block';        
    });

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
    

    spreadshot.addEventListener('mouseleave', function(){
        archerSpreadshot.style.display='none';        
    });

    spreadshot.addEventListener('mouseenter', function(){
       archerSpreadshot.style.display='block';        
    });

    quickshot.addEventListener('mouseleave', function(){
       archerQuickshot.style.display='none';        
    });

    quickshot.addEventListener('mouseenter', function(){
       archerQuickshot.style.display='block';        
    });

    poisonCoating.addEventListener('mouseleave', function(){
        archerPoisonCoating.style.display='none';        
    });

    poisonCoating.addEventListener('mouseenter', function(){
        archerPoisonCoating.style.display='block';        
    });

    piercingShot.addEventListener('mouseleave', function(){
        archerPiercingShot.style.display='none';        
    });

    piercingShot.addEventListener('mouseenter', function(){
        archerPiercingShot.style.display='block';        
    });

    arrowRain.addEventListener('mouseleave', function(){
        archerArrowRain.style.display='none';        
    });

    arrowRain.addEventListener('mouseenter', function(){
        archerArrowRain.style.display='block';        
    });

    poisonFlask.addEventListener('mouseleave', function(){
        archerPoisonFlask.style.display='none';        
    });

    poisonFlask.addEventListener('mouseenter', function(){
        archerPoisonFlask.style.display='block';        
    });

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
   
    quickHeal.addEventListener('mouseleave', function(){
        priestQuickHeal.style.display='none';        
    });

     quickHeal.addEventListener('mouseenter', function(){
        priestQuickHeal.style.display='block';        
    });

     curseOfPain.addEventListener('mouseleave', function(){
        priestCurseOfPain.style.display='none';        
    });

    curseOfPain.addEventListener('mouseenter', function(){
        priestCurseOfPain.style.display='block';        
    });

     poisonMist.addEventListener('mouseleave', function(){
       priestPoisonMist.style.display='none';        
    });

     poisonMist.addEventListener('mouseenter', function(){
       priestPoisonMist.style.display='block';        
    });


      divineBlessing.addEventListener('mouseleave', function(){
    priestDivineBlessing.style.display='none';        
    });

    divineBlessing.addEventListener('mouseenter', function(){
    priestDivineBlessing.style.display='block';        
    });

     purify.addEventListener('mouseleave', function(){
        priestPurify.style.display='none';        
    });

    purify.addEventListener('mouseenter', function(){
        priestPurify.style.display='block';        
    });

     bloodBoil.addEventListener('mouseleave', function(){
       priestBloodBoil.style.display='none';        
    });

    bloodBoil.addEventListener('mouseenter', function(){
       priestBloodBoil.style.display='block';        
    });