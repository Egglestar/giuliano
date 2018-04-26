<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>mail senden</title>
  </head>
  <body>
    <?php
      if ($_POST["name"]!="" and $_POST["email"]!="" and $_POST["message"]!="") {
        $empf = "svetter82@yahoo.de";
        $betreff = "Buchungsanfrage";
        $from = "From: ";
        $from .= $_POST["name"];
        $form .= " <";
        $form .= $_POST["email"];
        $form .= ">\n";
        $from .= "Reply to: ";
        $form .= $_POST["email"];
        $from .= "\n";
        $from .= "Content-Type: text/html \n";
        $text = $_POST["message"];

        mail($empf, $betreff, $from, $text);
        echo "vielen Dank!";
      } else {
        echo "Bitte alle Felder ausfüllen."
      }

    ?>
  </body>
</html>
