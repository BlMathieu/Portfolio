let idvaisseau;
let idmobs;
let tableaumobs = Array();
let tableauMissile = Array();
let tir = false;
let missileDiv;
let vitesseMonstre = 3;
let pScore;
let score = 0;
function initVar(){
    idvaisseau = document.getElementById('vaisseau');
    idmobs = document.getElementById('mobs');
    missileDiv = document.getElementById('missileDiv');
    pScore = document.getElementById('pScore');
    document.getElementById('btPlay').onclick = function (){
        initMobs(4,10);
        document.getElementById('replay').style.visibility ='hidden';
        score=0;
    };
}
function initMobs(ligne,nbMonstre){
    for(let i=0;i<ligne;i++){
        let div = document.createElement('div');
        div.classList.add('divMonstres');

        for(let x=0;x<nbMonstre;x++){
            let element = document.createElement('img');
            element.alt='mob';
            element.classList.add('monstre');
            element.src ="../web/images/monstre.png";
          //  element.style.left = Number(element.offsetLeft) + 'px'
            div.appendChild(element);
            tableaumobs.push(element);
        }
        idmobs.appendChild(div);
    }
}

function deplacerMissile(){
    for(let i=0;i<tableauMissile.length;i++){
        let elem = tableauMissile[i];
        elem.style.top = elem.offsetTop-5+'px';

    }
}
function hitboxMur(){
    for(let i=0;i<tableauMissile.length;i++){
        let missile = tableauMissile[i];
        if(missile.offsetTop+window.innerHeight<=window.innerHeight){
            supprimerMissile(missile);
        }
    }
}
async function supprimerMob(mob){
    mob.style.visibility='hidden'
    tableaumobs.splice(tableaumobs.indexOf(mob),1);
}

async function supprimerMissile(missile){
    missileDiv.removeChild(missile);
    tableauMissile.splice(tableauMissile.indexOf(missile),1);
}
function majScore(){
    score+=100;
    document.getElementById('pScore').textContent = "Score :"+score;
}
async function missileHitbox(){
    for(let i=0;i<tableaumobs.length;i++){
        elem = tableaumobs[i];
        for(let z=0;z<tableauMissile.length;z++){
            let missile = tableauMissile[z];

            let condX = missile.offsetLeft>=elem.offsetLeft && missile.offsetLeft<=elem.offsetLeft+elem.offsetWidth;
            let condY = missile.offsetTop+window.innerHeight<=elem.offsetTop+window.innerHeight+elem.offsetHeight-15;

            if(condX && condY){
                majScore();
                supprimerMissile(missile);
                supprimerMob(elem);
            }
        }
    }
}
function tirer(){
    if(tir){
        let missile = document.createElement('img');
        missile.alt='missile';
        missile.src='../web/images/missile.png';
        missile.style.left = idvaisseau.offsetLeft+23+'px';
        missile.style.top = idvaisseau.offsetTop-25+'px';
        missile.classList.add('missile');

        tableauMissile.push(missile);
        missileDiv.append(missile);
    }
    tir=false;
}

function deplacerMonstre(){
     for(let i=0;i<tableaumobs.length;i++) {
        let elem = tableaumobs[i];

     /* if(elem.offsetLeft>=window.innerWidth-58 || elem.offsetLeft<=8){

        }*/
        elem.style.left = elem.offsetLeft+vitesseMonstre+'px';
    }
}

function inverserDeplacementMonstre(){
    vitesseMonstre *=-1;
}

window.addEventListener('click',event =>{
    tir=true;
})
window.addEventListener('mousemove',ev => {
    if(ev.pageX+25<window.innerWidth && ev.pageX-25>0){
        idvaisseau.style.left=Number(ev.pageX)-Number(25)+'px';
    }
})

window.onload = function (){
    initVar();
    initMobs(4,10);

    setInterval( function (){
        inverserDeplacementMonstre();
    },4000);

    setInterval(function (){
        tirer();
        deplacerMissile();
        deplacerMonstre();
        hitboxMur();
        missileHitbox();

        if(tableaumobs.length===0){
            document.getElementById('replay').style.visibility='visible';
        }
    },1000/60)
}