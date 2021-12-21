<!DOCTYPE html>
<html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!--<script language="JavaScript" src="js/formJS.js"></script>-->
		 <script language="JavaScript" src="js/formPHP.js"></script>
        <title>Form</title>
        <link rel="stylesheet"  type="text/css" media="screen" href="css/form.css"
    </head>

  
<body>
   <nav>
        <div>
            <h3>OurPlace</h3>
        </div>
        <ul id="nav-links">
            <li><a href="home.php">Home</a></li>
            <li><a href="trips.php">Trips</a>
                <ul>
                    <li><a href="italy.php">Italy</a> </li>
                    <li><a href="trips.php">  Europe </a> </li>
                    <li><a href="trips.php">  Islands  </a> </li>
    
                </ul>
            </li>
            <li><a class="ch" href="#">Special offers</a>
                <ul>
                    <li><a href="#">Your trip</a> </li>
                    <li><a href="near.php">Near home</a> </li>
                    <li><a href="#"> Worldwide </a> </li>
        
                </ul>
            <li><a href="aboutus.php">About us</a></li>
        </ul>
    </nav>
	<form id="myForm" method="post" action=""> 
        <div class=tr>Your trip - is a service created to help us custumise the page for you by answering a few simple questions.</div>
            <button name="button" formaction="home.php" id="button">Skip</button>
        
        <div>
			 
		
            <label>Enter your UN code: </label>
			<input id="un" value="<?php if(isset($_POST['un'])) {echo $_POST['un'];} ?>" name="un" type="text" placeholder="800"/>
		
           
            <span id=unError class="error">
			<?php
				if (isset($errors['un'])) {
					echo $errors['un'];
				}
			?>
            </span>
        </div>
        <div>
		 
            <label>Enter the desired location: </label>
            <input id="loc" value="<?php if(isset($_POST['loc'])) {echo $_POST['loc'];} ?>" name="loc" type="text" placeholder="Greece"/>
            <span id=locError class="error">
			<?php
				if (isset($errors['loc'])) {
					echo $errors['loc'];
				}
			?>
            </span>
        </div>
        <div>
		     <?php
                if(!isset($_POST['time'])){
                $timetxt = "";
                } else {
                    $timetxt = $_POST['time'];
                }
	        ?>
            <label>Duration of the trip: </label>
            <input id="time" value="<?php if(isset($_POST['time'])) {echo $_POST['time'];} ?>" name="time" type="text" placeholder="21"/>
            <span id=timeError class="error">
			<?php
				if ((isset($errors['time'])) && (!isset($errors['select']))) {
					echo $errors['time'];
				}else if((isset($errors['time'])) && (isset($errors['select']))){
				    echo 'Check the input';
				}else if((!isset($errors['time'])) && (isset($errors['select']))){
				    echo $errors['select'];
				}

			?>
            </span>
            <div class="drop">
            <select id="ignore" name='select'>
            <?php
                $pic= $_POST['select'];
                if (!isset($_POST['select'])){
                  echo'<option value="" disabled selected hidden>--select--</option>
                    <option value=fo>days</option>
                    <option value=ft>weeks</option>
                    <option value=fg>months</option>';
                }
                if ((isset($_POST['select'])) && $pic=="fo"){
                    echo'<option value="" disabled hidden>--select--</option>
                        <option value=fo selected>days</option>
                        <option value=ft>weeks</option>
                        <option value=fg>months</option>';
                }else if ((isset($_POST['select'])) && $pic=="ft"){
                echo'<option value="" disabled hidden>--select--</option>
                    <option value=fo >days</option>
                    <option value=ft selected>weeks</option>
                    <option value=fg>months</option>';
                }else if ((isset($_POST['select'])) && $pic=="fg"){
                echo'<option value="" disabled hidden>--select--</option>
                    <option value=fo>days</option>
                    <option value=ft>weeks</option>
                    <option value=fg selected>months</option>';
                }
            ?>
                </select>

            </div>
		
        </div>

        <div>
			<?
			if(!isset($_POST['email'])){
			$emailtxt = "";
			} else {
				$emailtxt = $_POST['email'];
			}  
	        ?>
			
            <label>Enter your email: </label>
            <input id="email" value="<?php if(isset($_POST['email'])) {echo $_POST['email'];} ?>" name="email" type="text" placeholder="jennsbdy@gmail.com"/>
			
            <span id=emailError class="error">
			<?php
				if (isset($errors['email'])) {
					echo $errors['email'];
				}
			?>
            </span>
        </div>
        <div>I would like to be notified about upcoming tours and trips in my area.</div>
       <?php
            if(!isset($_POST['check'])){
                echo'<input id="check" name="check" value="check"
                 type="checkbox" ></input>';
            }else{
                 echo'<input id="check" name="check" value="check" type="checkbox"
                  checked ></input>';
             }

        ?>

        <div  id="appear">
            <div>What would you prefer?</div><br/>
			
			<?php
                $radi= $_POST['radio'];

				if (($radi=="sec")&& (isset($_POST['check'])) &&((isset($errors['ph']))||(isset($_POST['ph'])))) {
					echo '<input id="notify1" name="radio" type="radio" value="fir"  ></input>
					<div>notify via email</div>
					<br/>
					
					<input id="notify2" name="radio" type="radio" value="sec" checked></input>
					<div >notify via messages</div>';
				}else{
					echo'<input id="notify1" name="radio" type="radio" value="fir" checked ></input>
					<div>notify via email</div>
					<br/>
					
					<input id="notify2" name="radio" type="radio" value="sec"></input>
					<div >notify via messages</div>';
				}



			?>
			     
            <div class=lk2 id="appear2">
				 <?
					if(!isset($_POST['ph'])){
					$phtxt = "";
					} else {
						$phtxt = $_POST['ph'];
					}  
				?>
                <label>Enter your phone number: </label>
                <input id="ph" value="<?= $phtxt ?>" name="ph" type="text" placeholder="(+380)096*******"></input>
                <span  id=phError class="error">
					<?php
						if (isset($errors['ph'])) {
							echo $errors['ph'];
						}
					?>
				</span>
            </div>
        </div>
        
       <div> <button name="button1"  id="button1">Submit</button></div>
    
</form>
<div>
        <h5>Improve with us</h5>
         <p>Coordinating business travel is a full-time job. Work with expert travel agents who can help plan and manage your business travel, including booking flights and accommodations. We’ll leverage decades of industry experience and premier partnerships to find the best luxury perks and an average savings of 18-30%. Trust Forest Travel with the business travel management services for smooth group travel and effortless events and conferences.</p>
        <div class="slider">
            <div class="item">
               <img src="img/formslider1.jpg">
           </div>

           <div class="item">
               <img src="img/formslider2.jpg">
           </div>

           <div class="item">
               <img src="img/formslider3.jpg">
           </div>
           <div class="item">
            <img src="img/formslider4.jpg">
            </div>
            <div class="item">
                <img src="img/formslider5.jpg">
            </div>


           <a id="left">&#10094;</a>
           <a id="right">&#10095;</a>
       </div>
       <p>Our long-term partner clients see even more benefits from our business travel management services. Our account managers us past travel reports to find ways to optimize future travel budgets. Our online booking tool streamlines the pre-trip process and simplifies reporting expenses for your accounting department.</p>
        </div>





     <?php include('footer.php')?>

 