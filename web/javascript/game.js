let vaisseau = document.getElementById('vaisseau');
let footer =document.getElementById('footer');
let missileList = document.getElementById('missileList');
let tabM = Array();
let shoot = false;
function missileDeplacement(missile){
    let y = missile.style.top.split('px');
    missile.style.top=Number(y[0])-Number(5)+'px';
}

async function removeMissile(missile){
    if(missile.y<=0){
        missileList.removeChild(missile);
        tabM.splice(tabM.indexOf(missile),1)
    }
    console.log(tabM);
}

function missileHitbox(missile){

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
   // console.log('move '+Number(event.pageX));
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

