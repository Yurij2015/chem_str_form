<?php
require_once("dbconnect.php");
try {
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $formula = R::load('chemicals', $id);
        R::trash($formula);
        header('location: formulaslist.php?msg=Запись удалена!');
    }
} catch (exception $e) {
    echo "Запись нельзя удалить. Есть связанные данные!";
    echo "<br><a href = 'index.php'>Назад</a>";
}