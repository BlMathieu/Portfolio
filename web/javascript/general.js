

function navTitleFocus(){
    const element = rubrique.getElementsByTagName('p');
    for(let i=0;i<element.length;i++){
        if(element.item(i).textContent==document.title){
            element.item(i).style.borderColor="red";
        }
    }

}

window.onload = function (){
    const rubrique = document.getElementById('rubrique');
    navTitleFocus();
}