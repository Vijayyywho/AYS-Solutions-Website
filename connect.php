<?php
// Enable detailed error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Retrieve form data
$name = $_POST['name'] ?? null;
$email = $_POST['email'] ?? null;
$phone = $_POST['phone'] ?? null;
$message = $_POST['message'] ?? null;

// Validate input (Optional but recommended)
if (!$name || !$email || !$phone || !$message) {
    die('Error: All fields are required.');
}

// Convert phone to integer
$phone = (int)$phone;

// Database Connection
$conn = new mysqli('localhost', 'root', '', 'ays_solutions_contact_us_form');

// Check connection
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
}

// Prepare and execute SQL query
$stmt = $conn->prepare("INSERT INTO contact_registration (name, email, phone, message) VALUES (?, ?, ?, ?)");
if (!$stmt) {
    die('Prepare failed: ' . $conn->error);
}

$stmt->bind_param("ssis", $name, $email, $phone, $message);

if (!$stmt->execute()) {
    die('Execute failed: ' . $stmt->error);
}

echo "Registration Successful!";
$stmt->close();
$conn->close();
?>
