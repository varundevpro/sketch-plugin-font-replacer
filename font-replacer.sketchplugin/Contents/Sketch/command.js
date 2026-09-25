var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/command.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/command.js":
/*!************************!*\
  !*** ./src/command.js ***!
  \************************/
/*! exports provided: default, onShutdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onShutdown", function() { return onShutdown; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sketch/ui */ "sketch/ui");
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sketch_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sketch_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sketch/async */ "sketch/async");
/* harmony import */ var sketch_async__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sketch_async__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts */ "./src/fonts.js");




var PANEL_KEY = 'font-replacer-native.panel';
var WIDTH = 640;
var HEIGHT = 480;
var ROW_HEIGHT = 50;
var HEADING_Y_OFFSET = -4;
function label(value, frame) {
  var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 12;
  var secondary = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var field = NSTextField.alloc().initWithFrame(frame);
  field.setStringValue(value);
  field.setEditable(false);
  field.setSelectable(false);
  field.setBezeled(false);
  field.setDrawsBackground(false);
  field.setFont(NSFont.systemFontOfSize(size));
  field.setTextColor(secondary ? NSColor.secondaryLabelColor() : NSColor.labelColor());
  field.setLineBreakMode(NSLineBreakByTruncatingTail);
  return field;
}
function button(value, frame, tooltip) {
  var control = NSButton.alloc().initWithFrame(frame);
  control.setTitle(value);
  control.setBezelStyle(NSRoundedBezelStyle);
  if (tooltip) control.setToolTip(tooltip);
  return control;
}
function popup(frame, placeholder, values, selected, accessibilityLabel) {
  var control = NSPopUpButton.alloc().initWithFrame_pullsDown(frame, false);
  control.addItemWithTitle(placeholder);
  values.forEach(function (value) {
    return control.addItemWithTitle(value);
  });
  control.selectItemAtIndex(selected ? Math.max(0, values.indexOf(selected) + 1) : 0);
  control.setAccessibilityLabel(accessibilityLabel);
  return control;
}
function checkbox(value, frame, checked, accessibilityLabel) {
  var control = NSButton.alloc().initWithFrame(frame);
  control.setButtonType(NSSwitchButton);
  control.setTitle(value);
  control.setState(checked ? 1 : 0);
  control.setAccessibilityLabel(accessibilityLabel);
  return control;
}
function key(font) {
  return font.family + '::' + font.style;
}
/* harmony default export */ __webpack_exports__["default"] = (function () {
  framework('AppKit');
  var dictionary = NSThread.mainThread().threadDictionary();
  var existing = dictionary.objectForKey(PANEL_KEY);
  if (existing) {
    existing.makeKeyAndOrderFront(null);
    return;
  }
  var panel = NSPanel.alloc().initWithContentRect_styleMask_backing_defer(NSMakeRect(0, 0, WIDTH, HEIGHT), NSTitledWindowMask | NSClosableWindowMask, NSBackingStoreBuffered, false);
  panel.setTitle('Font Changer and Replacer');
  panel.setFloatingPanel(true);
  panel.setBecomesKeyOnlyIfNeeded(false);
  panel.setReleasedWhenClosed(false);
  panel.setBackgroundColor(NSColor.windowBackgroundColor());
  panel.center();
  panel.setFrameAutosaveName(PANEL_KEY);
  var content = panel.contentView();
  var allFonts = Object(_fonts__WEBPACK_IMPORTED_MODULE_3__["availableFonts"])();
  var byFamily = {};
  allFonts.forEach(function (font) {
    if (!byFamily[font.family]) byFamily[font.family] = [];
    byFamily[font.family].push(font);
  });
  var families = Object.keys(byFamily).sort(function (a, b) {
    return a.localeCompare(b);
  });
  var state = {
    scope: 'selection',
    parsed: [],
    selected: {},
    replacements: {},
    emptyMessage: 'No fonts found in this scope.',
    rowControls: [],
    rowViews: [],
    rowChecks: [],
    stylePopups: []
  };
  var heading = label('CURRENT FONTS (0)', NSMakeRect(46, HEADING_Y_OFFSET, 240, 23), 15);
  heading.setFont(NSFont.systemFontOfSize_weight(12, NSFontWeightBold));
  var replaceHeading = label('REPLACE WITH', NSMakeRect(292, HEADING_Y_OFFSET, 280, 23), 15);
  replaceHeading.setFont(NSFont.systemFontOfSize_weight(12, NSFontWeightBold));
  var status = label('', NSMakeRect(20, 25, 480, 20), 12, true);
  status.setAccessibilityLabel('Font replacer status');
  var tabView = NSTabView.alloc().initWithFrame(NSMakeRect(16, 64, 608, 392));
  var scopes = ['selection', 'page', 'document'];
  var tabLabels = {
    selection: "\u2002Selection\u2002",
    page: "\u2002\u2002\u2002Page\u2002\u2002\u2002",
    document: "\u2009Document\u2009"
  };
  scopes.forEach(function (scope) {
    var item = NSTabViewItem.alloc().initWithIdentifier(scope);
    item.setLabel(tabLabels[scope]);
    item.setView(NSView.alloc().initWithFrame(NSMakeRect(0, 0, 600, 356)));
    tabView.addTabViewItem(item);
  });
  tabView.selectTabViewItemAtIndex(0);
  tabView.setAccessibilityLabel('Font search scope');
  var scroll = NSScrollView.alloc().initWithFrame(NSMakeRect(6, 6, 584, 280));
  scroll.setHasVerticalScroller(true);
  scroll.setAutohidesScrollers(true);
  var list = NSView.alloc().initWithFrame(NSMakeRect(0, 0, 574, 280));
  scroll.setDocumentView(list);
  content.addSubview(tabView);
  content.addSubview(status);
  var setStatus = function setStatus(value) {
    return status.setStringValue(value);
  };
  var controls = [];
  var selectAll = checkbox('', NSMakeRect(17, 0, 22, 22), false, 'Select all current fonts');
  controls.push(selectAll);
  function updateSelectAll() {
    var total = state.parsed.length;
    var chosen = state.parsed.filter(function (font) {
      return state.selected[key(font)];
    }).length;
    selectAll.setAllowsMixedState(true);
    selectAll.setState(chosen && chosen < total ? -1 : total && chosen === total ? 1 : 0);
    changeButton.setEnabled(chosen > 0);
  }
  function toggleSelectAll() {
    var checked = !state.parsed.every(function (font) {
      return state.selected[key(font)];
    });
    state.parsed.forEach(function (font, index) {
      state.selected[key(font)] = checked;
      state.rowChecks[index].setState(checked ? 1 : 0);
    });
    updateSelectAll();
  }
  function selectRow(sender) {
    var font = state.parsed[Number(sender.tag())];
    if (!font) return;
    state.selected[key(font)] = Number(sender.state()) === 1;
    updateSelectAll();
  }
  function selectFamily(sender) {
    var index = Number(sender.tag());
    var font = state.parsed[index];
    var stylePopup = state.stylePopups[index];
    if (!font || !stylePopup) return;
    var family = String(sender.titleOfSelectedItem());
    var styles = byFamily[family] || [];
    state.replacements[key(font)] = styles.length ? {
      family: family,
      style: '',
      postscript: ''
    } : null;
    stylePopup.removeAllItems();
    stylePopup.addItemWithTitle('Style…');
    styles.forEach(function (item) {
      return stylePopup.addItemWithTitle(item.style);
    });
    stylePopup.selectItemAtIndex(0);
    stylePopup.setEnabled(styles.length > 0);
  }
  function selectStyle(sender) {
    var font = state.parsed[Number(sender.tag())];
    if (!font) return;
    var current = state.replacements[key(font)];
    if (!current) return;
    var styles = byFamily[current.family] || [];
    var chosen = styles[Number(sender.indexOfSelectedItem()) - 1];
    state.replacements[key(font)] = chosen || {
      family: current.family,
      style: '',
      postscript: ''
    };
  }
  function clearRows() {
    state.rowControls.forEach(function (control) {
      return control.setTarget(null);
    });
    state.rowViews.forEach(function (view) {
      return view.removeFromSuperview();
    });
    state.rowControls = [];
    state.rowViews = [];
    state.rowChecks = [];
    state.stylePopups = [];
  }
  function renderRows() {
    var resetScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    clearRows();
    heading.setStringValue('CURRENT FONTS (' + state.parsed.length + ')');
    updateSelectAll();
    var clip = scroll.contentView();
    var visibleHeight = clip.bounds().size.height;
    var height = Math.max(Math.ceil(visibleHeight), state.parsed.length * ROW_HEIGHT);
    list.setFrame(NSMakeRect(0, 0, 574, height));
    if (!state.parsed.length) {
      var empty = label(state.emptyMessage, NSMakeRect(16, height - 36, 535, 20), 12, true);
      list.addSubview(empty);
      state.rowViews.push(empty);
    } else state.parsed.forEach(function (font, index) {
      var fontKey = key(font);
      var y = height - (index + 1) * ROW_HEIGHT + 9;
      var replacement = state.replacements[fontKey] || null;
      var selected = Boolean(state.selected[fontKey]);
      var rowCheck = checkbox('', NSMakeRect(10, y + 5, 24, 22), selected, 'Select ' + font.family + ' ' + font.style);
      var familyLabel = label(font.family, NSMakeRect(40, y + 17, 235, 18), 12);
      var styleLabel = label(font.style, NSMakeRect(40, y, 235, 17), 11, true);
      var familyPopup = popup(NSMakeRect(286, y + 4, 166, 28), 'Family…', families, replacement && replacement.family, 'Replacement family for ' + font.family + ' ' + font.style);
      var styles = replacement && replacement.family ? byFamily[replacement.family] || [] : [];
      var styleNames = styles.map(function (item) {
        return item.style;
      });
      var stylePopup = popup(NSMakeRect(457, y + 4, 105, 28), 'Style…', styleNames, replacement && replacement.style, 'Replacement style for ' + font.family + ' ' + font.style);
      stylePopup.setEnabled(Boolean(styles.length));
      rowCheck.setTag(index);
      rowCheck.setTarget(delegate);
      rowCheck.setAction('fontRowSelected:');
      familyPopup.setTag(index);
      familyPopup.setTarget(delegate);
      familyPopup.setAction('fontFamilySelected:');
      stylePopup.setTag(index);
      stylePopup.setTarget(delegate);
      stylePopup.setAction('fontStyleSelected:');
      var row = [rowCheck, familyLabel, styleLabel, familyPopup, stylePopup];
      row.forEach(function (view) {
        list.addSubview(view);
        state.rowViews.push(view);
      });
      state.rowControls.push(rowCheck, familyPopup, stylePopup);
      state.rowChecks.push(rowCheck);
      state.stylePopups.push(stylePopup);
    });
    if (resetScroll) {
      clip.scrollToPoint(NSMakePoint(0, Math.max(0, height - visibleHeight)));
      scroll.reflectScrolledClipView(clip);
    }
  }
  var parse = function parse() {
    var resetScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var document = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
    var oldSelected = state.selected;
    var oldReplacements = state.replacements;
    state.selected = {};
    state.replacements = {};
    state.parsed = [];
    if (!document) {
      state.emptyMessage = 'Open a document first.';
      renderRows(resetScroll);
      setStatus('');
      return;
    }
    try {
      state.parsed = Object(_fonts__WEBPACK_IMPORTED_MODULE_3__["parseFonts"])(document, state.scope, allFonts);
      state.parsed.forEach(function (font) {
        var fontKey = key(font);
        if (oldSelected[fontKey] !== undefined) {
          state.selected[fontKey] = oldSelected[fontKey];
        }
        if (oldReplacements[fontKey] !== undefined) {
          state.replacements[fontKey] = oldReplacements[fontKey];
        }
      });
      state.emptyMessage = 'No fonts found in this scope.';
      renderRows(resetScroll);
      setStatus('');
    } catch (error) {
      state.emptyMessage = 'Could not scan fonts.';
      renderRows(resetScroll);
      setStatus('Could not scan fonts: ' + error.message);
    }
  };
  var activateTab = function activateTab(item) {
    state.scope = String(item.identifier());
    var view = item.view();
    var bounds = view.bounds();
    var headerY = bounds.size.height - 36;
    selectAll.setFrame(NSMakeRect(17, headerY, 22, 22));
    heading.setFrame(NSMakeRect(46, headerY + HEADING_Y_OFFSET, 240, 23));
    replaceHeading.setFrame(NSMakeRect(292, headerY + HEADING_Y_OFFSET, 280, 23));
    scroll.setFrame(NSMakeRect(6, 6, bounds.size.width - 12, bounds.size.height - 46));
    view.addSubview(selectAll);
    view.addSubview(heading);
    view.addSubview(replaceHeading);
    view.addSubview(scroll);
    parse(true);
  };
  var change = function change() {
    var document = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
    if (!document) {
      setStatus('Open a document first.');
      return;
    }
    var pairs = state.parsed.filter(function (font) {
      var next = state.replacements[key(font)];
      return state.selected[key(font)] && next && next.postscript;
    }).map(function (old) {
      return {
        old: old,
        next: state.replacements[key(old)]
      };
    });
    if (!pairs.length) {
      setStatus('Select a font and choose its replacement.');
      return;
    }
    try {
      var count = Object(_fonts__WEBPACK_IMPORTED_MODULE_3__["replaceFonts"])(document, state.scope, pairs, allFonts);
      setStatus('Changed ' + count + ' text run' + (count === 1 ? '' : 's') + '.');
      sketch_ui__WEBPACK_IMPORTED_MODULE_1___default.a.message('Changed ' + count + ' text run' + (count === 1 ? '' : 's'));
    } catch (error) {
      setStatus('Could not change fonts: ' + error.message);
    }
  };
  var changeButton = button('Change fonts', NSMakeRect(518, 17, 115, 36));
  changeButton.setKeyEquivalent('\r');
  changeButton.setEnabled(false);
  content.addSubview(changeButton);
  controls.push(changeButton);
  var fiber = Object(sketch_async__WEBPACK_IMPORTED_MODULE_2__["createFiber"])();
  var closed = false;
  var className = 'FontReplacerWindowDelegate_' + NSUUID.UUID().UUIDString();
  var delegateClass = MOClassDescription.allocateDescriptionForClassWithName_superclass_(className, NSObject);
  delegateClass.addInstanceMethodWithSelector_function(NSSelectorFromString('windowWillClose:'), function () {
    closed = true;
    fiber.cleanup();
  });
  delegateClass.addInstanceMethodWithSelector_function(NSSelectorFromString('windowDidBecomeKey:'), function () {
    parse(false);
  });
  delegateClass.addInstanceMethodWithSelector_function(NSSelectorFromString('tabView:didSelectTabViewItem:'), function (view, item) {
    activateTab(item);
  });
  delegateClass.addInstanceMethodWithSelector_function(NSSelectorFromString('fontSelectAll:'), function () {
    toggleSelectAll();
  });
  delegateClass.addInstanceMethodWithSelector_function(NSSelectorFromString('fontRowSelected:'), function (sender) {
    selectRow(sender);
  });
  delegateClass.addInstanceMethodWithSelector_function(NSSelectorFromString('fontFamilySelected:'), function (sender) {
    selectFamily(sender);
  });
  delegateClass.addInstanceMethodWithSelector_function(NSSelectorFromString('fontStyleSelected:'), function (sender) {
    selectStyle(sender);
  });
  delegateClass.addInstanceMethodWithSelector_function(NSSelectorFromString('fontChange:'), function () {
    change();
  });
  delegateClass.registerClass();
  var delegate = NSClassFromString(className).alloc().init();
  selectAll.setTarget(delegate);
  selectAll.setAction('fontSelectAll:');
  changeButton.setTarget(delegate);
  changeButton.setAction('fontChange:');
  fiber.onCleanup(function () {
    panel.setDelegate(null);
    tabView.setDelegate(null);
    clearRows();
    controls.forEach(function (control) {
      return control.setTarget(null);
    });
    dictionary.removeObjectForKey(PANEL_KEY);
    dictionary.removeObjectForKey(PANEL_KEY + '.delegate');
    if (!closed) {
      closed = true;
      panel.close();
    }
  });
  dictionary.setObject_forKey(delegate, PANEL_KEY + '.delegate');
  panel.setDelegate(delegate);
  tabView.setDelegate(delegate);
  dictionary.setObject_forKey(panel, PANEL_KEY);
  activateTab(tabView.selectedTabViewItem());
  panel.makeKeyAndOrderFront(null);
});
function onShutdown() {
  var panel = NSThread.mainThread().threadDictionary().objectForKey(PANEL_KEY);
  if (panel) panel.close();
}

/***/ }),

/***/ "./src/fonts.js":
/*!**********************!*\
  !*** ./src/fonts.js ***!
  \**********************/
/*! exports provided: availableFonts, parseFonts, replaceFonts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "availableFonts", function() { return availableFonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseFonts", function() { return parseFonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceFonts", function() { return replaceFonts; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);

function sortFonts(a, b) {
  var family = a.family.localeCompare(b.family);
  return family || a.style.localeCompare(b.style);
}
function availableFonts() {
  var manager = NSFontManager.sharedFontManager();
  var families = manager.availableFontFamilies();
  var result = [];
  var seen = {};
  for (var i = 0; i < families.count(); i++) {
    var family = String(families.objectAtIndex(i));
    var members = manager.availableMembersOfFontFamily(family);
    if (!members) continue;
    for (var j = 0; j < members.count(); j++) {
      var member = members.objectAtIndex(j);
      var postscript = String(member.objectAtIndex(0));
      var style = String(member.objectAtIndex(1));
      if (seen[postscript]) continue;
      seen[postscript] = true;
      result.push({
        family: family,
        style: style,
        postscript: postscript
      });
    }
  }
  result.sort(sortFonts);
  return result;
}
function textLayers(document, scope) {
  var roots = scope === 'document' ? document.pages.reduce(function (all, page) {
    return all.concat(page.layers);
  }, []) : scope === 'page' ? document.selectedPage.layers : document.selectedLayers.layers;
  var result = [];
  function visit(layer) {
    if (layer.type === sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Types.Text) result.push(layer);
    if (layer.layers) layer.layers.forEach(visit);
  }
  roots.forEach(visit);
  return result;
}
function runs(layer, availableByPostscript) {
  var value = layer.sketchObject.attributedStringValue();
  var length = Number(value.length());
  var found = [];
  var previousName = null;
  for (var index = 0; index < length; index++) {
    var font = value.attribute_atIndex_effectiveRange(NSFontAttributeName, index, null);
    if (!font) return null;
    var postscript = String(font.fontName());
    if (!availableByPostscript[postscript]) return null;
    if (postscript !== previousName) {
      found.push({
        start: index,
        length: 1,
        postscript: postscript,
        size: Number(font.pointSize())
      });
      previousName = postscript;
    } else {
      found[found.length - 1].length++;
    }
  }
  return found;
}
function fontIndex(available) {
  var result = {};
  available.forEach(function (font) {
    result[font.postscript] = font;
  });
  return result;
}
function parseFonts(document, scope, available) {
  var byPostscript = fontIndex(available);
  var unique = {};
  textLayers(document, scope).forEach(function (layer) {
    var layerRuns = runs(layer, byPostscript);
    if (!layerRuns) return; // Match Figma's skip of text layers with missing fonts.
    layerRuns.forEach(function (run) {
      var font = byPostscript[run.postscript];
      unique[font.family + '::' + font.style] = font;
    });
  });
  return Object.keys(unique).map(function (key) {
    return unique[key];
  }).sort(sortFonts);
}
function replaceFonts(document, scope, replacements, available) {
  var byPostscript = fontIndex(available);
  var changes = [];
  var replacementByOld = {};
  replacements.forEach(function (pair) {
    replacementByOld[pair.old.postscript] = pair.next;
  });

  // Prepare all changes before touching the document. In particular, ensure
  // every replacement face exists at each original run's point size.
  textLayers(document, scope).forEach(function (layer) {
    var layerRuns = runs(layer, byPostscript);
    if (!layerRuns) return;
    var applicable = layerRuns.filter(function (run) {
      return replacementByOld[run.postscript];
    });
    if (!applicable.length) return;
    var original = layer.sketchObject.attributedStringValue();
    var updated = original.mutableCopy();
    applicable.forEach(function (run) {
      var next = replacementByOld[run.postscript];
      var font = NSFont.fontWithName_size(next.postscript, run.size);
      if (!font) throw new Error('Font is unavailable: ' + next.family + ' ' + next.style);
      updated.addAttribute_value_range(NSFontAttributeName, font, NSMakeRange(run.start, run.length));
    });
    changes.push({
      layer: layer,
      original: original,
      updated: updated,
      count: applicable.length
    });
  });
  var applied = 0;
  try {
    changes.forEach(function (change) {
      change.layer.sketchObject.setAttributedStringValue(change.updated);
      applied++;
    });
  } catch (error) {
    for (var i = applied - 1; i >= 0; i--) {
      changes[i].layer.sketchObject.setAttributedStringValue(changes[i].original);
    }
    throw error;
  }
  return changes.reduce(function (count, change) {
    return count + change.count;
  }, 0);
}

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/async":
/*!*******************************!*\
  !*** external "sketch/async" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/async");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default');
globalThis['onShutdown'] = __skpm_run.bind(this, 'onShutdown')
