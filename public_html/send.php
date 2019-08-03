<?php
$tema= "'Заявка'";
    $subject  = $tema;
    $phone    = $_POST['phone'];
    $mail    = $_POST['mail'];
    $name    = $_POST['name'];
    $target    = $_POST['target'];
    $headers  = 'Content-type: text/html; charset=utf-8' . "\r\n";

    $message  = "<b>Заявка:</b></br><b>Имя:</b> {$name}<br/><b>Телефон:</b> {$phone}<br/><b>E-mail:</b> {$mail}<br/><b>Источник:</b> {$target}<br/>";
    if (mail("feedback@mypdl.ru", $subject, $message, $headers)) {
        echo "";
    } else echo "Ошибка!";
    
    header("Location: /?send");

//feedback@mypdl.ru

    
?>