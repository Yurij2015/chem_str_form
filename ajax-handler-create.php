<?php
require_once("dbconnect.php");
if ($_GET['structFormCode']) {
    $formulacreate = R::dispense('chemicals');
    $molformat = $_GET['structFormCode'];
    $molformat = str_replace('unnamed'."\n", '', $molformat);
    $formulacreate->molformat = $molformat;
    $createid = R::store($formulacreate);
    echo $createid;
}else {
    echo "Что-то не то!";
}