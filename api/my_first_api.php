<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "productdb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// sql to create table
$sql = "CREATE TABLE product (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
productName VARCHAR(30) NOT NULL,
size VARCHAR(3) NOT NULL,
pieces INT(2)
)";

if ($conn->query($sql) === TRUE) {
    echo "Table product created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
