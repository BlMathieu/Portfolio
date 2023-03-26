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
        static::affiche('view.php','projets.html','Projets');
    }

    public static function afficheInformation(){
        static::affiche('view.php','informations.html','Informations');
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

    public static function afficheEcommerce(){
        static::affiche('view.php','ecommerce.html','E-commerce');
    }
    public static function afficheSecret(){
        static::affiche('secret.html','','');
    }
}

