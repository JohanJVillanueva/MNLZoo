<?php

// Get the form data
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$mobileNumber = $_POST['mobile_number'];
$emailAddress = $_POST['email_address'];
$gender = $_POST['gender'];
$age = $_POST['age'];
$region = $_POST['region'];
$province = $_POST['province'];
$municipality = $_POST['municipality'];
$barangay = $_POST['barangay'];
$status = $_POST['status'];

// Create a new CSV file
$csvFile = fopen('form_data.csv', 'w');

// Write the header row to the CSV file
fputcsv($csvFile, array('First Name', 'Last Name', 'Mobile Number', 'Email Address', 'Gender', 'Age', 'Region', 'Province', 'Municipality', 'Barangay', 'Status'));

// Write the form data to the CSV file
fputcsv($csvFile, array($firstName, $lastName, $mobileNumber, $emailAddress, $gender, $age, $region, $province, $municipality, $barangay, $status));

// Close the CSV file
fclose($csvFile);

?>