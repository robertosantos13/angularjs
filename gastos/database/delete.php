<?php
header('Access-Control-Allow-Origin: *');
$data= json_decode(file_get_contents('php://input')); 
 $servername = "localhost";
$username = "root";
$password = "";
$dbname = "gastos";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$data= json_decode(file_get_contents('php://input')); 
if(count($data) > 0) {

    $id = mysqli_real_escape_string($conn, $data->id);
    $meses = mysqli_real_escape_string($conn, $data->meses);
    $valorMensal = mysqli_real_escape_string($conn, $data->valorMensal);
    $gastoMensal = mysqli_real_escape_string($conn, $data->gastoMensal); 
    $saldoMes = mysqli_real_escape_string($conn, $data->saldoMes); 
    
    $sql = "DELETE FROM tb_gastos  where id = $id";
    
    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }
}

$conn->close();
?>