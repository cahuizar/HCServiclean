<?php 
    $name = _POSTS["name"];
    $email = _POSTS["email"];
    $phoneNumber = _POSTS["phoneNumber"];
    $address1 = _POSTS["address1"];
    $address2 = _POSTS["address2"];
    $city = _POSTS["city"];
    $zipCode = _POSTS["zipCode"];
    $messageCompany = 'Name: '. $name .'\r\nEmail: ' . $email .'\r\nPhone Number: ' . $phoneNumber . '\r\n' . $address1 . '\r\n' . $address2 . '\r\n' . $city . ', IN ' . $zipCode;
    $messageCustomer = 'Hello,\r\nWe are currently reviewing the information you filled out. You should hear from us within 1-2 business days. You can always reach us at contact@hcserviclean.com for any questions or concerns.\r\nThank you for contacting H C ServiClean.';
    $messageCustomer = wordwrap($messageCustomer, 70, "\r\n");
    if(mail('me@carloshuizar.com', 'Estimate Request For ' . $name , $messageCompany) && mail($email, 'Free Estimate from H C ServiClean' , $messageCustomer)) {
        echo "true";
    } else {
        die();
    }
?>