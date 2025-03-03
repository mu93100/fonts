en vous inspirant de cette exemple, faire un evenement au scroll qui deplace une div après 500px de scroll

<!DOCTYPE html>
<html lang="fr">
<head>
    <title>Exercice Scroll Simple</title>
    <style>
        body {
            height: 1500px; /* Page longue pour scroller */
            font-family: Arial, sans-serif;
            transition: background-color 0.5s;
        }
    </style>
</head>
<body>

<h1>Défile la page pour voir l'effet</h1>

<script>
    window.addEventListener('scroll', function () {
        let scrollPos = window.scrollY;
        console.log("Position : " + scrollPos + "px");

        // Changer la couleur du fond après 300px
        if (scrollPos > 300) {
            document.body.style.backgroundColor = "lightcoral";
        } else {
            document.body.style.backgroundColor = "white";
        }
    });
</script>

</body>
</html>