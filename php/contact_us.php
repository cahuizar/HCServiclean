<?php 
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phoneNumber = $_POST["phoneNumber"];
    $address1 = $_POST["address1"];
    $address2 = $_POST["address2"];
    $city = $_POST["city"];
    $zipCode = $_POST["zipCode"];
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo("$email is not a valid email address");
        die();
    } 
    $messageCompany = "Name: " . $name . "\r\nEmail: " . $email . "\r\nPhone Number: " . $phoneNumber . "\r\n" . $address1 . "\r\n" . $address2 . "\r\n" . $city . ", IN " . $zipCode;
    $messageCustomer = "Hello,\r\nWe are currently reviewing the information. You should hear from us within 1-2 business days. You can always reach us at contact@hcserviclean.com with any questions or concerns.\r\nWe look forward to become the solution to all your cleaning needs.\r\nThank you for contacting H C ServiClean.";
    if(mail('me@carloshuizar.com', "Estimate Request For " . $name , $messageCompany) && mail($email, 'Free Estimate from H C ServiClean' , $messageCustomer)) {
        echo ("true");
    } else {
        echo ("Something went wrong, please try again later");
        die();
    }
?>