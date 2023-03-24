let compteur = 1;
let url = "../web/images/ecommerce/";
let tabImage = [url+"ecommerce.png",url+"connexionEcommerce.png",url+"creationCompteEcommerce.png",url+"connecteEcommerce.png",url+"historiqueCommandeEcommerce.png",url+"objetEcommerce.png",url+"panierEcommerce.png"];
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