<?php
    $email = $_POST['email'];
    $name = $_POST['name'];

		$to = "demonex@bk.ru";
		$date = date ("d.m.Y");
		$time = date ("h:i");
		$from = "info@знаменосец.com";
		$subject = "Заявка c сайта";
	
		$msg="
    Имя: $name \n
    Почта: $email"; 	
	mail($to, $subject, $msg, "From: $from ");

?>

<p class="form-notification">Форма успешно отправлена.</p>
