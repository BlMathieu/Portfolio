<?php

namespace App\Controller;
class GeneralController{
    public static function affiche(string $chemin,$cheminBody,$title) : void{
        require __DIR__."/../view/$chemin";
    }

    public function afficheAccueil(){
        static::affiche('view.php','accueil.php','Accueil');
    }
    public function afficheProjets(){

    }
}

