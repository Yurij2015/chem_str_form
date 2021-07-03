<?php
require_once("dbconnect.php");

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
$molformat = " new_formula 

  0  0  0     0  0              0 V3000
M  V30 BEGIN CTAB
M  V30 COUNTS 2 1 0 0 0
M  V30 BEGIN ATOM
M  V30 1 C 4.831642 45.073448 0.000000 0
M  V30 2 C 4.138800 44.673435 0.000000 0
M  V30 END ATOM
M  V30 BEGIN BOND
M  V30 1 1 1 2
M  V30 END BOND
M  V30 END CTAB
M  END";
//$molformat = $formula->molformat;
$formulaname = $formula->substance_name;
?>
<h3>Добавить новую структурную формулу</h3>
<div class="row">
    <div class="col-md-9">
        <div id="editor" style="border: #212121 1px solid"></div>
    </div>
    <div class="col-md-3">
        <form method="post">
            <div>
                <label for="name" class="text-dark mb-2">Наименование:</label>
                <input class="form-control" id="name" name="formulaname" value="<?= $formulaname ?>">
                <label for="formula" class="text-dark mb-2">Формула:</label>
                <textarea class="form-control" id="formula" name="molformat" rows="12" style="font-size:
                12px"><?= $molformat ?></textarea>
                <input type="submit" class="btn btn-primary mt-3" name="createnew" value="Сохранить формулу">
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

    chemViewer.setToolButtons([
        'loadData', 'saveData', 'molDisplayType', 'molHideHydrogens',
        'zoomIn', 'zoomOut',
        'rotateLeft', 'rotateRight', 'rotateX', 'rotateY', 'rotateZ',
        'reset', 'openEditor', 'config',
        {
            'text': 'Сохранить / обновить формулу',  // button caption
            'htmlClass': 'K-Res-Button-YesOk',  // show a OK icon
            'showText': true,   // display caption of button
            '#execute': function () {
                dumpObject()
            }  // event
            // handler when executing the
            // button
        }
    ]);

    chemViewer.setEnableDirectInteraction(true);
    chemViewer.setEnableEdit(true);
    chemViewer.setToolbarEvokeModes([Kekule.Widget.EvokeMode.ALWAYS]);
    let formula = myMolecule.calcFormula();
    // turn formula object into text
    console.log(formula.getText());
    // console.log(myMolecule());
    console.log(cmlData);

    // получаем данные обновленной формулы в редакторе и отправляем на сервер
    function dumpObject() {
        let molecule = chemViewer.getChemObj();
        let cmlData = Kekule.IO.saveFormatData(molecule, 'mol');
        let newElForm = molecule.calcFormula();
        sendStructFormCode(cmlData);
        console.log(newElForm.getText());
        console.log(cmlData);
        // document.location.href = 'index.php?id=' + idFormula;
    }

    function sendStructFormCode(structFormCode) {
        if (structFormCode.length === 0) {
            alert("Пусто. Нет кода для отправки на сервер!")
        } else {
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    console.log(this.response);
                }
            };
            xmlhttp.open("GET", "ajax-handler.php?structFormCode=" + encodeURIComponent(structFormCode), true);
            xmlhttp.timeout = 5000;
            xmlhttp.send();
            alert('Формула добавлена');
        }
    }


</script>

</body>
</html>