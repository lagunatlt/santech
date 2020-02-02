<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
// $file = $_FILES['userfile'];
// Настройки
$mail = new PHPMailer;

$mail->isSMTP(); 
$mail->Host = 'smtp.yandex.ru';  
$mail->SMTPAuth = true;                      
$mail->Username = 'lagunatlt'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = 'kmupouwprerlbecl'; // Ваш пароль
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
$mail->setFrom('lagunatlt@yandex.ru', 'bodyPage'); // Ваш Email, Имя
$mail->addAddress('lagunatlt@yandex.ru'); // Email получателя
$mail->addAddress('lagunatlt@yandex.ru'); // Еще один email, если нужно.

// Прикрепление файлов
//   for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
    //         $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
    //         $filename = $_FILES['userfile']['name'][$ct];
    //         if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
        //             $mail->addAttachment($uploadfile, $filename);
        //         } else {
            //             $msg .= 'Failed to move file to ' . $uploadfile;
            //         }
            //     }   
            
            // Письмо
            $mail->isHTML(true); 
            $mail->Subject = "Новое сообщение с bodypage.ru"; // Заголовок письма
            // require 'email.php'; // подключаем шаблон письма
            // ob_start(); // включаем буферизацию
            // $mail->Body = ob_get_clean(); // Текст письма
            
            // $subject = ob_get_clean(); // выгружаем письмо из буфера
            
            
            $mail->Body =       
                                "<p><i>Сообщение от <b>$name</b>,&nbsp;[$email]</i></p>
                                <hr/>
                                <p>$message</p>"; // Текст письма

            // $mail->Body    = '<table style="width: 695px;">
            //                 <tbody>
            //                 <tr>
            //                 <td style="width: 685px;">
            //                 <h1 style="text-align: center;"><strong>Добрый день!</strong></h1>
            //                 <p style="text-align: center;"><span style="color: #339966;"><strong>поступила новая заявка с вашего сайта</strong></span></p>
            //                 </td>
            //                 </tr>
            //                 </tbody>
            //                 </table>
            //                 <p>&nbsp;</p>'; // Текст письма
            // $mail->addAttachment($uploadfile, $filename);
            // Результат
            if(!$mail->send()) {
                echo 'Message could not be sent.';
                echo 'Mailer Error: ' . $mail->ErrorInfo;
            } else {
                echo 'ok';
            }
            ?>