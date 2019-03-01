<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $subject = "A message from the portfolio.";
    $message = $_POST['message'];

    $mailTo = "ilbertroque@port.dev";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
}