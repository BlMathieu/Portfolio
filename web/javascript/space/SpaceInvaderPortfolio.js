let divListeMonstre;
let vaisseau;
let space;
let listMonstre = new Array();
let listMissile = new Array();
function initMobs(){

   let matrice = [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1],
            [1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1],
            [1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1],
            [1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1],
            [1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0],
            [1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1],
            [1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1],
            [1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1],
            [1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0],

    ]

  /*  let matrice = [
        [1,1,1,1],
        [1,0,0,1],
    ]*/

    console.log(matrice[0].length);

    for(let i=0;i<matrice.length;i++){
        let divMonstre = document.createElement('div');
        divMonstre.classList.add("divMonstre");
        divListeMonstre.appendChild(divMonstre);
        for(let y=0;y<matrice[0].length;y++){
            if(matrice[i].at(y)===1){
                let monstre = document.createElement('img');
                monstre.src="../web/images/monstre.png";
                monstre.classList.add('monstre');
                monstre.style.paddingLeft='5px';
              //  divMonstre.style.left = 150+25*y+'px';
              //  divMonstre.style.top = 198+25*i+'px';
                listMonstre.push(monstre);
                divMonstre.appendChild(monstre);
            }
            else{
                let monstre = document.createElement('img');
                monstre.src="../web/images/monstre.png";
                monstre.classList.add('monstre');
                monstre.style.visibility='hidden';
                monstre.style.paddingLeft='5px';
                //  divMonstre.style.left = 150+25*y+'px';
                //  divMonstre.style.top = 198+25*i+'px';
                divMonstre.appendChild(monstre);
            }
        }
    }
}

function moveMissile(){
    for(let i=0;i<listMissile.length;i++){
        let missile = listMissile[i];
        if(missile.offsetTop<=space.offsetTop){
           missile.remove();
        }
        else{
           missile.style.top = missile.offsetTop - 10+'px';
            for(let x=0;x<listMonstre.length;x++){
                let monstre = listMonstre[x];
                let condX = missile.offsetLeft>=monstre.offsetLeft && missile.offsetLeft<=monstre.offsetLeft+monstre.offsetWidth;
                if(listMonstre[x].offsetTop >= listMissile[i].offsetTop && condX){
                    listMissile[i].remove();
                    listMonstre[x].style.visibility='hidden';
                    listMonstre.splice(listMonstre.indexOf(listMonstre[x]),1);
                }
            }
        }
    }
}

window.onload = function (){
    divListeMonstre = document.getElementById('listeMonstre');
    vaisseau = document.getElementById('vaisseau');
    space = document.getElementById('space');
    initMobs()
    moveMissile();

    setInterval( function (){
        moveMissile();
    },1000/60);
}

window.onclick = function (){
    let missile = document.createElement('img');
    missile.src="../web/images/missile.png";
    missile.classList.add('missile');
    missile.style.left = vaisseau.offsetLeft+10 + 'px';
    missile.style.top = vaisseau.offsetTop-10+'px';
    listMissile.push(missile);
    space.appendChild(missile);
}
window.addEventListener('mousemove',ev => {
    if(ev.pageX<window.innerWidth-vaisseau.offsetWidth*0.5){
        vaisseau.style.left=Number(ev.pageX)-Number(25)+'px';
    }

})