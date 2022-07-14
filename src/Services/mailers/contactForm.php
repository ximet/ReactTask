<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
$question1 = $_POST["question1"];
$question2 = $_POST["question2"];
$question3 = $_POST["question3"];

if (empty($name) && empty($email)) die();

if ($_POST) {
	http_response_code(200);
	$recepient = "concencuc@gmail.com";
	$sitename = "Weather Project";

	$message = '<html><body>
		<b>Name:</b> '. $name .' 
		<br/><b>Email:</b> '. $email .'
		<br/><b>Message:</b> '. $message .'  
		<b>Who do you like more, Dogs or Cats?</b> '. $question1 .' 
		<br/><b>Do you support a military operation in Ukraine?</b> '. $question2 .'
		<br/><b>How many planets in the Sun System?</b> '. $question3 .'  
		</body></html>';

	$pagetitle = "Заявка с сайта \"$sitename\"";

	if (mail($recepient, $pagetitle, $message, "Content-type: text/html; charset=\"utf-8\"\n From: $recepient")) {

		mail($email, $pagetitle, 'We got your message. We will answer!', "Content-type: text/html; charset=\"utf-8\"\n From: $email");
	}

	echo json_encode(array(
		"sent" => true
	));
} else {
	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
}
?>