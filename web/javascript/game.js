let vaisseau = document.getElementById('vaisseau');
let footer =document.getElementById('footer');
let missileList = document.getElementById('missileList');
let rubrique = document.getElementById('rubrique');
let tabM = Array();
let tabE = Array();
let shoot = false;
function missileDeplacement(missile){
    let y = missile.style.top.split('px');
    missile.style.top=Number(y[0])-Number(5)+'px';

    missileHitbox(missile);
}


async function removeMissile(missile){
    if(missile.y<=0){
        missileList.removeChild(missile);
        tabM.splice(tabM.indexOf(missile),1)
    }
}
async function removeObject(){

}

function missileHitbox(missile){


    for(let i=0;i<rubrique.getElementsByTagName('p').length;i++){
        let element = rubrique.getElementsByTagName('p').item(i);

        let widthCond = element.offsetLeft<=missile.offsetLeft && element.offsetLeft+element.offsetWidth>=missile.offsetLeft;
        let heightCond = element.offsetTop+element.offsetHeight>=window.innerHeight+missile.offsetTop && element.offsetTop<=missile.offsetTop+window.innerHeight;
        if((widthCond&&heightCond)){
            document.location.href=element.textContent.toLocaleLowerCase()+".html";
        }

    }

}

function initMissile(){
    let x = vaisseau.style.left.split('px');
    let missile = document.createElement('img');
    missile.classList.add('missile');
    missile.src="../web/images/missile.png";
    missile.style.left=Number(x[0])+Number(24)+'px';
    missile.style.top=Number(-25)+'px';

    missileList.appendChild(missile);
    tabM.push(missile);
}

document.addEventListener('mousemove',function (event){
    if(event.pageX+50<window.innerWidth){
        vaisseau.style.left=event.pageX+'px';
    }
})

function update(){
   if(shoot){
       initMissile();
       shoot=false;
   }
   for(let i=0;i<tabM.length;i++){
       missileDeplacement(tabM[i]);
       removeMissile(tabM[i]);
   }



}

document.onclick = function (){
    shoot=true;
}

function loop(){
    setInterval(()=>{
        update();

    },1000/60);
}

window.onload = function (){
   loop();
};

