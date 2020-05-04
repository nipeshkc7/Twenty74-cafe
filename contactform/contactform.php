<?php

if ($_POST) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $phone = $_POST['phone'];

    //send email
    try {
        mail("nipeshkc7@gmail.com", "Feedback from " . $name . " : " . $email, $message . "  \n\n Contact number: " . $phone);

        echo 'OK';
    } catch (Exception $e) {
        echo 'Caught exception: ',  $e->getMessage(), "\n";
    }
}
