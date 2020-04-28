<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$dropdown = $POST['dropdown'];
$message = $_POST['message'];
$formcontent = " From: $name \n EMail: $email \n Phone: $phone \n Website: $website \n  Dropdown: $dropdown \n Message: $message";
$recipient = "alexfilipenko719@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>