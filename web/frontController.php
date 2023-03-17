<?php

require_once __DIR__."/../controller/GeneralController.php";
use App\Controller\GeneralController;

if(isset($_GET['action'])){
    $action = 'affiche'.ucfirst($_GET['action']);
    if(method_exists(GeneralController::class,$action)){
        GeneralController::$action();
    }
}
else{
    GeneralController::afficheAccueil();
}


