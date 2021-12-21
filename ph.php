<?php
include("process.php");


$errors = [];


if (isset($_POST['button1'])) {


    $errors = validate();
    if (!$errors) {
        $errors = save();
    }
   
    if ($errors) {
      include('form.php');
	 
	   
	  
    } else {
		include('trips.php');
      
    }

}else {
    include('form.php');
}


?>