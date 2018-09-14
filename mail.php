<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name"viewport" content="width=device-width, initial-scale=1">
    <title>Mailformular - Masseria Prontera</title>
  </head>
  <body>

    <?php
    $mailTo = "info@masseria-prontera.com";
    $mailFrom = $_POST["name"];
    $replyTo  = $_POST["email"];
    $subject = "Anfrage zur Buchung";
    $mailText = "Anfrage von: $mailFrom" . "\n" . "Mail von: $replyTo" . "\n" . wordwrap($_POST["message"], 70, "\r\n");

    $returnPage = 'http://masseria-prontera.com/#buchung';
    $returnErrorPage = 'http://masseria-prontera.com/mail_failure.html';



    // ======= Mailversand

 // Mail versenden und Versanderfolg merken
 $mailSent = @mail($mailTo, $subject, $mailText, $header);

 // ======= Return-Seite an den Browser senden

 // Wenn der Mailversand erfolgreich war:
 if($mailSent == TRUE) {
    // Seite "Formular verarbeitet" senden:
    header("Location: " . $returnPage);
 }
 // Wenn die Mail nicht versendet werden konnte:
 else {
    // Seite "Fehler aufgetreten" senden:
    header("Location: " . $returnErrorPage);
 }

 // ======= Ende

 exit();

  ?>

  </body>
</html>
