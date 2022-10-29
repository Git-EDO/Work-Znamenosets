<?php
    $name = $_POST['name'];
    $email = $_POST['email'];

	$to = "vladimirshirogorov1@gmail.com";
	$date = date ("d.m.Y");
	$time = date ("h:i");
	$from = "info@znamenosets.com";
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name \n
    Почта: $email \n"; 	
	mail($to, $subject, $msg, "From: $from ");

?>

<p class="form-notification">Форма успешно отправлена.</p>
