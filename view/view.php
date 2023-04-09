<!DOCTYPE html >
<html lang="en" id="vanta-canvas">
<head>
    <meta charset="UTF-8">
    <title> <?php echo($title); ?>
    </title>
    <link rel="stylesheet" href="../web/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
</head>

<body>
        <header>
            <nav id="rubrique">
                <div>
                    <h1 class="title">Portfolio</h1>
                </div>
                <div>
                    <div>
                        <a class="choix" href="frontController.php">Accueil</a>
                    </div>
                    <div>
                        <a class="choix" href="frontController.php?action=information">Informations</a>
                    </div>
                    <div>
                        <a class="choix" href="frontController.php?action=projets">Projets</a>
                    </div>
                    <div>
                        <a class="choix" href="frontController.php?action=contact">Contact</a>
                    </div>
                </div>

                <div class="logo">
                    <a target="_blank" href="https://fr.linkedin.com/in/mathieu-blanchet-5766b3230"><img id="logoLink" src="../web/images/linkedin.png" alt="linkedin"></a>
                    <a target="_blank" href="https://github.com/BlMathieu/"><img id="logoGitH" src="../web/images/github.png" alt="github"></a>
                    <a target="_blank" href="https://gitlabinfo.iutmontp.univ-montp2.fr/blanchetm"><img id="logoGitL" src="../web/images/gitlab.png" alt="gitlab"></a>
                    <a target="_blank" href="../web/cv/CV-Blanchet-Mathieu.pdf"><img id="logoCV" src="../web/images/profile.png" alt="CV"></a>

                    <div class="secret">
                        <a target="_blank" href="frontController.php?action=secret">?</a>
                    </div>
                </div>

            </nav>
        </header>


        <main>
            <?php require __DIR__."/{$cheminBody}"?>
        </main>
</body>
</html>