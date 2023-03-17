let compteur = 1;
let url = "../web/images/";
let tabImage = [url+"aventurierFond.jpeg",url+"AventurierRail.png"];
function clickImageNext(){
    if(compteur>=tabImage.length-1){
        compteur=0;
    }
    else{
        compteur++;
    }

    document.getElementById('imageProjet').src = tabImage[compteur];

}
function clickImageOld(){
    if(compteur<=0){
        compteur=tabImage.length-1;
    }
    else{
        compteur--;
    }

    document.getElementById('imageProjet').src = tabImage[compteur];
}