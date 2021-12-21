<?php
function validate() {


    $errors = [];
    if (!isset($_POST['un']) || !trim($_POST['un'])) {
        $errors['un'] = 'Field is empty';
    } else if (!preg_match('/^[\d]{3}$/i', $_POST['un'])) {
        $errors['un'] = 'Invalid input';
    }
	
	if (!isset($_POST['loc']) || !trim($_POST['loc'])) {
        $errors['loc'] = 'Field is empty';
    } else if (!preg_match('/^[A-Z]?[A-Za-z-]+[a-z]+$/', $_POST['loc'])) {
        $errors['loc'] = 'Invalid location';
    }
	
	if (!isset($_POST['time']) || !trim($_POST['time'])) {
        $errors['time'] = 'Field is empty';
    } else if (!preg_match('/^[0-9]{1,3}$/', $_POST['time'])) {
        $errors['time'] = 'Invalid date';
    }

	if(!isset($_POST['select'])|| !trim($_POST['select'])){
			  $errors['select'] = 'Field is empty';
	}
	
    if (!isset($_POST['email']) || !trim($_POST['email'])) {
        $errors['email'] = 'Field is empty';
    }else if (!preg_match('/^[a-z0-9]{1}[a-z0-9-\.]+@[a-z0-9-]+\.[a-z]{2,4}$/', $_POST['email'])) {
        $errors['email'] = 'Invalid email';
    }
	/*radios*/
	
	$radio= $_POST['radio'];  
	/*if radio one set ->set errors from second to empty*/
	if (($radio=="sec")&&(isset($_POST['check']))&&(!isset($_POST['ph']) || !trim($_POST['ph']))) {
        $errors['ph'] = 'Field is empty';
    }else if (($radio=="sec")&&(isset($_POST['check']))&&(!preg_match('/^[\d \+]{1,1}[\d\(\)\-]{6,11}\d$/', $_POST['ph']))) {
        $errors['ph'] = 'Invalid number';
    }

    return $errors;
}

function save() {

    return [];
}
?>