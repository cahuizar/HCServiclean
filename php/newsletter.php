<?php 
    $email = $_POST["email"];
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo("error");
        die();
    } 
    $messageCompany = "Email: " . $email;
    $messageCustomer = "Hello,\r\n You have been successfully added to the newsletter email list. You can always reach us at contact@hcserviclean.com with any questions or concerns.\r\n";
    if(mail('me@carloshuizar.com', "New Newsletter Member") && mail($email, 'HC ServiClean Newsletter' , $messageCustomer)) {
        echo ("true");
    } else {
        echo ("error");
        die();
    }
?>