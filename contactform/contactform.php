<?php

if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $phone= $_POST['phone'];

//send email
    mail("Twenty74cafe@gmail.com", "Feedback from " .$name ." : ".$email , $message ."  \n\n Contact number: ". $phone);

    echo 'OK';
}

?>