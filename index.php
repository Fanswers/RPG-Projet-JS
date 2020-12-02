<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="Css/style.css" rel="stylesheet">
  <title>Document</title>
</head>

<body>
  <form id="playerForm">
    <p>
      Pseudo
      <input type="text" name="name" id="playerName">
    </p>
    <P>
      <input type="radio" name="class" value="Warrior"> Warrior
    </p>
    <P>
      <input type="radio" name="class" value="Mage"> Mage
    </p>
    <P>
      <input type="radio" name="class" value="Rogue"> Rogue
    </p>
    <P>
      <input type="radio" name="class" value="Archer"> Archer
    </p>
    <button id="sendPlayer">Jouer</button>
  </form>

  <div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="module" src="main.js?2"></script>
</body>

</html>