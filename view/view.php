<!DOCTYPE html >
<html lang="en" id="vanta-canvas">
<head>
    <meta charset="UTF-8">
    <title> <?php echo($title); ?>
    </title>
    <link rel="stylesheet" href="../web/css/style.css">
</head>

<body>
<div >
    <div class="elements">
        <header>
            <h1 class="title"><?php echo $title?></h1>
            <p class="name">Blanchet Mathieu</p>
        </header>
        <nav id="rubrique">
            <div>
                <a href="frontController.php"><p>Accueil</p></a>
            </div>
            <div>
                <a href="frontController.php?action=information"><p>Informations</p></a>
            </div>
            <div>
                <a href="frontController.php?action=projets"><p>Projets</p></a>
            </div>
            <div>
                <a href="frontController.php?action=contact"><p>Contact</p></a>
            </div>
        </nav>

        <main>
            <?php require __DIR__."/{$cheminBody}"?>
        </main>


        <footer id="footer">
            <div class="logo">
                <a target="_blank" href="https://fr.linkedin.com/in/mathieu-blanchet-5766b3230"><img id="logoLink" src="../web/images/linkedin.png" alt="linkedin"></a>
                <a target="_blank" href="https://github.com/BlMathieu/"><img id="logoGitH" src="../web/images/github.png" alt="github"></a>
                <a target="_blank" href="https://gitlabinfo.iutmontp.univ-montp2.fr/blanchetm"><img id="logoGitL" src="../web/images/gitlab.png" alt="gitlab"></a>
                <a target="_blank" href="../web/cv/CV-Blanchet-Mathieu.pdf"><img id="logoCV" src="../web/images/profile.png" alt="CV"></a>

                <div class="secret">
                    <a target="_blank" href="frontController.php?action=secret">?</a>
                </div>
            </div>


        </footer>
    </div>
</div>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.cells.min.js"></script>
<script>
    VANTA.CELLS({
        el: "#vanta-canvas",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        color1: 0x383e3e,
        color2: 0x664c39,
        size: 5.00,
        speed: 1.50
    })
</script>
</html>