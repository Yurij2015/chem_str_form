<?php
require_once("dbconnect.php");
$id = $_GET['id'] ?: 1;
$formula = R::load('chemicals', $id);
if ($_POST['update']) {
    $molformat = $_POST['molformat'];
    $formulaname = $_POST['formulaname'];
    $formula->substance_name = $formulaname;
    $formula->molformat = $molformat;
    R::store($formula);
}

if ($_POST['createnew']) {
    $formulacreate = R::dispense('chemicals');
    $molformat = $_POST['molformat'];
    $formulaname = $_POST['formulaname'];
    $formulacreate->substance_name = $formulaname;
    $formulacreate->molformat = $molformat;
    $createid = R::store($formulacreate);
    header('location: index.php?id=' . $createid . '&msg=Новая формула успешно добавлена!');
}
?>
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
    <title>Formula Editor. Admin</title>
</head>
<body class="container">
<?php
require_once "include/navbar.php";
$molformat = $formula->molformat;
$formulaname = $formula->substance_name;
?>
<h3>Редактор структурных формул</h3>
<div class="row">
    <div class="col-md-9">
        <div id="editor" style="border: #212121 1px solid"></div>
    </div>
    <div class="col-md-3">
        <form method="post">
            <div>
                <hr>
                <a href="create-new-formula.php" style="width: 100%;" class="btn btn-primary">Добавить новую формулу</a>
                <hr>
                <label for="name" class="text-dark mb-2">Наименование:</label>
                <input class="form-control" id="name" name="formulaname" value="<?= $formulaname ?>">
                <label for="formula" class="text-dark mb-2">Формула:</label>
                <textarea class="form-control" id="formula" name="molformat" rows="12" style="font-size:
                12px"><?= $molformat ?></textarea>
                <input type="submit" class="btn btn-primary mt-3" name="update" value="Обновить формулу">

                <input type="submit" class="btn btn-primary mt-3" name="createnew" value="Создать новую">
                <input type="submit" class="btn btn-primary mt-3" name="delete" value="Удалить формулу">

            </div>
        </form>
    </div>
</div>
<hr>
<div class="row align-content-center">
    <div id="parent" style="border: red 1px solid;"></div>
</div>
<hr>
<script>
    let widget = new Kekule.ChemWidget.PeriodicTable(document.getElementById('parent'));
    const chemViewer = new Kekule.ChemWidget.Viewer(document);
    let cmlData = <?php echo "`\r" . $molformat . '`'; ?>;
    let myMolecule = Kekule.IO.loadFormatData(cmlData, 'mol');
    chemViewer.setChemObj(myMolecule);
    let molecule = chemViewer.getChemObj();
    chemViewer.setDimension('100%', '800px');
    chemViewer.appendToElem(document.getElementById('editor')).setChemObj(molecule);
    chemViewer.setEnableToolbar(true);  // enable the toolbar
    chemViewer.setToolButtons(['loadData', 'saveData', 'molDisplayType', 'molHideHydrogens',
        'zoomIn', 'zoomOut',
        'rotateLeft', 'rotateRight', 'rotateX', 'rotateY', 'rotateZ',
        'reset', 'openEditor', 'config']);
    chemViewer.setEnableDirectInteraction(true);
    chemViewer.setEnableEdit(true);
    chemViewer.setToolbarEvokeModes([Kekule.Widget.EvokeMode.ALWAYS]);
    // chemViewer.setAutofit(true);
    // get molecule in editor
    // get the formula object
    let formula = myMolecule.calcFormula();
    // turn formula object into text
    console.log(formula.getText());
    // console.log(myMolecule());
    console.log(cmlData);
</script>

</body>
</html>