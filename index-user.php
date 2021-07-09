<?php
require_once("dbconnect.php");
$id = $_GET['id'] ?: 1;
$formula = R::load('chemicals', $id);
if ($_POST['search-title']) {
    $formulaname = $_POST['formulaname'];
    $formula = R::findOne('chemicals', 'substance_name = ?', [$formulaname]);
    if (!$formula) {
        ?>
        <script>
            alert("Формула не найдена!");
            document.location.href = 'index-user.php'
        </script>
        <?php
    }
}
if ($_POST['search-code']) {
    $molformat = $_POST['molformat'];
//    $formula = R::findOne('chemicals', 'molformat LIKE :molformat ', [':molformat' => '%' . $molformat . '%']);
    $formula = R::findOne('chemicals', ' MATCH(molformat) AGAINST(:molformat) ', [':molformat' => $molformat]);

    if (!$formula) {
        ?>
        <script>
            alert("Формула не найдена!");
            document.location.href = 'index-user.php'
        </script>
        <?php
    }
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
<h3>Просмотр структурных формул</h3>
<div class="row">
    <div class="col-md-9">
        <div id="editor" style="border: #212121 1px solid"></div>
    </div>
    <div class="col-md-3">
        <form method="post">
            <div class="form-group">
                <label for="name" class="text-dark mb-2">Наименование:</label>
                <input class="form-control" id="name" name="formulaname" value="<?= $formulaname ?>">
            </div>
            <div class="form-group">
                <label for="formula" class="text-dark mb-2">Формула:</label>
                <textarea class="form-control" id="formula" name="molformat" rows="12" style="font-size:
                12px"><?= $molformat ?></textarea>
            </div>
            <div class="form-group">
                <input type="submit" class="btn btn-primary mt-3" name="search-title"
                       value="Найти формулу по названию">
            </div>
            <div class="form-group">
                <input type="submit" class="btn btn-primary mt-3" name="search-code" value="Найти формулу по коду">
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
    chemViewer.setToolButtons(['molDisplayType', 'molHideHydrogens', 'zoomIn', 'zoomOut']);
    chemViewer.setEnableDirectInteraction(false);
    chemViewer.setEnableEdit(false);
    chemViewer.setToolbarEvokeModes([Kekule.Widget.EvokeMode.ALWAYS]);
    console.log(myMolecule);
</script>

</body>
</html>