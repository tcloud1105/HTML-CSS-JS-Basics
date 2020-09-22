<?php

 if(!empty($_POST){
	 if($_POST['range']=='all'){
	 $db = @new MySQLi('localhost','root','','ajax');
	    if($db->connect_error){
			echo json_encode([false,$db->connect_error]);
		}
    
      $sql = "SELECT `car_id`,`brand`,`model` FROM `car`";
      $result = $db->query($sql);
      if($result){
		  // check the num_rows
		 if($result->num_rows ==0){
			 // no rows retrieved
			 echo [false,"Sorry, no match found..."]
		 }else{
			 while($each_row = $result->fetch_assoc()){
				$all_row[] = $each_row;
			 }
			 echo json_encode([true,$all_row]);
		 }
        // Free memory space
       $result->free();		
	  }else{
		  // SQL Query Error
		  echo json_encode([false,"Sorry, SQL Query Error"]);
	  }
      $db->close();	  
	 }
 }

?>