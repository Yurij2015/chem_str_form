<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="kekule/kekule.js?module=io,chemWidget,algorithm"></script>
    <link rel="stylesheet" type="text/css" href="kekule/themes/default/kekule.css"/>
    <title>Formula Editor. Admin</title>
</head>

<script id="molResInsideElem" type="chemical/x-mdl-molfile">

  CDK    9/19/06,14:29

 12 12  0  0  0  0  0  0  0  0999 V2000
  415.0000  974.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  383.8231  992.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  383.8231 1028.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  415.0000 1046.0000    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
  446.1769 1028.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  446.1769  992.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  352.6462 1046.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  352.6462 1082.0000    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
  352.6462  974.0000    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
  415.0000  938.0000    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
  477.3538  974.0000    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
  477.3538 1046.0000    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
  1  2  1  0  0  0  0
  2  3  1  0  0  0  0
  3  4  1  0  0  0  0
  4  5  1  0  0  0  0
  5  6  1  0  0  0  0
  6  1  1  0  0  0  0
  3  7  1  1  0  0  0
  7  8  1  0  0  0  0
  2  9  1  6  0  0  0
  1 10  1  1  0  0  0
  6 11  1  1  0  0  0
  5 12  1  0  0  0  0
M  END

</script>
<script id="CO" type="chemical/x-mdl-molfile">
unnamed
  Kekule  05262116402D

  3  2  0  0  0  0  0  0  0  0999 V2000
    7.4933   35.5809    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
    8.1861   35.1809    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
    6.8004   35.1809    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
  1  2  1  0  0  0  0
  1  3  1  0  0  0  0
M  END
</script>
<body>
<script>
    // Create a simple CO2 molecule
    let mol = new Kekule.Molecule();
    let atomC = mol.appendAtom('C');
    let atomO1 = mol.appendAtom('O');
    let atomO2 = mol.appendAtom('O');
    mol.appendBond([atomC, atomO1], 2);
    mol.appendBond([atomC, atomO2], 2);

    // Get formula
    let formula = mol.calcFormula();
    console.log('Formula: ', formula.getText());

    // Output SMILES (IO module should be loaded in web application)
    let smiles = Kekule.IO.saveFormatData(mol, 'smi');
    console.log('SMILES: ', smiles);

    // Output MOL2k (IO module should be loaded in web application)
    let mol2k = Kekule.IO.saveFormatData(mol, 'mol');
    console.log('MOL 2000: \n', mol2k);
    alert(mol2k)

</script>
</body>
</html>
<?php

?>

<div id="parent"></div>
<hr>
<div id="div1"></div>
<script>
    const chemViewer = new Kekule.ChemWidget.Viewer(document);
    // chemViewer.setDimension('500px', '400px');
    // chemViewer.appendToElem(document.getElementById('parent')).setChemObj(molecule);
    // var cmlData = '<cml xmlns="http://www.xml-cml.org/schema"><molecule id="m1"><atomArray><atom id="a2" elementType="C" x2="7.493264658965051" y2="35.58088907877604"/><atom id="a3" elementType="O" x2="8.186084981992602" y2="35.18088907877604"/><atom id="a1" elementType="C" x2="6.800444335937501" y2="35.18088907877604"/></atomArray><bondArray><bond id="b2" order="S" atomRefs2="a2 a3"/><bond id="b1" order="S" atomRefs2="a2 a1"/></bondArray></molecule></cml>';
    let cmlData = '<cml xmlns="http://www.xml-cml.org/schema"><molecule id="m1"><atomArray><atom id="a1" elementType="C" x2="11.653417998547942" y2="36.66624132865448"/><atom id="a2" elementType="C" x2="12.346217998547942" y2="36.26624132865448"/><atom id="a3" elementType="C" x2="11.653417998547942" y2="37.466241328654476"/><atom id="a4" elementType="C" x2="10.960617998547942" y2="36.26624132865448"/><atom id="a5" elementType="C" x2="12.346217998547942" y2="35.466241328654476"/><atom id="a6" elementType="C" x2="10.960617998547942" y2="37.866241328654475"/><atom id="a7" elementType="C" x2="10.960617998547942" y2="35.466241328654476"/><atom id="a8" elementType="C" x2="11.653417998547942" y2="35.06624132865448"/><atom id="a9" elementType="C" x2="13.039117998547942" y2="35.06624132865448"/><atom id="a11" elementType="O" x2="10.267817998547942" y2="37.466241328654476"/><atom id="a10" elementType="O" x2="10.960617998547942" y2="38.66624132865448"/><atom id="a12" elementType="C" x2="13.731917998547942" y2="35.466241328654476"/></atomArray><bondArray><bond id="b1" order="S" atomRefs2="a1 a2"/><bond id="b2" order="S" atomRefs2="a1 a3"/><bond id="b3" order="D" atomRefs2="a1 a4"/><bond id="b4" order="D" atomRefs2="a2 a5"/><bond id="b5" order="S" atomRefs2="a3 a6"/><bond id="b6" order="S" atomRefs2="a4 a7"/><bond id="b7" order="S" atomRefs2="a5 a8"/><bond id="b8" order="S" atomRefs2="a5 a9"/><bond id="b10" order="S" atomRefs2="a6 a11"/><bond id="b9" order="D" atomRefs2="a6 a10"/><bond id="b11" order="D" atomRefs2="a7 a8"/><bond id="b12" order="D" atomRefs2="a9 a12"/></bondArray><metaDataList><metaData name="generator" content="Kekule"/><metaData name="date" content="@Sat Feb 07 2015 07:26:58 GMT+0300 (Moscow Standard Time)"/></metaDataList></molecule></cml>';
    let myMolecule = Kekule.IO.loadFormatData(cmlData, 'cml');
    chemViewer.setChemObj(myMolecule);
    let molecule = chemViewer.getChemObj();
    // chemViewer.setEnableToolbar(true);  // enable the toolbar
    // chemViewer.setChemObj(mol2k);
    // var molecule2 = chemViewer.getChemObj();

    let widget = new Kekule.ChemWidget.PeriodicTable(document.getElementById('div1'));
    // var widget = new Kekule.ChemWidget.PeriodicTable(document);
    // widget.setEnableSelect(true)
    //     .setDisplayedComponents(['symbol', 'name', 'atomicNumber'])
    //     .appendToElem(document.getElementById('parent'));  // append to HTML element
    let resId = 'url(#molResInsideElem)';
    chemViewer.setDimension('800px', '800px');
    chemViewer.appendToElem(document.getElementById('parent')).setChemObj(molecule);
    chemViewer.setEnableToolbar(true);  // enable the toolbar
    chemViewer.setToolButtons(['loadData', 'saveData', 'molDisplayType', 'molHideHydrogens',
        'zoomIn', 'zoomOut',
        'rotateLeft', 'rotateRight', 'rotateX', 'rotateY', 'rotateZ',
        'reset', 'openEditor', 'config']);
    chemViewer.setEnableDirectInteraction(true);
    chemViewer.setEnableEdit(true);
    chemViewer.setToolbarEvokeModes([Kekule.Widget.EvokeMode.ALWAYS]);


    // var chemViewer = new Kekule.ChemWidget.Viewer(document.getElementById('div1'));


</script>
<!--<div id="periodicTable1" data-widget="Kekule.ChemWidget.PeriodicTable"-->
<!--     data-enable-select="true"-->
<!--     data-displayed-components="['symbol', 'name', atomicNumber']">-->
<!--</div>-->
<!--<div id="chemViewer" style="width:500px;height:400px" data-widget="Kekule.ChemWidget.Viewer"-->
<!--     data-chem-obj="url(#mol)"></div>-->
<div id="chemViewer" style="width:500px;height:400px" data-widget="Kekule.ChemWidget.Viewer" data-chem-obj="url(#molResInsideElem)"></div>

<div id="chemViewer" style="width:500px;height:400px" data-widget="Kekule.ChemWidget.Viewer" data-chem-obj="url(#CO)
"></div>