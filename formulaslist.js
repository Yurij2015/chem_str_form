!function (e) {
    "use strict";

    function o(e) {
        var o = e.split("-");
        return {language: o[0], local: o[1]}
    }

    e || (e = {});
    var t = Kekule,
        n = Kekule.language || (e && e.navigator ? navigator.language || navigator.browserLanguage : "en-US");
    t.language = n;
    var a = o(n), i = o("en-US"), _ = [a.language + "_" + a.local, a.language, i.language + i.local, i.language];
    Kekule.Localization = {}, Kekule.LocalizationRes = {};
    var r = Kekule.LocalizationRes;

    function T(e, o, t) {
        var n = t || r[e];
        return !n && o && (n = {}, r[e] = n), n
    }

    function l(e, o, t) {
        var n = T(o, !1, t);
        if (n) {
            var a = Object.getCascadeFieldValue(e, n);
            if (void 0 !== a) return a
        }
    }

    function E(e, o, t) {
        for (var n = (o ? [o] : []).concat(_), a = 0, i = n.length; a
        < i; ++a) {
            var r = l(e, n[a], t);
            if (void 0 !== r) return r
        }
    }

    function I(e, o, t) {
        var n = E(e, o, t);
        if (void 0 !== n) return n;
        Kekule.error("Can not find localization resource: " + e)
    }

    var O, s = [], c = !!(e || e.window).__kekuleMarkLocalizationModuleInfo__, N = {};

    function d(e, o, t, n) {
        if (t) {
            var a = l(o, e, n);
            (function (e, o, t, n, a) {
                var i = T(t, n, a);
                !!i && Object.setCascadeFieldValue(e, o, i, n)
            })(o, a ? Object.extendEx(a, t, {cascade: !0}) : JSON.parse(JSON.stringify(t)), e, !0, n)
        }
    }

    Kekule.$L = I, Kekule.Localization.getLanguages = function () {
        var e = [];
        for (var o in r) e.push(o);
        return e
    }, Kekule.Localization.getValue = I, Kekule.Localization.findValue = E, Kekule.Localization.getModuleInfos = function () {
        return N
    }, Kekule.Localization.setCurrModule = function (e) {
        O = e, s.indexOf(e) < 0 && s.push(e)
    }, Kekule.Localization.getModuleNames = function () {
        return s
    }, Kekule.Localization.addResource = function (e, o, t) {
        (d(e, o, t), c) && d(e, o, t, function (e, o) {
            e = e || "GLOBAL";
            var t = Object.getCascadeFieldValue(e, N);
            return !t && o && (t = Object.setCascadeFieldValue(e, {}, N, !0)), t
        }(O, !0))
    }
}(this), Kekule.LOCAL_RES = !0, Kekule.Localization.setCurrModule("general"), Kekule.Localization.addResource("en", "Texts", {UNNAMED: "unnamed"}), Kekule.Localization.addResource("en", "ErrorMsg", {
    MODULE_NOT_LOADED: "Module {0} is not loaded",
    NON_OWN_PROPERTY_CANNOT_BE_REPLACED: "Only directly owned property of object can be replaced",
    EMPTY_DOC: "Document is empty",
    ELEMENT_NOTSET: "Element not set",
    EMPTY_RESURI: "Resource URI is empty",
    CANNOT_LOAD_RES_OF_URI: "Can not load resource of URI: ",
    LIST_ITEM_CLASS_MISMATCH: "Mismatched item class, can not add to list",
    CANNOT_CLEAR_WEAKMAP: "Can not clear a weak map",
    CANNOT_GET_KEY_LIST_IN_WEAKMAP: "Can not get key array from a weak map",
    CANNOT_GET_VALUE_LIST_IN_WEAKMAP: "Can not get value array from a weak map",
    INVALID_CHEMELEMENT: "Invalid chemical element",
    INVALID_ISOTOPE: "Invalid isotope",
    COORD_STICK_NOT_ALLOWED_ON_CLASS: "Coordinate sticking is not allowed in this type of object",
    INVALID_STICK_TARGET_OBJ: "Invalid sticking target",
    UNABLE_TO_STICK_TO_OTHER_OWNER_OBJ: "Unable to stick to object with a different owner",
    UNABLE_TO_STICK_TO_OBJ_WITHOUT_ABS_COORD: "Unable to stick to object without absolute coordinates",
    STICK_RECURSION_NOT_ALLOWED: "Stick recursion is not allowed",
    UNABLE_ADD_MISTYPED_NODE: "Unable to link mistyped node to connector",
    UNABLE_ADD_DIFF_OWNER_OBJ: "Object with different owner can not be linked to connector",
    CHEMSTRUCTUREOBJECTGROUP_ITEMCLASS_MISMATCH: "Mismatched group item class",
    SORT_FUNC_UNSET: "Sort function is not set",
    SOURCE_FRAGMENT_NOT_SET: "Source structure fragment not set",
    UNABLE_ADD_NONMOLECULE_MAP: "Unable to add non-molecule to reactants or products",
    CANNOT_ADD_NON_NODE_NOR_CONNECTOR_TO_STRUCT_CONTAINER: "Can not add object other than node or connector to structure object container",
    REGISTERED_CANONICALIZATION_EXECUTOR_NOT_FOUND: "Can not find registered canonicalization executor",
    ERROR_LOADING_FILE: "Error loading file: ",
    READER_ID_ALREADY_EXISTS: "Can not register reader: id already exists",
    WRITER_ID_ALREADY_EXISTS: "Can not register writer: id already exists",
    FAIL_TO_READ_FORMAT: "Fail to load data of format: ",
    NO_SUITABLE_READER_FOR_FORMAT: "Can not read data of format: ",
    NO_SUITABLE_READER_FOR_MIMETYPE: "Can not read data of MIME type: ",
    NO_SUITABLE_READER_FOR_FILEEXT: "Can not read data of file extension: ",
    NO_SUITABLE_WRITER_FOR_FORMAT: "Can not write data of format: ",
    NO_SUITABLE_WRITER_FOR_MIMETYPE: "Can not write data of MIME type: ",
    NO_SUITABLE_WRITER_FOR_FILEEXT: "Can not write data of file extension: ",
    AJAX_FILELOADER_NOT_FOUND: "AJAX file loader not found, can not load URL",
    FAIL_TO_LOAD_FILE_URL: "Fail to load file of URL: ",
    CML_ELEM_READER_NOT_FOUND: "Reader for element <{0}> not found",
    ATOMID_NOT_EXISTS: "Atom id not exists: ",
    BONDID_NOT_EXISTS: "Bond id not exists: ",
    CML_ELEM_WRITER_TYPE_INPROPER: "{0} is not a proper CML element writer for {1}",
    CML_CAN_NOT_OUTPUT_TO_EMPTY_ELEMENT: "Can not output content to empty element",
    UNABLE_TO_OUTPUT_AS_CML: "Unable to output object <{0}> to CML data",
    MDL_CTAB_ATOM_CANNOT_CREATE: "Can not create atom from source MDL format data",
    MDL_CTAB_BOND_CANNOT_CREATE: "Can not create bond from source MDL format data",
    CAN_NOT_WRITE_NON_MOLECULE_TO_MOL: "Object is not a molecule and can not be output to connection table",
    MOLECULE_HAS_NO_CTAB_TO_OUTPUT: "Molecule has no connection table and can not be output to MDL format",
    NOT_MDL2000_FORMAT_DATA: "Data format wrong: not MDL 2000",
    NOT_MDL_RXN_DATA: "Not MDL Reaction(RXN) data",
    MALFORMED_MDL3000_COUNTLINE: "Malformed MDL 3000 count line",
    MDL3000_ATOMBLOCK_NOT_FOUND: "Atom block not found, malformed MDL 3000 data?",
    NOT_MDL_FORMAT_DATA: "Data format wrong: not MDL 2000 or 3000",
    NOT_MDL2000_RXN_DATA: "Not MDL RXN 2000 data",
    NOT_MDL3000_RXN_DATA: "Not MDL RXN 3000 data",
    NOT_MDL3000_RXN_COUNTLINE: "Error in reading RXN 3000 count line",
    MDL_OUTPUT_DATATYPE_NOT_TEXT: "MDL data can not be output to non text format",
    MDL_INPUT_DATATYPE_NOT_TEXT: "Non text format is not a legal MDL source data",
    UNABLE_TO_OUTPUT_AS_MDL: "Unable to output object <{0}> to MDL data",
    KCJ_INPUT_DATATYPE_NOT_JSON_OR_TEXT: "Non text or JSON format data is not a legal KCJ source",
    KCJ_OUTPUT_DATATYPE_NOT_JSON_OR_TEXT: "Can not output as non text or JSON data",
    KCX_INPUT_DATATYPE_NOT_DOM_OR_TEXT: "Non text or DOM data is not a legal KCX source",
    KCX_OUTPUT_DATATYPE_NOT_DOM_OR_TEXT: "Can not output as non text or DOM data",
    JSON_SERIALIZER_NOT_EXISTS: "Serializer for JSON not exists",
    XML_SERIALIZER_NOT_EXISTS: "Serializer for XML not exists",
    INAVAILABLE_AUTOSCALE_REF_LENGTH: "Can not determine the length for calculation of auto scale",
    FORMULA_RENDERER_3D_NOT_AVAILABLE: "3D renderer for molecule formula is not available",
    CANNOT_FIND_SUITABLE_RENDERER_FOR_OBJ: "Can not find suitable renderer for object",
    CALC_TERMINATED_BY_USER: "Calculation terminated by user",
    CALC_SERVICE_UNAVAILABLE: 'Calculation service "{0}" is unavailable'
}), Kekule.LOCAL_RES = !0, Kekule.Localization.setCurrModule("widget"), Kekule.Localization.addResource("en", "WidgetTexts", {
    CAPTION_OK: "OK",
    CAPTION_CANCEL: "Cancel",
    CAPTION_YES: "Yes",
    CAPTION_NO: "No",
    CAPTION_BROWSE_COLOR: "Browse colors",
    HINT_BROWSE_COLOR: "Browse more colors",
    S_COLOR_UNSET: "(unset)",
    S_COLOR_DEFAULT: "(default)",
    S_COLOR_MIXED: "(mixed)",
    S_COLOR_TRANSPARENT: "(transparent)",
    S_OBJECT_UNSET: "(none)",
    S_ITEMS: "item(s)",
    S_OBJECT: "object",
    S_VALUE_UNSET: "(Unset)",
    CAPTION_MENU: "Menu",
    HINT_MENU: "Open menu",
    S_INSPECT_NONE: "(none)",
    S_INSPECT_OBJECTS: "({0} objects)",
    S_INSPECT_ID_OBJECT: "{0}: {1}",
    S_INSPECT_ANONYMOUS_OBJECT: "({0})",
    CAPTION_TOGGLE_TEXTWRAP: "Toggle text wrapping",
    CAPTION_INC_TEXT_SIZE: "Increase text size",
    CAPTION_DEC_TEXT_SIZE: "Decrease text size",
    HINT_TOGGLE_TEXTWRAP: "Toggle the state of text wrapping",
    HINT_INC_TEXT_SIZE: "Increase text size",
    HINT_DEC_TEXT_SIZE: "Decrease text size",
    HINT_CHOOSE_FONT_FAMILY: "Choose font family",
    CAPTION_FIRST_PAGE: "First",
    CAPTION_LAST_PAGE: "Last",
    CAPTION_PREV_PAGE: "Prev",
    CAPTION_NEXT_PAGE: "Next",
    HINT_FIRST_PAGE: "First page",
    HINT_LAST_PAGE: "Last page",
    HINT_PREV_PAGE: "Previous page",
    HINT_NEXT_PAGE: "Next page",
    HINT_CURR_PAGE: "Current page",
    MSG_RETRIEVING_DATA: "Loading data...",
    CAPTION_DATATABLE_EDIT: "Edit",
    CAPTION_DATATABLE_DELETE: "Delete",
    CAPTION_DATATABLE_INSERT: "Insert",
    HINT_DATATABLE_EDIT: "Edit",
    HINT_DATATABLE_DELETE: "Delete",
    HINT_DATATABLE_INSERT: "Insert",
    CAPTION_ADD_CELL: "+",
    HINT_ADD_CELL: "Add new cell",
    CAPTION_REMOVE_CELL: "Remove",
    HINT_REMOVE_CELL: "Remove cell",
    CAPTION_CONFIG: "Settings...",
    HINT_CONFIG: "Change settings",
    TITLE_IMG_FORMAT_PNG: "PNG format image",
    TITLE_IMG_FORMAT_JPG: "Jpeg format image",
    TITLE_IMG_FORMAT_GIF: "GIF format image",
    TITLE_IMG_FORMAT_SVG: "SVG format image"
}), Kekule.Localization.addResource("en", "ChemWidgetTexts", {
    CAPTION_CLEAROBJS: "Clear",
    CAPTION_LOADFILE: "Load...",
    CAPTION_LOADDATA: "Load...",
    CAPTION_SAVEFILE: "Save...",
    CAPTION_ZOOMIN: "Zoom In",
    CAPTION_ZOOMOUT: "Zoom Out",
    CAPTION_RESETZOOM: "Reset Zoom",
    CAPTION_RESETVIEW: "Reset",
    CAPTION_ROTATE: "Rotate",
    CAPTION_ROTATELEFT: "Left Rotate",
    CAPTION_ROTATERIGHT: "Right Rotate",
    CAPTION_ROTATEX: "X Rotate",
    CAPTION_ROTATEY: "Y Rotate",
    CAPTION_ROTATEZ: "Z Rotate",
    CAPTION_MOL_DISPLAY_TYPE: "Molecule Display Style",
    CAPTION_SKELETAL: "Skeletal",
    CAPTION_CONDENSED: "Condensed",
    CAPTION_WIRE: "Wire Frame",
    CAPTION_STICKS: "Sticks",
    CAPTION_BALLSTICK: "Ball Stick",
    CAPTION_SPACEFILL: "Space Fill",
    CAPTION_HIDEHYDROGENS: "Show/hide hydrogens",
    CAPTION_OPENEDITOR: "Edit...",
    CAPTION_EDITOR_DONE: "Done",
    CAPTION_EDITOR_CANCEL: "Cancel",
    CAPTION_EDIT_OBJ: "Edit",
    HINT_CLEAROBJS: "Clear objects",
    HINT_LOADFILE: "Load from file",
    HINT_LOADDATA: "Load data",
    HINT_SAVEFILE: "Save to file",
    HINT_ZOOMIN: "Zoom in",
    HINT_ZOOMOUT: "Zoom out",
    HINT_RESETZOOM: "Reset zoom",
    HINT_RESETVIEW: "Reset zoom and rotation",
    HINT_ROTATE: "Rotate",
    HINT_ROTATELEFT: "Rotate in anticlockwise direction",
    HINT_ROTATERIGHT: "Rotate in clockwise direction",
    HINT_ROTATEX: "Rotate around X axis",
    HINT_ROTATEY: "Rotate around Y axis",
    HINT_ROTATEZ: "Rotate around Z axis",
    HINT_MOL_DISPLAY_TYPE: "Change molecule display style",
    HINT_SKELETAL: "Show molecule in skeletal style",
    HINT_CONDENSED: "Show molecule in condensed style",
    HINT_WIRE: "Show molecule in wire frame style",
    HINT_STICKS: "Show molecule in sticks style",
    HINT_BALLSTICK: "Show molecule in ball-stick style",
    HINT_SPACEFILL: "Show molecule in space-fill style",
    HINT_HIDEHYDROGENS: "Show/hide hydrogen atoms in model",
    HINT_OPENEDITOR: "Open an editor to modify displayed object",
    HINT_EDITOR_DONE: "Save the modification",
    HINT_EDITOR_CANCEL: "Discard the modification",
    CAPTION_NEWDOC: "New",
    CAPTION_UNDO: "Undo",
    CAPTION_REDO: "Redo",
    CAPTION_COPY: "Copy",
    CAPTION_CUT: "Cut",
    CAPTION_PASTE: "Paste",
    CAPTION_TOGGLE_SELECT: "Toggle select",
    CAPTION_CLONE_SELECTION: "Clone selection",
    CAPTION_TOGGLE_INSPECTOR: "Object inspector",
    CAPTION_MANIPULATE: "Select",
    CAPTION_MANIPULATE_MARQUEE: "Marquee select",
    CAPTION_MANIPULATE_LASSO: "Lasso select",
    CAPTION_MANIPULATE_BRUSH: "Brush select",
    CAPTION_MANIPULATE_ANCESTOR: "Select molecule",
    CAPTION_CLIENT_DRAGSCROLL: "Scroll",
    CAPTION_ERASE: "Erase",
    CAPTION_TRACK_INPUT: "Track",
    CAPTION_MOL_BOND: "Bond",
    CAPTION_MOL_BOND_SINGLE: "Single bond",
    CAPTION_MOL_BOND_DOUBLE: "Double bond",
    CAPTION_MOL_BOND_TRIPLE: "Triple bond",
    CAPTION_MOL_BOND_QUAD: "Quad bond",
    CAPTION_MOL_BOND_EXPLICIT_AROMATIC: "Aromatic bond",
    CAPTION_MOL_BOND_WEDGEUP: "Wedge up bond",
    CAPTION_MOL_BOND_WEDGEUP_INVERTED: "Wedge up bond 2",
    CAPTION_MOL_BOND_WEDGEDOWN: "Wedge down bond",
    CAPTION_MOL_BOND_WEDGEDOWN_INVERTED: "Wedge down bond 2",
    CAPTION_MOL_BOND_CLOSER: "Outer bond",
    CAPTION_MOL_BOND_WAVY: "Wavy bond",
    CAPTION_MOL_BOND_DOUBLE_EITHER: "Double Either bond",
    CAPTION_MOL_BOND_IONIC: "Ionic bond",
    CAPTION_MOL_BOND_COORDINATE: "Coordinate bond",
    CAPTION_MOL_BOND_METALLIC: "Metallic bond",
    CAPTION_MOL_BOND_HYDROGEN: "Hydrogen bond",
    CAPTION_MOL_BOND_KEKULIZE: "Kekulize",
    CAPTION_MOL_BOND_HUCKLIZE: "Hucklize",
    CAPTION_MOL_ATOM: "Atom",
    CAPTION_MOL_FORMULA: "Formula",
    CAPTION_MOL_ATOM_AND_FORMULA: "Atom & formula",
    CAPTION_MOL_CHARGE: "Charge",
    CAPTION_MOL_CHARGE_CLEAR: "Charge clear",
    CAPTION_MOL_CHARGE_POSITIVE: "Positive charge",
    CAPTION_MOL_CHARGE_NEGATIVE: "Negative charge",
    CAPTION_MOL_CHARGE_SINGLET: "Singlet radical",
    CAPTION_MOL_CHARGE_DOUBLET: "Monoradical",
    CAPTION_MOL_CHARGE_TRIPLET: "Triplet radical",
    CAPTION_MOL_ELECTRON_LONEPAIR: "Lone pair",
    CAPTION_TEXT_BLOCK: "Text block",
    CAPTION_IMAGE_BLOCK: "Image block",
    CAPTION_TEXT_IMAGE: "Text & image",
    CAPTION_MOL_FLEXCHAIN: "Flex chain",
    CAPTION_MOL_FLEXRING: "Flex ring",
    CAPTION_REPOSITORY_RING: "Rings",
    CAPTION_REPOSITORY_RING_3: "Cyclopropane",
    CAPTION_REPOSITORY_RING_4: "Cyclobutane",
    CAPTION_REPOSITORY_RING_5: "Cyclopentane",
    CAPTION_REPOSITORY_RING_6: "Cyclohexane",
    CAPTION_REPOSITORY_RING_7: "Cycloheptane",
    CAPTION_REPOSITORY_RING_8: "Cyclooctane",
    CAPTION_REPOSITORY_RING_AR_6: "Benzene",
    CAPTION_REPOSITORY_RING_AR_5: "Cyclopentadiene",
    CAPTION_REPOSITORY_CYCLOHEXANE_CHAIR1: "Cyclohexane chair 1",
    CAPTION_REPOSITORY_CYCLOHEXANE_CHAIR2: "Cyclohexane chair 2",
    CAPTION_REPOSITORY_CYCLOHEXANE_HARWORTH1: "Cyclohexane Haworth 1",
    CAPTION_REPOSITORY_CYCLOHEXANE_HARWORTH2: "Cyclohexane Haworth 2",
    CAPTION_REPOSITORY_CYCLOPENTANE_HARWORTH1: "Cyclopentane Haworth 1",
    CAPTION_REPOSITORY_CYCLOPENTANE_HARWORTH2: "Cyclopentane Haworth 2",
    CAPTION_REPOSITORY_METHANE: "Methane",
    CAPTION_REPOSITORY_FISCHER1: "Fischer projection 1",
    CAPTION_REPOSITORY_FISCHER2: "Fischer projection 2",
    CAPTION_REPOSITORY_FISCHER3: "Fischer projection 3",
    CAPTION_REPOSITORY_SAWHORSE_STAGGERED: "Sawhorse staggered",
    CAPTION_REPOSITORY_SAWHORSE_ECLIPSED: "Sawhorse eclipsed",
    CAPTION_REPOSITORY_SUBBOND_MARK: "Substituent bond",
    CAPTION_REPOSITORY_ARROWLINE: "Arrows & symbols",
    CAPTION_REPOSITORY_GLYPH: "Glyphs",
    CAPTION_REPOSITORY_GLYPH_LINE: "Line",
    CAPTION_REPOSITORY_GLYPH_OPEN_ARROW_LINE: "Open arrow line",
    CAPTION_REPOSITORY_GLYPH_TRIANGLE_ARROW_LINE: "Triangle arrow line",
    CAPTION_REPOSITORY_GLYPH_DI_OPEN_ARROW_LINE: "Bidirectional open arrow line",
    CAPTION_REPOSITORY_GLYPH_DI_TRIANGLE_ARROW_LINE: "Bidirectional triangle arrow line",
    CAPTION_REPOSITORY_GLYPH_REV_ARROW_LINE: "Reversible arrow line",
    CAPTION_REPOSITORY_GLYPH_OPEN_ARROW_DILINE: "Open arrow double line",
    CAPTION_REPOSITORY_GLYPH_OPEN_ARROW_ARC: "Open arrow arc",
    CAPTION_REPOSITORY_GLYPH_SINGLE_SIDE_OPEN_ARROW_ARC: "Single side open arrow arc",
    CAPTION_ELECTRON_PUSHING_ARROW: "Electron pushing arrow",
    CAPTION_ELECTRON_PUSHING_ARROW_DOUBLE: "Double electron pushing arrow",
    CAPTION_ELECTRON_PUSHING_ARROW_SINGLE: "Single electron pushing arrow",
    CAPTION_REPOSITORY_HEAT_SYMBOL: "Heat symbol",
    CAPTION_REPOSITORY_ADD_SYMBOL: "Add symbol",
    CAPTION_TEXT_FORMAT: "Text format",
    CAPTION_PICK_COLOR: "Color",
    CAPTION_FONTNAME: "Font name",
    CAPTION_FONTSIZE: "Font size",
    CAPTION_TEXT_DIRECTION: "Text direction",
    CAPTION_TEXT_DIRECTION_DEFAULT: "Default",
    CAPTION_TEXT_DIRECTION_LTR: "Left to right",
    CAPTION_TEXT_DIRECTION_RTL: "Right to left",
    CAPTION_TEXT_DIRECTION_TTB: "Top to bottom",
    CAPTION_TEXT_DIRECTION_BTT: "Bottom to top",
    CAPTION_TEXT_HORIZONTAL_ALIGN: "Text horizontal alignment",
    CAPTION_TEXT_VERTICAL_ALIGN: "Text vertical alignment",
    CAPTION_TEXT_ALIGN_DEFAULT: "Default",
    CAPTION_TEXT_ALIGN_LEADING: "Leading",
    CAPTION_TEXT_ALIGN_TRAILING: "Trailing",
    CAPTION_TEXT_ALIGN_CENTER: "Center",
    CAPTION_TEXT_ALIGN_LEFT: "Left",
    CAPTION_TEXT_ALIGN_RIGHT: "Right",
    CAPTION_TEXT_ALIGN_TOP: "Top",
    CAPTION_TEXT_ALIGN_BOTTOM: "Bottom",
    CAPTION_NODE_LABEL_DISPLAY_MODE: "Atom label display mode",
    CAPTION_NODE_LABEL_DISPLAY_MODE_DEFAULT: "Default",
    CAPTION_NODE_LABEL_DISPLAY_MODE_SHOWN: "Show label",
    CAPTION_NODE_LABEL_DISPLAY_MODE_HIDDEN: "Hide label",
    CAPTION_NODE_LABEL_DISPLAY_MODE_SMART: "Smart",
    CAPTION_ATOM_MODIFIER: "Atom",
    CAPTION_ATOM_MODIFIER_MIXED: "[A]",
    CAPTION_BOND_MODIFIER: "Bond",
    CAPTION_CHARGE_MODIFIER: "Charge",
    CAPTION_GLYPH_PATH_MODIFIER: "Path",
    CAPTION_REACTION_ARROW_AND_SEGMENT_PATH_MODIFIER: "Reaction arrow & segment",
    CAPTION_ARC_PATH_MODIFIER: "Arc",
    CAPTION_MULTI_ARC_PATH_MODIFIER: "Multi-Arc",
    CAPTION_ELECTRON_PUSHING_ARROW_MODIFIER: "Electron pushing arrow",
    CAPTION_BOND_FORMING_ELECTRON_PUSHING_ARROW_MODIFIER: "Bond forming arrow",
    TEXT_CHARGE_POSITIVE: "+",
    TEXT_CHARGE_NEGATIVE: "-",
    TEXT_CHARGE_UNKNOWN: "
        < sup > +
</sup>/
<sub>-</sub>",TEXT_CHARGE_NONE:"&#8709;",HINT_NEWDOC:"Create new document",HINT_UNDO:"Undo",HINT_REDO:"Redo",HINT_COPY:"Copy selection to internal clipboard",HINT_CUT:"Cut selection to internal clipboard",HINT_PASTE:"Paste from internal clipboard",HINT_CLONE_SELECTION:"Clone selection",HINT_TOGGLE_SELECT:"Toggle select",HINT_TOGGLE_INSPECTOR:"Show or hide object inspector panel",HINT_MANIPULATE:"Select tool",HINT_MANIPULATE_MARQUEE:"Marquee select",HINT_MANIPULATE_LASSO:"Lasso select",HINT_MANIPULATE_BRUSH:"Brush select",HINT_MANIPULATE_ANCESTOR:"Select molecule",HINT_CLIENT_DRAGSCROLL:"Scroll",HINT_ERASE:"Erase tool",HINT_TRACK_INPUT:"Track tool",HINT_MOL_BOND:"Bond tool",HINT_MOL_BOND_SINGLE:"Single bond",HINT_MOL_BOND_DOUBLE:"Double bond",HINT_MOL_BOND_TRIPLE:"Triple bond",HINT_MOL_BOND_QUAD:"Quad bond",HINT_MOL_BOND_EXPLICIT_AROMATIC:"Explicit aromatic bond",HINT_MOL_BOND_WEDGEUP:"Wedge up bond",HINT_MOL_BOND_WEDGEUP_INVERTED:"Wedge up bond 2",HINT_MOL_BOND_WEDGEDOWN:"Wedge down bond",HINT_MOL_BOND_WEDGEDOWN_INVERTED:"Wedge down bond 2",HINT_MOL_BOND_CLOSER:"Outer bond",HINT_MOL_BOND_WAVY:"Wavy bond",HINT_MOL_BOND_DOUBLE_EITHER:"Double either bond",HINT_MOL_BOND_IONIC:"Ionic bond",HINT_MOL_BOND_COORDINATE:"Coordinate bond",HINT_MOL_BOND_METALLIC:"Metallic bond",HINT_MOL_BOND_HYDROGEN:"Hydrogen bond",HINT_MOL_BOND_KEKULIZE:"Kekulize, convert explicit aromatic bonds to compartmental single and double ones",HINT_MOL_BOND_HUCKLIZE:"Hucklize, mark bonds on aromatic rings as explicit aromatic ones",HINT_MOL_ATOM:"Atom tool",HINT_MOL_FORMULA:"Formula tool",HINT_MOL_ATOM_AND_FORMULA:"Atom and formula tool",HINT_MOL_CHARGE:"Charge tool",HINT_MOL_CHARGE_CLEAR:"Clear charge and radical",HINT_MOL_CHARGE_POSITIVE:"Positive charge",HINT_MOL_CHARGE_NEGATIVE:"Negative charge",HINT_MOL_CHARGE_SINGLET:"Singlet radical",HINT_MOL_CHARGE_DOUBLET:"Monoradical",HINT_MOL_CHARGE_TRIPLET:"Triplet radical",HINT_MOL_ELECTRON_LONEPAIR:"Lone pair electrons",HINT_TEXT_BLOCK:"Text block tool",HINT_IMAGE_BLOCK:"Image block tool",HINT_TEXT_IMAGE:"Text and image tool",HINT_MOL_FLEXCHAIN:"Flex carbon chain",HINT_MOL_FLEXRING:"Flex carbon ring",HINT_REPOSITORY_RING:"Ring structures tool",HINT_REPOSITORY_RING_3:"Cyclopropane",HINT_REPOSITORY_RING_4:"Cyclobutane",HINT_REPOSITORY_RING_5:"Cyclopentane",HINT_REPOSITORY_RING_6:"Cyclohexane",HINT_REPOSITORY_RING_7:"Cycloheptane",HINT_REPOSITORY_RING_8:"Cyclooctane",HINT_REPOSITORY_RING_AR_6:"Benzene",HINT_REPOSITORY_RING_AR_5:"Cyclopentadiene",HINT_REPOSITORY_CYCLOHEXANE_CHAIR1:"Cyclohexane chair 1",HINT_REPOSITORY_CYCLOHEXANE_CHAIR2:"Cyclohexane chair 2",HINT_REPOSITORY_CYCLOHEXANE_HARWORTH1:"Cyclohexane Haworth 1",HINT_REPOSITORY_CYCLOHEXANE_HARWORTH2:"Cyclohexane Haworth 2",HINT_REPOSITORY_CYCLOPENTANE_HARWORTH1:"Cyclopentane Haworth 1",HINT_REPOSITORY_CYCLOPENTANE_HARWORTH2:"Cyclopentane Haworth 2",HINT_REPOSITORY_SUBBOND_MARK:"Substituent bond",HINT_REPOSITORY_METHANE:"Methane",HINT_REPOSITORY_FISCHER1:"Fischer projection with one chiral center",HINT_REPOSITORY_FISCHER2:"Fischer projection with two chiral centers",HINT_REPOSITORY_FISCHER3:"Fischer projection with three chiral centers",HINT_REPOSITORY_SAWHORSE_STAGGERED:"Sawhorse staggered",HINT_REPOSITORY_SAWHORSE_ECLIPSED:"Sawhorse eclipsed",HINT_REPOSITORY_ARROWLINE:"Arrows and symbols tool",HINT_REPOSITORY_GLYPH:"Glyphs",HINT_REPOSITORY_GLYPH_LINE:"Line",HINT_REPOSITORY_GLYPH_OPEN_ARROW_LINE:"Open arrow line",HINT_REPOSITORY_GLYPH_TRIANGLE_ARROW_LINE:"Triangle arrow line",HINT_REPOSITORY_GLYPH_DI_OPEN_ARROW_LINE:"Bidirectional open arrow line",HINT_REPOSITORY_GLYPH_DI_TRIANGLE_ARROW_LINE:"Bidirectional triangle arrow line",HINT_REPOSITORY_GLYPH_REV_ARROW_LINE:"Reversible arrow line",HINT_REPOSITORY_GLYPH_OPEN_ARROW_DILINE:"Open arrow double line",HINT_REPOSITORY_GLYPH_OPEN_ARROW_ARC:"Open arrow arc",HINT_REPOSITORY_GLYPH_SINGLE_SIDE_OPEN_ARROW_ARC:"Single side open arrow arc",HINT_REPOSITORY_HEAT_SYMBOL:"Heat symbol",HINT_REPOSITORY_ADD_SYMBOL:"Add symbol",HINT_ELECTRON_PUSHING_ARROW:"Electron pushing arrow",HINT_NODE_LABEL_DISPLAY_MODE:"Atom label display mode",HINT_TEXT_FORMAT:"Set text format",HINT_FONTNAME:"Set font name",HINT_FONTSIZE:"Set font size",HINT_PICK_COLOR:"Select color",HINT_TEXT_DIRECTION:"Set text direction",HINT_TEXT_HORIZONTAL_ALIGN:"Set text horizontal alignment",HINT_TEXT_VERTICAL_ALIGN:"Set text vertical alignment",HINT_CHARGE_NONE:"No charge",HINT_ATOM_MODIFIER:"Set atom",HINT_BOND_MODIFIER:"Set bond",HINT_CHARGE_MODIFIER:"Set charge",HINT_GLYPH_PATH_MODIFIER:"Set path properties",HINT_REACTION_ARROW_AND_SEGMENT_PATH_MODIFIER:"Set reaction arrow and segment properties",HINT_ARC_PATH_MODIFIER:"Set arc properties",HINT_MULTI_ARC_PATH_MODIFIER:"Set multi-arc properties",HINT_ELECTRON_PUSHING_ARROW_MODIFIER:"Set electron pushing arrow properties",HINT_BOND_FORMING_ELECTRON_PUSHING_ARROW_MODIFIER:"Set bond forming arrow properties",HINT_USE_ATOM_CUSTOM_COLOR:"(use atom custom color)",CAPTION_LOADDATA_DIALOG:"Load data",CAPTION_LOADDATA_DIALOG_APPENDMODE:"Append to current",CAPTION_SAVEDATA_DIALOG:"Save data",CAPTION_DATA_FORMAT:"Data format:",CAPTION_DATA_SRC:"Input or paste data below:",CAPTION_LOADDATA_FROM_FILE:"Load from file",CAPTION_CHOOSEFILEFORMAT:"Choose file format",CAPTION_SELECT_FORMAT:"Select format:",CAPTION_PREVIEW_FILE_CONTENT:"Preview: ",S_DEF_SAVE_FILENAME:"Unnamed",CAPTION_ATOMLIST_PERIODIC_TABLE:"more...",CAPTION_RGROUP:"Sub group",CAPTION_VARIABLE_ATOM:"Variable Atom (list)",CAPTION_VARIABLE_NOT_ATOM:"Variable Atom (not list)",CAPTION_PSEUDOATOM:"Pseudoatom",CAPTION_DUMMY_ATOM:"Dummy Atom",CAPTION_HETERO_ATOM:"Hetero Atom",CAPTION_ANY_ATOM:"Any Atom",CAPTION_ATOM:"Atom",CAPTION_SUBGROUP:"Subgroup",CAPTION_PERIODIC_TABLE_DIALOG:"Periodic table",CAPTION_PERIODIC_TABLE_DIALOG_SEL_ELEM:"Select element",CAPTION_PERIODIC_TABLE_DIALOG_SEL_ELEMS:"Select elements",CAPTION_TEXTBLOCK_INIT:"Enter text here",CAPTION_WIDTH:"Width",CAPTION_LENGTH:"Length",CAPTION_PATH_INDEX:"Path
{
    0
}
",HINT_PATH_INDEX:"
Path
{
    0
}
",CAPTION_REACTION_ARROW_UNSET:"(Unset)
",CAPTION_REACTION_ARROW_CUSTOM:"
Custom
",CAPTION_REACTION_ARROW_NORMAL:"
Normal
",CAPTION_REACTION_ARROW_RESONANCE:"
Resonance
",CAPTION_REACTION_ARROW_REVERSIBLE:"
Reversible
",CAPTION_REACTION_ARROW_RETROSYNTHESIS:"
Retrosynthesis
",HINT_REACTION_ARROW_UNSET:"
Unset
",HINT_REACTION_ARROW_CUSTOM:"
Custom
",HINT_REACTION_ARROW_NORMAL:"
Normal
arrow
",HINT_REACTION_ARROW_RESONANCE:"
Resonance
arrow
",HINT_REACTION_ARROW_REVERSIBLE:"
Reversible
arrow
",HINT_REACTION_ARROW_RETROSYNTHESIS:"
Retrosynthesis
arrow
",CAPTION_LINE_COUNT:"
Line
count
",CAPTION_LINE_GAP:"
Line
gap
",CAPTION_LINE:"
Line
",CAPTION_STARTING_ARROW:"
Starting
arrow
",CAPTION_ENDING_ARROW:"
Ending
arrow
",CAPTION_REACTION_ARROW_TYPE:"
Reaction
arrow
type
",CAPTION_ELECTRON_PUSHING_ARROW_TYPE:"
Arrow
type
",CAPTION_OPPOSITE_ARROW_SIDES:"
Opposite
arrow
sides
",CAPTION_SAME_ARROW_SIDES:"
Same
arrow
sides
",CAPTION_ELECTRON_PUSHING_ARROW_1:"
Single
electron
pushing
arrow
",CAPTION_ELECTRON_PUSHING_ARROW_1_ABBR:"
Single
",HINT_ELECTRON_PUSHING_ARROW_1:"
Single
electron
pushing
arrow
",CAPTION_ELECTRON_PUSHING_ARROW_2:"
Double
electron
pushing
arrow
",CAPTION_ELECTRON_PUSHING_ARROW_2_ABBR:"
Double
",HINT_ELECTRON_PUSHING_ARROW_2:"
Double
electron
pushing
arrow
",CAPTION_BOND_FORMING_ELECTRON_PUSHING_ARROW_1:"
Bond
forming
electron
pushing
arrow
",HINT_BOND_FORMING_ELECTRON_PUSHING_ARROW_1:"
Bond
forming
electron
pushing
arrow
",LEGEND_CAPTION:"
Legend
",LEGEND_ELEM_SYMBOL:"
Symbol
",LEGEND_ELEM_NAME:"
name
",LEGEND_ATOMIC_NUM:"
atomic
number
",LEGEND_ATOMIC_WEIGHT:"
atomic
weight
",CAPTION_2D:"
2
D
",CAPTION_3D:"
3
D
",CAPTION_AUTOSIZE:"
Autosize
",CAPTION_AUTOFIT:"
Autofit
",CAPTION_SHOWSIZEINFO:"
Show
size
info
",CAPTION_LABEL_SIZE:"
Size: ",CAPTION_BACKGROUND_COLOR:"
Background
color: ",CAPTION_WIDTH_HEIGHT:"
width: {
    0
}
,
height: {
    1
}
",PLACEHOLDER_WIDTH:"
width
",PLACEHOLDER_HEIGHT:"
height
",HINT_AUTOSIZE:"
Whether
graph
size
is
determined
by
object
automatically
",HINT_AUTOFIT:"
Whether
object
is
zoomed
to
fullfill
the
whole
graph
",S_VALUE_DEFAULT:"(Default)
"}),Kekule.Localization.addResource("
en
","
ErrorMsg
",{WIDGET_CLASS_NOT_FOUND:"
Widget

class not

found
",WIDGET_CAN_NOT_BIND_TO_ELEM:"
Widget
{
    0
}
can
not
be
binded
to
element < {1} > ",LOAD_CHEMDATA_FAILED:"
Failed
to
load
data
",FILE_API_NOT_SUPPORTED:"
File
operations
are
not
supported
by
your
current
web
browser.Please
update
it.
",DRAW_BRIDGE_NOT_SUPPORTED:"
It
seems
that
your
web
browser
is
not
modern
enough
to
support
the
drawing

function

.
Please
update
it.
",COMMAND_NOT_REVERSIBLE:"
Command
can
not
be
undone
",PAGE_INDEX_OUTOF_RANGE:"
Page
index
out
of
range
",FETCH_DATA_TIMEOUT:"
Time
out
to
fetch
data
",RENDER_TYPE_CHANGE_NOT_ALLOWED:"
It
is
not
allowed
to
change
render
type
",CAN_NOT_CREATE_EDITOR:"
Creating
editor
failed
",CAN_NOT_SET_COORD_OF_CLASS:"
Can
not
set
coordinate
of
instance
of
{
    0
}
.
",CAN_NOT_SET_DIMENSION_OF_CLASS:"
Can
not
set
dimension
of
instance
of
{
    0
}
.
",CAN_NOT_MERGE_CONNECTORS:"
Specified
connectors
can
not
be
merged.
",NOT_A_VALID_ATOM:"
Not
a
valid
atom
",INVALID_ATOM_SYMBOL:"
Invalid
atom
symbol
",INVALID_OR_EMPTY_IMAGE:"
Image
is
empty
or
invalidate
"}),Kekule.LOCAL_RES=!0,Kekule.Localization.setCurrModule("
objDefines
"),Kekule.OBJDEF_TEXTS={},Kekule.Localization.addResource("
en
","
OBJDEF_TEXTS
",{TITLE_PREFIX:"
TITLE_
",DESCRIPTION_PREFIX:"
DES_
",DES_ID:"
Unique
ID
for object.",Render:{GeneralConfigs:{TITLE_drawOpacity:"
Opacity
",DES_drawOpacity:"
Opacity(between
0 - 1
)
to
draw
objects
"},Render2DConfigs:{TITLE_generalConfigs:"
General
render
settings
",DES_generalConfigs:"
General
render
settings
",TITLE_moleculeDisplayConfigs:"
Molecule
display
settings
",DES_moleculeDisplayConfigs:"
Settings
about
molecule
display
styles
",TITLE_displayLabelConfigs:"
Display
label
settings
",DES_displayLabelConfigs:"
Settings
of
displayed
label in molecule / chem
object
",TITLE_textFontConfigs:"
Text
and
font
settings
",DES_textFontConfigs:"
Settings
about
text
and
font
of
display
",TITLE_lengthConfigs:"
Lengths
settings
",DES_lengthConfigs:"
Lengths
to
display
molecule / chem
object
",TITLE_colorConfigs:"
Color
settings
",DES_colorConfigs:"
Color
settings
to
display
molecule / chem
object
"},MoleculeDisplayConfigs:{TITLE_defMoleculeDisplayType:"
Default
molecule
display
mode
",DES_defMoleculeDisplayType:"
Default
display
type
of
molecule: in
skeletal
or in condensed
mode
",TITLE_defNodeDisplayMode:"
Default
atom
display
mode
",DES_defNodeDisplayMode:"
Default
mode
to
display
atom in molecule
",TITLE_defHydrogenDisplayLevel:"
Default
hydrogen
display
level
",DES_defHydrogenDisplayLevel:"
How
to
display
explicit
or
implicit
hydrogens
of
atom
",TITLE_defChargeMarkType:"
Default
charge
mark
type
",DES_defChargeMarkType:null,TITLE_partialChargeDecimalsLength:"
Decimal
length
of
partial
charge
",DES_partialChargeDecimalsLength:"
If
an
atom
has
a
partical
charge(e.g., +1.5), how
many
digits
after
decimal
point
should
be
displayed
"},DisplayLabelConfigs:{TITLE_enableIsotopeAlias:"
Enable
isotope
alias
",DES_enableIsotopeAlias:"
Whether
isotope
alias(e.g.D for 2
H
)
is
used
to
display
atom
label.
",TITLE_unsetElement:"
Unset
element
",DES_unsetElement:"
Label
for unset or
unknown
element
",TITLE_dummyAtom:"
Dummy
atom
",DES_dummyAtom:"
Label
for dummy atom
",TITLE_heteroAtom:"
Hetero
atom
",DES_heteroAtom:"
Label
for general hetero
atom
",TITLE_anyAtom:"
Any
atom
",DES_anyAtom:"
Label
for atom wildcard
",TITLE_variableAtom:"
Variable
atom
",DES_variableAtom:"
Label
for variable atom
or
atom
list
",TITLE_rgroup:"
RGroup
",DES_rgroup:"
Label
for RGroup",TITLE_isoListLeadingBracket:"
Atom
list
leading
bracket
",TITLE_isoListTailingBracket:"
Atom
list
tailing
bracket
",TITLE_isoListDelimiter:"
Atom
delimiter in list
",TITLE_isoListDisallowPrefix:"
Prefix
of
not - atom
list
"},TextFontConfigs:{TITLE_labelFontFamily:"
Label
font
",DES_labelFontFamily:"
Font
to
draw
general
label
",TITLE_atomFontFamily:"
Atom
font
",DES_atomFontFamily:"
Font
to
draw
atom
label
",TITLE_supFontSizeRatio:"
Superscript
font
size
ratio
",DES_supFontSizeRatio:"
Ratio
of
Superscript
text
size
to
normal
text
size
",TITLE_subFontSizeRatio:"
Subscript
font
size
ratio
",DES_subFontSizeRatio:"
Ratio
of
Subscript
text
size
to
normal
text
size
",TITLE_superscriptOverhang:"
Superscript
text
overhang
",DES_superscriptOverhang:null,TITLE_subscriptOversink:"
Subscript
text
oversink
",DES_subscriptOversink:null,TITLE_textCharDirection:"
Text
direction
",DES_textCharDirection:"
Default
text
direction
",TITLE_textHorizontalAlign:"
Horizontal
text
alignment
",DES_textHorizontalAlign:"
Default
horizontal
text
alignment
of
label
",TITLE_textVerticalAlign:"
Vertical
text
alignment
",DES_textVerticalAlign:"
Default
vertical
text
alignment
of
label
"},LengthConfigs:{TITLE_labelFontSize:"
Label
text
size
",DES_labelFontSize:"
Size
of
general
label
text
",TITLE_atomFontSize:"
Atom
text
size
",DES_atomFontSize:"
Size
of
atom
label
text
",TITLE_allenCenterAtomRadius:"
Allen
center
radius
",DES_allenCenterAtomRadius:"
Radius
to
draw
dot
on
center
carbon
atom in allen
",TITLE_chargeMarkFontSize:"
Charge
mark
size
",DES_chargeMarkFontSize:"
Font
size
of
charge
mark
",TITLE_chargeMarkMargin:"
Charge
mark
margin
",DES_chargeMarkMargin:"
Margin
between
charge
mark
and
atom
",TITLE_defBondLength:"
Default
bond
length
",DES_defBondLength:"
Default
length
of
a
chemical
bond
",TITLE_bondLineWidth:"
Bond
line
width
",DES_bondLineWidth:"
Line
width
to
draw
a
chemical
bond
",TITLE_hashSpacing:"
Hash
spacing
",DES_hashSpacing:"
Spacing
between
small
lines in hash
bond
",TITLE_multipleBondSpacingRatio:"
Multiple
bond
spacing
ratio
",DES_multipleBondSpacingRatio:"
Ratio
of
spacing
between
two
lines in double
or
triple
bond
to
bond
length.
",TITLE_multipleBondMaxAbsSpacing:"
Max
multiple
bond
spacing
",DES_multipleBondMaxAbsSpacing:"
Maximum
spacing
between
multiple
bond
",TITLE_bondArrowLength:"
Bond
arrow
length
",DES_bondArrowLength:"
The
length
of
end
triangle in arrow
bond
",TITLE_bondArrowWidth:"
Bond
arrow
width
",DES_bondArrowWidth:"
The
width
of
end
triangle in arrow
bond
",TITLE_bondWedgeWidth:"
Bond
wedge
max
width
",DES_bondWedgeWidth:"
The
width
of
ending
point in wedge
bond
",TITLE_bondWedgeHashMinWidth:"
Bond
wedge
min
width
",DES_bondWedgeHashMinWidth:"
The
width
of
starting
point in wedge
bond
",TITLE_bondWavyRadius:"
Bond
wavy
radius
",DES_bondWavyRadius:"
Radius
to
draw
arc
of
wavy
bond
",TITLE_glyphStrokeWidth:"
Glyph
stroke
width
",DES_glyphStrokeWidth:"
The
default
width
of
glyph
strokes
",TITLE_autofitContextPadding:"
Autofit
context
padding
",DES_autofitContextPadding:"
Padding
of
autofit
widget
edge
and
drawn
object
"},ColorConfigs:{TITLE_useAtomSpecifiedColor:"
Use
element
specified
color
",DES_useAtomSpecifiedColor:"
Whether
use
different
color
on
different
element
",TITLE_labelColor:"
Label
color
",DES_labelColor:"
Default
color
of
general
label
",TITLE_atomColor:"
Atom
color
",DES_atomColor:"
Default
color
of
atom
label
",TITLE_bondColor:"
Bond
color
",DES_bondColor:"
Default
color
of
bond
",TITLE_glyphStrokeColor:"
Glyph
stroke
color
",DES_glyphStrokeColor:"
Default
stroke
color
of
glyph
",TITLE_glyphFillColor:"
Glyph
fill
color
",DES_glyphFillColor:"
Default
fill
color
of
glyph
"},Render3DConfigs:{TITLE_generalConfigs:"
General
render
settings
",DES_generalConfigs:"
General
render
settings
",TITLE_moleculeDisplayConfigs:"
Molecule
display
settings
",DES_moleculeDisplayConfigs:"
Settings
about
molecule
display
styles
",TITLE_environmentConfigs:"
3
D
environment
settings
",DES_environmentConfigs:"
Settings
of
3
D
environment
",TITLE_modelConfigs:"
3
D
model
settings
",DES_modelConfigs:"
Settings
to
render
a
3
D
molecule
model
",TITLE_lengthConfigs:"
Lengths
settings
",DES_lengthConfigs:"
Lengths
to
display
molecule
"},Render3DEnvironmentConfigs:{TITLE_graphicQuality:"
Graphic
quality
",DES_graphicQuality:"
Quality
of
3
D
graphic
"},Molecule3DDisplayConfigs:{TITLE_defMoleculeDisplayType:"
Default
molecule
display
type
",DES_defMoleculeDisplayType:"
Draw
molecule in wire, stick, ball
stick
or
space
fill
mode
",TITLE_defBondSpliceMode:"
Bond
splice
mode
",DES_defBondSpliceMode:"
How
to
draw
a
splice
mode
between
two
atoms
with different color
",TITLE_defDisplayMultipleBond:"
Display
multiple
bond
",DES_defDisplayMultipleBond:"
Whether
draw
multiple
bond
lines
for double or
triple
bond
",TITLE_defBondColor:"
Default
bond
color
",DES_defBondColor:"
Default
bond
color
",TITLE_defAtomColor:"
Default
atom
color
",DES_defAtomColor:"
Default
atom
color
",TITLE_useAtomSpecifiedColor:"
Use
element
specified
color
",DES_useAtomSpecifiedColor:"
Whether
use
different
color
on
different
element
"},Model3DConfigs:{TITLE_hideHydrogens:"
Hide
hydrogens
",DES_hideHydrogens:"
Whether
hide
all
hydrogen
atoms in 3
D
model
",TITLE_useVdWRadius:"
Use
von
dar
Waals
radius
",DES_useVdWRadius:"
Whether
use
atom
's von dar Waals radius to draw 3D model",TITLE_multiConnectorRadiusRatio:"Multi-bond radius ratio",DES_multiConnectorRadiusRatio:"If use multi-cylinder for multibond, this value is the radius ratio between multi and single bond",TITLE_multiConnectorMarginRatio:"Multi-bond margin ratio",DES_multiConnectorMarginRatio:"If multi-cylinder is used for multibond, ratio of margin between cylinders and radius of cylinder"},Length3DConfigs:{TITLE_fixedNodeRadius:"Fixed atom radius",DES_fixedNodeRadius:"If vdW radius of atom is not used, this value will be used for all atom'
s
radius
",TITLE_connectorRadius:"
Bond
radius
",DES_connectorRadius:"
Bond
will
be
draw
based
on
this
radius in stick
or
ball_stick
mode
",TITLE_connectorLineWidth:"
Bond
line
width
",DES_connectorLineWidth:"
Bond
will
be
draw
on
this
width in wire
mode
"}},Widget:{BaseWidget:{TITLE_settingFacade:"
General
settings
",DES_settingFacade:"
General
settings
"}},ChemWidget:{ChemObjDisplayer:{TITLE_enableLoadNewFile:"
Enable
load
data
",DES_enableLoadNewFile:"
Whether
loading
new data
is
enabled
"},ChemObjDisplayerConfigs:{TITLE_ioConfigs:"
I / O
settings
",DES_ioConfigs:"
Settings
of
input / output
"},ChemObjDisplayerIOConfigs:{TITLE_canonicalizeBeforeSave:"
Canonicalize
before
save
",DES_canonicalizeBeforeSave:"
Whether
canonicalize
molecule
before
saving
it
"},Viewer:{TITLE_enableDirectInteraction:"
Enable
direct
interaction
",DES_enableDirectInteraction:"
Whether
interaction
with chem object in viewer
is
enabled
",TITLE_enableTouchInteraction:"
Enable
touch
interaction
",DES_enableTouchInteraction:"
Whether
touch
interaction
is
enabled
",TITLE_enableToolbar:"
Enable
toolbar
",DES_enableToolbar:"
Whether
toolbar
of
viewer
is
displayed
",TITLE_toolbarPos:"
Toolbar
Position
",DES_toolbarPos:"
Position
of
toolbar in viewer
",TITLE_toolbarMarginHorizontal:"
Toolbar
horizontal
margin
",DES_toolbarMarginHorizontal:"
Horizontal
margin
of
toolbar
to
viewer
edge
",TITLE_toolbarMarginVertical:"
Toolbar
vertical
margin
",DES_toolbarMarginVertical:"
Vertical
margin
of
toolbar
to
viewer
edge
",TITLE_enableEdit:"
Enable
editing
",DES_enableEdit:"
Whether
edit
chem
object in viewer
is
enabled
",TITLE_modalEdit:"
Modal
editing
",DES_modalEdit:"
Using
modal
dialog
or
popup
dialog
to
edit
chem
object
"}},Editor:{BaseEditorConfigs:{TITLE_uiMarkerConfigs:"
UI
marker
settings
",DES_uiMarkerConfigs:"
Settings
of
interaction
marker
",TITLE_interactionConfigs:"
Interaction
settings
",DES_interactionConfigs:"
Settings
about
interaction
of
editor
",TITLE_structureConfigs:"
Structure
settings
",DES_structureConfigs:"
Settings
about
creating
molecule
structure
"},ChemSpaceEditorConfigs:{TITLE_chemSpaceConfigs:"
Chem
space
settings
",DES_chemSpaceConfigs:"
Settings
about
chem
space / chem
document
",TITLE_styleSetterConfigs:"
Style
setter
settings
",DES_styleSetterConfigs:"
Settings
of
style
toolbar
of
editor
"},InteractionConfigs:{TITLE_enableTrackOnNearest:"
Enale
track
on
nearest
",DES_enableTrackOnNearest:"
If
setting
to
true, hot
track
or
selection
will
focus
on
nearest
object
to
current
position, otherwise, the
topmost
object
around
will
be
focused.
",TITLE_enableHotTrack:"
Enable
hot
track
",DES_enableHotTrack:"
Whether
highlighting
objects
under
mouse
position
",TITLE_autoSelectNewlyInsertedObjects:"
Auto
select
new inserted
objects
",DES_autoSelectNewlyInsertedObjects:"
Whether
select
objects
newly
inserted
or
modified in editor
automatically
",TITLE_objBoundTrackMinInflation:"
Object
bound
minimal
inflation(
default)
",DES_objBoundTrackMinInflation:"
The
default
minimal
inflation
of
the
bound
of
object
to
make
it
easier
to
select
",TITLE_objBoundTrackMinInflationMouse:"
Object
bound
minimal
inflation(mouse)
",DES_objBoundTrackMinInflationMouse:"
The
minimal
inflation
of
the
bound
of
object
to
make
it
easier
to
select
when
using
mouse
as
pointer
device
",TITLE_objBoundTrackMinInflationTouch:"
Object
bound
minimal
inflation(touch)
",DES_objBoundTrackMinInflationTouch:"
The
minimal
inflation
of
the
bound
of
object
to
make
it
easier
to
select
when
touching
on
screen
",TITLE_objBoundTrackMinInflationPen:"
Object
bound
minimal
inflation(pen)
",DES_objBoundTrackMinInflationPen:"
The
minimal
inflation
of
the
bound
of
object
to
make
it
easier
to
select
when
using
pen
as
pointer
device
",TITLE_objBoundTrackInflationRatio:"
Object
bound
inflation
ratio(
default)
",DES_objBoundTrackInflationRatio:"
The
default
inflation
ratio(compaing
with the default
bond
length
)
of
the
bound
of
object
to
make
it
easier
to
select
",TITLE_objBoundTrackInflationRatioMouse:"
Object
bound
inflation
ratio(mouse)
",DES_objBoundTrackInflationRatioMouse:"
The
inflation
ratio(compaing
with the default
bond
length
)
of
the
bound
of
object
to
make
it
easier
to
select
when
using
mouse
as
pointer
device
",TITLE_objBoundTrackInflationRatioPen:"
Object
bound
inflation
ratio(pen)
",DES_objBoundTrackInflationRatioPen:"
The
inflation
ratio(compaing
with the default
bond
length
)
of
the
bound
of
object
to
make
it
easier
to
select
when
using
pen
as
pointer
device
",TITLE_objBoundTrackInflationRatioTouch:"
Object
bound
inflation
ratio(touch)
",DES_objBoundTrackInflationRatioTouch:"
The
inflation
ratio(compaing
with the default
bond
length
)
of
the
bound
of
object
to
make
it
easier
to
select
when
touching
on
screen
",TITLE_selectionMarkerInflation:"
Selection
marker
inflation
",DES_selectionMarkerInflation:"
Inflation
of
object
selection
mark, makes
it
easier
to
see
the
containing
objects
",TITLE_selectionMarkerEdgeInflation:"
Selection
edge
inflation
",DES_selectionMarkerEdgeInflation:"
Inflation
when
judging
if a coord
is
on
selection
mark
edge
",TITLE_constrainedRotateStep:"
Constrained
rotation
step
",DES_constrainedRotateStep:"
Constrained
rotation
step,
in
arc
",TITLE_rotationLocationPointDistanceThreshold:"
Rotation
starting
min
distance
",DES_rotationLocationPointDistanceThreshold:"
Rotation
will
occur
only
when
mouse
point
distance(from
rotation
center
)
larger
than
this
value
",TITLE_directedMoveDistanceThreshold:"
Direct
move
min
distance
",DES_directedMoveDistanceThreshold:"
Direct
moving
will
only
be
done
if moved distance
large
than
this
value
",TITLE_enablePartialAreaSelecting:"
Enable
partial
selecting
",DES_enablePartialAreaSelecting:"
If
this
value
is
true, when
drag
a
selecting
rubber
band, object
partly in the
band
will
be
totally
selected
",TITLE_selectingBrushWidth:"
Brush
selecting
Width
",DES_selectingBrushWidth:"
Width
of
brush in brush
selecting
",TITLE_enableOffSelectionManipulation:"
Enable
off - selection
manipulation
",DES_enableOffSelectionManipulation:"
When
setting
to
true, you
can
still
move, resize
or
rotate
selected
objects
by
holding
mouse
or
touch
outside
selection
for a while",TITLE_offSelectionManipulationActivatingTimeThreshold:"Off - selection
manipulation
hold
time
",DES_offSelectionManipulationActivatingTimeThreshold:"
The
minimal
time( in ms
)
need
for holding mouse
or
touch
to
invoke
off - selection
manipulation
",TITLE_selectionMarkerDefPulseDuration:"
Default
selection
mark
pulse
duration
",DES_selectionMarkerDefPulseDuration:"
The
duration( in ms
)
of
selection
mark
pulse
when
the
selection
is
been
emphasised
",TITLE_selectionMarkerDefPulseCount:"
Default
selection
mark
pulse
count
",DES_selectionMarkerDefPulseCount:"
The
pulse
count
when
the
selection
is
been
emphasised
",TITLE_rotationRegionInflation:"
Rotation
region
inflation
",DES_rotationRegionInflation:"
User
can
rotate
the
selected
objects
by
pressing
and
move
mouse in this
inflated
region
outside
selection
",TITLE_enableMergePreview:"
Enable
merge
preview
",DES_enableMergePreview:"
Whether
a
preview
operation
is
used
rather
then
the
actual
merge
operation
when
merge
two
objects in editor
during
manipulation.Turn
on
this
option
may
improve
the
performance
of
object
manipulation.
",TITLE_enableGestureManipulation:"
Enable
gesture
manipulation
",DES_enableGestureManipulation:"
Whether
user
can
use
touch
gestures(e.g.pinch)
to
scale
or
rotate
selected
objects in editor
",TITLE_enableGestureZoomOnEditor:"
Enable
gesture
zoom
on
editor
",DES_enableGestureZoomOnEditor:"
Whether
user
can
use
pinch
gesture
to
zoom in or
out
the
editor
when
there
is
no
selection
existed
",TITLE_trackSimplifierDistanceThreshold:"
Track - input
curve
simplification
threshold
",DES_trackSimplifierDistanceThreshold:"
Distance
threshold in simplifying
curve
drawn
by
track - input
tool
",TITLE_trackSimplifierIgnoreSegmentThreshold:"
Track - input
ignored
segment
threshold
",DES_trackSimplifierIgnoreSegmentThreshold:"
Segment
length
less
than
this
threshold
drawn
by
track - input
will
be
ignored in parsing
",TITLE_trackMergeDistanceThreshold:"
Track - input
merge
distance
threshold
",DES_trackMergeDistanceThreshold:"
If
a
joint
or
end
point
of
line
segment
drawn
by
track - inpu
tool
is
close
to
another
line
segment(less
than
this
threshold
),
it
will
be
regarded
on
that
line.
",TITLE_trackOptimizationAngleConstraint:"
Track - input
optimization
line
cross
angle
constraint
",DES_trackOptimizationAngleConstraint:null,TITLE_trackOptimizationDistanceConstraints:"
Track - input
optimization
line
length
constraint
",DES_trackOptimizationDistanceConstraints:null,TITLE_trackOptimizationPrimaryDistanceConstraint:"
Track - input
optimization
primary
line
length
",DES_trackOptimizationPrimaryDistanceConstraint:null,TITLE_autoAdjustZoomLevelOnTrackTouching:null,DES_autoAdjustZoomLevelOnTrackTouching:null,TITLE_editorInitialZoom:"
Editor
initial
zoom
level
",DES_editorInitialZoom:"
The
initial
zoom
level
of
editor
",TITLE_atomSetterFontSize:"
Atom
setter
font
size
",DES_atomSetterFontSize:"
Font
size
of
atom
setter
",TITLE_allowUnknownAtomSymbol:"
Allow
unknown
atom
symbol
",DES_allowUnknownAtomSymbol:"
Allow
inputting
unknown
symbol
and
handle
it
as
pseudo
atom in atom
setter
",TITLE_clonedObjectScreenOffset:"
Copied
object
coord
offset
",DES_clonedObjectScreenOffset:"
The
distance
between
copied
objects
and
origin
objects
when
doing
paste
selection
action in editor
"},UiMarkerConfigs:{TITLE_hotTrackerColor:"
Hot
track
mark
color
",DES_hotTrackerColor:"
Color
of
hot
track
mark
",TITLE_hotTrackerOpacity:"
Hot
track
mark
opacity
",DES_hotTrackerOpacity:"
Opacity
of
hot
track
marker, value
from
0
to
1
",TITLE_selectionMarkerStrokeColor:"
Selection
mark
stroke
color
",DES_selectionMarkerStrokeColor:"
Stroke
color
of
selection
mark
",TITLE_selectionMarkerStrokeWidth:"
Selection
mark
stroke
width
",DES_selectionMarkerStrokeWidth:"
Width
of
selection
mark
stroke
",TITLE_selectionMarkerFillColor:"
Selection
mark
fill
color
",DES_selectionMarkerFillColor:"
Fill
color
of
selection
mark.
",TITLE_selectionMarkerOpacity:"
Selection
mark
opacity
",DES_selectionMarkerOpacity:"
Opacity
of
selection
mark, value
from
0
to
1
",TITLE_selectionMarkerEmphasisOpacity:"
Emphasised
selection
mark
opacity
",DES_selectionMarkerEmphasisOpacity:"
Opacity
of
emphasised
selection
marker, value
from
0
to
1
",TITLE_selectingMarkerStrokeColor:"
Selecting
mark
stroke
color
",DES_selectingMarkerStrokeColor:"
Stroke
color
of
selecting
rubber
band
mark
",TITLE_selectingMarkerStrokeWidth:"
Selecting
mark
stroke
width
",DES_selectingMarkerStrokeWidth:"
Stroke
width
of
selection
rubber
band
",TITLE_selectingMarkerStrokeDash:"
Selecting
mark
dash
style
",DES_selectingMarkerStrokeDash:"
Dash
style
of
selecting
rubber
band
",TITLE_selectingMarkerFillColor:"
Selecting
mark
fill
color
",DES_selectingMarkerFillColor:"
Fill
color
of
selecting
mark.Usually
this
value
should
be
left
blank(not
filled
)
",TITLE_selectingMarkerOpacity:"
Selecting
mark
opacity
",DES_selectingMarkerOpacity:"
Opacity
of
selecting
mark, value
from
0
to
1
",TITLE_selectingBrushMarkerStrokeColor:"
Brush
selecting
mark
stroke
color
",DES_selectingBrushMarkerStrokeColor:"
Stroke
color
of
brush
selecting
mark
",TITLE_selectingBrushMarkerStrokeDash:"
Brush
selecting
mark
dash
style
",DES_selectingBrushMarkerStrokeDash:"
Dash
style
of
brush
selecting
track
",TITLE_selectingBrushMarkerStrokeLineCap:"
Brushing
selecting
mark
line - cap
style
",DES_selectingBrushMarkerStrokeLineCap:"
Line - cap
style
of
both
ends
of
brush
selecting
track
",TITLE_selectingBrushMarkerStrokeLineJoin:"
Brushing
selecting
mark
join
point
style
",DES_selectingBrushMarkerStrokeLineJoin:"
Join
style
of
brush
selection
track
segments
",TITLE_selectingBrushMarkerOpacity:"
Brush
selecting
mark
opacity
",DES_selectingBrushMarkerOpacity:"
Opacity
of
brush
selecting
mark, value
from
0
to
1
",TITLE_trackMarkerStrokeColor:"
Track - input
mark
stroke
color
",DES_trackMarkerStrokeColor:"
Stroke
color
of
track
mark
when
using
track - input
tool
to
draw
a
structure
",TITLE_trackMarkerStrokeWidth:"
Track - input
mark
stroke
width
",DES_trackMarkerStrokeWidth:"
Stroke
width
of
track
mark
when
using
track - input
tool
to
draw
a
structure
",TITLE_trackMarkerStrokeDash:"
Track - input
mark
dash
style
",DES_trackMarkerStrokeDash:"
Dash
style
of
track
mark
when
using
track - input
tool
to
draw
a
structure
",TITLE_trackMarkerOpacity:"
Track - input
mark
opacity
",DES_trackMarkerOpacity:"
Opacity
of
track
mark
when
using
track - input
tool
to
draw
a
structure
",TITLE_flexStructureAssocMarkerColor:"
Flex
structure
association
mark
color
",DES_flexStructureAssocMarkerColor:"
Color
of
mark
showing
atom
count
of
flex
ring / chain
tool
",TITLE_flexStructureAssocMarkerOpacity:"
Flex
structure
association
mark
opacity
",DES_flexStructureAssocMarkerOpacity:"
Opacity
of
mark
showing
atom
count
of
flex
ring / chain
tool
",TITLE_flexStructureAssocMarkerFontSize:"
Flex
structure
association
mark
font
size
",DES_flexStructureAssocMarkerFontSize:"
Font
size
of
mark
showing
atom
count
of
flex
ring / chain
tool
",TITLE_flexStructureAssocMarkerFontFamily:"
Flex
structure
association
mark
font
family
",DES_flexStructureAssocMarkerFontFamily:"
Font
family
of
mark
showing
atom
count
of
flex
ring / chain
tool
"},StructureConfigs:{TITLE_defBondType:"
Default
bond
type
",DES_defBondType:"
Default
type
of
bond
",TITLE_defBondOrder:"
Default
bond
order
",DES_defBondOrder:"
Default
bond
order
",TITLE_defBondLength:"
Default
bond
length
",DES_defBondLength:"
Default
bond
length
",TITLE_defIsotopeId:"
Default
isotope
",DES_defIsotopeId:"
Default
isotope
when
adding
a
new atom
",TITLE_maxFlexChainAtomCount:"
Maximum
flex
chain
atom
count
",DES_maxFlexChainAtomCount:"
Maximum
atom
count
when
inputting
with flex chain
tool
",TITLE_minFlexChainAtomCount:"
Minimal
flex
chain
atom
count
",DES_minFlexChainAtomCount:"
Minimal
atom
count
when
inputting
with flex chain
tool
",TITLE_maxFlexRingAtomCount:"
Maximum
flex
ring
atom
count
",DES_maxFlexRingAtomCount:"
Maximum
atom
count
when
inputting
with flex ring
tool
",TITLE_minFlexRingAtomCount:"
Minimal
flex
ring
atom
count
",DES_minFlexRingAtomCount:"
Minimal
atom
count
when
inputting
with flex ring
tool
",TITLE_enabledNonAtomNodeTypes:"
Available
non - atom
structure
node
types
",DES_enabledNonAtomNodeTypes:"
Non - atom
structure
node
types
available in editor
",TITLE_enabledBondForms:"
Available
bond
forms
",DES_enabledBondForms:"
Bond
forms
available in editor
"},ChemSpaceConfigs:{TITLE_defScreenSize2D:"
Default
2
D
screen
size
",TITLE_defScreenSize3D:"
Default
3
D
screen
size
",TITLE_defPadding:"
Default
padding
",DES_defPadding:"
Padding
on
top
when
adding
an
unpositioned
object
to
container
chem
space
"},BaseEditor:{TITLE_enableCreateNewDoc:"
Enable
create
new document
",DES_enableCreateNewDoc:"
Whether
creating
a
new document
is
allowed
",TITLE_initOnNewDoc:"
Starts
with a new document
",DES_initOnNewDoc:"
Whether
create
a
new document
automatically
when
composer
is
initialized
",TITLE_enableOperHistory:"
Enable
undo
",DES_enableOperHistory:"
Whether
undo / redo
is
enabled
"},Composer:{TITLE_enableStyleToolbar:"
Enable
style
toolbar
",DES_enableStyleToolbar:"
Whether
display
style
toolbar
to
set
color, font
and
size
of
objects
",TITLE_allowCreateNewChild:"
Enable
create
new child
object
",DES_allowCreateNewChild:"
Whether
new direct
child
of
document
can
be
created
"}}});