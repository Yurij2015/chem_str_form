<?php
require_once("dbconnect.php");

$idFormula = $_GET['idFormula'];
$formula = R::load('chemicals', $idFormula);

if ($_GET['structFormCode']) {
    $molformat = $_GET['structFormCode'];
    $molformat = str_replace('unnamed'."\n", '', $molformat);
    $formula->molformat = $molformat;
    R::store($formula);
    echo "Формула обновлена!";
} else {
    echo "Что-то не то!";
}
