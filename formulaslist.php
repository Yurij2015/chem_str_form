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
require_once "include/header.php";
?>
<h3>Список формул</h3>
<div class="row">
    <div class="col-md-12">
        <table class="table table-hover table-bordered">
            <tr>
                <th>
                    Наименование
                </th>
                <th>
                    Код формулы
                </th>
                <th>
                    Формула
                </th>
                <th>
                    Действия
                </th>
            </tr>
            <?php
            require_once("dbconnect.php");
            $formulas = R::getAll('SELECT * FROM structuref');
            foreach ($formulas as $formula) {
                $id = $formula['id'];
                ?>
                <tr>
                    <td>
                        <?= $formula['formulaname'] ?>
                    </td>
                    <td>
                    <pre>
                    <?= $formula['molformat'] ?>
                    </pre>
                    </td>
                    <td class="text-center">
                        <div id="formula<?= $id ?>"></div>
                        <script>
                            const chemViewer<?=$id?> = new Kekule.ChemWidget.Viewer(document);
                            let cmlData<?=$id?> = <?php echo "`\r" . $formula['molformat'] . '`'; ?>;
                            let myMolecule<?=$id?> = Kekule.IO.loadFormatData(cmlData<?=$id?>, 'mol');
                            chemViewer<?=$id?>.setChemObj(myMolecule<?=$id?>);
                            let molecule<?=$id?> = chemViewer<?=$id?>.getChemObj();
                            chemViewer<?=$id?>.setDimension('200px', '200px');
                            chemViewer<?=$id?>.appendToElem(document.getElementById("formula<?=$id?>")).setChemObj(molecule<?=$id?>);
                            chemViewer<?=$id?>.setEnableToolbar(false);  // enable the toolbar
                            chemViewer<?=$id?>.setToolButtons([]);
                            chemViewer<?=$id?>.setEnableDirectInteraction(false);
                            chemViewer<?=$id?>.setEnableEdit(false);
                        </script>
                    </td>
                    <td>
                        <a href="index.php?id=<?= $formula['id'] ?>" style="text-decoration: none">Открыть
                            редактор</a>
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