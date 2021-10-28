<html>
<body>
 <?php
$servername = "";
$username = "";
$password = "";
$dbname = "";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$message = !empty($_POST[message]) ? "'$_POST[message]'" : "NULL";
$color = !empty($_POST[color]) ? "'$_POST[color]'" : "NULL";
$location = !empty($_POST[location]) ? "'$_POST[location]'" : "NULL";
$setter = !empty($_POST[setter]) ? "'$_POST[setter]'" : "NULL";
$name = !empty($_POST[name]) ? "'$_POST[name]'" : "NULL";



$date_cat = $_POST[date] . " 06:00:00";
$sql="INSERT INTO climbing (grade, color, setter, type, location, name, climber, send, date, description)
VALUES ('$_POST[grade]', $color, $setter, '$_POST[type]', $location, $name, '$_POST[climber]', '$_POST[send]', '$date_cat', $message)";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?> 

?>
</body>
</html>
