<?php
header('Access-Control-Allow-Origin: *'); //cho phép truy cập từ bất kìu domain nào
//header('Content-Type: application/json');
header('Access-Control-Allow-Methods:GET,PUT,POST,DELETE');
header('Access-Control-Allow-Headers:*');
  if($_SERVER['REQUEST_METHOD']=='GET'){
      if(isset($_GET['id'])){
        echo 'GET METHOD DETECTED - tham số gửi lên là '.$_GET['id'];
      }
     
  }

  if($_SERVER['REQUEST_METHOD']=='POST'){
    var_dump($_POST['id']);
    $data = json_decode(file_get_contents("php://input"),true);
    echo  $data['id'];
    echo $data['name'];
  }


  if($_SERVER['REQUEST_METHOD']=='PUT'){
    echo 'PUT METHOD DETECTED';
}


if($_SERVER['REQUEST_METHOD']=='DELETE'){
    echo 'DELETE METHOD DETECTED';
}
?>