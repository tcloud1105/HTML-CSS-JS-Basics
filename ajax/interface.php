<?php
 //var_dump($_POST);//interface should return json_encoded value
 // var_dump($_GET)
 //$array = array('msg'=>'my message...','author'=>'me');
 //echo json_encode($array);// convert the response into json string
 
 if(!empty($_POST){
	 if($_POST['range']=='all'){
		 echo json_decode(['brand'=>'Toyota','model'=>'Land Cruiser']);
	 }
 }

?>