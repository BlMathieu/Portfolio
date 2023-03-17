<?php

namespace App\Controller;
class GeneralController{
    public static function affiche(string $chemin,$cheminBody,$title) : void{
        require __DIR__."/../view/$chemin";
    }


    public static function lire(){
        echo('sazlut');
    }
    public static function afficheAccueil(){
        static::affiche('view.php','accueil.html','Accueil');
    }
    public static function afficheProjets(){
        static::affiche('view.php','projets.html','Liste des projets');
    }

    public static function afficheInformation(){
        static::affiche('view.php','information.html','Information');
    }

    public static function afficheContact(){
        static::affiche('view.php','contact.html','Contact');
    }

    public static function afficheCassebrique(){
        static::affiche('view.php','casse-brique.html','Casse-Brique');
    }

    public static function afficheAventurierdurail(){
        static::affiche('view.php','aventurierDuRail.html','Aventurier Du Rail');
    }
}

