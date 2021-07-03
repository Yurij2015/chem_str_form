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
$new_mol_format = " new_formula 

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
$molformat = $formula->molformat ?: $new_mol_format;
$formulaname = $formula->substance_name;
$chemical_formula = $formula->chemical_formula ?: "NULL";
?>
<h3 class="mb-5 mt-5">Редактор структурных формул</h3>
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
                <br><span><?= $chemical_formula ?></span>
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
    let chemical_formula = '<?php echo $chemical_formula?>';
    let widget = new Kekule.ChemWidget.PeriodicTable(document.getElementById('parent'));
    const chemViewer = new Kekule.ChemWidget.Viewer(document);
    let idFormula = <?php echo "id = " . $id ?>;
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
        'reset', 'openEditor', 'config'
    ]);


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
                // alert('Формула ' + idFormula + ' обновлена');
            }  // event
            // handler when executing the
            // button
        }
    ]);
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

    // получаем данные обновленной формулы в редакторе и отправляем на сервер
    function dumpObject() {
        let molecule = chemViewer.getChemObj();
        let cmlData = Kekule.IO.saveFormatData(molecule, 'mol');
        let newElForm = molecule.calcFormula();
        if (newElForm.getText().split('').sort().join('') === chemical_formula.split('').sort().join('')) {
            sendStructFormCode(cmlData, idFormula, newElForm);
        } else {
            console.log("Формула не может быть обновлена. Несоотвествие с элементарной формулой!")
            alert("Формула не может быть обновлена. Несоотвествие с элементарной формулой!");
        }
        console.log(newElForm.getText());
        console.log(cmlData);
        // document.location.href = 'index.php?id=' + idFormula;
        console.log(newElForm.getText().split('').sort().join('') === chemical_formula.split('').sort().join(''))
    }

    function sendStructFormCode(structFormCode, idFormula, newElForm) {
        if (structFormCode.length === 0) {
            alert("Пусто. Нет кода для отправки на сервер!")
        } else {
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    console.log("Формула " + this.response + " обновлена");
                }
            };
            xmlhttp.open("GET", "ajax-handler-update.php?structFormCode=" + encodeURIComponent(structFormCode) +
                "&idFormula=" + idFormula + "&newElForm=" + newElForm.getText() + "&chemical_formula=" +
                chemical_formula, true);
            xmlhttp.timeout = 5000;
            xmlhttp.send();
            alert('Формула ' + idFormula + ' обновлена');
        }
    }

    console.log(chemical_formula);
</script>
</body>
</html>