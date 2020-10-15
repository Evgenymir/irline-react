<?php
$username = $_POST['name'];
$useremail = $_POST['email'];
$userphone = $_POST['phone'];
// Формирование заголовка письма
$subject  = "Новая заявка";
// Формирование тела письма
$msg = "Здравствуйте.\r\n";
$msg .= "Получена новая заявка\r\n";

if($_POST['email'] != "") {
    $msg .= "email: ".$useremail."\r\n";
}
if($_POST['name'] != "") {
    $msg .= "Имя: ".$username."\r\n";
}
if($_POST['message'] != "") {
    $msg .= "Телефон: ".$userphone."\r\n";
}


// отправка сообщения
$verify = mail ("bespalove.mir@gmail.com", $subject, $msg,"Content-type:text/plain; charset = utf-8\r\n");
?>