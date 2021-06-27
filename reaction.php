<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="kekule/kekule.js?module=io,chemWidget,algorithm"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="kekule/themes/default/kekule.css"/>
    <title>Formulas List. Admin</title>
</head>
<body class="container">
<?php
require_once "include/navbar.php";
?>
<h3>Химические реакции</h3>
<div class="row">
    <div class="col-md-12">
        <table class="table table-hover table-bordered">
            <tr>
                <th>
                    Результат реакции
                </th>
                <th>
                    Тип реакции
                </th>
                <th>
                    Действия
                </th>
            </tr>
            <?php
            require_once("dbconnect.php");
            $formulas = R::getAll('SELECT * FROM chemical_reactions');
            foreach ($formulas as $formula) {
                $id = $formula['id'];
                ?>
                <tr>
                    <td>
                        <?= $formula['result'] ?>
                    </td>
                    <td>
                    <?= $formula['reaction_type'] ?>
                    </td>
                    <td>
                        <a href="index.php?id=<?= $formula['id'] ?>" style="text-decoration: none">Открыть
                            формулу</a><br>
                    </td>
                </tr>
                <?php
            }
            ?>
        </table>

    </div>
</div>
<hr>
</body>
</html>