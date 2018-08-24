<?php
header('Access-Control-Allow-Origin: *');
$connection = mysqli_connect("localhost","root","","gastos");

$output = array();
$query = "SELECT  *  FROM tb_gastos ORDER by id ASC";
$result = mysqli_query($connection, $query);

if(mysqli_num_rows($result)>0){
    while($row = mysqli_fetch_assoc($result)){
        $output[]=$row;
    }   
    echo json_encode($output);
}
?>