<?php 
    $email = $_POST["newsletterEmail"];
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo("Error");
        die();
    } 
    $messageCompany = "Email: " . $email;
    $messageCustomer = "Hello,\r\n You have been successfully added to the newsletter email list. You can always reach us at contact@hcserviclean.com with any questions or concerns.\r\n";
    if(mail('me@carloshuizar.com', "New Newsletter Member", $messageCompany) && mail($email, 'HC ServiClean Newsletter' , $messageCustomer)) {
        echo ("true");
    } else {
        echo ("error");
        die();
    }
?>