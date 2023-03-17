<?php

namespace App\Controller;
class GeneralController{
    public static function affiche(string $chemin,$cheminBody,$title) : void{
        require __DIR__."/../view/$chemin";
    }

    public static function afficheAccueil(){
        static::affiche('view.php','accueil.html','Accueil');
    }
    public static function afficheProjets(){
        static::affiche('view.php','projets');

    }
}

