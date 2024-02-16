<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // معلومات البريد الإلكتروني المستلم
    $to_email = "e9h77a@gmail.com";

    // استخلاص البيانات من النموذج
    $name = $_POST['name'];
    $email = $_POST['email'];
    $topic = $_POST['topic'];
    $message = $_POST['message'];

    // محتوى البريد الإلكتروني
    $subject = "New Message: $topic";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    // إرسال البريد الإلكتروني
    if (mail($to_email, $subject, $body)) {
        echo "تم إرسال الرسالة بنجاح!";
    } else {
        echo "حدث خطأ أثناء إرسال الرسالة، يرجى المحاولة مرة أخرى!";
    }
}
?>
