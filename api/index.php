<?php
$servername = "localhost";
$username = "root";
$password = "J_ohn1135";
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
// sql to insert dummy data into table
$sql = "INSERT INTO product (productName, size, pieces)
VALUES (Polka Dress', 'S', '1')";

$sql = "INSERT INTO product (productName, size, pieces)
VALUES ('Polka Dress', 'XS', '1')";

$sql = "INSERT INTO product (productName, size, pieces)
VALUES ('Polka Dress', 'L', '1')";

if ($conn->query($sql) === TRUE) {
    echo "Table product created successfully";
    echo "New records created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
