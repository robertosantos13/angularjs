<?php
header('Access-Control-Allow-Origin: *');
$connection = mysqli_connect("localhost","root","","gastos");

$data= json_decode(file_get_contents('php://input')); 
 if(count($data) > 0)
 {
  
   $id = mysqli_real_escape_string($connection, $data->id);
   $meses = mysqli_real_escape_string($connection, $data->meses);
   $valorMensal = mysqli_real_escape_string($connection, $data->valorMensal);
     $gastoMensal = mysqli_real_escape_string($connection, $data->gastoMensal);  
     
     $sql = "INSERT INTO tb_gastos (id,meses, valorMensal, gastoMensal) VALUES ('$id', '$meses','$valorMensal','$gastoMensal')";

     if (mysqli_query($connection, $sql)) {
    
   
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($connection);
}
 }
 
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}


mysqli_close($connection);