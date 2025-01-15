<?php
$conn = new mysqli('localhost', 'root', '', 'ays_solutions_contact_us_form',3307);

if ($conn->connect_error) {
    die('Database connection failed: ' . $conn->connect_error);
} else {
    echo 'Database connection successful!';
}

$conn->close();
?>
