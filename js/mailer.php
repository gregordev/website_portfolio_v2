<?php  
 //insert.php  



       $name=$_POST['inputName'];
       $message=$_POST['msg'];

       $email=$_POST['inputMail'];
       $phone=$_POST['inputPhone'];
      
       "Message Saved";  
       

        $email_to = "grzegorzwalczak94@gmail.com";
        $email_subject = "Zapytanie o oferte";
        $wiadomosc = '<html> <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title></title>
        </head><body>';
        $wiadomosc .= '<b>Imię i nazwisko</b>: ' .$name.'<br>';
        $wiadomosc .= '<b>Telefon</b>: ' .$phone.'<br>';
        $wiadomosc .= '<b>Adres e-mail</b>: ' .$email.'<br>';
        $wiadomosc .= '<hr> <b>Wiadomość</b>: ' .$message.'<br>';
        $wiadomosc .= '</html> </body>';
        
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $headers .= 'From: '.$email_to."\r\n".
       'Reply-To: '.$email."\r\n" .
        'X-Mailer: PHP/' . phpversion();
        mail($email_to, $email_subject, $wiadomosc, $headers);
       
 ?>  