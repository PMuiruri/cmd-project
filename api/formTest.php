size<?php
$pieces = $_POST['pieces'];
$size = $_POST['size'];

if (empty($pieces) && empty($size)) {
    echo "Please select number of pieces";
} else if (empty($pieces)) {
    echo ""Please select number of pieces!";
} else if (empty($size)) {
    echo "Please select a size";
} else {
    echo "You Choose " .$_POST["pieces"] ." pieces of Size " .$_POST["size"];


 $jsonData = file.get.contents("php://input");
 $data = json_decode($jsonData);

 var_dumps(jsonData);

 ?>
