<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';
// ----------
$badIP = [];
$ipAddr = $_SERVER['REMOTE_ADDR'];
$today    = date('d-m-Y_H-i');
$name = $_POST['phone'];
<<<<<<< HEAD
=======
// $subject  = "=?utf-8?B?".base64_encode($subject)."?=";
// $file = $_FILES['userfile'];
>>>>>>> 2164c0797e3f736d87e300e06b46972c45eca30c
//spam ловушка
$spam = $_POST['email'];
$spam1 = $_POST['name'];

// Настройки
$mail = new PHPMailer;
$mail->isSMTP(); 
$mail->Host = 'smtp.yandex.ru';  
$mail->SMTPAuth = true;                      
$mail->Username = 'lagunatlt'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = 'oqbzlegjtyecvpnl'; // Ваш пароль
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
$mail->setFrom('lagunatlt@yandex.ru', 'bodyPage'); // Ваш Email, Имя
$mail->addAddress('lagunatlt@yandex.ru'); // Email получателя
$mail->addAddress('lagunatlt@yandex.ru'); // Еще один email, если нужно.
<<<<<<< HEAD

if(!in_array($ipAddr, $badIP) && empty($spam) && empty($spam1)) { // если не заполнено скрытое поле и если IP-адрес не находится в нашем чёрном списке

		file_put_contents("send-mail.log", "\n{$today}\nIP:{$ipAddr}\nОт:{$name}\n", FILE_APPEND); chmod("send-mail.log", 0600);

		// если всё ок - отправляем письмо
		
            $mail->isHTML(true); 
            $mail->Subject = "Новая заявка"; // Заголовок письма
            $mail->Body =  "<p>Необходим выезд сантехника</p>
                            <hr/>
                            <p>к/т <b>$name</b></p>"; // Текст письма
}
else { // если роботом было заполнено скрытое поле или если IP-адрес в чёрном списке
    file_put_contents("spam.log", "\n{$today}\nСпам бот\nIP:{$ipAddr}\n", FILE_APPEND); chmod("spam.log", 0600);
=======
// Прикрепление файлов
//   for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
    //             $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
    //             $filename = $_FILES['userfile']['name'][$ct];
    //             if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
        //                     $mail->addAttachment($uploadfile, $filename);
        //                 } else {
            //                         $msg .= 'Failed to move file to ' . $uploadfile;
            //                     }
            //                 }
            $logText = strip_tags($textmessage);
            
if(!in_array($ipAddr, $badIP) && empty($spam) && empty($spam1)) { // если не заполнено скрытое поле и если IP-адрес не находится в нашем чёрном списке

	// $logText = strip_tags($textmessage); // обрезаем лишние теги для log файла 

    // если в поле с именем нет ни одной цифры и ни одной латинской буквы
    //Запретим пользователю использовать в своем имени любые символы, кроме букв русского и латинского алфавита, знака "_" (подчерк), пробела и цифр
	// а также если в поле с комментариями нет ни одного соответствия адресам сайтов
    // можем добавить любые другие сочетания букв, по аналогии, через пайп, например (\.ua) и прочее
    
	// if(!preg_match("/[a-z0-9]/i", $name) && !preg_match("/(www)|(http)|(@)|(\.ru)|(\.com)/i", $question)) {
    if(!preg_match("/[^(\w)|(\x7F-\xFF)|(\s)]/", $name) && !preg_match("/(www)|(http)|(https)|(@)|(\.ru)|(\.ua)|(\.su)|(\.gmail)|(\.com)/i", $textmessage)) {

		// записываем логи в файл (если файла нет, то он будет создан автоматически)
		file_put_contents("send-mail.log", "\n{$today}\nIP:{$ipAddr}\nОт:{$name}\nСообщение:{$logText}\n", FILE_APPEND); chmod("send-mail.log", 0600);

		// если всё ок - отправляем письмо администратору сайта
		
            $mail->isHTML(true); 
            $mail->Subject = "Новая заявка"; // Заголовок письма
    
            
            $mail->Body =  "<p>Необходим выезд сантехника</p>
                            <hr/>
                            <p>к/т <b>$name</b></p>"; // Текст письма
            // -------------

	}
	else { // если в поле с именем были латинские буквы, либо были указаны признаки сайтов - записываем логи
        $spammessage = "Возможно СПАМ из-за подозрительного содержания";
        $mail->isHTML(true); 
        $mail->Subject = "Подозрительное сообщение с bodypage.ru"; // Заголовок письма
        $mail->Body =  "<p><i>Сообщение от <b>$name</b>,&nbsp;[$email]</i></p>"
                        
                        
		file_put_contents("spam.log", "\n{$today}\nIP:{$ipAddr}\n{$spammessage}\nОт:{$name}\nEmail:{$email}\nСообщение:{$logText}\n", FILE_APPEND); chmod("spam.log", 0600);
		// echo "Вы некорректно заполнили форму связи. Пожалуйста, свяжитесь с нами по e-mail или телефону.<br>";
	}
}
else { // если роботом было заполнено скрытое поле или если IP-адрес в чёрном списке
    file_put_contents("spam.log", "\n{$today}\nСпам бот\nIP:{$ipAddr}\nСообщение:{$logText}\n", FILE_APPEND); chmod("spam.log", 0600);
    $mail->ErrorInfo;
>>>>>>> 2164c0797e3f736d87e300e06b46972c45eca30c
	exit(); // сразу выходим
}
// Результат
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'ok';
}
?>
   