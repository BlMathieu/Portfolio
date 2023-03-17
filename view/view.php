<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Accueil</title>
    <link rel="stylesheet" href="../web/css/style.css">
    <script src="../web/javascript/general.js"></script>
</head>

<body>
<header>
    <h1 class="title"><?php $title?></h1>
    <p class="name">Blanchet Mathieu</p>
</header>
<nav id="rubrique">
    <div>
        <a href="frontController.php"><p>Accueil</p></a>
    </div>
    <div>
        <a href="frontController.php?action=information"><p>Information</p></a>
    </div>
    <div>
        <a href="frontController.php?action=projets"><p>Projets</p></a>
    </div>
    <div>
        <a href="frontController.php?action=contact"><p>Contact</p></a>
    </div>
</nav>
<main>
    <?php require __DIR__."/{$chemin}";?>
</main>


<footer id="footer">
    <div class="logo">
        <img id="logoLink" src="../web/images/linkedin.png" alt="linkedin">
        <img id="logoGitH" src="../web/images/github.png" alt="github">
        <img id="logoGitL" src="../web/images/gitlab.png" alt="gitlab">
        <img id="logoCV" src="../web/images/profile.png" alt="CV">
    </div>
</footer>

</body>
</html>