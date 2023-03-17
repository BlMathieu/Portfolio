<?php

use App\Controller\GeneralController;

if(isset($_GET['action'])){
    $action = $_GET['action'];
    $className = 'GeneralController.'.$action;
    echo($className);
    if(class_exists($className)){
        $className::$action();
    }

}
else{
    GeneralController::afficheAccueil();
}


