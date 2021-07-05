
<?php 
header('Access-Control-Allow-Origin: *'); 
header('Content-Type: application/json');
echo json_encode(['name'=>'Luan','age'=>'29','address'=>'Ha Long']);
?>