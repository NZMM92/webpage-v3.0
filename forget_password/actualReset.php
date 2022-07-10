<?php
// php file that contains the common database connection code
include "../db_stuff/db.php";
//include "../db_stuff/test_db.php";
include "reset_password.php";
$NewPw = hash('sha256', $_POST['newpw']);
$veriCode = $_POST['verification_code'];
if ($verification_code == $veriCode) {
    $stmt = $conn->prepare("SUPDATE users SET password = :Newpw  WHERE user_name = :eu AND email_address = :ee ");
    $stmt->bindParam(":Newpw", $NewPw, PDO::PARAM_STR);
    $stmt->bindParam(":eu", $entered_username, PDO::PARAM_STR);
    $stmt->bindParam(":ee", $entered_email, PDO::PARAM_STR);
    $stmt->execute();
    $results = $stmt->rowCount();
    if ($resultS) {
        $msg = "Password has been resetted";
    } else {
        $msg = "Password not resetted";
    }
}
?>
