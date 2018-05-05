<?php

if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message`'];

//send email
    mail("janak@twenty74.com.au", "Feedback from" .$email, $message);
}

?>