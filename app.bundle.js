/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/button.ts":
/*!**********************************!*\
  !*** ./src/components/button.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
var buttonRestStyle = {
    fill: '#FFFFFF',
};
var buttonHoverStyle = {
    fill: '#7CFC00',
};
var buttonActiveStyle = {
    fill: '#888888',
};
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(scene, x, y, text, onClick) {
        var _this = _super.call(this, scene, x, y, text, buttonRestStyle) || this;
        scene.add.existing(_this);
        _this.setInteractive({ useHandCursor: true })
            .on('pointerover', _this.enterMenuButtonHoverState)
            .on('pointerout', _this.enterMenuButtonRestState)
            .on('pointerdown', _this.enterMenuButtonActiveState)
            .on('pointerup', _this.enterMenuButtonHoverState);
        if (onClick) {
            _this.on('pointerup', onClick);
        }
        return _this;
    }
    Button.prototype.enterMenuButtonHoverState = function () {
        this.setStyle(buttonHoverStyle);
    };
    Button.prototype.enterMenuButtonRestState = function () {
        this.setStyle(buttonRestStyle);
    };
    Button.prototype.enterMenuButtonActiveState = function () {
        this.setStyle(buttonActiveStyle);
    };
    return Button;
}(Phaser.GameObjects.Text));
exports.Button = Button;
exports.buttonTextHoverStyle = { fontSize: '14px', color: Styles.detailLightColor };
exports.buttonTextRestStyle = { fontSize: '14px', color: Styles.buttonTextColor };
exports.createButton = function (scene, x, y, text, onClick, w, h) {
    var textElement = scene.add.text(x, y, text, exports.buttonTextRestStyle).setOrigin(0, 0);
    var width = w || textElement.width + Styles.offset * 2;
    var height = h || textElement.height + Styles.offset * 2;
    var box = scene.add.rectangle(x, y, width, height, Styles.backgroundColorHex).setOrigin(0, 0);
    var topLine = scene.add.line(0, 0, x - 1, y, x + width, y, Styles.detailLightColorHex).setOrigin(0, 0);
    var leftLine = scene.add.line(0, 0, x, y - 1, x, y + height + 1, Styles.detailLightColorHex).setOrigin(0, 0);
    var rightLine = scene.add.line(0, 0, x + width, y - 1, x + width, y + height + 1, Styles.detailDarkColorHex).setOrigin(0, 0);
    var bottomLine = scene.add.line(0, 0, x + 1, y + height, x + width, y + height, Styles.detailDarkColorHex).setOrigin(0, 0);
    textElement.setDepth(1);
    textElement.setX(((box.width - textElement.width) / 2) + box.x);
    textElement.setY(((box.height - textElement.height) / 2) + box.y);
    var mouseHandlerBox = scene.add.rectangle(x, y, width, height, Styles.backgroundColorHex, 0).setOrigin(0, 0).setInteractive({ useHandCursor: true });
    mouseHandlerBox.on('pointerover', function () {
        textElement.setStyle(exports.buttonTextHoverStyle);
        box.setFillStyle(Styles.backgroundColorHex);
    });
    mouseHandlerBox.on('pointerout', function () {
        textElement.setStyle(exports.buttonTextRestStyle);
        box.setFillStyle(Styles.backgroundColorHex);
    });
    mouseHandlerBox.on('pointerdown', function () {
        textElement.setStyle(exports.buttonTextHoverStyle);
        box.setFillStyle(Styles.detailDarkColorHex);
    });
    mouseHandlerBox.on('pointerupoutside', function () {
        textElement.setStyle(exports.buttonTextHoverStyle);
        box.setFillStyle(Styles.backgroundColorHex);
    });
    mouseHandlerBox.on('pointerup', function () {
        textElement.setStyle(exports.buttonTextHoverStyle);
        box.setFillStyle(Styles.backgroundColorHex);
    });
    mouseHandlerBox.on('pointerup', onClick);
    return [
        box,
        textElement,
        topLine,
        leftLine,
        rightLine,
        bottomLine,
        mouseHandlerBox,
    ];
};


/***/ }),

/***/ "./src/components/cult-interface/index.ts":
/*!************************************************!*\
  !*** ./src/components/cult-interface/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CultDomain = __webpack_require__(/*! src/domain/cult */ "./src/domain/cult.ts");
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
var rectangle_1 = __webpack_require__(/*! src/components/rectangle */ "./src/components/rectangle.ts");
var button_1 = __webpack_require__(/*! src/components/button */ "./src/components/button.ts");
var domain_1 = __webpack_require__(/*! src/domain */ "./src/domain/index.ts");
var input_box_1 = __webpack_require__(/*! ../input-box */ "./src/components/input-box.ts");
exports.createCultInterface = function (scene, domainState) {
    var cultContainer = scene.add.container(0, 0);
    createCultInfo(scene, cultContainer, domainState);
    createCultOptions(scene, cultContainer);
    createCultHappinessMeter(scene, cultContainer, domainState);
    createCultSuggestedDonationInput(scene, cultContainer, domainState);
    return cultContainer;
};
var infoRowStyle = Styles.listItemStyle;
var infoRowTextX = 20;
var infoRowValueX = 450;
var infoRowStartY = Styles.cultPage.followerList.y + Styles.offset;
var createCultInfo = function (scene, container, domainState) {
    container.add(rectangle_1.addRectangle(scene, Styles.cultPage.followerList.x, Styles.cultPage.followerList.y, Styles.cultPage.followerList.width, Styles.cultPage.followerList.height, Styles.foregroundColorHex));
    container.add([
        scene.add.text(infoRowTextX, infoRowStartY, 'Followers', infoRowStyle),
        scene.add.text(infoRowTextX, infoRowStartY + (Styles.lineItemHeight * 1), 'Capacity', infoRowStyle),
        scene.add.text(infoRowTextX, infoRowStartY + (Styles.lineItemHeight * 2), 'New Followers per Tick', infoRowStyle),
        scene.add.text(infoRowTextX, infoRowStartY + (Styles.lineItemHeight * 3), 'Donations per Tick', infoRowStyle),
    ]);
    var followersValue = scene.add.text(infoRowValueX, infoRowStartY, domainState.followers.toFixed(2), infoRowStyle);
    var capacityValue = scene.add.text(infoRowValueX, infoRowStartY + (Styles.lineItemHeight * 1), "" + domainState.capacity, infoRowStyle);
    var followersPerTickValue = scene.add.text(infoRowValueX, infoRowStartY + (Styles.lineItemHeight * 2), domainState.actualNewFollowersPerTick.toFixed(2), infoRowStyle);
    var donationsPerTickValue = scene.add.text(infoRowValueX, infoRowStartY + (Styles.lineItemHeight * 3), (CultDomain.calculateDonationPerTick(domainState)).toFixed(2), infoRowStyle);
    domainState.events.on(domain_1.DomainEvents.followerCountChanged, function () {
        followersValue.text = domainState.followers.toFixed(2);
        donationsPerTickValue.text = (domainState.followers * domainState.suggestedDonation).toFixed(2);
    });
    domainState.events.on(domain_1.DomainEvents.cultCapacityChanged, function () {
        capacityValue.text = domainState.capacity.toString();
    });
    domainState.events.on(domain_1.DomainEvents.followersPerTickChanged, function () {
        followersPerTickValue.text = domainState.actualNewFollowersPerTick.toFixed(2);
    });
    domainState.events.on(domain_1.DomainEvents.suggestedDonationChanged, function () {
        donationsPerTickValue.text = (CultDomain.calculateDonationPerTick(domainState)).toFixed(2);
    });
    container.add([followersValue, capacityValue, followersPerTickValue, donationsPerTickValue]);
};
var optionsRowTextX = Styles.cultPage.options.labelX;
var optionsRowButtonX = Styles.cultPage.options.buttonX;
var optionsRowStartY = Styles.cultPage.followerList.y + Styles.offset;
var buttonOffsetHeight = Styles.cultPage.options.buttonOffsetHeight;
var createCultOptions = function (scene, container) {
    container.add([
        scene.add.text(optionsRowTextX, Styles.offset + optionsRowStartY, 'Build Promotional Website', Styles.cultPage.options.labelStyle)
    ].concat(button_1.createButton(scene, optionsRowButtonX, optionsRowStartY, '1,000,000', function () { }), [
        scene.add.text(optionsRowTextX, Styles.offset + optionsRowStartY + buttonOffsetHeight * 1, 'Construct Church', Styles.cultPage.options.labelStyle)
    ], button_1.createButton(scene, optionsRowButtonX, optionsRowStartY + buttonOffsetHeight * 1, '3,000,000', function () { }), [
        scene.add.text(optionsRowTextX, Styles.offset + optionsRowStartY + buttonOffsetHeight * 2, 'Build Complex', Styles.cultPage.options.labelStyle)
    ], button_1.createButton(scene, optionsRowButtonX, optionsRowStartY + buttonOffsetHeight * 2, '15,000,000', function () { })));
};
var createCultHappinessMeter = function (scene, container, domainState) {
    var currentHappinessMeter = scene.add.rectangle(Styles.cultPage.happiness.x + Styles.offset * 0.5, Styles.cultPage.happiness.meterY + Styles.offset * 0.5, 1, Styles.cultPage.happiness.meterHeight - Styles.offset, 0xFF0000).setOrigin(0, 0);
    setHappinessMeterWidth(currentHappinessMeter, domainState);
    domainState.events.on(domain_1.DomainEvents.cultHappinessChanged, function () {
        setHappinessMeterWidth(currentHappinessMeter, domainState);
    });
    container.add([
        scene.add.text(Styles.cultPage.happiness.x, Styles.cultPage.happiness.labelY, 'Follower Happiness', Styles.cultPage.options.labelStyle)
    ].concat(rectangle_1.addRectangle(scene, Styles.cultPage.happiness.x, Styles.cultPage.happiness.meterY, Styles.cultPage.happiness.meterWidth, Styles.cultPage.happiness.meterHeight, Styles.foregroundColorHex), [
        currentHappinessMeter,
    ]));
};
var setHappinessMeterWidth = function (meter, domainState) {
    var innerMeterWidth = Styles.cultPage.happiness.meterWidth - Styles.offset;
    meter.width = innerMeterWidth * domainState.happiness * 0.01 || 1; // Always have some bar showing
    meter.fillColor = domainState.happiness > 70
        ? 0x00FF00
        : domainState.happiness > 40
            ? 0xFFF000
            : 0xFF0000;
};
var createCultSuggestedDonationInput = function (scene, container, domainState) {
    var inputBox = input_box_1.createInputBox(scene, Styles.cultPage.donation.inputX, Styles.cultPage.donation.y, function (text) {
        var inputtedNumber = Number.parseFloat(text);
        // Don't change anything when the user backspaces all the way or enters 0
        if (inputtedNumber >= 1) {
            CultDomain.changeSuggestedDonation(domainState, inputtedNumber);
        }
    }, 12, true);
    // TODO: Ew. This sucks. We should return an object or something easier to work with.
    inputBox[6].text = domainState.suggestedDonation.toString();
    container.add(inputBox.concat([
        scene.add.text(Styles.cultPage.donation.labelX, Styles.cultPage.donation.y + 5, '"Recommended" Weekly Donation', Styles.cultPage.options.labelStyle),
    ]));
};


/***/ }),

/***/ "./src/components/exchange-interface/index.ts":
/*!****************************************************!*\
  !*** ./src/components/exchange-interface/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
var domain_1 = __webpack_require__(/*! src/domain */ "./src/domain/index.ts");
var Shared = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
var rectangle_1 = __webpack_require__(/*! ../rectangle */ "./src/components/rectangle.ts");
var TradingDomain = __webpack_require__(/*! src/domain/trading */ "./src/domain/trading.ts");
var button_1 = __webpack_require__(/*! ../button */ "./src/components/button.ts");
var input_box_1 = __webpack_require__(/*! ../input-box */ "./src/components/input-box.ts");
var events_1 = __webpack_require__(/*! src/shared/events */ "./src/shared/events.ts");
;
exports.createExchangeInterface = function (scene, domainState) {
    var exchangeContainer = scene.add.container(0, 0);
    scene.events.emit(events_1.GameEvents.selectedAccountChanged, { account: domainState.tradeAccounts[0] });
    createInfoInterface(scene, exchangeContainer, domainState);
    createTradeInterface(scene, exchangeContainer, domainState);
    createRootInterface(scene, exchangeContainer, domainState);
    return exchangeContainer;
};
var getInfoColumnWidth = function (scene) {
    return Shared.getGameWidth(scene) * 0.7;
};
var getBuyColumnWidth = function (scene) {
    return Shared.getGameWidth(scene) * 0.075;
};
var columnHeaderStyle = { fontSize: '16px', color: Styles.tradePage.currencyList.headerColor };
var countryX = 20;
var currencyX = 200;
var exchangeRateX = 320;
var trendX = 370;
var trendBaseY = 207;
var amountOwnedX = 450;
var rootValueX = 610;
var headerColumnY = 160;
var firstLineItemY = 200;
function createTrend(scene, offsetY, trend) {
    if (trend === 'up') {
        return scene.add.image(trendX, trendBaseY + offsetY, 'trend-up');
    }
    else if (trend === 'down') {
        return scene.add.image(trendX, trendBaseY + offsetY, 'trend-down');
    }
}
var getCurrentRootValueText = function (account, nation) {
    return Shared.formatNumberForDisplay(account.balance / nation.currency.exchangeRate);
};
var createInfoInterface = function (scene, container, domainState) {
    container.add(rectangle_1.addRectangle(scene, Styles.tradePage.currencyList.x, Styles.tradePage.currencyList.y, Styles.tradePage.currencyList.width, Styles.tradePage.currencyList.height, Styles.foregroundColorHex));
    container.add([
        scene.add.text(countryX, headerColumnY, 'COUNTRY', columnHeaderStyle),
        scene.add.text(currencyX, headerColumnY, 'CURRENCY', columnHeaderStyle),
        scene.add.text(amountOwnedX, headerColumnY, 'AMT. OWNED', columnHeaderStyle),
        scene.add.text(exchangeRateX, headerColumnY, 'EXC. RATE', columnHeaderStyle),
        scene.add.text(rootValueX, headerColumnY, 'ROOT VALUE', columnHeaderStyle),
    ]);
    var rowClickHandlers = [];
    var basicallyHidden = 0.000000000001;
    domainState.nations.forEach(function (nation, index) {
        var account = domainState.tradeAccounts.find(function (account) { return account.currency.name === nation.currency.name; });
        var y = firstLineItemY + (Styles.lineItemHeight * index);
        var country = scene.add.text(countryX, y, nation.name, Styles.listItemStyle);
        var currency = scene.add.text(currencyX, y, nation.currency.name, Styles.listItemStyle);
        var trend = createTrend(scene, Styles.lineItemHeight * index, nation.currency.trend);
        var amountOwned = scene.add.text(amountOwnedX, y, Shared.formatNumberForDisplay(account.balance), Styles.listItemStyle);
        var exchangeRate = scene.add.text(exchangeRateX, y, Shared.formatNumberForDisplay(nation.currency.exchangeRate), Styles.listItemStyle);
        var rootValue = scene.add.text(rootValueX, y, getCurrentRootValueText(account, nation), Styles.listItemStyle);
        var rowClickHandler = scene.add.rectangle(Styles.offset + 1, y - 7, Styles.tradePage.currencyList.width - 2, Styles.lineItemHeight, Styles.tradePage.selectedLineItemHex, 0.5).setInteractive({ useHandCursor: true }).setOrigin(0, 0);
        if (index > 0) {
            // defaulting the first country / currency to selected here and in the trading state
            rowClickHandler.alpha = basicallyHidden;
        }
        rowClickHandlers.push(rowClickHandler);
        rowClickHandler.on('pointerup', function () {
            scene.events.emit(events_1.GameEvents.selectedAccountChanged, { account: account, rowClickHandler: rowClickHandler });
        });
        container.add([country, currency, trend, amountOwned, exchangeRate, rootValue, rowClickHandler]);
        domainState.events.on(domain_1.DomainEvents.accountBalanceChanged, function () {
            amountOwned.setText(Shared.formatNumberForDisplay(account.balance));
            rootValue.setText(getCurrentRootValueText(account, nation));
        });
        domainState.events.on(domain_1.DomainEvents.exchangeRatesChanged, function () {
            exchangeRate.setText(Shared.formatNumberForDisplay(nation.currency.exchangeRate));
            rootValue.setText(getCurrentRootValueText(account, nation));
            if (trend) {
                trend.destroy();
            }
            trend = createTrend(scene, Styles.lineItemHeight * index, nation.currency.trend);
            container.add(trend);
        });
    });
    scene.events.on(events_1.GameEvents.selectedAccountChanged, function (event) {
        rowClickHandlers.forEach(function (handler) {
            handler.alpha = basicallyHidden;
        });
        event.rowClickHandler.alpha = 0.5;
    });
};
var createRootInterface = function (scene, container, domainState) {
    var box = rectangle_1.addRectangle(scene, Styles.width - Styles.offset - Styles.tradePage.usernameWidth, 60, Styles.tradePage.usernameWidth, Styles.tradePage.usernameHeight, Styles.foregroundColorHex);
    var rootInfoText = scene.add.text(625, 70, 'AVAILABLE ROOT', Styles.listItemStyle);
    var rootValueText = scene.add.text(rootInfoText.x + rootInfoText.width + 30, rootInfoText.y - 3, Shared.formatNumberForDisplay(domainState.rootAccount.balance), Styles.availableRoot);
    domainState.events.on(domain_1.DomainEvents.accountBalanceChanged, function (account) {
        if (account.name === domainState.rootAccount.name) {
            rootValueText.setText(Shared.formatNumberForDisplay(domainState.rootAccount.balance));
        }
    });
};
function getBuyAmountText(scene) {
    var currencyAmount = Shared.formatNumberForDisplay(scene.buyAmount * scene.selectedAccount.currency.exchangeRate);
    var currencyType = scene.selectedAccount.currency.name;
    var rootAmount = Shared.formatNumberForDisplay(scene.buyAmount);
    return "BUY " + currencyAmount + " " + currencyType + " FOR " + rootAmount + " ROOT";
}
;
function getSellAmountText(scene) {
    var currencyAmount = Shared.formatNumberForDisplay(scene.sellAmount);
    var currencyType = scene.selectedAccount.currency.name;
    var rootAmount = Shared.formatNumberForDisplay(scene.sellAmount / scene.selectedAccount.currency.exchangeRate);
    return "SELL " + currencyAmount + " " + currencyType + " FOR " + rootAmount + " ROOT";
}
;
var createTradeInterface = function (scene, container, domainState) {
    var buyContainer = scene.add.container(0, 0);
    var sellContainer = scene.add.container(0, 0);
    var influenceContainer = scene.add.container(0, 0);
    var buyTab = scene.add.text(Styles.tradePage.tradeInterface.x, Styles.tradePage.tradeInterface.exchangeTabY, 'BUY', Styles.selectedTab);
    buyTab.setInteractive({ useHandCursor: true });
    buyTab.on('pointerup', function () {
        sellTab.setStyle(Styles.unselectedTab);
        influenceTab.setStyle(Styles.unselectedTab);
        buyTab.setStyle(Styles.selectedTab);
        influenceContainer.setVisible(false);
        sellContainer.setVisible(false);
        buyContainer.setVisible(true);
    });
    var sellTab = scene.add.text(buyTab.x + buyTab.width + Styles.offset * 2, Styles.tradePage.tradeInterface.exchangeTabY, 'SELL', Styles.unselectedTab);
    sellTab.setInteractive({ useHandCursor: true }).on('pointerup', function () {
        buyTab.setStyle(Styles.unselectedTab);
        influenceTab.setStyle(Styles.unselectedTab);
        sellTab.setStyle(Styles.selectedTab);
        influenceContainer.setVisible(false);
        buyContainer.setVisible(false);
        sellContainer.setVisible(true);
    });
    var influenceTab = scene.add.text(sellTab.x + sellTab.width + Styles.offset * 2, Styles.tradePage.tradeInterface.exchangeTabY, 'INFLUENCE', Styles.unselectedTab);
    influenceTab.setVisible(false);
    influenceTab.setInteractive({ useHandCursor: true }).on('pointerup', function () {
        influenceTab.setStyle(Styles.selectedTab);
        buyTab.setStyle(Styles.unselectedTab);
        sellTab.setStyle(Styles.unselectedTab);
        influenceContainer.setVisible(true);
        buyContainer.setVisible(false);
        sellContainer.setVisible(false);
    });
    domainState.events.on(domain_1.DomainEvents.influenceCapabilityUnlocked, function () { return influenceTab.setVisible(true); });
    var spendAmountText = scene.add.text(Styles.tradePage.tradeInterface.x, 210, 'BUY AMOUNT', Styles.listItemStyle);
    var buyInputBox = input_box_1.createInputBox(scene, Styles.tradePage.tradeInterface.inputBoxX, 195, function (text) {
        var amount = Number.parseFloat(text);
        if (!Number.isNaN(amount)) {
            scene.events.emit(events_1.GameEvents.buyAmountChanged, amount);
        }
    }, undefined, true);
    var buyAmountText = scene.add.text(Styles.tradePage.tradeInterface.x, 260, getBuyAmountText(scene), Styles.tradeAmountText);
    buyContainer.add([
        spendAmountText
    ].concat(buyInputBox, [
        buyAmountText,
    ]));
    var sellAmountLabel = scene.add.text(Styles.tradePage.tradeInterface.x, 210, 'SELL AMOUNT', Styles.listItemStyle);
    var sellInputBox = input_box_1.createInputBox(scene, Styles.tradePage.tradeInterface.inputBoxX, 195, function (text) {
        var amount = Number.parseFloat(text);
        if (!Number.isNaN(amount)) {
            scene.events.emit(events_1.GameEvents.sellAmountChanged, amount);
        }
    }, undefined, true);
    var sellAmountText = scene.add.text(Styles.tradePage.tradeInterface.x, 260, getSellAmountText(scene), Styles.tradeAmountText);
    sellContainer.add([
        sellAmountLabel
    ].concat(sellInputBox, [
        sellAmountText,
    ]));
    var buy = function () {
        if (scene.selectedAccount) {
            TradingDomain.recordTrade(domainState.rootAccount, scene.selectedAccount, scene.buyAmount, scene.selectedAccount.currency.exchangeRate, domainState);
        }
    };
    var sell = function () {
        if (scene.selectedAccount) {
            var exchangeRate = domainState.rootAccount.currency.exchangeRate / scene.selectedAccount.currency.exchangeRate;
            TradingDomain.recordTrade(scene.selectedAccount, domainState.rootAccount, scene.sellAmount, exchangeRate, domainState);
        }
    };
    scene.events.on(events_1.GameEvents.selectedAccountChanged, function (event) {
        buyAmountText.text = getBuyAmountText(scene);
        sellAmountText.text = getSellAmountText(scene);
    });
    scene.events.on(events_1.GameEvents.buyAmountChanged, function (event) {
        buyAmountText.text = getBuyAmountText(scene);
    });
    scene.events.on(events_1.GameEvents.sellAmountChanged, function (event) {
        sellAmountText.text = getSellAmountText(scene);
    });
    domainState.events.on(domain_1.DomainEvents.exchangeRatesChanged, function (event) {
        buyAmountText.text = getBuyAmountText(scene);
        sellAmountText.text = getSellAmountText(scene);
    });
    buyContainer.add(button_1.createButton(scene, Styles.width - 100 - Styles.offset, 300, 'BUY', buy, 100));
    sellContainer.add(button_1.createButton(scene, Styles.width - 100 - Styles.offset, 300, 'SELL', sell, 100));
    var influenceY = 210;
    var influenceButtonWidth = 100;
    influenceContainer.add(scene.add.text(Styles.tradePage.tradeInterface.x, influenceY, TradingDomain.startRumorAction.name, Styles.listItemStyle));
    influenceContainer.add(button_1.createButton(scene, Styles.width - influenceButtonWidth - Styles.offset, influenceY - 10, Shared.formatNumberForDisplay(TradingDomain.startRumorAction.cost), function () { return TradingDomain.startRumor(domainState, scene.selectedAccount); }, influenceButtonWidth));
    influenceY += 50;
    influenceContainer.add(scene.add.text(Styles.tradePage.tradeInterface.x, influenceY, TradingDomain.bribePoliticianAction.name, Styles.listItemStyle));
    influenceContainer.add(button_1.createButton(scene, Styles.width - influenceButtonWidth - Styles.offset, influenceY - 10, Shared.formatNumberForDisplay(TradingDomain.bribePoliticianAction.cost), function () { return TradingDomain.bribePolitician(domainState, scene.selectedAccount); }, influenceButtonWidth));
    influenceY += 50;
    influenceContainer.add(scene.add.text(Styles.tradePage.tradeInterface.x, influenceY, TradingDomain.rigElectionAction.name, Styles.listItemStyle));
    influenceContainer.add(button_1.createButton(scene, Styles.width - influenceButtonWidth - Styles.offset, influenceY - 10, Shared.formatNumberForDisplay(TradingDomain.rigElectionAction.cost), function () { return TradingDomain.rigElection(domainState, scene.selectedAccount); }, influenceButtonWidth));
    influenceY += 50;
    // const sellInputBox = createInputBox(scene, Styles.tradePage.tradeInterface.inputBoxX, 195, (text) => {
    //   const amount = Number.parseFloat(text);
    //   if (!Number.isNaN(amount)) {
    //     scene.events.emit(GameEvents.sellAmountChanged, amount);
    //   }
    // }, undefined, true);
    sellContainer.setVisible(false);
    influenceContainer.setVisible(false);
    container.add(buyContainer);
    container.add(buyTab);
    container.add(sellContainer);
    container.add(sellTab);
    container.add(influenceContainer);
    container.add(influenceTab);
};


/***/ }),

/***/ "./src/components/input-box.ts":
/*!*************************************!*\
  !*** ./src/components/input-box.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rectangle_1 = __webpack_require__(/*! ./rectangle */ "./src/components/rectangle.ts");
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
exports.createInputBox = function (scene, x, y, callback, maxLength, numbersOnly) {
    if (numbersOnly === void 0) { numbersOnly = false; }
    var textFieldState = {
        isEditable: false,
    };
    var rectangleElements = rectangle_1.addRectangle(scene, x, y, Styles.inputBoxWidth, 30, Styles.foregroundColorHex);
    var cursor = scene.add.rectangle(x + 8, y + 5, 10, 20, Styles.textColorHex).setOrigin(0, 0);
    cursor.setVisible(false);
    var inputBox = rectangleElements[0];
    inputBox.setInteractive();
    var textField = scene.add.text(x + 5, y + Styles.offset / 2, '', { color: Styles.textColor });
    scene.input.on('pointerup', function (pointer, currentlyOver) {
        textFieldState.isEditable = _.some(currentlyOver, function (gameObject) { return gameObject === inputBox || gameObject === textField; });
        if (textFieldState.isEditable) {
            cursor.setVisible(true);
        }
        else {
            cursor.setVisible(false);
        }
    });
    var maxCharacterLength = maxLength || Number.MAX_SAFE_INTEGER;
    // keySpace = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    // keyBackspace = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);
    scene.input.keyboard.on('keydown', function (event) {
        if (!textFieldState.isEditable) {
            return;
        }
        var isNumber = event.keyCode === 190 || (event.keyCode >= 48 && event.keyCode <= 57);
        var isString = event.keyCode === 32 || (event.keyCode >= 65 && event.keyCode <= 90);
        var validKey = numbersOnly
            ? isNumber
            : isNumber || isString;
        if (event.keyCode === 8 && textField.text.length > 0) {
            textField.text = textField.text.substr(0, textField.text.length - 1);
            cursor.setX(textField.x + textField.width + 3);
            callback(textField.text);
        }
        else if (textField.text.length < maxCharacterLength && validKey) {
            textField.text += ("" + event.key).toUpperCase();
            cursor.setX(textField.x + textField.width + 3);
            callback(textField.text);
        }
    });
    return rectangleElements.concat([
        cursor,
        textField,
    ]);
};


/***/ }),

/***/ "./src/components/line.ts":
/*!********************************!*\
  !*** ./src/components/line.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
exports.addHorizontalScreenLine = function (scene, y) {
    scene.add.line(0, 0, 0, y + 1, Styles.width, y + 1, Styles.detailLightColorHex).setOrigin(0, 0);
    scene.add.line(0, 0, 0, y, Styles.width, y, Styles.detailDarkColorHex).setOrigin(0, 0);
};


/***/ }),

/***/ "./src/components/rectangle.ts":
/*!*************************************!*\
  !*** ./src/components/rectangle.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
exports.addRectangle = function (scene, x, y, width, height, fillColor, fillAlpha) {
    var box = scene.add.rectangle(x, y, width, height, fillColor, fillAlpha).setOrigin(0, 0);
    var topLine = scene.add.line(0, 0, x - 1, y, x + width, y, Styles.detailDarkColorHex).setOrigin(0, 0);
    var leftLine = scene.add.line(0, 0, x, y - 1, x, y + height + 1, Styles.detailDarkColorHex).setOrigin(0, 0);
    var rightLine = scene.add.line(0, 0, x + width, y - 1, x + width, y + height + 1, Styles.detailLightColorHex).setOrigin(0, 0);
    var bottomLine = scene.add.line(0, 0, x + 1, y + height, x + width, y + height, Styles.detailLightColorHex).setOrigin(0, 0);
    return [
        box,
        topLine,
        leftLine,
        rightLine,
        bottomLine,
    ];
};


/***/ }),

/***/ "./src/components/ticker/index.ts":
/*!****************************************!*\
  !*** ./src/components/ticker/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Shared = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
var domain_1 = __webpack_require__(/*! src/domain */ "./src/domain/index.ts");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var rectangle_1 = __webpack_require__(/*! ../rectangle */ "./src/components/rectangle.ts");
;
var tickerY = 710;
var tickerStoryY = 725;
var tickerHeight = 50;
exports.createNewsTicker = function (scene, domainState) {
    var tickerState = {
        storyQueue: [],
        storyDisplays: [],
        readyToDisplayNextStory: false,
    };
    var gameWidth = Shared.getGameWidth(scene);
    rectangle_1.addRectangle(scene, Styles.offset, tickerY, gameWidth - Styles.offset * 2, tickerHeight, Styles.foregroundColorHex);
    domainState.events.on(domain_1.DomainEvents.nationEventOccurred, function (nation, headline) {
        tickerState.storyQueue.push(nation.name + " " + headline);
    });
    domainState.events.on(domain_1.DomainEvents.nationEventEnded, function (nation, headline) {
        if (headline) {
            tickerState.storyQueue.push(nation.name + " " + headline);
        }
    });
    // Use this to make sure the mask doesn't cover the border of the ticker
    var maskFuzz = 1;
    var leftMask = scene.add.rectangle(0, tickerY, Styles.offset - maskFuzz, tickerHeight, Styles.backgroundColorHex).setOrigin(0, 0);
    var rightMask = scene.add.rectangle(gameWidth - Styles.offset + maskFuzz, tickerY, Styles.offset, tickerHeight, Styles.backgroundColorHex).setOrigin(0, 0);
    // These masks are used to make sure that a ticker story isn't visible until it actuall enters the ticker field
    leftMask.setDepth(10);
    rightMask.setDepth(10);
    exports.updateStories(scene, tickerState);
    return tickerState;
};
var readyToDisplayNextStory = true;
exports.updateStories = function (scene, tickerState) {
    var shouldBuildStory = readyToDisplayNextStory && (tickerState.storyQueue.length > 0);
    var gameWidth = Shared.getGameWidth(scene);
    if (shouldBuildStory) {
        var text = tickerState.storyQueue.shift();
        tickerState.storyDisplays.push({ textObject: scene.add.text(gameWidth, tickerStoryY, text), text: text, posX: gameWidth });
        readyToDisplayNextStory = false;
    }
    tickerState.storyDisplays.forEach(function (story) {
        story.textObject.destroy();
        story.posX -= 2;
        story.textObject = scene.add.text(story.posX, tickerStoryY, story.text);
        // story.textObject.setde
    });
    tickerState.storyDisplays = tickerState.storyDisplays.filter(function (story) {
        var offScreen = story.textObject.displayWidth + story.posX < 0;
        if (offScreen) {
            story.textObject.destroy();
            return false;
        }
        return true;
    });
    var padding = 100;
    if (tickerState.storyDisplays.length === 0 || _.last(tickerState.storyDisplays).textObject.displayWidth + padding < gameWidth - _.last(tickerState.storyDisplays).posX) {
        readyToDisplayNextStory = true;
    }
};


/***/ }),

/***/ "./src/domain/cult.ts":
/*!****************************!*\
  !*** ./src/domain/cult.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(/*! ./events */ "./src/domain/events.ts");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
exports.initCultDomainState = function (input, events) {
    return {
        events: events,
        happiness: 100,
        followers: 1,
        capacity: 10,
        actualNewFollowersPerTick: 1,
        baseNewFollowersPerTick: 1,
        suggestedDonation: 0,
    };
};
var FOLLOWERS_START_LEAVING_THRESHOLD = 40;
exports.calculateNewHappinessLevel = function (domainState) {
    return domainState.suggestedDonation > 100 ? 0 : 100 - domainState.suggestedDonation;
};
exports.calculateDonationPerTick = function (domainState) {
    return domainState.happiness >= FOLLOWERS_START_LEAVING_THRESHOLD ? domainState.suggestedDonation * domainState.followers : 0;
};
var calculateCurrentFollowersPerTick = function (domainState) {
    if (domainState.happiness < FOLLOWERS_START_LEAVING_THRESHOLD) {
        domainState.actualNewFollowersPerTick = (domainState.happiness - FOLLOWERS_START_LEAVING_THRESHOLD) * domainState.baseNewFollowersPerTick;
    }
    else {
        domainState.actualNewFollowersPerTick = domainState.baseNewFollowersPerTick * (domainState.happiness * 0.01);
    }
    domainState.events.emit(events_1.DomainEvents.followersPerTickChanged);
};
exports.changeHappiness = function (domainState, newHappiness) {
    domainState.happiness = newHappiness;
    calculateCurrentFollowersPerTick(domainState);
    domainState.events.emit(events_1.DomainEvents.cultHappinessChanged);
};
exports.changeSuggestedDonation = function (domainState, newDonationAmount) {
    domainState.suggestedDonation = newDonationAmount;
    domainState.events.emit(events_1.DomainEvents.suggestedDonationChanged);
};
exports.changeCultCapacity = function (domainState, newCapacity) {
    domainState.capacity = newCapacity;
    domainState.events.emit(events_1.DomainEvents.cultCapacityChanged);
};
exports.generateRevenueFromCult = function (domainState) {
    var revenue = exports.calculateDonationPerTick(domainState);
    domainState.events.emit(events_1.DomainEvents.cultRevenueGenerated, revenue);
};
exports.addFollowersToCult = function (domainState) {
    var newFollowerCount = domainState.followers + domainState.actualNewFollowersPerTick;
    domainState.followers = _.clamp(newFollowerCount, 0, domainState.capacity);
    domainState.events.emit(events_1.DomainEvents.followerCountChanged);
};


/***/ }),

/***/ "./src/domain/events.ts":
/*!******************************!*\
  !*** ./src/domain/events.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DomainEvents;
(function (DomainEvents) {
    // Trading
    DomainEvents["tradeCompleted"] = "domain.tradeCompleted";
    DomainEvents["tradeFailed"] = "domain.tradeFailed";
    DomainEvents["accountBalanceChanged"] = "domain.accountBalanceChanged";
    DomainEvents["exchangeRatesChanged"] = "domain.exchangeRatesChanged";
    DomainEvents["nationEventOccurred"] = "domain.nationEventOccurred";
    DomainEvents["nationEventEnded"] = "domain.nationEventEnded";
    DomainEvents["influenceCapabilityUnlocked"] = "domain.influenceCapabilityUnlocked";
    // Cult
    DomainEvents["cultCapabilityUnlocked"] = "domain.cultCapabilityUnlocked";
    DomainEvents["followerCountChanged"] = "domain.followerCountChanged";
    DomainEvents["cultRevenueGenerated"] = "domain.cultRevenueGenerated";
    DomainEvents["suggestedDonationChanged"] = "domain.suggestedDonationChanged";
    DomainEvents["cultCapacityChanged"] = "domain.cultCapacityChanged";
    DomainEvents["cultHappinessChanged"] = "domain.cultHappinessChanged";
    DomainEvents["followersPerTickChanged"] = "domain.followersPerTickChanged";
})(DomainEvents = exports.DomainEvents || (exports.DomainEvents = {}));


/***/ }),

/***/ "./src/domain/index.ts":
/*!*****************************!*\
  !*** ./src/domain/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var TradingDomain = __webpack_require__(/*! ./trading */ "./src/domain/trading.ts");
var CultDomain = __webpack_require__(/*! ./cult */ "./src/domain/cult.ts");
var events_1 = __webpack_require__(/*! ./events */ "./src/domain/events.ts");
exports.DomainEvents = events_1.DomainEvents;
var defaultCapabilities = {
    capabilities: [
        { name: "Influence", enabled: false, activationThreshold: 1000, activationEvent: events_1.DomainEvents.influenceCapabilityUnlocked },
        { name: "Cult", enabled: false, activationThreshold: 10000, activationEvent: events_1.DomainEvents.cultCapabilityUnlocked },
    ]
};
exports.initDomainState = function (input) {
    var domainEventEmitter = new Phaser.Events.EventEmitter();
    var domainState = __assign({}, TradingDomain.initTradingDomainState(input, domainEventEmitter), CultDomain.initCultDomainState(input, domainEventEmitter), defaultCapabilities);
    registerDomainEventHandlers(domainState);
    return domainState;
};
var registerDomainEventHandlers = function (domainState) {
    domainState.events.on(events_1.DomainEvents.cultRevenueGenerated, function (revenue) {
        TradingDomain.addRevenueToRootAcount(domainState, revenue);
    });
    domainState.events.on(events_1.DomainEvents.suggestedDonationChanged, function (revenue) {
        var newHappiness = CultDomain.calculateNewHappinessLevel(domainState);
        CultDomain.changeHappiness(domainState, newHappiness);
    });
};
function checkCapabilityEnablement(domainState) {
    domainState.capabilities.forEach(function (capability) {
        if (!capability.enabled && domainState.totalPortfolioValue >= capability.activationThreshold) {
            capability.enabled = true;
            domainState.events.emit(capability.activationEvent);
        }
    });
}
exports.handleTick = function (domainState) {
    // Trading Domain Events
    TradingDomain.runCurrencyFluctuations(domainState);
    TradingDomain.runRandomNationEvents(domainState);
    TradingDomain.checkForExpiringNationEvents(domainState);
    // Cult Domain Events
    CultDomain.addFollowersToCult(domainState);
    CultDomain.generateRevenueFromCult(domainState);
    checkCapabilityEnablement(domainState);
};


/***/ }),

/***/ "./src/domain/trading.ts":
/*!*******************************!*\
  !*** ./src/domain/trading.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(/*! ./events */ "./src/domain/events.ts");
var shared_1 = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
var DomainErrors;
(function (DomainErrors) {
    DomainErrors["tradeFailed_InsufficientFunds"] = "Insufficient Funds";
})(DomainErrors = exports.DomainErrors || (exports.DomainErrors = {}));
function createAccount(name, startingBalance, currency, isRoot) {
    var newAccount = {
        kind: isRoot ? "root" : "trading",
        name: name,
        currency: currency,
        balance: startingBalance,
        ledger: [],
    };
    if (startingBalance > 0) {
        newAccount.ledger.push({ amount: startingBalance, transactionType: "Credit" });
    }
    return newAccount;
}
exports.createAccount = createAccount;
function applyTransactionToAccount(account, amount, transactionType, state) {
    account.ledger.push({ amount: amount, transactionType: "Debit" });
    account.balance += transactionType == "Credit" ? amount : -1 * amount;
}
function recordTrade(source, destination, sourceAmount, sourceToDestinationExchangeRate, state) {
    if (source.balance >= sourceAmount) {
        var destinationAmount = sourceAmount * sourceToDestinationExchangeRate;
        applyTransactionToAccount(source, sourceAmount, "Debit", state);
        applyTransactionToAccount(destination, destinationAmount, "Credit", state);
        var newTrade = {
            sourceAmount: sourceAmount,
            sourceCurrency: source.currency,
            destinationAmount: destinationAmount,
            destinationCurrency: destination.currency,
            exchangeRate: sourceToDestinationExchangeRate
        };
        state.tradeLedger.trades.push(newTrade);
        state.events.emit(events_1.DomainEvents.tradeCompleted, newTrade);
        state.events.emit(events_1.DomainEvents.accountBalanceChanged, source);
        state.events.emit(events_1.DomainEvents.accountBalanceChanged, destination);
    }
    else {
        state.events.emit(events_1.DomainEvents.tradeFailed, DomainErrors.tradeFailed_InsufficientFunds);
    }
}
exports.recordTrade = recordTrade;
var MIN_STARTING_EXCHANGE_RATE = 5;
var MAX_STARTING_EXCHANGE_RATE = 40;
var MIN_CURRENCY_EXCHANGE_RATE = 1;
var MAX_CURRENCY_EXCHANGE_RATE = 99;
function randomDecimalBetween(min, max) {
    return Math.random() * (max - min) + min;
}
function initTradingDomainState(initData, events) {
    var nations = initData.nations.map(function (n) {
        return {
            name: n.nation,
            currency: { name: n.currency, exchangeRate: randomDecimalBetween(MIN_STARTING_EXCHANGE_RATE, MAX_STARTING_EXCHANGE_RATE), trend: "up" },
            activeEvents: [],
            historicalEvents: [],
        };
    });
    var currencies = nations.map(function (n) { return n.currency; });
    var accounts = currencies.map(function (c) {
        return createAccount(c.name, 0, c, false);
    });
    var rootCurrency = { name: initData.rootCurrencyName, exchangeRate: 1, trend: "up" };
    return {
        events: events,
        nations: nations,
        tradeCurrencies: currencies,
        tradeAccounts: accounts,
        tradeLedger: { trades: [] },
        rootCurrency: rootCurrency,
        rootAccount: createAccount(initData.rootCurrencyName, initData.rootCurrencyStartingAmount, rootCurrency, true),
        totalPortfolioValue: initData.rootCurrencyStartingAmount,
    };
}
exports.initTradingDomainState = initTradingDomainState;
function recalculateTradingPortfolioValue(state) {
    state.totalPortfolioValue = state.rootAccount.balance + state.tradeAccounts.reduce(function (val, account) {
        return val + (account.balance / account.currency.exchangeRate);
    }, 0);
}
function runCurrencyFluctuations(state) {
    state.nations.forEach(function (nation) {
        var currency = nation.currency;
        var fluxMultiplier = nation.activeEvents.reduce(function (i, event) { return i * event.fluxMultiplier; }, 1);
        var baseMultiplier = nation.activeEvents.reduce(function (i, event) { return i * event.baseMultiplier; }, 1);
        var change = currency.exchangeRate * (randomDecimalBetween(0.98 * fluxMultiplier, 1.02 * fluxMultiplier)) * baseMultiplier - currency.exchangeRate;
        var exrMidpoint = (MAX_CURRENCY_EXCHANGE_RATE - MIN_CURRENCY_EXCHANGE_RATE) / 2;
        var changeScale = (Math.abs(currency.exchangeRate - exrMidpoint) < 2
            || (change < 0 && currency.exchangeRate > exrMidpoint)
            || (change > 0 && currency.exchangeRate < exrMidpoint)) ? 1 : ((exrMidpoint / 30.0) / Math.abs(currency.exchangeRate - exrMidpoint));
        var scaledChange = change * changeScale;
        currency.trend = scaledChange > 0 ? "up" : "down";
        currency.exchangeRate += scaledChange;
        if (currency.exchangeRate < MIN_CURRENCY_EXCHANGE_RATE) {
            currency.exchangeRate = MIN_CURRENCY_EXCHANGE_RATE;
        }
        else if (currency.exchangeRate > MAX_CURRENCY_EXCHANGE_RATE) {
            currency.exchangeRate = MAX_CURRENCY_EXCHANGE_RATE;
        }
    });
    state.events.emit(events_1.DomainEvents.exchangeRatesChanged);
    recalculateTradingPortfolioValue(state);
}
exports.runCurrencyFluctuations = runCurrencyFluctuations;
var nationEventTypes = [
    {
        kind: "negative",
        name: "War",
        eventStartHeadline: "has gone to war!",
        eventEndHeadline: "is no longer at war",
        baseMultiplier: { min: 1.01, max: 1.1 },
        fluxMultiplier: { min: 1.0, max: 1.1 },
        duration: { min: 60, max: 120 }
    },
    {
        kind: "positive",
        name: "Forging friendships",
        eventStartHeadline: "is forging strong friendships",
        eventEndHeadline: "appears normal",
        baseMultiplier: { min: 0.90, max: 0.99 },
        fluxMultiplier: { min: 0.2, max: 0.4 },
        duration: { min: 60, max: 120 }
    },
    {
        kind: "negative",
        name: "Famine",
        eventStartHeadline: "is experiencing a famine",
        eventEndHeadline: "has sufficient food and water",
        baseMultiplier: { min: 1.01, max: 1.1 },
        fluxMultiplier: { min: 1.0, max: 1.1 },
        duration: { min: 30, max: 60 }
    },
    {
        kind: "positive",
        name: "High productivity",
        eventStartHeadline: "is hugely productive right now",
        eventEndHeadline: "is resting from their productivity push",
        baseMultiplier: { min: 0.99, max: 0.99 },
        fluxMultiplier: { min: 0.7, max: 1.2 },
        duration: { min: 30, max: 60 }
    },
    {
        kind: "positive",
        name: "Good day",
        eventStartHeadline: "is having a particularly good time",
        eventEndHeadline: "is feeling average",
        baseMultiplier: { min: 0.9, max: 0.99 },
        fluxMultiplier: { min: 0.7, max: 0.8 },
        duration: { min: 10, max: 20 }
    },
    {
        kind: "negative",
        name: "Bad day",
        eventStartHeadline: "sure looks like they're having a bad day",
        eventEndHeadline: "is ok",
        baseMultiplier: { min: 1.01, max: 1.1 },
        fluxMultiplier: { min: 0.7, max: 0.8 },
        duration: { min: 10, max: 20 }
    },
    {
        kind: "positive",
        name: "Great month",
        eventStartHeadline: "is enjoying success this month",
        eventEndHeadline: "seems fine",
        baseMultiplier: { min: 0.9, max: 0.99 },
        fluxMultiplier: { min: 0.7, max: 0.8 },
        duration: { min: 20, max: 40 }
    },
    {
        kind: "negative",
        name: "Terrible month",
        eventStartHeadline: "looks like they're struggling this month",
        eventEndHeadline: "looks like they're doing better",
        baseMultiplier: { min: 1.01, max: 1.1 },
        fluxMultiplier: { min: 0.7, max: 0.8 },
        duration: { min: 20, max: 40 }
    },
    {
        kind: "positive",
        name: "Outstanding year",
        eventStartHeadline: "is outstanding this year",
        eventEndHeadline: "up to the usual",
        baseMultiplier: { min: 0.9, max: 0.99 },
        fluxMultiplier: { min: 0.7, max: 0.8 },
        duration: { min: 80, max: 160 }
    },
    {
        kind: "negative",
        name: "Bad year",
        eventStartHeadline: "isn't having a very good year",
        eventEndHeadline: "isn't doing too bad",
        baseMultiplier: { min: 1.01, max: 1.1 },
        fluxMultiplier: { min: 0.7, max: 0.8 },
        duration: { min: 80, max: 160 }
    },
];
var RANDOM_EVENT_THRESHOLD = 0.9;
function randomIntegerBetween(min, max) {
    return Math.floor(randomDecimalBetween(min, max));
}
function setActiveEventOnNation(event, nation, state) {
    console.log('setActiveEventOnNation', event, nation);
    nation.activeEvents.push(event);
    state.events.emit(events_1.DomainEvents.nationEventOccurred, nation, event.eventStartHeadline);
}
function endActiveEventOnNation(event, nation, state) {
    var index = nation.activeEvents.indexOf(event);
    if (index >= 0) {
        nation.activeEvents.splice(index, 1);
        nation.historicalEvents.push(event);
        state.events.emit(events_1.DomainEvents.nationEventEnded, nation, event.eventEndHeadline);
    }
}
function checkForExpiringNationEvents(state) {
    var now = Date.now();
    state.nations.forEach(function (nation) {
        nation.activeEvents.forEach(function (event) {
            if (event.triggeredTime + event.duration * 1000 <= now) {
                console.log("Expiring an event!!!", now, event);
                endActiveEventOnNation(event, nation, state);
            }
        });
    });
}
exports.checkForExpiringNationEvents = checkForExpiringNationEvents;
function runRandomNationEvents(state) {
    if (Math.random() > RANDOM_EVENT_THRESHOLD) {
        console.log("A RANDOM EVENT OCCURRED!!!");
        var eventType = nationEventTypes[randomIntegerBetween(0, nationEventTypes.length)];
        var chosenNation = state.nations[randomIntegerBetween(0, state.nations.length)];
        if (chosenNation.activeEvents.length == 0 || (chosenNation.activeEvents.length == 1 && chosenNation.activeEvents[0].kind == eventType.kind)) {
            var event_1 = {
                baseMultiplier: randomDecimalBetween(eventType.baseMultiplier.min, eventType.baseMultiplier.max),
                fluxMultiplier: randomDecimalBetween(eventType.fluxMultiplier.min, eventType.fluxMultiplier.max),
                name: eventType.name,
                eventStartHeadline: eventType.eventStartHeadline,
                eventEndHeadline: eventType.eventEndHeadline,
                duration: randomIntegerBetween(eventType.duration.min, eventType.duration.max),
                triggeredTime: Date.now(),
                kind: eventType.kind,
            };
            setActiveEventOnNation(event_1, chosenNation, state);
        }
    }
}
exports.runRandomNationEvents = runRandomNationEvents;
var randomArrayElement = function (arr) {
    return arr[randomIntegerBetween(0, arr.length)];
};
exports.addRevenueToRootAcount = function (state, revenueAmount) {
    state.rootAccount.balance += revenueAmount;
    state.events.emit(events_1.DomainEvents.accountBalanceChanged, state.rootAccount);
};
exports.startRumorAction = {
    cost: 1000,
    name: "START RUMOR",
    eventType: {
        name: "Start Rumor",
        successRate: 0.90,
        successHeadlines: [
            "has reported good market behavior",
        ],
        failureHeadlines: [
            "was caught lying about national income",
        ],
        successBaseMultiplier: { min: 0.95, max: 0.99 },
        successFluxMultiplier: { min: 0.7, max: 0.8 },
        failureBaseMultiplier: { min: 1.01, max: 1.05 },
        failureFluxMultiplier: { min: 0.7, max: 0.8 },
        duration: { min: 80, max: 160 }
    },
};
exports.bribePoliticianAction = {
    cost: 10000,
    name: "BRIBE POLITICIAN",
    eventType: {
        name: "Bribe",
        successRate: 0.75,
        successHeadlines: [
            "is doing inexplicably well today",
        ],
        failureHeadlines: [
            "is suffering from a bribery scandal",
        ],
        successBaseMultiplier: { min: 0.9, max: 0.99 },
        successFluxMultiplier: { min: 0.7, max: 0.8 },
        failureBaseMultiplier: { min: 1.03, max: 1.13 },
        failureFluxMultiplier: { min: 0.7, max: 0.8 },
        duration: { min: 80, max: 160 }
    },
};
exports.rigElectionAction = {
    cost: 100000,
    name: "RIG ELECTION",
    eventType: {
        name: "Rig Election",
        successRate: 0.5,
        successHeadlines: [
            "had an unforseen upset at the polls today",
        ],
        failureHeadlines: [
            "uncovered evidence that the last election was rigged",
        ],
        successBaseMultiplier: { min: 0.8, max: 0.90 },
        successFluxMultiplier: { min: 0.7, max: 0.8 },
        failureBaseMultiplier: { min: 1.10, max: 1.2 },
        failureFluxMultiplier: { min: 0.7, max: 0.8 },
        duration: { min: 80, max: 160 }
    },
};
exports.influenceActions = [
    exports.startRumorAction,
    exports.bribePoliticianAction,
    exports.rigElectionAction,
];
function getNationFromAccount(state, account) {
    return state.nations.find(function (nation) { return nation.currency.name === account.currency.name; });
}
exports.getNationFromAccount = getNationFromAccount;
function startRumor(state, account) {
    setActiveNationEventFromAction(state, account, exports.startRumorAction);
}
exports.startRumor = startRumor;
function bribePolitician(state, account) {
    setActiveNationEventFromAction(state, account, exports.bribePoliticianAction);
}
exports.bribePolitician = bribePolitician;
function rigElection(state, account) {
    setActiveNationEventFromAction(state, account, exports.rigElectionAction);
}
exports.rigElection = rigElection;
function setActiveNationEventFromAction(state, account, action) {
    if (state.rootAccount.balance < action.cost) {
        console.log("Unable to perform influence because account balance (" + shared_1.formatNumberForDisplay(state.rootAccount.balance) + ") is less than the action cost (" + shared_1.formatNumberForDisplay(action.cost) + ")");
        return;
    }
    var nation = getNationFromAccount(state, account);
    if (!nation) {
        throw new Error('unable to find nation from account');
    }
    exports.addRevenueToRootAcount(state, -action.cost);
    var event = createNationEventFromInfluenceAction(action);
    setActiveEventOnNation(event, nation, state);
}
exports.setActiveNationEventFromAction = setActiveNationEventFromAction;
function createNationEventFromInfluenceAction(action) {
    var success = Math.random() < action.eventType.successRate;
    if (success) {
        return {
            name: action.eventType.name,
            duration: randomIntegerBetween(action.eventType.duration.min, action.eventType.duration.max),
            triggeredTime: Date.now(),
            baseMultiplier: randomDecimalBetween(action.eventType.successBaseMultiplier.min, action.eventType.successBaseMultiplier.max),
            fluxMultiplier: randomDecimalBetween(action.eventType.successFluxMultiplier.min, action.eventType.successFluxMultiplier.max),
            eventStartHeadline: randomArrayElement(action.eventType.successHeadlines),
            kind: "positive",
        };
    }
    else {
        return {
            name: action.eventType.name,
            duration: randomIntegerBetween(action.eventType.duration.min, action.eventType.duration.max),
            triggeredTime: Date.now(),
            baseMultiplier: randomDecimalBetween(action.eventType.failureBaseMultiplier.min, action.eventType.failureBaseMultiplier.max),
            fluxMultiplier: randomDecimalBetween(action.eventType.failureFluxMultiplier.min, action.eventType.failureFluxMultiplier.max),
            eventStartHeadline: randomArrayElement(action.eventType.failureHeadlines),
            kind: "negative",
        };
    }
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var scenes_1 = __webpack_require__(/*! ./scenes */ "./src/scenes/index.ts");
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
var gameConfig = {
    title: 'Currency Trader',
    type: Phaser.AUTO,
    width: Styles.width,
    height: Styles.height,
    scene: scenes_1.default,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
    parent: 'game',
    backgroundColor: Styles.backgroundColor,
};
exports.game = new Phaser.Game(gameConfig);
window.addEventListener('resize', function () {
    exports.game.resize(window.innerWidth, window.innerHeight);
});


/***/ }),

/***/ "./src/scenes/boot-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/boot-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Boot',
};
/**
 * The initial scene that loads all necessary assets to the game and displays a loading bar.
 */
var BootScene = /** @class */ (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.getGameWidth = function () {
            return _this.game.scale.width;
        };
        _this.getGameHeight = function () {
            return _this.game.scale.height;
        };
        return _this;
    }
    BootScene.prototype.preload = function () {
        var _this = this;
        var halfWidth = this.getGameWidth() * 0.5;
        var halfHeight = this.getGameHeight() * 0.5;
        var progressBarHeight = 100;
        var progressBarWidth = 400;
        var progressBarContainer = this.add.rectangle(halfWidth, halfHeight, progressBarWidth, progressBarHeight, 0x000000);
        var progressBar = this.add.rectangle(halfWidth + 20 - progressBarContainer.width * 0.5, halfHeight, 10, progressBarHeight - 20, 0x888888);
        var loadingText = this.add.text(halfWidth - 75, halfHeight - 100, 'Loading...').setFontSize(24);
        var percentText = this.add.text(halfWidth - 25, halfHeight, '0%').setFontSize(24);
        var assetText = this.add.text(halfWidth - 25, halfHeight + 100, '').setFontSize(24);
        this.load.on('progress', function (value) {
            progressBar.width = (progressBarWidth - 30) * value;
            var percent = value * 100;
            percentText.setText(percent + "%");
        });
        this.load.on('fileprogress', function (file) {
            assetText.setText(file.key);
        });
        this.load.on('complete', function () {
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
            progressBar.destroy();
            progressBarContainer.destroy();
            _this.scene.start('MainMenu');
        });
        this.loadAssets();
    };
    /**
     * All assets that need to be loaded by the game (sprites, images, animations, tiles, music, etc)
     * should be added to this method. Once loaded in, the loader will keep track of them, indepedent of which scene
     * is currently active, so they can be accessed anywhere.
     */
    BootScene.prototype.loadAssets = function () {
        this.load.image('trend-up', 'assets/trend-up.svg');
        this.load.image('trend-down', 'assets/trend-down.svg');
        this.load.image('logo-png', 'assets/logo.png');
        this.load.image('logo-svg', 'assets/logo.svg');
        this.load.audio('root-maker-music-1', 'assets/root-maker-music-1.mp3');
    };
    return BootScene;
}(Phaser.Scene));
exports.BootScene = BootScene;


/***/ }),

/***/ "./src/scenes/game-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/game-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Domain = __webpack_require__(/*! src/domain */ "./src/domain/index.ts");
var events_1 = __webpack_require__(/*! src/domain/events */ "./src/domain/events.ts");
var ExchangeInterface = __webpack_require__(/*! ../components/exchange-interface */ "./src/components/exchange-interface/index.ts");
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
var line_1 = __webpack_require__(/*! src/components/line */ "./src/components/line.ts");
var rectangle_1 = __webpack_require__(/*! src/components/rectangle */ "./src/components/rectangle.ts");
var CultInterface = __webpack_require__(/*! ../components/cult-interface */ "./src/components/cult-interface/index.ts");
var Ticker = __webpack_require__(/*! src/components/ticker */ "./src/components/ticker/index.ts");
var events_2 = __webpack_require__(/*! src/shared/events */ "./src/shared/events.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.buyAmount = 0;
        _this.sellAmount = 0;
        _this.domainTickTime = 1000; // milliseconds
        _this.timeSinceLastTick = 0;
        return _this;
    }
    GameScene.prototype.init = function (data) {
        var _this = this;
        this.username = data.username || '';
        this.events.on(events_2.GameEvents.buyAmountChanged, function (amount) {
            _this.buyAmount = amount;
        });
        this.events.on(events_2.GameEvents.sellAmountChanged, function (amount) {
            _this.sellAmount = amount;
        });
        this.events.on(events_2.GameEvents.selectedAccountChanged, function (_a) {
            var account = _a.account;
            _this.selectedAccount = account;
        });
    };
    GameScene.prototype.create = function () {
        this.domainState = Domain.initDomainState({
            rootCurrencyName: 'root',
            rootCurrencyStartingAmount: 100,
            nations: [
                { currency: 'Duller', nation: 'Andromeda' },
                { currency: 'When', nation: 'Corennia' },
                { currency: 'Prawn', nation: 'Great Burton' },
                { currency: 'Pesto', nation: 'Median' },
            ],
        });
        this.music = this.sound.add('root-maker-music-1', { loop: true, volume: 1 });
        this.music.play();
        this.sound.pauseOnBlur = false;
        var exchangeTab = this.add.text(Styles.offset, Styles.tabY, 'EXCHANGE', Styles.selectedTab);
        exchangeTab.setInteractive({ useHandCursor: true });
        exchangeTab.on('pointerup', function () {
            cultTab.setStyle(Styles.unselectedTab);
            exchangeTab.setStyle(Styles.selectedTab);
            cultContainer.setVisible(false);
            exchangeContainer.setVisible(true);
        });
        var cultTab = this.add.text(exchangeTab.x + exchangeTab.width + Styles.offset * 2, Styles.tabY, 'CULT', Styles.unselectedTab);
        cultTab.setVisible(false);
        cultTab.setInteractive({ useHandCursor: true }).on('pointerup', function () {
            exchangeTab.setStyle(Styles.unselectedTab);
            cultTab.setStyle(Styles.selectedTab);
            exchangeContainer.setVisible(false);
            cultContainer.setVisible(true);
        });
        this.domainState.events.on(events_1.DomainEvents.cultCapabilityUnlocked, function () {
            cultTab.setVisible(true);
        });
        var logo = this.add.image(Styles.offset * 2, Styles.offset, 'logo-png').setOrigin(0, 0);
        // logo.setScale(0.3, 0.3); // necessary for the svg style
        line_1.addHorizontalScreenLine(this, 50);
        var usernameText = this.add.text(Styles.offset, 70, 'USERNAME', Styles.listItemStyle);
        rectangle_1.addRectangle(this, usernameText.x + usernameText.width + (Styles.offset * 2), 60, Styles.tradePage.usernameWidth, Styles.tradePage.usernameHeight, Styles.foregroundColorHex);
        this.add.text(usernameText.x + usernameText.width + (Styles.offset * 3), 60 + Styles.offset / 2, this.username, { color: Styles.textColor });
        line_1.addHorizontalScreenLine(this, 100);
        line_1.addHorizontalScreenLine(this, 700);
        var exchangeContainer = ExchangeInterface.createExchangeInterface(this, this.domainState);
        var cultContainer = CultInterface.createCultInterface(this, this.domainState).setVisible(false);
        this.tickerState = Ticker.createNewsTicker(this, this.domainState);
    };
    GameScene.prototype.update = function (time, delta) {
        this.timeSinceLastTick += delta;
        if (this.timeSinceLastTick >= this.domainTickTime) {
            console.log('tick!');
            this.timeSinceLastTick = 0;
            Domain.handleTick(this.domainState);
        }
        Ticker.updateStories(this, this.tickerState);
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;


/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var main_menu_scene_1 = __webpack_require__(/*! ./main-menu-scene */ "./src/scenes/main-menu-scene.ts");
var boot_scene_1 = __webpack_require__(/*! ./boot-scene */ "./src/scenes/boot-scene.ts");
var game_scene_1 = __webpack_require__(/*! ./game-scene */ "./src/scenes/game-scene.ts");
exports.default = [
    boot_scene_1.BootScene,
    main_menu_scene_1.MainMenuScene,
    game_scene_1.GameScene,
];


/***/ }),

/***/ "./src/scenes/main-menu-scene.ts":
/*!***************************************!*\
  !*** ./src/scenes/main-menu-scene.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
var button_1 = __webpack_require__(/*! src/components/button */ "./src/components/button.ts");
var input_box_1 = __webpack_require__(/*! src/components/input-box */ "./src/components/input-box.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'MainMenu',
};
var MainMenuScene = /** @class */ (function (_super) {
    __extends(MainMenuScene, _super);
    function MainMenuScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.username = '';
        return _this;
    }
    MainMenuScene.prototype.create = function () {
        var _this = this;
        var logoX = 300;
        var usernameTextX = 375;
        var usernameFieldX = 475;
        var loginButtonWidth = 100;
        var loginX = (Styles.width / 2) - loginButtonWidth / 2;
        var loginY = 500;
        var logoY = 200;
        var usernameY = 400;
        this.add.image(logoX, logoY, 'logo-svg').setOrigin(0, 0);
        this.add.text(usernameTextX, usernameY + 5, 'USERNAME:');
        input_box_1.createInputBox(this, usernameFieldX, usernameY, function (text) { return _this.username = text; }, 12);
        var onClick = function () {
            _this.scene.start('Game', { username: _this.username });
        };
        button_1.createButton(this, loginX, loginY, 'LOGIN', onClick, loginButtonWidth);
    };
    return MainMenuScene;
}(Phaser.Scene));
exports.MainMenuScene = MainMenuScene;


/***/ }),

/***/ "./src/shared/events.ts":
/*!******************************!*\
  !*** ./src/shared/events.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvents;
(function (GameEvents) {
    GameEvents["selectedAccountChanged"] = "game.selectedAccountChanged";
    GameEvents["buyAmountChanged"] = "game.buyAmountChanged";
    GameEvents["sellAmountChanged"] = "game.sellAmountChanged";
})(GameEvents = exports.GameEvents || (exports.GameEvents = {}));


/***/ }),

/***/ "./src/shared/index.ts":
/*!*****************************!*\
  !*** ./src/shared/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameWidth = function (scene) {
    return scene.game.scale.width;
};
exports.getGameHeight = function (scene) {
    return scene.game.scale.height;
};
exports.formatNumberForDisplay = function (n) {
    var num = parseFloat("" + n);
    if (isNaN(num)) {
        return '';
    }
    return num.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).substring(1);
};
// export const formatNumberForDisplay = (n: number | string) => {
//   return parseFloat(`${n}`).toFixed(2);
// };


/***/ }),

/***/ "./src/shared/styles.ts":
/*!******************************!*\
  !*** ./src/shared/styles.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.backgroundColor = '#A29771';
exports.foregroundColor = '#2B261C';
exports.textColor = '#CDCBC2';
exports.detailDarkColor = '#817C6A';
exports.detailLightColor = '#F2E9CC';
exports.buttonTextColor = '#4E4626';
exports.backgroundColorHex = 0xA29771;
exports.foregroundColorHex = 0x2B261C;
exports.textColorHex = 0xCDCBC2;
exports.detailDarkColorHex = 0x817C6A;
exports.detailLightColorHex = 0xF2E9CC;
exports.buttonTextColorHex = 0x4E4626;
exports.listItemStyle = { fontSize: '14px', color: exports.textColor };
exports.tradeAmountText = { fontSize: '12px', color: exports.textColor };
exports.availableRoot = { fontSize: '16px', color: '#89F663' };
exports.buttonLabelStyle = { fontSize: '14px', color: exports.foregroundColor };
exports.foregroundStyle = { color: exports.foregroundColor };
exports.selectedTab = { fontSize: '16px', color: exports.backgroundColor, backgroundColor: exports.buttonTextColor };
exports.unselectedTab = { fontSize: '16px', color: exports.buttonTextColor, backgroundColor: exports.backgroundColor };
exports.offset = 10;
exports.width = 1024;
exports.height = 768;
exports.inputBoxWidth = 150;
exports.tradePage = {
    currencyList: {
        width: 707,
        height: 534,
        x: exports.offset,
        y: 150,
        itemColor: exports.textColor,
        headerColor: exports.backgroundColor,
        headerHeight: 45,
        listItemX: exports.offset * 2,
        listItemY: 195,
    },
    tradeInterface: {
        x: 707 + 2 * exports.offset,
        exchangeTabY: 150,
        inputBoxX: exports.width - exports.offset - exports.inputBoxWidth,
    },
    transactionWidth: 287,
    usernameWidth: 254,
    usernameHeight: 30,
    inputWidth: 143,
    inputHeight: 39,
    selectedLineItemHex: 0x3E3E3D,
};
exports.cultPage = {
    followerList: {
        width: 580,
        height: 534,
        x: exports.offset,
        y: 150,
        itemColor: exports.textColor,
        headerColor: exports.backgroundColor,
        headerHeight: 45,
        listItemX: exports.offset * 2,
        listItemY: 195,
    },
    options: {
        labelStyle: exports.buttonLabelStyle,
        buttonOffsetHeight: 75,
        buttonX: 850,
        labelX: 600,
    },
    happiness: {
        x: 600,
        labelY: 525,
        meterY: 550,
        meterWidth: 415,
        meterHeight: 50,
    },
    donation: {
        labelX: 600,
        inputX: 850,
        y: 650,
    }
};
exports.tabY = 117;
exports.lineItemHeight = 30;
exports.tickerWidth = 1004;
exports.tickerHeight = 50;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2N1bHQtaW50ZXJmYWNlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V4Y2hhbmdlLWludGVyZmFjZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC1ib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGluZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZWN0YW5nbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGlja2VyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vY3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL2V2ZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdHJhZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jvb3Qtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9nYW1lLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLW1lbnUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3N0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFD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SUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvRyxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0gsSUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFN0gsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV4QixXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFD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LEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUMxRixJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEcsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5RyxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEksSUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFF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dC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFN0eWxlcyBmcm9tICdzcmMvc2hhcmVkL3N0eWxlcyc7XG5jb25zdCBidXR0b25SZXN0U3R5bGUgPSB7XG4gIGZpbGw6ICcjRkZGRkZGJyxcbn07XG5cbmNvbnN0IGJ1dHRvbkhvdmVyU3R5bGUgPSB7XG4gIGZpbGw6ICcjN0NGQzAwJyxcbn07XG5cbmNvbnN0IGJ1dHRvbkFjdGl2ZVN0eWxlID0ge1xuICBmaWxsOiAnIzg4ODg4OCcsXG59O1xuXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlRleHQge1xuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLCBvbkNsaWNrPzogKCkgPT4gdm9pZCkge1xuICAgIHN1cGVyKHNjZW5lLCB4LCB5LCB0ZXh0LCBidXR0b25SZXN0U3R5bGUpO1xuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcblxuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5lbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSlcbiAgICAgIC5vbigncG9pbnRlcnVwJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKTtcblxuICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICB0aGlzLm9uKCdwb2ludGVydXAnLCBvbkNsaWNrKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUoKSB7XG4gICAgdGhpcy5zZXRTdHlsZShidXR0b25Ib3ZlclN0eWxlKTtcbiAgfVxuXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKCkge1xuICAgIHRoaXMuc2V0U3R5bGUoYnV0dG9uUmVzdFN0eWxlKTtcbiAgfVxuXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUoKSB7XG4gICAgdGhpcy5zZXRTdHlsZShidXR0b25BY3RpdmVTdHlsZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGJ1dHRvblRleHRIb3ZlclN0eWxlID0geyBmb250U2l6ZTogJzE0cHgnLCBjb2xvcjogU3R5bGVzLmRldGFpbExpZ2h0Q29sb3IgfTtcbmV4cG9ydCBjb25zdCBidXR0b25UZXh0UmVzdFN0eWxlID0geyBmb250U2l6ZTogJzE0cHgnLCBjb2xvcjogU3R5bGVzLmJ1dHRvblRleHRDb2xvciB9O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQnV0dG9uID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIG9uQ2xpY2s6ICgpID0+IHZvaWQsIHc/OiBudW1iZXIsIGg/OiBudW1iZXIpID0+IHtcbiAgY29uc3QgdGV4dEVsZW1lbnQgPSBzY2VuZS5hZGQudGV4dCh4LCB5LCB0ZXh0LCBidXR0b25UZXh0UmVzdFN0eWxlKS5zZXRPcmlnaW4oMCwgMCk7XG4gIGNvbnN0IHdpZHRoID0gdyB8fCB0ZXh0RWxlbWVudC53aWR0aCArIFN0eWxlcy5vZmZzZXQgKiAyO1xuICBjb25zdCBoZWlnaHQgPSBoIHx8IHRleHRFbGVtZW50LmhlaWdodCArIFN0eWxlcy5vZmZzZXQgKiAyO1xuXG4gIGNvbnN0IGJveCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgU3R5bGVzLmJhY2tncm91bmRDb2xvckhleCkuc2V0T3JpZ2luKDAsIDApO1xuICBjb25zdCB0b3BMaW5lID0gc2NlbmUuYWRkLmxpbmUoMCwgMCwgeCAtIDEsIHksIHggKyB3aWR0aCwgeSwgU3R5bGVzLmRldGFpbExpZ2h0Q29sb3JIZXgpLnNldE9yaWdpbigwLCAwKTtcbiAgY29uc3QgbGVmdExpbmUgPSBzY2VuZS5hZGQubGluZSgwLCAwLCB4LCB5IC0gMSwgeCwgeSArIGhlaWdodCArIDEsIFN0eWxlcy5kZXRhaWxMaWdodENvbG9ySGV4KS5zZXRPcmlnaW4oMCwgMCk7XG4gIGNvbnN0IHJpZ2h0TGluZSA9IHNjZW5lLmFkZC5saW5lKDAsIDAsIHggKyB3aWR0aCwgeSAtIDEsIHggKyB3aWR0aCwgeSArIGhlaWdodCArIDEsIFN0eWxlcy5kZXRhaWxEYXJrQ29sb3JIZXgpLnNldE9yaWdpbigwLCAwKTtcbiAgY29uc3QgYm90dG9tTGluZSA9IHNjZW5lLmFkZC5saW5lKDAsIDAsIHggKyAxLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIFN0eWxlcy5kZXRhaWxEYXJrQ29sb3JIZXgpLnNldE9yaWdpbigwLCAwKTtcblxuICB0ZXh0RWxlbWVudC5zZXREZXB0aCgxKTtcblxuICB0ZXh0RWxlbWVudC5zZXRYKCgoYm94LndpZHRoIC0gdGV4dEVsZW1lbnQud2lkdGgpIC8gMikgKyBib3gueCk7XG4gIHRleHRFbGVtZW50LnNldFkoKChib3guaGVpZ2h0IC0gdGV4dEVsZW1lbnQuaGVpZ2h0KSAvIDIpICsgYm94LnkpO1xuXG4gIGNvbnN0IG1vdXNlSGFuZGxlckJveCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgU3R5bGVzLmJhY2tncm91bmRDb2xvckhleCwgMCkuc2V0T3JpZ2luKDAsIDApLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KTtcbiAgbW91c2VIYW5kbGVyQm94Lm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcbiAgICB0ZXh0RWxlbWVudC5zZXRTdHlsZShidXR0b25UZXh0SG92ZXJTdHlsZSlcbiAgICBib3guc2V0RmlsbFN0eWxlKFN0eWxlcy5iYWNrZ3JvdW5kQ29sb3JIZXgpXG4gIH0pO1xuICBtb3VzZUhhbmRsZXJCb3gub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB7XG4gICAgdGV4dEVsZW1lbnQuc2V0U3R5bGUoYnV0dG9uVGV4dFJlc3RTdHlsZSlcbiAgICBib3guc2V0RmlsbFN0eWxlKFN0eWxlcy5iYWNrZ3JvdW5kQ29sb3JIZXgpXG4gIH0pO1xuICBtb3VzZUhhbmRsZXJCb3gub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgIHRleHRFbGVtZW50LnNldFN0eWxlKGJ1dHRvblRleHRIb3ZlclN0eWxlKVxuICAgIGJveC5zZXRGaWxsU3R5bGUoU3R5bGVzLmRldGFpbERhcmtDb2xvckhleClcblxuICB9KTtcbiAgbW91c2VIYW5kbGVyQm94Lm9uKCdwb2ludGVydXBvdXRzaWRlJywgKCkgPT4ge1xuICAgIHRleHRFbGVtZW50LnNldFN0eWxlKGJ1dHRvblRleHRIb3ZlclN0eWxlKTtcbiAgICBib3guc2V0RmlsbFN0eWxlKFN0eWxlcy5iYWNrZ3JvdW5kQ29sb3JIZXgpXG5cbiAgfSk7XG4gIG1vdXNlSGFuZGxlckJveC5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xuICAgIHRleHRFbGVtZW50LnNldFN0eWxlKGJ1dHRvblRleHRIb3ZlclN0eWxlKTtcbiAgICBib3guc2V0RmlsbFN0eWxlKFN0eWxlcy5iYWNrZ3JvdW5kQ29sb3JIZXgpXG5cbiAgfSk7XG4gIG1vdXNlSGFuZGxlckJveC5vbigncG9pbnRlcnVwJywgb25DbGljayk7XG5cbiAgcmV0dXJuIFtcbiAgICBib3gsXG4gICAgdGV4dEVsZW1lbnQsXG4gICAgdG9wTGluZSxcbiAgICBsZWZ0TGluZSxcbiAgICByaWdodExpbmUsXG4gICAgYm90dG9tTGluZSxcbiAgICBtb3VzZUhhbmRsZXJCb3gsXG4gIF07XG59O1xuIiwiaW1wb3J0ICogYXMgQ3VsdERvbWFpbiBmcm9tICdzcmMvZG9tYWluL2N1bHQnO1xuaW1wb3J0ICogYXMgU3R5bGVzIGZyb20gJ3NyYy9zaGFyZWQvc3R5bGVzJztcbmltcG9ydCB7IGFkZFJlY3RhbmdsZSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL3JlY3RhbmdsZSc7XG5pbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICdzcmMvY29tcG9uZW50cy9idXR0b24nO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRzIH0gZnJvbSAnc3JjL2RvbWFpbic7XG5pbXBvcnQgeyBjcmVhdGVJbnB1dEJveCB9IGZyb20gJy4uL2lucHV0LWJveCc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDdWx0SW50ZXJmYWNlID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUsIGRvbWFpblN0YXRlOiBDdWx0RG9tYWluLkN1bHREb21haW5TdGF0ZSkgPT4ge1xuICBjb25zdCBjdWx0Q29udGFpbmVyID0gc2NlbmUuYWRkLmNvbnRhaW5lcigwLCAwKTtcblxuICBjcmVhdGVDdWx0SW5mbyhzY2VuZSwgY3VsdENvbnRhaW5lciwgZG9tYWluU3RhdGUpO1xuICBjcmVhdGVDdWx0T3B0aW9ucyhzY2VuZSwgY3VsdENvbnRhaW5lcik7XG4gIGNyZWF0ZUN1bHRIYXBwaW5lc3NNZXRlcihzY2VuZSwgY3VsdENvbnRhaW5lciwgZG9tYWluU3RhdGUpO1xuICBjcmVhdGVDdWx0U3VnZ2VzdGVkRG9uYXRpb25JbnB1dChzY2VuZSwgY3VsdENvbnRhaW5lciwgZG9tYWluU3RhdGUpO1xuXG4gIHJldHVybiBjdWx0Q29udGFpbmVyO1xufTtcblxuY29uc3QgaW5mb1Jvd1N0eWxlID0gU3R5bGVzLmxpc3RJdGVtU3R5bGU7XG5cbmNvbnN0IGluZm9Sb3dUZXh0WCA9IDIwO1xuY29uc3QgaW5mb1Jvd1ZhbHVlWCA9IDQ1MDtcblxuY29uc3QgaW5mb1Jvd1N0YXJ0WSA9IFN0eWxlcy5jdWx0UGFnZS5mb2xsb3dlckxpc3QueSArIFN0eWxlcy5vZmZzZXQ7XG5cbmNvbnN0IGNyZWF0ZUN1bHRJbmZvID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUsIGNvbnRhaW5lcjogUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciwgZG9tYWluU3RhdGU6IEN1bHREb21haW4uQ3VsdERvbWFpblN0YXRlKSA9PiB7XG4gIGNvbnRhaW5lci5hZGQoYWRkUmVjdGFuZ2xlKHNjZW5lLFxuICAgIFN0eWxlcy5jdWx0UGFnZS5mb2xsb3dlckxpc3QueCxcbiAgICBTdHlsZXMuY3VsdFBhZ2UuZm9sbG93ZXJMaXN0LnksXG4gICAgU3R5bGVzLmN1bHRQYWdlLmZvbGxvd2VyTGlzdC53aWR0aCxcbiAgICBTdHlsZXMuY3VsdFBhZ2UuZm9sbG93ZXJMaXN0LmhlaWdodCxcbiAgICBTdHlsZXMuZm9yZWdyb3VuZENvbG9ySGV4LFxuICApKTtcblxuICBjb250YWluZXIuYWRkKFtcbiAgICBzY2VuZS5hZGQudGV4dChpbmZvUm93VGV4dFgsIGluZm9Sb3dTdGFydFksICdGb2xsb3dlcnMnLCBpbmZvUm93U3R5bGUpLFxuICAgIHNjZW5lLmFkZC50ZXh0KGluZm9Sb3dUZXh0WCwgaW5mb1Jvd1N0YXJ0WSArIChTdHlsZXMubGluZUl0ZW1IZWlnaHQgKiAxKSwgJ0NhcGFjaXR5JywgaW5mb1Jvd1N0eWxlKSxcbiAgICBzY2VuZS5hZGQudGV4dChpbmZvUm93VGV4dFgsIGluZm9Sb3dTdGFydFkgKyAoU3R5bGVzLmxpbmVJdGVtSGVpZ2h0ICogMiksICdOZXcgRm9sbG93ZXJzIHBlciBUaWNrJywgaW5mb1Jvd1N0eWxlKSxcbiAgICBzY2VuZS5hZGQudGV4dChpbmZvUm93VGV4dFgsIGluZm9Sb3dTdGFydFkgKyAoU3R5bGVzLmxpbmVJdGVtSGVpZ2h0ICogMyksICdEb25hdGlvbnMgcGVyIFRpY2snLCBpbmZvUm93U3R5bGUpLFxuICBdKVxuXG4gIGNvbnN0IGZvbGxvd2Vyc1ZhbHVlID0gc2NlbmUuYWRkLnRleHQoaW5mb1Jvd1ZhbHVlWCwgaW5mb1Jvd1N0YXJ0WSwgZG9tYWluU3RhdGUuZm9sbG93ZXJzLnRvRml4ZWQoMiksIGluZm9Sb3dTdHlsZSk7XG4gIGNvbnN0IGNhcGFjaXR5VmFsdWUgPSBzY2VuZS5hZGQudGV4dChpbmZvUm93VmFsdWVYLCBpbmZvUm93U3RhcnRZICsgKFN0eWxlcy5saW5lSXRlbUhlaWdodCAqIDEpLCBgJHtkb21haW5TdGF0ZS5jYXBhY2l0eX1gLCBpbmZvUm93U3R5bGUpO1xuICBjb25zdCBmb2xsb3dlcnNQZXJUaWNrVmFsdWUgPSBzY2VuZS5hZGQudGV4dChpbmZvUm93VmFsdWVYLCBpbmZvUm93U3RhcnRZICsgKFN0eWxlcy5saW5lSXRlbUhlaWdodCAqIDIpLCBkb21haW5TdGF0ZS5hY3R1YWxOZXdGb2xsb3dlcnNQZXJUaWNrLnRvRml4ZWQoMiksIGluZm9Sb3dTdHlsZSk7XG4gIGNvbnN0IGRvbmF0aW9uc1BlclRpY2tWYWx1ZSA9IHNjZW5lLmFkZC50ZXh0KGluZm9Sb3dWYWx1ZVgsIGluZm9Sb3dTdGFydFkgKyAoU3R5bGVzLmxpbmVJdGVtSGVpZ2h0ICogMyksIChDdWx0RG9tYWluLmNhbGN1bGF0ZURvbmF0aW9uUGVyVGljayhkb21haW5TdGF0ZSkpLnRvRml4ZWQoMiksIGluZm9Sb3dTdHlsZSk7XG5cbiAgZG9tYWluU3RhdGUuZXZlbnRzLm9uKERvbWFpbkV2ZW50cy5mb2xsb3dlckNvdW50Q2hhbmdlZCwgKCkgPT4ge1xuICAgIGZvbGxvd2Vyc1ZhbHVlLnRleHQgPSBkb21haW5TdGF0ZS5mb2xsb3dlcnMudG9GaXhlZCgyKTtcbiAgICBkb25hdGlvbnNQZXJUaWNrVmFsdWUudGV4dCA9IChkb21haW5TdGF0ZS5mb2xsb3dlcnMgKiBkb21haW5TdGF0ZS5zdWdnZXN0ZWREb25hdGlvbikudG9GaXhlZCgyKTtcbiAgfSk7XG5cbiAgZG9tYWluU3RhdGUuZXZlbnRzLm9uKERvbWFpbkV2ZW50cy5jdWx0Q2FwYWNpdHlDaGFuZ2VkLCAoKSA9PiB7XG4gICAgY2FwYWNpdHlWYWx1ZS50ZXh0ID0gZG9tYWluU3RhdGUuY2FwYWNpdHkudG9TdHJpbmcoKTtcbiAgfSk7XG5cbiAgZG9tYWluU3RhdGUuZXZlbnRzLm9uKERvbWFpbkV2ZW50cy5mb2xsb3dlcnNQZXJUaWNrQ2hhbmdlZCwgKCkgPT4ge1xuICAgIGZvbGxvd2Vyc1BlclRpY2tWYWx1ZS50ZXh0ID0gZG9tYWluU3RhdGUuYWN0dWFsTmV3Rm9sbG93ZXJzUGVyVGljay50b0ZpeGVkKDIpO1xuICB9KTtcblxuICBkb21haW5TdGF0ZS5ldmVudHMub24oRG9tYWluRXZlbnRzLnN1Z2dlc3RlZERvbmF0aW9uQ2hhbmdlZCwgKCkgPT4ge1xuICAgIGRvbmF0aW9uc1BlclRpY2tWYWx1ZS50ZXh0ID0gKEN1bHREb21haW4uY2FsY3VsYXRlRG9uYXRpb25QZXJUaWNrKGRvbWFpblN0YXRlKSkudG9GaXhlZCgyKTtcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFkZChbZm9sbG93ZXJzVmFsdWUsIGNhcGFjaXR5VmFsdWUsIGZvbGxvd2Vyc1BlclRpY2tWYWx1ZSwgZG9uYXRpb25zUGVyVGlja1ZhbHVlXSk7XG59O1xuXG5jb25zdCBvcHRpb25zUm93VGV4dFggPSBTdHlsZXMuY3VsdFBhZ2Uub3B0aW9ucy5sYWJlbFg7XG5jb25zdCBvcHRpb25zUm93QnV0dG9uWCA9IFN0eWxlcy5jdWx0UGFnZS5vcHRpb25zLmJ1dHRvblg7XG5cbmNvbnN0IG9wdGlvbnNSb3dTdGFydFkgPSBTdHlsZXMuY3VsdFBhZ2UuZm9sbG93ZXJMaXN0LnkgKyBTdHlsZXMub2Zmc2V0O1xuY29uc3QgYnV0dG9uT2Zmc2V0SGVpZ2h0ID0gU3R5bGVzLmN1bHRQYWdlLm9wdGlvbnMuYnV0dG9uT2Zmc2V0SGVpZ2h0O1xuXG5jb25zdCBjcmVhdGVDdWx0T3B0aW9ucyA9IChzY2VuZTogUGhhc2VyLlNjZW5lLCBjb250YWluZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIpID0+IHtcbiAgY29udGFpbmVyLmFkZChbXG4gICAgc2NlbmUuYWRkLnRleHQob3B0aW9uc1Jvd1RleHRYLFN0eWxlcy5vZmZzZXQgKyBvcHRpb25zUm93U3RhcnRZLCAnQnVpbGQgUHJvbW90aW9uYWwgV2Vic2l0ZScsIFN0eWxlcy5jdWx0UGFnZS5vcHRpb25zLmxhYmVsU3R5bGUpLFxuICAgIC4uLmNyZWF0ZUJ1dHRvbihzY2VuZSwgb3B0aW9uc1Jvd0J1dHRvblgsIG9wdGlvbnNSb3dTdGFydFksICcxLDAwMCwwMDAnLCAoKSA9PiB7IH0pLFxuXG4gICAgc2NlbmUuYWRkLnRleHQob3B0aW9uc1Jvd1RleHRYLFN0eWxlcy5vZmZzZXQgKyBvcHRpb25zUm93U3RhcnRZICsgYnV0dG9uT2Zmc2V0SGVpZ2h0ICogMSwgJ0NvbnN0cnVjdCBDaHVyY2gnLCBTdHlsZXMuY3VsdFBhZ2Uub3B0aW9ucy5sYWJlbFN0eWxlKSxcbiAgICAuLi5jcmVhdGVCdXR0b24oc2NlbmUsIG9wdGlvbnNSb3dCdXR0b25YLCBvcHRpb25zUm93U3RhcnRZICsgYnV0dG9uT2Zmc2V0SGVpZ2h0ICogMSwgJzMsMDAwLDAwMCcsICgpID0+IHsgfSksXG5cbiAgICBzY2VuZS5hZGQudGV4dChvcHRpb25zUm93VGV4dFgsU3R5bGVzLm9mZnNldCArIG9wdGlvbnNSb3dTdGFydFkgKyBidXR0b25PZmZzZXRIZWlnaHQgKiAyLCAnQnVpbGQgQ29tcGxleCcsIFN0eWxlcy5jdWx0UGFnZS5vcHRpb25zLmxhYmVsU3R5bGUpLFxuICAgIC4uLmNyZWF0ZUJ1dHRvbihzY2VuZSwgb3B0aW9uc1Jvd0J1dHRvblgsIG9wdGlvbnNSb3dTdGFydFkgKyBidXR0b25PZmZzZXRIZWlnaHQgKiAyLCAnMTUsMDAwLDAwMCcsICgpID0+IHsgfSksXG4gIF0pO1xuXG59O1xuXG5jb25zdCBjcmVhdGVDdWx0SGFwcGluZXNzTWV0ZXIgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSwgY29udGFpbmVyOiBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyLCBkb21haW5TdGF0ZTogQ3VsdERvbWFpbi5DdWx0RG9tYWluU3RhdGUpID0+IHtcbiAgY29uc3QgY3VycmVudEhhcHBpbmVzc01ldGVyID0gc2NlbmUuYWRkLnJlY3RhbmdsZShTdHlsZXMuY3VsdFBhZ2UuaGFwcGluZXNzLnggKyBTdHlsZXMub2Zmc2V0ICogMC41LCBTdHlsZXMuY3VsdFBhZ2UuaGFwcGluZXNzLm1ldGVyWSArIFN0eWxlcy5vZmZzZXQgKiAwLjUsIDEsIFN0eWxlcy5jdWx0UGFnZS5oYXBwaW5lc3MubWV0ZXJIZWlnaHQgLSBTdHlsZXMub2Zmc2V0LCAweEZGMDAwMCkuc2V0T3JpZ2luKDAsIDApO1xuICBzZXRIYXBwaW5lc3NNZXRlcldpZHRoKGN1cnJlbnRIYXBwaW5lc3NNZXRlciwgZG9tYWluU3RhdGUpO1xuXG4gIGRvbWFpblN0YXRlLmV2ZW50cy5vbihEb21haW5FdmVudHMuY3VsdEhhcHBpbmVzc0NoYW5nZWQsICgpID0+IHtcbiAgICBzZXRIYXBwaW5lc3NNZXRlcldpZHRoKGN1cnJlbnRIYXBwaW5lc3NNZXRlciwgZG9tYWluU3RhdGUpO1xuICB9KTtcblxuICBjb250YWluZXIuYWRkKFtcbiAgICBzY2VuZS5hZGQudGV4dChTdHlsZXMuY3VsdFBhZ2UuaGFwcGluZXNzLngsIFN0eWxlcy5jdWx0UGFnZS5oYXBwaW5lc3MubGFiZWxZLCAnRm9sbG93ZXIgSGFwcGluZXNzJywgU3R5bGVzLmN1bHRQYWdlLm9wdGlvbnMubGFiZWxTdHlsZSksXG4gICAgLi4uYWRkUmVjdGFuZ2xlKHNjZW5lLCBTdHlsZXMuY3VsdFBhZ2UuaGFwcGluZXNzLngsIFN0eWxlcy5jdWx0UGFnZS5oYXBwaW5lc3MubWV0ZXJZLCBTdHlsZXMuY3VsdFBhZ2UuaGFwcGluZXNzLm1ldGVyV2lkdGgsIFN0eWxlcy5jdWx0UGFnZS5oYXBwaW5lc3MubWV0ZXJIZWlnaHQsIFN0eWxlcy5mb3JlZ3JvdW5kQ29sb3JIZXgpLFxuICAgIGN1cnJlbnRIYXBwaW5lc3NNZXRlcixcbiAgXSk7XG59O1xuXG5jb25zdCBzZXRIYXBwaW5lc3NNZXRlcldpZHRoID0gKG1ldGVyOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlLCBkb21haW5TdGF0ZTogQ3VsdERvbWFpbi5DdWx0RG9tYWluU3RhdGUpID0+IHtcbiAgY29uc3QgaW5uZXJNZXRlcldpZHRoID0gU3R5bGVzLmN1bHRQYWdlLmhhcHBpbmVzcy5tZXRlcldpZHRoIC0gU3R5bGVzLm9mZnNldDtcblxuICBtZXRlci53aWR0aCA9IGlubmVyTWV0ZXJXaWR0aCAqIGRvbWFpblN0YXRlLmhhcHBpbmVzcyAqIDAuMDEgfHwgMTsgLy8gQWx3YXlzIGhhdmUgc29tZSBiYXIgc2hvd2luZ1xuICBtZXRlci5maWxsQ29sb3IgPSBkb21haW5TdGF0ZS5oYXBwaW5lc3MgPiA3MFxuICAgID8gMHgwMEZGMDBcbiAgICA6IGRvbWFpblN0YXRlLmhhcHBpbmVzcyA+IDQwXG4gICAgICA/IDB4RkZGMDAwXG4gICAgICA6IDB4RkYwMDAwO1xufTtcblxuY29uc3QgY3JlYXRlQ3VsdFN1Z2dlc3RlZERvbmF0aW9uSW5wdXQgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSwgY29udGFpbmVyOiBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyLCBkb21haW5TdGF0ZTogQ3VsdERvbWFpbi5DdWx0RG9tYWluU3RhdGUpID0+IHtcbiAgY29uc3QgaW5wdXRCb3ggPSBjcmVhdGVJbnB1dEJveChzY2VuZSwgU3R5bGVzLmN1bHRQYWdlLmRvbmF0aW9uLmlucHV0WCwgU3R5bGVzLmN1bHRQYWdlLmRvbmF0aW9uLnksICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBpbnB1dHRlZE51bWJlciA9IE51bWJlci5wYXJzZUZsb2F0KHRleHQpO1xuICAgIC8vIERvbid0IGNoYW5nZSBhbnl0aGluZyB3aGVuIHRoZSB1c2VyIGJhY2tzcGFjZXMgYWxsIHRoZSB3YXkgb3IgZW50ZXJzIDBcbiAgICBpZiAoaW5wdXR0ZWROdW1iZXIgPj0gMSkge1xuICAgICAgQ3VsdERvbWFpbi5jaGFuZ2VTdWdnZXN0ZWREb25hdGlvbihkb21haW5TdGF0ZSwgaW5wdXR0ZWROdW1iZXIpO1xuICAgIH1cbiAgfSwgMTIsIHRydWUpO1xuXG4gIC8vIFRPRE86IEV3LiBUaGlzIHN1Y2tzLiBXZSBzaG91bGQgcmV0dXJuIGFuIG9iamVjdCBvciBzb21ldGhpbmcgZWFzaWVyIHRvIHdvcmsgd2l0aC5cbiAgKGlucHV0Qm94WzZdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0KS50ZXh0ID0gZG9tYWluU3RhdGUuc3VnZ2VzdGVkRG9uYXRpb24udG9TdHJpbmcoKTtcblxuICBjb250YWluZXIuYWRkKFtcbiAgICAuLi5pbnB1dEJveCxcbiAgICBzY2VuZS5hZGQudGV4dChTdHlsZXMuY3VsdFBhZ2UuZG9uYXRpb24ubGFiZWxYLCBTdHlsZXMuY3VsdFBhZ2UuZG9uYXRpb24ueSArIDUsICdcIlJlY29tbWVuZGVkXCIgV2Vla2x5IERvbmF0aW9uJywgU3R5bGVzLmN1bHRQYWdlLm9wdGlvbnMubGFiZWxTdHlsZSksXG4gIF0pO1xufTtcbiIsImltcG9ydCAqIGFzIFN0eWxlcyBmcm9tICdzcmMvc2hhcmVkL3N0eWxlcyc7XG5pbXBvcnQgeyBEb21haW5FdmVudHMgfSBmcm9tICdzcmMvZG9tYWluJztcbmltcG9ydCAqIGFzIFNoYXJlZCBmcm9tICdzcmMvc2hhcmVkJztcbmltcG9ydCB7IGFkZFJlY3RhbmdsZSB9IGZyb20gJy4uL3JlY3RhbmdsZSc7XG5pbXBvcnQgKiBhcyBUcmFkaW5nRG9tYWluIGZyb20gJ3NyYy9kb21haW4vdHJhZGluZyc7XG5pbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9idXR0b24nO1xuaW1wb3J0IHsgY3JlYXRlSW5wdXRCb3ggfSBmcm9tICcuLi9pbnB1dC1ib3gnO1xuaW1wb3J0IHsgR2FtZUV2ZW50cyB9IGZyb20gJ3NyYy9zaGFyZWQvZXZlbnRzJztcblxuaW50ZXJmYWNlIEN1cnJlbmN5RGlzcGxheVJvdyB7XG4gIGNvdW50cnk6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xuICBjdXJyZW5jeTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG4gIHRyZW5kOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2UgfCB1bmRlZmluZWQ7XG4gIGFtb3VudE93bmVkOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcbiAgZXhjaGFuZ2VSYXRlOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcbn07XG5cbmV4cG9ydCB0eXBlIEN1cnJlbmN5RGlzcGxheSA9IEN1cnJlbmN5RGlzcGxheVJvd1tdO1xuaW50ZXJmYWNlIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIHNlbGVjdGVkQWNjb3VudDogVHJhZGluZ0RvbWFpbi5BY2NvdW50O1xuICBidXlBbW91bnQ6IG51bWJlcjtcbiAgc2VsbEFtb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlRXhjaGFuZ2VJbnRlcmZhY2UgPSAoc2NlbmU6IEdhbWVTY2VuZSwgZG9tYWluU3RhdGU6IFRyYWRpbmdEb21haW4uVHJhZGluZ0RvbWFpblN0YXRlKSA9PiB7XG4gIGNvbnN0IGV4Y2hhbmdlQ29udGFpbmVyID0gc2NlbmUuYWRkLmNvbnRhaW5lcigwLCAwKTtcbiAgc2NlbmUuZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5zZWxlY3RlZEFjY291bnRDaGFuZ2VkLCB7IGFjY291bnQ6IGRvbWFpblN0YXRlLnRyYWRlQWNjb3VudHNbMF0gfSk7XG5cbiAgY3JlYXRlSW5mb0ludGVyZmFjZShzY2VuZSwgZXhjaGFuZ2VDb250YWluZXIsIGRvbWFpblN0YXRlKTtcbiAgY3JlYXRlVHJhZGVJbnRlcmZhY2Uoc2NlbmUsIGV4Y2hhbmdlQ29udGFpbmVyLCBkb21haW5TdGF0ZSk7XG4gIGNyZWF0ZVJvb3RJbnRlcmZhY2Uoc2NlbmUsIGV4Y2hhbmdlQ29udGFpbmVyLCBkb21haW5TdGF0ZSk7XG5cbiAgcmV0dXJuIGV4Y2hhbmdlQ29udGFpbmVyO1xufTtcblxuY29uc3QgZ2V0SW5mb0NvbHVtbldpZHRoID0gKHNjZW5lOiBHYW1lU2NlbmUpID0+IHtcbiAgcmV0dXJuIFNoYXJlZC5nZXRHYW1lV2lkdGgoc2NlbmUpICogMC43O1xufTtcblxuY29uc3QgZ2V0QnV5Q29sdW1uV2lkdGggPSAoc2NlbmU6IEdhbWVTY2VuZSkgPT4ge1xuICByZXR1cm4gU2hhcmVkLmdldEdhbWVXaWR0aChzY2VuZSkgKiAwLjA3NTtcbn07XG5cbmNvbnN0IGNvbHVtbkhlYWRlclN0eWxlID0geyBmb250U2l6ZTogJzE2cHgnLCBjb2xvcjogU3R5bGVzLnRyYWRlUGFnZS5jdXJyZW5jeUxpc3QuaGVhZGVyQ29sb3IgfTtcblxuY29uc3QgY291bnRyeVggPSAyMDtcbmNvbnN0IGN1cnJlbmN5WCA9IDIwMDtcbmNvbnN0IGV4Y2hhbmdlUmF0ZVggPSAzMjA7XG5jb25zdCB0cmVuZFggPSAzNzA7XG5jb25zdCB0cmVuZEJhc2VZID0gMjA3O1xuY29uc3QgYW1vdW50T3duZWRYID0gNDUwO1xuY29uc3Qgcm9vdFZhbHVlWCA9IDYxMDtcblxuY29uc3QgaGVhZGVyQ29sdW1uWSA9IDE2MDtcbmNvbnN0IGZpcnN0TGluZUl0ZW1ZID0gMjAwO1xuXG5mdW5jdGlvbiBjcmVhdGVUcmVuZChzY2VuZTogR2FtZVNjZW5lLCBvZmZzZXRZOiBudW1iZXIsIHRyZW5kOiAndXAnIHwgJ2Rvd24nKSB7XG4gIGlmICh0cmVuZCA9PT0gJ3VwJykge1xuICAgIHJldHVybiBzY2VuZS5hZGQuaW1hZ2UodHJlbmRYLCB0cmVuZEJhc2VZICsgb2Zmc2V0WSwgJ3RyZW5kLXVwJylcbiAgfSBlbHNlIGlmICh0cmVuZCA9PT0gJ2Rvd24nKSB7XG4gICAgcmV0dXJuIHNjZW5lLmFkZC5pbWFnZSh0cmVuZFgsIHRyZW5kQmFzZVkgKyBvZmZzZXRZLCAndHJlbmQtZG93bicpXG4gIH1cbn1cblxuY29uc3QgZ2V0Q3VycmVudFJvb3RWYWx1ZVRleHQgPSAoYWNjb3VudDogVHJhZGluZ0RvbWFpbi5BY2NvdW50LCBuYXRpb246IFRyYWRpbmdEb21haW4uTmF0aW9uKSA9PiB7XG4gIHJldHVybiBTaGFyZWQuZm9ybWF0TnVtYmVyRm9yRGlzcGxheShhY2NvdW50LmJhbGFuY2UgLyBuYXRpb24uY3VycmVuY3kuZXhjaGFuZ2VSYXRlKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUluZm9JbnRlcmZhY2UgPSAoc2NlbmU6IEdhbWVTY2VuZSwgY29udGFpbmVyOiBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyLCBkb21haW5TdGF0ZTogVHJhZGluZ0RvbWFpbi5UcmFkaW5nRG9tYWluU3RhdGUpID0+IHtcbiAgY29udGFpbmVyLmFkZChhZGRSZWN0YW5nbGUoc2NlbmUsXG4gICAgU3R5bGVzLnRyYWRlUGFnZS5jdXJyZW5jeUxpc3QueCxcbiAgICBTdHlsZXMudHJhZGVQYWdlLmN1cnJlbmN5TGlzdC55LFxuICAgIFN0eWxlcy50cmFkZVBhZ2UuY3VycmVuY3lMaXN0LndpZHRoLFxuICAgIFN0eWxlcy50cmFkZVBhZ2UuY3VycmVuY3lMaXN0LmhlaWdodCxcbiAgICBTdHlsZXMuZm9yZWdyb3VuZENvbG9ySGV4LFxuICApKTtcblxuICBjb250YWluZXIuYWRkKFtcbiAgICBzY2VuZS5hZGQudGV4dChjb3VudHJ5WCwgaGVhZGVyQ29sdW1uWSwgJ0NPVU5UUlknLCBjb2x1bW5IZWFkZXJTdHlsZSksXG4gICAgc2NlbmUuYWRkLnRleHQoY3VycmVuY3lYLCBoZWFkZXJDb2x1bW5ZLCAnQ1VSUkVOQ1knLCBjb2x1bW5IZWFkZXJTdHlsZSksXG4gICAgc2NlbmUuYWRkLnRleHQoYW1vdW50T3duZWRYLCBoZWFkZXJDb2x1bW5ZLCAnQU1ULiBPV05FRCcsIGNvbHVtbkhlYWRlclN0eWxlKSxcbiAgICBzY2VuZS5hZGQudGV4dChleGNoYW5nZVJhdGVYLCBoZWFkZXJDb2x1bW5ZLCAnRVhDLiBSQVRFJywgY29sdW1uSGVhZGVyU3R5bGUpLFxuICAgIHNjZW5lLmFkZC50ZXh0KHJvb3RWYWx1ZVgsIGhlYWRlckNvbHVtblksICdST09UIFZBTFVFJywgY29sdW1uSGVhZGVyU3R5bGUpLFxuICBdKTtcbiAgY29uc3Qgcm93Q2xpY2tIYW5kbGVycyA9IFtdO1xuICBjb25zdCBiYXNpY2FsbHlIaWRkZW4gPSAwLjAwMDAwMDAwMDAwMTtcblxuICBkb21haW5TdGF0ZS5uYXRpb25zLmZvckVhY2goKG5hdGlvbiwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBhY2NvdW50ID0gZG9tYWluU3RhdGUudHJhZGVBY2NvdW50cy5maW5kKChhY2NvdW50KSA9PiBhY2NvdW50LmN1cnJlbmN5Lm5hbWUgPT09IG5hdGlvbi5jdXJyZW5jeS5uYW1lKTtcbiAgICBjb25zdCB5ID0gZmlyc3RMaW5lSXRlbVkgKyAoU3R5bGVzLmxpbmVJdGVtSGVpZ2h0ICogaW5kZXgpO1xuXG4gICAgY29uc3QgY291bnRyeSA9IHNjZW5lLmFkZC50ZXh0KGNvdW50cnlYLCB5LCBuYXRpb24ubmFtZSwgU3R5bGVzLmxpc3RJdGVtU3R5bGUpO1xuICAgIGNvbnN0IGN1cnJlbmN5ID0gc2NlbmUuYWRkLnRleHQoY3VycmVuY3lYLCB5LCBuYXRpb24uY3VycmVuY3kubmFtZSwgU3R5bGVzLmxpc3RJdGVtU3R5bGUpO1xuICAgIGxldCB0cmVuZCA9IGNyZWF0ZVRyZW5kKHNjZW5lLCBTdHlsZXMubGluZUl0ZW1IZWlnaHQgKiBpbmRleCwgbmF0aW9uLmN1cnJlbmN5LnRyZW5kKTtcbiAgICBjb25zdCBhbW91bnRPd25lZCA9IHNjZW5lLmFkZC50ZXh0KGFtb3VudE93bmVkWCwgeSwgU2hhcmVkLmZvcm1hdE51bWJlckZvckRpc3BsYXkoYWNjb3VudC5iYWxhbmNlKSwgU3R5bGVzLmxpc3RJdGVtU3R5bGUpO1xuICAgIGNvbnN0IGV4Y2hhbmdlUmF0ZSA9IHNjZW5lLmFkZC50ZXh0KGV4Y2hhbmdlUmF0ZVgsIHksIFNoYXJlZC5mb3JtYXROdW1iZXJGb3JEaXNwbGF5KG5hdGlvbi5jdXJyZW5jeS5leGNoYW5nZVJhdGUpLCBTdHlsZXMubGlzdEl0ZW1TdHlsZSk7XG4gICAgY29uc3Qgcm9vdFZhbHVlID0gc2NlbmUuYWRkLnRleHQocm9vdFZhbHVlWCwgeSwgZ2V0Q3VycmVudFJvb3RWYWx1ZVRleHQoYWNjb3VudCwgbmF0aW9uKSwgU3R5bGVzLmxpc3RJdGVtU3R5bGUpO1xuICAgIGNvbnN0IHJvd0NsaWNrSGFuZGxlciA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoU3R5bGVzLm9mZnNldCArIDEsIHkgLSA3LCBTdHlsZXMudHJhZGVQYWdlLmN1cnJlbmN5TGlzdC53aWR0aCAtIDIsIFN0eWxlcy5saW5lSXRlbUhlaWdodCwgU3R5bGVzLnRyYWRlUGFnZS5zZWxlY3RlZExpbmVJdGVtSGV4LCAwLjUpLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KS5zZXRPcmlnaW4oMCwgMCk7XG4gICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgLy8gZGVmYXVsdGluZyB0aGUgZmlyc3QgY291bnRyeSAvIGN1cnJlbmN5IHRvIHNlbGVjdGVkIGhlcmUgYW5kIGluIHRoZSB0cmFkaW5nIHN0YXRlXG4gICAgICByb3dDbGlja0hhbmRsZXIuYWxwaGEgPSBiYXNpY2FsbHlIaWRkZW47XG4gICAgfVxuICAgIHJvd0NsaWNrSGFuZGxlcnMucHVzaChyb3dDbGlja0hhbmRsZXIpO1xuXG4gICAgcm93Q2xpY2tIYW5kbGVyLm9uKCdwb2ludGVydXAnLCAoKSA9PiB7XG4gICAgICBzY2VuZS5ldmVudHMuZW1pdChHYW1lRXZlbnRzLnNlbGVjdGVkQWNjb3VudENoYW5nZWQsIHsgYWNjb3VudCwgcm93Q2xpY2tIYW5kbGVyIH0pXG4gICAgfSk7XG5cbiAgICBjb250YWluZXIuYWRkKFtjb3VudHJ5LCBjdXJyZW5jeSwgdHJlbmQsIGFtb3VudE93bmVkLCBleGNoYW5nZVJhdGUsIHJvb3RWYWx1ZSwgcm93Q2xpY2tIYW5kbGVyXSk7XG5cbiAgICBkb21haW5TdGF0ZS5ldmVudHMub24oRG9tYWluRXZlbnRzLmFjY291bnRCYWxhbmNlQ2hhbmdlZCwgKCkgPT4ge1xuICAgICAgYW1vdW50T3duZWQuc2V0VGV4dChTaGFyZWQuZm9ybWF0TnVtYmVyRm9yRGlzcGxheShhY2NvdW50LmJhbGFuY2UpKTtcbiAgICAgIHJvb3RWYWx1ZS5zZXRUZXh0KGdldEN1cnJlbnRSb290VmFsdWVUZXh0KGFjY291bnQsIG5hdGlvbikpO1xuICAgIH0pO1xuXG4gICAgZG9tYWluU3RhdGUuZXZlbnRzLm9uKERvbWFpbkV2ZW50cy5leGNoYW5nZVJhdGVzQ2hhbmdlZCwgKCkgPT4ge1xuICAgICAgZXhjaGFuZ2VSYXRlLnNldFRleHQoU2hhcmVkLmZvcm1hdE51bWJlckZvckRpc3BsYXkobmF0aW9uLmN1cnJlbmN5LmV4Y2hhbmdlUmF0ZSkpO1xuICAgICAgcm9vdFZhbHVlLnNldFRleHQoZ2V0Q3VycmVudFJvb3RWYWx1ZVRleHQoYWNjb3VudCwgbmF0aW9uKSk7XG4gICAgICBpZiAodHJlbmQpIHtcbiAgICAgICAgdHJlbmQuZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgdHJlbmQgPSBjcmVhdGVUcmVuZChzY2VuZSwgU3R5bGVzLmxpbmVJdGVtSGVpZ2h0ICogaW5kZXgsIG5hdGlvbi5jdXJyZW5jeS50cmVuZCk7XG4gICAgICBjb250YWluZXIuYWRkKHRyZW5kKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgc2NlbmUuZXZlbnRzLm9uKEdhbWVFdmVudHMuc2VsZWN0ZWRBY2NvdW50Q2hhbmdlZCwgKGV2ZW50KSA9PiB7XG5cbiAgICByb3dDbGlja0hhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgIGhhbmRsZXIuYWxwaGEgPSBiYXNpY2FsbHlIaWRkZW47XG4gICAgfSk7XG5cbiAgICBldmVudC5yb3dDbGlja0hhbmRsZXIuYWxwaGEgPSAwLjU7XG4gIH0pO1xuXG59O1xuXG5jb25zdCBjcmVhdGVSb290SW50ZXJmYWNlID0gKHNjZW5lOiBHYW1lU2NlbmUsIGNvbnRhaW5lcjogUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciwgZG9tYWluU3RhdGU6IFRyYWRpbmdEb21haW4uVHJhZGluZ0RvbWFpblN0YXRlKSA9PiB7XG4gIGNvbnN0IGJveCA9IGFkZFJlY3RhbmdsZShzY2VuZSwgU3R5bGVzLndpZHRoIC0gU3R5bGVzLm9mZnNldCAtIFN0eWxlcy50cmFkZVBhZ2UudXNlcm5hbWVXaWR0aCwgNjAsIFN0eWxlcy50cmFkZVBhZ2UudXNlcm5hbWVXaWR0aCwgU3R5bGVzLnRyYWRlUGFnZS51c2VybmFtZUhlaWdodCwgU3R5bGVzLmZvcmVncm91bmRDb2xvckhleCk7XG4gIGNvbnN0IHJvb3RJbmZvVGV4dCA9IHNjZW5lLmFkZC50ZXh0KDYyNSwgNzAsICdBVkFJTEFCTEUgUk9PVCcsIFN0eWxlcy5saXN0SXRlbVN0eWxlKTtcbiAgY29uc3Qgcm9vdFZhbHVlVGV4dCA9IHNjZW5lLmFkZC50ZXh0KHJvb3RJbmZvVGV4dC54ICsgcm9vdEluZm9UZXh0LndpZHRoICsgMzAsIHJvb3RJbmZvVGV4dC55IC0gMywgU2hhcmVkLmZvcm1hdE51bWJlckZvckRpc3BsYXkoZG9tYWluU3RhdGUucm9vdEFjY291bnQuYmFsYW5jZSksIFN0eWxlcy5hdmFpbGFibGVSb290KTtcblxuICBkb21haW5TdGF0ZS5ldmVudHMub24oRG9tYWluRXZlbnRzLmFjY291bnRCYWxhbmNlQ2hhbmdlZCwgKGFjY291bnQ6IFRyYWRpbmdEb21haW4uQWNjb3VudCkgPT4ge1xuICAgIGlmIChhY2NvdW50Lm5hbWUgPT09IGRvbWFpblN0YXRlLnJvb3RBY2NvdW50Lm5hbWUpIHtcbiAgICAgIHJvb3RWYWx1ZVRleHQuc2V0VGV4dChTaGFyZWQuZm9ybWF0TnVtYmVyRm9yRGlzcGxheShkb21haW5TdGF0ZS5yb290QWNjb3VudC5iYWxhbmNlKSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGdldEJ1eUFtb3VudFRleHQgKHNjZW5lOiBHYW1lU2NlbmUpIHtcbiAgY29uc3QgY3VycmVuY3lBbW91bnQgPSBTaGFyZWQuZm9ybWF0TnVtYmVyRm9yRGlzcGxheShzY2VuZS5idXlBbW91bnQgKiBzY2VuZS5zZWxlY3RlZEFjY291bnQuY3VycmVuY3kuZXhjaGFuZ2VSYXRlKTtcbiAgY29uc3QgY3VycmVuY3lUeXBlID0gc2NlbmUuc2VsZWN0ZWRBY2NvdW50LmN1cnJlbmN5Lm5hbWU7XG4gIGNvbnN0IHJvb3RBbW91bnQgPSBTaGFyZWQuZm9ybWF0TnVtYmVyRm9yRGlzcGxheShzY2VuZS5idXlBbW91bnQpO1xuICByZXR1cm4gYEJVWSAke2N1cnJlbmN5QW1vdW50fSAke2N1cnJlbmN5VHlwZX0gRk9SICR7cm9vdEFtb3VudH0gUk9PVGBcbn07XG5cbmZ1bmN0aW9uIGdldFNlbGxBbW91bnRUZXh0IChzY2VuZTogR2FtZVNjZW5lKSB7XG4gIGNvbnN0IGN1cnJlbmN5QW1vdW50ID0gU2hhcmVkLmZvcm1hdE51bWJlckZvckRpc3BsYXkoc2NlbmUuc2VsbEFtb3VudCk7XG4gIGNvbnN0IGN1cnJlbmN5VHlwZSA9IHNjZW5lLnNlbGVjdGVkQWNjb3VudC5jdXJyZW5jeS5uYW1lO1xuICBjb25zdCByb290QW1vdW50ID0gU2hhcmVkLmZvcm1hdE51bWJlckZvckRpc3BsYXkoc2NlbmUuc2VsbEFtb3VudCAvIHNjZW5lLnNlbGVjdGVkQWNjb3VudC5jdXJyZW5jeS5leGNoYW5nZVJhdGUpO1xuICByZXR1cm4gYFNFTEwgJHtjdXJyZW5jeUFtb3VudH0gJHtjdXJyZW5jeVR5cGV9IEZPUiAke3Jvb3RBbW91bnR9IFJPT1RgXG59O1xuXG5jb25zdCBjcmVhdGVUcmFkZUludGVyZmFjZSA9IChzY2VuZTogR2FtZVNjZW5lLCBjb250YWluZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIsIGRvbWFpblN0YXRlOiBUcmFkaW5nRG9tYWluLlRyYWRpbmdEb21haW5TdGF0ZSkgPT4ge1xuICBjb25zdCBidXlDb250YWluZXIgPSBzY2VuZS5hZGQuY29udGFpbmVyKDAsIDApO1xuICBjb25zdCBzZWxsQ29udGFpbmVyID0gc2NlbmUuYWRkLmNvbnRhaW5lcigwLCAwKTtcbiAgY29uc3QgaW5mbHVlbmNlQ29udGFpbmVyID0gc2NlbmUuYWRkLmNvbnRhaW5lcigwLCAwKTtcblxuICBjb25zdCBidXlUYWIgPSBzY2VuZS5hZGQudGV4dChTdHlsZXMudHJhZGVQYWdlLnRyYWRlSW50ZXJmYWNlLngsIFN0eWxlcy50cmFkZVBhZ2UudHJhZGVJbnRlcmZhY2UuZXhjaGFuZ2VUYWJZLCAnQlVZJywgU3R5bGVzLnNlbGVjdGVkVGFiKTtcbiAgYnV5VGFiLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KTtcbiAgYnV5VGFiLm9uKCdwb2ludGVydXAnLCAoKSA9PiB7XG4gICAgc2VsbFRhYi5zZXRTdHlsZShTdHlsZXMudW5zZWxlY3RlZFRhYik7XG4gICAgaW5mbHVlbmNlVGFiLnNldFN0eWxlKFN0eWxlcy51bnNlbGVjdGVkVGFiKTtcbiAgICBidXlUYWIuc2V0U3R5bGUoU3R5bGVzLnNlbGVjdGVkVGFiKTtcbiAgICBpbmZsdWVuY2VDb250YWluZXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgc2VsbENvbnRhaW5lci5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICBidXlDb250YWluZXIuc2V0VmlzaWJsZSh0cnVlKTtcbiAgfSk7XG5cbiAgY29uc3Qgc2VsbFRhYiA9IHNjZW5lLmFkZC50ZXh0KGJ1eVRhYi54ICsgYnV5VGFiLndpZHRoICsgU3R5bGVzLm9mZnNldCAqIDIsIFN0eWxlcy50cmFkZVBhZ2UudHJhZGVJbnRlcmZhY2UuZXhjaGFuZ2VUYWJZLCAnU0VMTCcsIFN0eWxlcy51bnNlbGVjdGVkVGFiKTtcbiAgc2VsbFRhYi5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSkub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcbiAgICBidXlUYWIuc2V0U3R5bGUoU3R5bGVzLnVuc2VsZWN0ZWRUYWIpO1xuICAgIGluZmx1ZW5jZVRhYi5zZXRTdHlsZShTdHlsZXMudW5zZWxlY3RlZFRhYik7XG4gICAgc2VsbFRhYi5zZXRTdHlsZShTdHlsZXMuc2VsZWN0ZWRUYWIpO1xuICAgIGluZmx1ZW5jZUNvbnRhaW5lci5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICBidXlDb250YWluZXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgc2VsbENvbnRhaW5lci5zZXRWaXNpYmxlKHRydWUpO1xuICB9KTtcblxuICBjb25zdCBpbmZsdWVuY2VUYWIgPSBzY2VuZS5hZGQudGV4dChzZWxsVGFiLnggKyBzZWxsVGFiLndpZHRoICsgU3R5bGVzLm9mZnNldCAqIDIsIFN0eWxlcy50cmFkZVBhZ2UudHJhZGVJbnRlcmZhY2UuZXhjaGFuZ2VUYWJZLCAnSU5GTFVFTkNFJywgU3R5bGVzLnVuc2VsZWN0ZWRUYWIpO1xuICBpbmZsdWVuY2VUYWIuc2V0VmlzaWJsZShmYWxzZSk7XG4gIGluZmx1ZW5jZVRhYi5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSkub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcbiAgICBpbmZsdWVuY2VUYWIuc2V0U3R5bGUoU3R5bGVzLnNlbGVjdGVkVGFiKTtcbiAgICBidXlUYWIuc2V0U3R5bGUoU3R5bGVzLnVuc2VsZWN0ZWRUYWIpO1xuICAgIHNlbGxUYWIuc2V0U3R5bGUoU3R5bGVzLnVuc2VsZWN0ZWRUYWIpO1xuICAgIGluZmx1ZW5jZUNvbnRhaW5lci5zZXRWaXNpYmxlKHRydWUpO1xuICAgIGJ1eUNvbnRhaW5lci5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICBzZWxsQ29udGFpbmVyLnNldFZpc2libGUoZmFsc2UpO1xuICB9KTtcbiAgZG9tYWluU3RhdGUuZXZlbnRzLm9uKERvbWFpbkV2ZW50cy5pbmZsdWVuY2VDYXBhYmlsaXR5VW5sb2NrZWQsICgpID0+IGluZmx1ZW5jZVRhYi5zZXRWaXNpYmxlKHRydWUpKTtcblxuICBjb25zdCBzcGVuZEFtb3VudFRleHQgPSBzY2VuZS5hZGQudGV4dChTdHlsZXMudHJhZGVQYWdlLnRyYWRlSW50ZXJmYWNlLngsIDIxMCwgJ0JVWSBBTU9VTlQnLCBTdHlsZXMubGlzdEl0ZW1TdHlsZSk7XG4gIGNvbnN0IGJ1eUlucHV0Qm94ID0gY3JlYXRlSW5wdXRCb3goc2NlbmUsIFN0eWxlcy50cmFkZVBhZ2UudHJhZGVJbnRlcmZhY2UuaW5wdXRCb3hYLCAxOTUsICh0ZXh0KSA9PiB7XG4gICAgY29uc3QgYW1vdW50ID0gTnVtYmVyLnBhcnNlRmxvYXQodGV4dCk7XG4gICAgaWYgKCFOdW1iZXIuaXNOYU4oYW1vdW50KSkge1xuICAgICAgc2NlbmUuZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5idXlBbW91bnRDaGFuZ2VkLCBhbW91bnQpO1xuICAgIH1cbiAgfSwgdW5kZWZpbmVkLCB0cnVlKTtcbiAgY29uc3QgYnV5QW1vdW50VGV4dCA9IHNjZW5lLmFkZC50ZXh0KFN0eWxlcy50cmFkZVBhZ2UudHJhZGVJbnRlcmZhY2UueCwgMjYwLCBnZXRCdXlBbW91bnRUZXh0KHNjZW5lKSwgU3R5bGVzLnRyYWRlQW1vdW50VGV4dCk7XG5cbiAgYnV5Q29udGFpbmVyLmFkZChbXG4gICAgc3BlbmRBbW91bnRUZXh0LFxuICAgIC4uLmJ1eUlucHV0Qm94LFxuICAgIGJ1eUFtb3VudFRleHQsXG4gIF0pO1xuXG4gIGNvbnN0IHNlbGxBbW91bnRMYWJlbCA9IHNjZW5lLmFkZC50ZXh0KFN0eWxlcy50cmFkZVBhZ2UudHJhZGVJbnRlcmZhY2UueCwgMjEwLCAnU0VMTCBBTU9VTlQnLCBTdHlsZXMubGlzdEl0ZW1TdHlsZSk7XG4gIGNvbnN0IHNlbGxJbnB1dEJveCA9IGNyZWF0ZUlucHV0Qm94KHNjZW5lLCBTdHlsZXMudHJhZGVQYWdlLnRyYWRlSW50ZXJmYWNlLmlucHV0Qm94WCwgMTk1LCAodGV4dCkgPT4ge1xuICAgIGNvbnN0IGFtb3VudCA9IE51bWJlci5wYXJzZUZsb2F0KHRleHQpO1xuICAgIGlmICghTnVtYmVyLmlzTmFOKGFtb3VudCkpIHtcbiAgICAgIHNjZW5lLmV2ZW50cy5lbWl0KEdhbWVFdmVudHMuc2VsbEFtb3VudENoYW5nZWQsIGFtb3VudCk7XG4gICAgfVxuICB9LCB1bmRlZmluZWQsIHRydWUpO1xuXG4gIGNvbnN0IHNlbGxBbW91bnRUZXh0ID0gc2NlbmUuYWRkLnRleHQoU3R5bGVzLnRyYWRlUGFnZS50cmFkZUludGVyZmFjZS54LCAyNjAsIGdldFNlbGxBbW91bnRUZXh0KHNjZW5lKSwgU3R5bGVzLnRyYWRlQW1vdW50VGV4dCk7XG5cbiAgc2VsbENvbnRhaW5lci5hZGQoW1xuICAgIHNlbGxBbW91bnRMYWJlbCxcbiAgICAuLi5zZWxsSW5wdXRCb3gsXG4gICAgc2VsbEFtb3VudFRleHQsXG4gIF0pO1xuXG4gIGNvbnN0IGJ1eSA9ICgpID0+IHtcbiAgICBpZiAoc2NlbmUuc2VsZWN0ZWRBY2NvdW50KSB7XG4gICAgICBUcmFkaW5nRG9tYWluLnJlY29yZFRyYWRlKGRvbWFpblN0YXRlLnJvb3RBY2NvdW50LCBzY2VuZS5zZWxlY3RlZEFjY291bnQsIHNjZW5lLmJ1eUFtb3VudCwgc2NlbmUuc2VsZWN0ZWRBY2NvdW50LmN1cnJlbmN5LmV4Y2hhbmdlUmF0ZSwgZG9tYWluU3RhdGUpXG4gICAgfVxuICB9O1xuICBjb25zdCBzZWxsID0gKCkgPT4ge1xuICAgIGlmIChzY2VuZS5zZWxlY3RlZEFjY291bnQpIHtcbiAgICAgIGNvbnN0IGV4Y2hhbmdlUmF0ZSA9IGRvbWFpblN0YXRlLnJvb3RBY2NvdW50LmN1cnJlbmN5LmV4Y2hhbmdlUmF0ZSAvIHNjZW5lLnNlbGVjdGVkQWNjb3VudC5jdXJyZW5jeS5leGNoYW5nZVJhdGU7XG4gICAgICBUcmFkaW5nRG9tYWluLnJlY29yZFRyYWRlKHNjZW5lLnNlbGVjdGVkQWNjb3VudCwgZG9tYWluU3RhdGUucm9vdEFjY291bnQsIHNjZW5lLnNlbGxBbW91bnQsIGV4Y2hhbmdlUmF0ZSwgZG9tYWluU3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHNjZW5lLmV2ZW50cy5vbihHYW1lRXZlbnRzLnNlbGVjdGVkQWNjb3VudENoYW5nZWQsIChldmVudCkgPT4ge1xuICAgIGJ1eUFtb3VudFRleHQudGV4dCA9IGdldEJ1eUFtb3VudFRleHQoc2NlbmUpO1xuICAgIHNlbGxBbW91bnRUZXh0LnRleHQgPSBnZXRTZWxsQW1vdW50VGV4dChzY2VuZSk7XG4gIH0pO1xuXG4gIHNjZW5lLmV2ZW50cy5vbihHYW1lRXZlbnRzLmJ1eUFtb3VudENoYW5nZWQsIChldmVudCkgPT4ge1xuICAgIGJ1eUFtb3VudFRleHQudGV4dCA9IGdldEJ1eUFtb3VudFRleHQoc2NlbmUpO1xuICB9KTtcblxuICBzY2VuZS5ldmVudHMub24oR2FtZUV2ZW50cy5zZWxsQW1vdW50Q2hhbmdlZCwgKGV2ZW50KSA9PiB7XG4gICAgc2VsbEFtb3VudFRleHQudGV4dCA9IGdldFNlbGxBbW91bnRUZXh0KHNjZW5lKTtcbiAgfSk7XG5cbiAgZG9tYWluU3RhdGUuZXZlbnRzLm9uKERvbWFpbkV2ZW50cy5leGNoYW5nZVJhdGVzQ2hhbmdlZCwgKGV2ZW50KSA9PiB7XG4gICAgYnV5QW1vdW50VGV4dC50ZXh0ID0gZ2V0QnV5QW1vdW50VGV4dChzY2VuZSk7XG4gICAgc2VsbEFtb3VudFRleHQudGV4dCA9IGdldFNlbGxBbW91bnRUZXh0KHNjZW5lKTtcbiAgfSk7XG5cbiAgYnV5Q29udGFpbmVyLmFkZChjcmVhdGVCdXR0b24oc2NlbmUsIFN0eWxlcy53aWR0aCAtIDEwMCAtIFN0eWxlcy5vZmZzZXQsIDMwMCwgJ0JVWScsIGJ1eSwgMTAwKSk7XG4gIHNlbGxDb250YWluZXIuYWRkKGNyZWF0ZUJ1dHRvbihzY2VuZSwgU3R5bGVzLndpZHRoIC0gMTAwIC0gU3R5bGVzLm9mZnNldCwgMzAwLCAnU0VMTCcsIHNlbGwsIDEwMCkpO1xuXG4gIGxldCBpbmZsdWVuY2VZID0gMjEwO1xuICBjb25zdCBpbmZsdWVuY2VCdXR0b25XaWR0aCA9IDEwMDtcblxuICBpbmZsdWVuY2VDb250YWluZXIuYWRkKHNjZW5lLmFkZC50ZXh0KFN0eWxlcy50cmFkZVBhZ2UudHJhZGVJbnRlcmZhY2UueCwgaW5mbHVlbmNlWSwgVHJhZGluZ0RvbWFpbi5zdGFydFJ1bW9yQWN0aW9uLm5hbWUsIFN0eWxlcy5saXN0SXRlbVN0eWxlKSk7XG4gIGluZmx1ZW5jZUNvbnRhaW5lci5hZGQoY3JlYXRlQnV0dG9uKHNjZW5lLCBTdHlsZXMud2lkdGggLSBpbmZsdWVuY2VCdXR0b25XaWR0aCAtIFN0eWxlcy5vZmZzZXQsIGluZmx1ZW5jZVkgLSAxMCwgU2hhcmVkLmZvcm1hdE51bWJlckZvckRpc3BsYXkoVHJhZGluZ0RvbWFpbi5zdGFydFJ1bW9yQWN0aW9uLmNvc3QpLCAoKSA9PiBUcmFkaW5nRG9tYWluLnN0YXJ0UnVtb3IoZG9tYWluU3RhdGUsIHNjZW5lLnNlbGVjdGVkQWNjb3VudCksIGluZmx1ZW5jZUJ1dHRvbldpZHRoKSk7XG4gIGluZmx1ZW5jZVkgKz0gNTA7XG5cbiAgaW5mbHVlbmNlQ29udGFpbmVyLmFkZChzY2VuZS5hZGQudGV4dChTdHlsZXMudHJhZGVQYWdlLnRyYWRlSW50ZXJmYWNlLngsIGluZmx1ZW5jZVksIFRyYWRpbmdEb21haW4uYnJpYmVQb2xpdGljaWFuQWN0aW9uLm5hbWUsIFN0eWxlcy5saXN0SXRlbVN0eWxlKSk7XG4gIGluZmx1ZW5jZUNvbnRhaW5lci5hZGQoY3JlYXRlQnV0dG9uKHNjZW5lLCBTdHlsZXMud2lkdGggLSBpbmZsdWVuY2VCdXR0b25XaWR0aCAtIFN0eWxlcy5vZmZzZXQsIGluZmx1ZW5jZVkgLSAxMCwgU2hhcmVkLmZvcm1hdE51bWJlckZvckRpc3BsYXkoVHJhZGluZ0RvbWFpbi5icmliZVBvbGl0aWNpYW5BY3Rpb24uY29zdCksICgpID0+IFRyYWRpbmdEb21haW4uYnJpYmVQb2xpdGljaWFuKGRvbWFpblN0YXRlLCBzY2VuZS5zZWxlY3RlZEFjY291bnQpLCBpbmZsdWVuY2VCdXR0b25XaWR0aCkpO1xuICBpbmZsdWVuY2VZICs9IDUwO1xuXG5cbiAgaW5mbHVlbmNlQ29udGFpbmVyLmFkZChzY2VuZS5hZGQudGV4dChTdHlsZXMudHJhZGVQYWdlLnRyYWRlSW50ZXJmYWNlLngsIGluZmx1ZW5jZVksIFRyYWRpbmdEb21haW4ucmlnRWxlY3Rpb25BY3Rpb24ubmFtZSwgU3R5bGVzLmxpc3RJdGVtU3R5bGUpKTtcbiAgaW5mbHVlbmNlQ29udGFpbmVyLmFkZChjcmVhdGVCdXR0b24oc2NlbmUsIFN0eWxlcy53aWR0aCAtIGluZmx1ZW5jZUJ1dHRvbldpZHRoIC0gU3R5bGVzLm9mZnNldCwgaW5mbHVlbmNlWSAtIDEwLCBTaGFyZWQuZm9ybWF0TnVtYmVyRm9yRGlzcGxheShUcmFkaW5nRG9tYWluLnJpZ0VsZWN0aW9uQWN0aW9uLmNvc3QpLCAoKSA9PiBUcmFkaW5nRG9tYWluLnJpZ0VsZWN0aW9uKGRvbWFpblN0YXRlLCBzY2VuZS5zZWxlY3RlZEFjY291bnQpLCBpbmZsdWVuY2VCdXR0b25XaWR0aCkpO1xuICBpbmZsdWVuY2VZICs9IDUwO1xuXG4gIC8vIGNvbnN0IHNlbGxJbnB1dEJveCA9IGNyZWF0ZUlucHV0Qm94KHNjZW5lLCBTdHlsZXMudHJhZGVQYWdlLnRyYWRlSW50ZXJmYWNlLmlucHV0Qm94WCwgMTk1LCAodGV4dCkgPT4ge1xuICAvLyAgIGNvbnN0IGFtb3VudCA9IE51bWJlci5wYXJzZUZsb2F0KHRleHQpO1xuICAvLyAgIGlmICghTnVtYmVyLmlzTmFOKGFtb3VudCkpIHtcbiAgLy8gICAgIHNjZW5lLmV2ZW50cy5lbWl0KEdhbWVFdmVudHMuc2VsbEFtb3VudENoYW5nZWQsIGFtb3VudCk7XG4gIC8vICAgfVxuICAvLyB9LCB1bmRlZmluZWQsIHRydWUpO1xuXG4gIHNlbGxDb250YWluZXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gIGluZmx1ZW5jZUNvbnRhaW5lci5zZXRWaXNpYmxlKGZhbHNlKTtcblxuICBjb250YWluZXIuYWRkKGJ1eUNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hZGQoYnV5VGFiKTtcbiAgY29udGFpbmVyLmFkZChzZWxsQ29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFkZChzZWxsVGFiKTtcbiAgY29udGFpbmVyLmFkZChpbmZsdWVuY2VDb250YWluZXIpO1xuICBjb250YWluZXIuYWRkKGluZmx1ZW5jZVRhYik7XG59O1xuIiwiaW1wb3J0IHsgYWRkUmVjdGFuZ2xlIH0gZnJvbSAnLi9yZWN0YW5nbGUnO1xuaW1wb3J0ICogYXMgU3R5bGVzIGZyb20gJ3NyYy9zaGFyZWQvc3R5bGVzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUlucHV0Qm94ID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBjYWxsYmFjazogKHRleHQ6IHN0cmluZykgPT4gdm9pZCwgbWF4TGVuZ3RoPzogbnVtYmVyLCBudW1iZXJzT25seTogYm9vbGVhbiA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHRleHRGaWVsZFN0YXRlID0ge1xuICAgIGlzRWRpdGFibGU6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0IHJlY3RhbmdsZUVsZW1lbnRzID0gYWRkUmVjdGFuZ2xlKHNjZW5lLCB4LCB5LCBTdHlsZXMuaW5wdXRCb3hXaWR0aCwgMzAsIFN0eWxlcy5mb3JlZ3JvdW5kQ29sb3JIZXgpO1xuICBjb25zdCBjdXJzb3IgPSBzY2VuZS5hZGQucmVjdGFuZ2xlKHggKyA4LCB5ICsgNSwgMTAsIDIwLCBTdHlsZXMudGV4dENvbG9ySGV4KS5zZXRPcmlnaW4oMCwwKTtcbiAgY3Vyc29yLnNldFZpc2libGUoZmFsc2UpO1xuICBjb25zdCBpbnB1dEJveCA9IHJlY3RhbmdsZUVsZW1lbnRzWzBdO1xuICBpbnB1dEJveC5zZXRJbnRlcmFjdGl2ZSgpO1xuXG4gIGNvbnN0IHRleHRGaWVsZCA9IHNjZW5lLmFkZC50ZXh0KHggKyA1LCB5ICsgU3R5bGVzLm9mZnNldCAvIDIsICcnLCB7IGNvbG9yOiBTdHlsZXMudGV4dENvbG9yIH0pO1xuXG4gIHNjZW5lLmlucHV0Lm9uKCdwb2ludGVydXAnLCAocG9pbnRlciwgY3VycmVudGx5T3ZlcjogYW55W10pID0+IHtcbiAgICB0ZXh0RmllbGRTdGF0ZS5pc0VkaXRhYmxlID0gXy5zb21lKGN1cnJlbnRseU92ZXIsIChnYW1lT2JqZWN0KSA9PiBnYW1lT2JqZWN0ID09PSBpbnB1dEJveCB8fCBnYW1lT2JqZWN0ID09PSB0ZXh0RmllbGQpO1xuICAgIGlmICh0ZXh0RmllbGRTdGF0ZS5pc0VkaXRhYmxlKSB7XG4gICAgICBjdXJzb3Iuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3Vyc29yLnNldFZpc2libGUoZmFsc2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbWF4Q2hhcmFjdGVyTGVuZ3RoID0gbWF4TGVuZ3RoIHx8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuXG4gIC8vIGtleVNwYWNlID0gc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TUEFDRSk7XG4gIC8vIGtleUJhY2tzcGFjZSA9IHNjZW5lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuQkFDS1NQQUNFKTtcbiAgc2NlbmUuaW5wdXQua2V5Ym9hcmQub24oJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoIXRleHRGaWVsZFN0YXRlLmlzRWRpdGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpc051bWJlciA9IGV2ZW50LmtleUNvZGUgPT09IDE5MCB8fCAoZXZlbnQua2V5Q29kZSA+PSA0OCAmJiBldmVudC5rZXlDb2RlIDw9IDU3KTtcbiAgICBjb25zdCBpc1N0cmluZyA9IGV2ZW50LmtleUNvZGUgPT09IDMyIHx8IChldmVudC5rZXlDb2RlID49IDY1ICYmIGV2ZW50LmtleUNvZGUgPD0gOTApO1xuXG4gICAgY29uc3QgdmFsaWRLZXkgPSBudW1iZXJzT25seVxuICAgICAgPyBpc051bWJlclxuICAgICAgOiBpc051bWJlciB8fCBpc1N0cmluZztcblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSA4ICYmIHRleHRGaWVsZC50ZXh0Lmxlbmd0aCA+IDApXG4gICAge1xuICAgICAgdGV4dEZpZWxkLnRleHQgPSB0ZXh0RmllbGQudGV4dC5zdWJzdHIoMCwgdGV4dEZpZWxkLnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICBjdXJzb3Iuc2V0WCh0ZXh0RmllbGQueCArIHRleHRGaWVsZC53aWR0aCArIDMpO1xuICAgICAgY2FsbGJhY2sodGV4dEZpZWxkLnRleHQpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0ZXh0RmllbGQudGV4dC5sZW5ndGggPCBtYXhDaGFyYWN0ZXJMZW5ndGggJiYgdmFsaWRLZXkpXG4gICAge1xuICAgICAgdGV4dEZpZWxkLnRleHQgKz0gYCR7ZXZlbnQua2V5fWAudG9VcHBlckNhc2UoKTtcbiAgICAgIGN1cnNvci5zZXRYKHRleHRGaWVsZC54ICsgdGV4dEZpZWxkLndpZHRoICsgMyk7XG4gICAgICBjYWxsYmFjayh0ZXh0RmllbGQudGV4dCk7XG4gICAgfVxuXG4gIH0pO1xuICByZXR1cm4gW1xuICAgIC4uLnJlY3RhbmdsZUVsZW1lbnRzLFxuICAgIGN1cnNvcixcbiAgICB0ZXh0RmllbGQsXG4gIF07XG59O1xuIiwiaW1wb3J0ICogYXMgU3R5bGVzIGZyb20gJ3NyYy9zaGFyZWQvc3R5bGVzJztcblxuZXhwb3J0IGNvbnN0IGFkZEhvcml6b250YWxTY3JlZW5MaW5lID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHk6IG51bWJlcikgPT4ge1xuICBzY2VuZS5hZGQubGluZSgwLCAwLCAwLCB5ICsgMSwgU3R5bGVzLndpZHRoLCB5ICsgMSwgU3R5bGVzLmRldGFpbExpZ2h0Q29sb3JIZXgpLnNldE9yaWdpbigwLCAwKTtcbiAgc2NlbmUuYWRkLmxpbmUoMCwgMCwgMCwgeSwgU3R5bGVzLndpZHRoLCB5LCBTdHlsZXMuZGV0YWlsRGFya0NvbG9ySGV4KS5zZXRPcmlnaW4oMCwgMCk7XG59XG4iLCJpbXBvcnQgKiBhcyBTdHlsZXMgZnJvbSAnc3JjL3NoYXJlZC9zdHlsZXMnO1xuXG5leHBvcnQgY29uc3QgYWRkUmVjdGFuZ2xlID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgZmlsbENvbG9yOiBudW1iZXIsIGZpbGxBbHBoYT86IG51bWJlcikgPT4ge1xuICBjb25zdCBib3ggPSBzY2VuZS5hZGQucmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIGZpbGxDb2xvciwgZmlsbEFscGhhKS5zZXRPcmlnaW4oMCwwKTtcbiAgY29uc3QgdG9wTGluZSA9IHNjZW5lLmFkZC5saW5lKDAsIDAsIHggLSAxLCB5LCB4ICsgd2lkdGgsIHksIFN0eWxlcy5kZXRhaWxEYXJrQ29sb3JIZXgpLnNldE9yaWdpbigwLCAwKTtcbiAgY29uc3QgbGVmdExpbmUgPSBzY2VuZS5hZGQubGluZSgwLCAwLCB4LCB5IC0gMSwgeCwgeSArIGhlaWdodCArIDEsIFN0eWxlcy5kZXRhaWxEYXJrQ29sb3JIZXgpLnNldE9yaWdpbigwLCAwKTtcbiAgY29uc3QgcmlnaHRMaW5lID0gc2NlbmUuYWRkLmxpbmUoMCwgMCwgeCArIHdpZHRoLCB5IC0gMSwgeCArIHdpZHRoLCB5ICsgaGVpZ2h0ICsgMSwgU3R5bGVzLmRldGFpbExpZ2h0Q29sb3JIZXgpLnNldE9yaWdpbigwLCAwKTtcbiAgY29uc3QgYm90dG9tTGluZSA9IHNjZW5lLmFkZC5saW5lKDAsIDAsIHggKyAxLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIFN0eWxlcy5kZXRhaWxMaWdodENvbG9ySGV4KS5zZXRPcmlnaW4oMCwgMCk7XG5cbiAgcmV0dXJuIFtcbiAgICBib3gsXG4gICAgdG9wTGluZSxcbiAgICBsZWZ0TGluZSxcbiAgICByaWdodExpbmUsXG4gICAgYm90dG9tTGluZSxcbiAgXTtcbn1cbiIsImltcG9ydCAqIGFzIFNoYXJlZCBmcm9tICdzcmMvc2hhcmVkJztcbmltcG9ydCAqIGFzIFN0eWxlcyBmcm9tICdzcmMvc2hhcmVkL3N0eWxlcyc7XG5pbXBvcnQgeyBEb21haW5FdmVudHMsIERvbWFpblN0YXRlIH0gZnJvbSAnc3JjL2RvbWFpbic7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBhZGRSZWN0YW5nbGUgfSBmcm9tICcuLi9yZWN0YW5nbGUnO1xuXG5pbnRlcmZhY2UgU3RvcnlEaXNwbGF5IHtcbiAgdGV4dDogc3RyaW5nO1xuICB0ZXh0T2JqZWN0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcbiAgcG9zWDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBUaWNrZXJTdGF0ZSB7XG4gIHN0b3J5UXVldWU6IHN0cmluZ1tdO1xuICBzdG9yeURpc3BsYXlzOiBTdG9yeURpc3BsYXlbXTtcbiAgcmVhZHlUb0Rpc3BsYXlOZXh0U3Rvcnk6IGJvb2xlYW47XG59XG5cbmNvbnN0IHRpY2tlclkgPSA3MTA7XG5jb25zdCB0aWNrZXJTdG9yeVkgPSA3MjU7XG5jb25zdCB0aWNrZXJIZWlnaHQgPSA1MDtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5ld3NUaWNrZXIgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSwgZG9tYWluU3RhdGU6IERvbWFpblN0YXRlKSA9PiB7XG4gIGNvbnN0IHRpY2tlclN0YXRlOiBUaWNrZXJTdGF0ZSA9IHtcbiAgICBzdG9yeVF1ZXVlOiBbXSxcbiAgICBzdG9yeURpc3BsYXlzOiBbXSxcbiAgICByZWFkeVRvRGlzcGxheU5leHRTdG9yeTogZmFsc2UsXG4gIH07XG5cbiAgY29uc3QgZ2FtZVdpZHRoID0gU2hhcmVkLmdldEdhbWVXaWR0aChzY2VuZSk7XG5cbiAgYWRkUmVjdGFuZ2xlKHNjZW5lLCBTdHlsZXMub2Zmc2V0LCB0aWNrZXJZLCBnYW1lV2lkdGggLSBTdHlsZXMub2Zmc2V0ICogMiwgdGlja2VySGVpZ2h0LCBTdHlsZXMuZm9yZWdyb3VuZENvbG9ySGV4KTtcblxuICBkb21haW5TdGF0ZS5ldmVudHMub24oRG9tYWluRXZlbnRzLm5hdGlvbkV2ZW50T2NjdXJyZWQsIChuYXRpb24sIGhlYWRsaW5lKSA9PiB7XG4gICAgdGlja2VyU3RhdGUuc3RvcnlRdWV1ZS5wdXNoKGAke25hdGlvbi5uYW1lfSAke2hlYWRsaW5lfWApO1xuICB9KTtcbiAgZG9tYWluU3RhdGUuZXZlbnRzLm9uKERvbWFpbkV2ZW50cy5uYXRpb25FdmVudEVuZGVkLCAobmF0aW9uLCBoZWFkbGluZSkgPT4ge1xuICAgIGlmIChoZWFkbGluZSkge1xuICAgICAgdGlja2VyU3RhdGUuc3RvcnlRdWV1ZS5wdXNoKGAke25hdGlvbi5uYW1lfSAke2hlYWRsaW5lfWApO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gVXNlIHRoaXMgdG8gbWFrZSBzdXJlIHRoZSBtYXNrIGRvZXNuJ3QgY292ZXIgdGhlIGJvcmRlciBvZiB0aGUgdGlja2VyXG4gIGNvbnN0IG1hc2tGdXp6ID0gMTtcbiAgY29uc3QgbGVmdE1hc2sgPSBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsIHRpY2tlclksIFN0eWxlcy5vZmZzZXQgLSBtYXNrRnV6eiwgdGlja2VySGVpZ2h0LCBTdHlsZXMuYmFja2dyb3VuZENvbG9ySGV4KS5zZXRPcmlnaW4oMCwgMCk7XG4gIGNvbnN0IHJpZ2h0TWFzayA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoZ2FtZVdpZHRoIC0gU3R5bGVzLm9mZnNldCArIG1hc2tGdXp6LCB0aWNrZXJZLCBTdHlsZXMub2Zmc2V0LCB0aWNrZXJIZWlnaHQsIFN0eWxlcy5iYWNrZ3JvdW5kQ29sb3JIZXgpLnNldE9yaWdpbigwLCAwKTtcbiAgLy8gVGhlc2UgbWFza3MgYXJlIHVzZWQgdG8gbWFrZSBzdXJlIHRoYXQgYSB0aWNrZXIgc3RvcnkgaXNuJ3QgdmlzaWJsZSB1bnRpbCBpdCBhY3R1YWxsIGVudGVycyB0aGUgdGlja2VyIGZpZWxkXG4gIGxlZnRNYXNrLnNldERlcHRoKDEwKTtcbiAgcmlnaHRNYXNrLnNldERlcHRoKDEwKTtcblxuICB1cGRhdGVTdG9yaWVzKHNjZW5lLCB0aWNrZXJTdGF0ZSk7XG5cbiAgcmV0dXJuIHRpY2tlclN0YXRlO1xufTtcblxubGV0IHJlYWR5VG9EaXNwbGF5TmV4dFN0b3J5ID0gdHJ1ZTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVN0b3JpZXMgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSwgdGlja2VyU3RhdGU6IFRpY2tlclN0YXRlKSA9PiB7XG4gIGNvbnN0IHNob3VsZEJ1aWxkU3RvcnkgPSByZWFkeVRvRGlzcGxheU5leHRTdG9yeSAmJiAodGlja2VyU3RhdGUuc3RvcnlRdWV1ZS5sZW5ndGggPiAwKTtcbiAgY29uc3QgZ2FtZVdpZHRoID0gU2hhcmVkLmdldEdhbWVXaWR0aChzY2VuZSk7XG5cbiAgaWYgKHNob3VsZEJ1aWxkU3RvcnkpIHtcbiAgICBjb25zdCB0ZXh0ID0gdGlja2VyU3RhdGUuc3RvcnlRdWV1ZS5zaGlmdCgpO1xuICAgIHRpY2tlclN0YXRlLnN0b3J5RGlzcGxheXMucHVzaCh7IHRleHRPYmplY3Q6IHNjZW5lLmFkZC50ZXh0KGdhbWVXaWR0aCwgdGlja2VyU3RvcnlZLCB0ZXh0KSwgdGV4dCwgcG9zWDogZ2FtZVdpZHRoIH0pO1xuICAgIHJlYWR5VG9EaXNwbGF5TmV4dFN0b3J5ID0gZmFsc2U7XG4gIH1cblxuICB0aWNrZXJTdGF0ZS5zdG9yeURpc3BsYXlzLmZvckVhY2goKHN0b3J5KSA9PiB7XG4gICAgc3RvcnkudGV4dE9iamVjdC5kZXN0cm95KCk7XG4gICAgc3RvcnkucG9zWCAtPSAyO1xuICAgIHN0b3J5LnRleHRPYmplY3QgPSBzY2VuZS5hZGQudGV4dChzdG9yeS5wb3NYLCB0aWNrZXJTdG9yeVksIHN0b3J5LnRleHQpO1xuICAgIC8vIHN0b3J5LnRleHRPYmplY3Quc2V0ZGVcbiAgfSk7XG5cbiAgdGlja2VyU3RhdGUuc3RvcnlEaXNwbGF5cyA9IHRpY2tlclN0YXRlLnN0b3J5RGlzcGxheXMuZmlsdGVyKChzdG9yeSkgPT4ge1xuICAgIGNvbnN0IG9mZlNjcmVlbiA9IHN0b3J5LnRleHRPYmplY3QuZGlzcGxheVdpZHRoICsgc3RvcnkucG9zWCA8IDA7XG4gICAgaWYgKG9mZlNjcmVlbikge1xuICAgICAgc3RvcnkudGV4dE9iamVjdC5kZXN0cm95KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcblxuICBjb25zdCBwYWRkaW5nID0gMTAwO1xuXG4gIGlmICh0aWNrZXJTdGF0ZS5zdG9yeURpc3BsYXlzLmxlbmd0aCA9PT0gMCB8fCBfLmxhc3QodGlja2VyU3RhdGUuc3RvcnlEaXNwbGF5cykudGV4dE9iamVjdC5kaXNwbGF5V2lkdGggKyBwYWRkaW5nIDwgZ2FtZVdpZHRoIC0gXy5sYXN0KHRpY2tlclN0YXRlLnN0b3J5RGlzcGxheXMpLnBvc1gpIHtcbiAgICByZWFkeVRvRGlzcGxheU5leHRTdG9yeSA9IHRydWU7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBEb21haW5FdmVudHMgfSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCB0eXBlIEN1bHRJbml0RGF0YSA9IHtcbn1cblxuZXhwb3J0IHR5cGUgQ3VsdERvbWFpblN0YXRlID0ge1xuICBldmVudHM6IFBoYXNlci5FdmVudHMuRXZlbnRFbWl0dGVyLFxuICBoYXBwaW5lc3M6IG51bWJlcjtcbiAgc3VnZ2VzdGVkRG9uYXRpb246IG51bWJlcjtcbiAgZm9sbG93ZXJzOiBudW1iZXI7XG4gIGNhcGFjaXR5OiBudW1iZXI7XG4gIGFjdHVhbE5ld0ZvbGxvd2Vyc1BlclRpY2s6IG51bWJlcjtcbiAgYmFzZU5ld0ZvbGxvd2Vyc1BlclRpY2s6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRDdWx0RG9tYWluU3RhdGUgPSAoaW5wdXQ6IEN1bHRJbml0RGF0YSwgZXZlbnRzOiBQaGFzZXIuRXZlbnRzLkV2ZW50RW1pdHRlcik6IEN1bHREb21haW5TdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgZXZlbnRzLFxuICAgIGhhcHBpbmVzczogMTAwLFxuICAgIGZvbGxvd2VyczogMSxcbiAgICBjYXBhY2l0eTogMTAsXG4gICAgYWN0dWFsTmV3Rm9sbG93ZXJzUGVyVGljazogMSxcbiAgICBiYXNlTmV3Rm9sbG93ZXJzUGVyVGljazogMSxcbiAgICBzdWdnZXN0ZWREb25hdGlvbjogMCxcbiAgfTtcbn07XG5cbmNvbnN0IEZPTExPV0VSU19TVEFSVF9MRUFWSU5HX1RIUkVTSE9MRCA9IDQwO1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlTmV3SGFwcGluZXNzTGV2ZWwgPSAoZG9tYWluU3RhdGU6IEN1bHREb21haW5TdGF0ZSkgPT4ge1xuICByZXR1cm4gZG9tYWluU3RhdGUuc3VnZ2VzdGVkRG9uYXRpb24gPiAxMDAgPyAwIDogMTAwIC0gZG9tYWluU3RhdGUuc3VnZ2VzdGVkRG9uYXRpb247XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlRG9uYXRpb25QZXJUaWNrID0gKGRvbWFpblN0YXRlOiBDdWx0RG9tYWluU3RhdGUpID0+IHtcbiAgcmV0dXJuIGRvbWFpblN0YXRlLmhhcHBpbmVzcyA+PSBGT0xMT1dFUlNfU1RBUlRfTEVBVklOR19USFJFU0hPTEQgPyBkb21haW5TdGF0ZS5zdWdnZXN0ZWREb25hdGlvbiAqIGRvbWFpblN0YXRlLmZvbGxvd2VycyA6IDA7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVDdXJyZW50Rm9sbG93ZXJzUGVyVGljayA9IChkb21haW5TdGF0ZTogQ3VsdERvbWFpblN0YXRlKSA9PiB7XG4gIGlmIChkb21haW5TdGF0ZS5oYXBwaW5lc3MgPCBGT0xMT1dFUlNfU1RBUlRfTEVBVklOR19USFJFU0hPTEQpIHtcbiAgICBkb21haW5TdGF0ZS5hY3R1YWxOZXdGb2xsb3dlcnNQZXJUaWNrID0gKGRvbWFpblN0YXRlLmhhcHBpbmVzcyAtIEZPTExPV0VSU19TVEFSVF9MRUFWSU5HX1RIUkVTSE9MRCkgKiBkb21haW5TdGF0ZS5iYXNlTmV3Rm9sbG93ZXJzUGVyVGljaztcbiAgfVxuICBlbHNlIHtcbiAgICBkb21haW5TdGF0ZS5hY3R1YWxOZXdGb2xsb3dlcnNQZXJUaWNrID0gZG9tYWluU3RhdGUuYmFzZU5ld0ZvbGxvd2Vyc1BlclRpY2sgKiAoZG9tYWluU3RhdGUuaGFwcGluZXNzICogMC4wMSk7XG4gIH1cblxuICBkb21haW5TdGF0ZS5ldmVudHMuZW1pdChEb21haW5FdmVudHMuZm9sbG93ZXJzUGVyVGlja0NoYW5nZWQpO1xufVxuXG5leHBvcnQgY29uc3QgY2hhbmdlSGFwcGluZXNzID0gKGRvbWFpblN0YXRlOiBDdWx0RG9tYWluU3RhdGUsIG5ld0hhcHBpbmVzczogbnVtYmVyKSA9PiB7XG4gIGRvbWFpblN0YXRlLmhhcHBpbmVzcyA9IG5ld0hhcHBpbmVzcztcbiAgY2FsY3VsYXRlQ3VycmVudEZvbGxvd2Vyc1BlclRpY2soZG9tYWluU3RhdGUpO1xuXG4gIGRvbWFpblN0YXRlLmV2ZW50cy5lbWl0KERvbWFpbkV2ZW50cy5jdWx0SGFwcGluZXNzQ2hhbmdlZCk7XG59O1xuXG5leHBvcnQgY29uc3QgY2hhbmdlU3VnZ2VzdGVkRG9uYXRpb24gPSAoZG9tYWluU3RhdGU6IEN1bHREb21haW5TdGF0ZSwgbmV3RG9uYXRpb25BbW91bnQ6IG51bWJlcikgPT4ge1xuICBkb21haW5TdGF0ZS5zdWdnZXN0ZWREb25hdGlvbiA9IG5ld0RvbmF0aW9uQW1vdW50O1xuXG4gIGRvbWFpblN0YXRlLmV2ZW50cy5lbWl0KERvbWFpbkV2ZW50cy5zdWdnZXN0ZWREb25hdGlvbkNoYW5nZWQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZUN1bHRDYXBhY2l0eSA9IChkb21haW5TdGF0ZTogQ3VsdERvbWFpblN0YXRlLCBuZXdDYXBhY2l0eTogbnVtYmVyKSA9PiB7XG4gIGRvbWFpblN0YXRlLmNhcGFjaXR5ID0gbmV3Q2FwYWNpdHk7XG5cbiAgZG9tYWluU3RhdGUuZXZlbnRzLmVtaXQoRG9tYWluRXZlbnRzLmN1bHRDYXBhY2l0eUNoYW5nZWQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlUmV2ZW51ZUZyb21DdWx0ID0gKGRvbWFpblN0YXRlOiBDdWx0RG9tYWluU3RhdGUpID0+IHtcbiAgY29uc3QgcmV2ZW51ZSA9IGNhbGN1bGF0ZURvbmF0aW9uUGVyVGljayhkb21haW5TdGF0ZSk7XG5cbiAgZG9tYWluU3RhdGUuZXZlbnRzLmVtaXQoRG9tYWluRXZlbnRzLmN1bHRSZXZlbnVlR2VuZXJhdGVkLCByZXZlbnVlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRGb2xsb3dlcnNUb0N1bHQgPSAoZG9tYWluU3RhdGU6IEN1bHREb21haW5TdGF0ZSkgPT4ge1xuICBjb25zdCBuZXdGb2xsb3dlckNvdW50ID0gZG9tYWluU3RhdGUuZm9sbG93ZXJzICsgZG9tYWluU3RhdGUuYWN0dWFsTmV3Rm9sbG93ZXJzUGVyVGljaztcblxuICBkb21haW5TdGF0ZS5mb2xsb3dlcnMgPSBfLmNsYW1wKG5ld0ZvbGxvd2VyQ291bnQsIDAsIGRvbWFpblN0YXRlLmNhcGFjaXR5KTtcbiAgZG9tYWluU3RhdGUuZXZlbnRzLmVtaXQoRG9tYWluRXZlbnRzLmZvbGxvd2VyQ291bnRDaGFuZ2VkKTtcbn07XG4iLCJcbmV4cG9ydCBlbnVtIERvbWFpbkV2ZW50cyB7XG4gIC8vIFRyYWRpbmdcbiAgdHJhZGVDb21wbGV0ZWQgPSAnZG9tYWluLnRyYWRlQ29tcGxldGVkJyxcbiAgdHJhZGVGYWlsZWQgPSAnZG9tYWluLnRyYWRlRmFpbGVkJyxcbiAgYWNjb3VudEJhbGFuY2VDaGFuZ2VkID0gJ2RvbWFpbi5hY2NvdW50QmFsYW5jZUNoYW5nZWQnLFxuICBleGNoYW5nZVJhdGVzQ2hhbmdlZCA9ICdkb21haW4uZXhjaGFuZ2VSYXRlc0NoYW5nZWQnLFxuICBuYXRpb25FdmVudE9jY3VycmVkID0gJ2RvbWFpbi5uYXRpb25FdmVudE9jY3VycmVkJyxcbiAgbmF0aW9uRXZlbnRFbmRlZCA9ICdkb21haW4ubmF0aW9uRXZlbnRFbmRlZCcsXG4gIGluZmx1ZW5jZUNhcGFiaWxpdHlVbmxvY2tlZCA9ICdkb21haW4uaW5mbHVlbmNlQ2FwYWJpbGl0eVVubG9ja2VkJyxcblxuICAvLyBDdWx0XG4gIGN1bHRDYXBhYmlsaXR5VW5sb2NrZWQgPSAnZG9tYWluLmN1bHRDYXBhYmlsaXR5VW5sb2NrZWQnLFxuICBmb2xsb3dlckNvdW50Q2hhbmdlZCA9ICdkb21haW4uZm9sbG93ZXJDb3VudENoYW5nZWQnLFxuICBjdWx0UmV2ZW51ZUdlbmVyYXRlZCA9ICdkb21haW4uY3VsdFJldmVudWVHZW5lcmF0ZWQnLFxuICBzdWdnZXN0ZWREb25hdGlvbkNoYW5nZWQgPSAnZG9tYWluLnN1Z2dlc3RlZERvbmF0aW9uQ2hhbmdlZCcsXG4gIGN1bHRDYXBhY2l0eUNoYW5nZWQgPSAnZG9tYWluLmN1bHRDYXBhY2l0eUNoYW5nZWQnLFxuICBjdWx0SGFwcGluZXNzQ2hhbmdlZCA9ICdkb21haW4uY3VsdEhhcHBpbmVzc0NoYW5nZWQnLFxuICBmb2xsb3dlcnNQZXJUaWNrQ2hhbmdlZCA9ICdkb21haW4uZm9sbG93ZXJzUGVyVGlja0NoYW5nZWQnLFxufVxuIiwiaW1wb3J0ICogYXMgVHJhZGluZ0RvbWFpbiBmcm9tICcuL3RyYWRpbmcnO1xuaW1wb3J0ICogYXMgQ3VsdERvbWFpbiBmcm9tICcuL2N1bHQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRzIH0gZnJvbSAnLi9ldmVudHMnO1xuXG5leHBvcnQgeyBEb21haW5FdmVudHMgfTtcblxuZXhwb3J0IHR5cGUgQ2FwYWJpbGl0eVN0YXRlID0geyBuYW1lOiBzdHJpbmcsIGVuYWJsZWQ6IGJvb2xlYW4sIGFjdGl2YXRpb25UaHJlc2hvbGQ6IG51bWJlciwgYWN0aXZhdGlvbkV2ZW50OiBEb21haW5FdmVudHMgfTtcbmV4cG9ydCB0eXBlIERvbWFpblN0YXRlID0ge1xuICBldmVudHM6IFBoYXNlci5FdmVudHMuRXZlbnRFbWl0dGVyLFxuICBjYXBhYmlsaXRpZXM6IENhcGFiaWxpdHlTdGF0ZVtdLFxufSAmIFRyYWRpbmdEb21haW4uVHJhZGluZ0RvbWFpblN0YXRlICYgQ3VsdERvbWFpbi5DdWx0RG9tYWluU3RhdGU7XG5cbmNvbnN0IGRlZmF1bHRDYXBhYmlsaXRpZXMgPSB7XG4gIGNhcGFiaWxpdGllczogW1xuICAgIHsgbmFtZTogXCJJbmZsdWVuY2VcIiwgZW5hYmxlZDogZmFsc2UsIGFjdGl2YXRpb25UaHJlc2hvbGQ6IDEwMDAsIGFjdGl2YXRpb25FdmVudDogRG9tYWluRXZlbnRzLmluZmx1ZW5jZUNhcGFiaWxpdHlVbmxvY2tlZCB9LFxuICAgIHsgbmFtZTogXCJDdWx0XCIsIGVuYWJsZWQ6IGZhbHNlLCBhY3RpdmF0aW9uVGhyZXNob2xkOiAxMDAwMCwgYWN0aXZhdGlvbkV2ZW50OiBEb21haW5FdmVudHMuY3VsdENhcGFiaWxpdHlVbmxvY2tlZCB9LFxuICBdXG59XG5cbnR5cGUgSW5pdERvbWFpbklucHV0ID0gVHJhZGluZ0RvbWFpbi5UcmFkaW5nSW5pdERhdGEgJiBDdWx0RG9tYWluLkN1bHRJbml0RGF0YTtcblxuZXhwb3J0IGNvbnN0IGluaXREb21haW5TdGF0ZSA9IChpbnB1dDogSW5pdERvbWFpbklucHV0KTogRG9tYWluU3RhdGUgPT4ge1xuICBjb25zdCBkb21haW5FdmVudEVtaXR0ZXIgPSBuZXcgUGhhc2VyLkV2ZW50cy5FdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdCBkb21haW5TdGF0ZSA9IHtcbiAgICAuLi5UcmFkaW5nRG9tYWluLmluaXRUcmFkaW5nRG9tYWluU3RhdGUoaW5wdXQsIGRvbWFpbkV2ZW50RW1pdHRlciksXG4gICAgLi4uQ3VsdERvbWFpbi5pbml0Q3VsdERvbWFpblN0YXRlKGlucHV0LCBkb21haW5FdmVudEVtaXR0ZXIpLFxuICAgIC4uLmRlZmF1bHRDYXBhYmlsaXRpZXMsXG4gIH07XG5cbiAgcmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXJzKGRvbWFpblN0YXRlKTtcblxuICByZXR1cm4gZG9tYWluU3RhdGU7XG59O1xuXG5jb25zdCByZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcnMgPSAoZG9tYWluU3RhdGU6IERvbWFpblN0YXRlKSA9PiB7XG4gIGRvbWFpblN0YXRlLmV2ZW50cy5vbihEb21haW5FdmVudHMuY3VsdFJldmVudWVHZW5lcmF0ZWQsIChyZXZlbnVlKSA9PiB7XG4gICAgVHJhZGluZ0RvbWFpbi5hZGRSZXZlbnVlVG9Sb290QWNvdW50KGRvbWFpblN0YXRlLCByZXZlbnVlKTtcbiAgfSk7XG5cbiAgZG9tYWluU3RhdGUuZXZlbnRzLm9uKERvbWFpbkV2ZW50cy5zdWdnZXN0ZWREb25hdGlvbkNoYW5nZWQsIChyZXZlbnVlKSA9PiB7XG4gICAgY29uc3QgbmV3SGFwcGluZXNzID0gQ3VsdERvbWFpbi5jYWxjdWxhdGVOZXdIYXBwaW5lc3NMZXZlbChkb21haW5TdGF0ZSk7XG4gICAgQ3VsdERvbWFpbi5jaGFuZ2VIYXBwaW5lc3MoZG9tYWluU3RhdGUsIG5ld0hhcHBpbmVzcyk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gY2hlY2tDYXBhYmlsaXR5RW5hYmxlbWVudChkb21haW5TdGF0ZTogRG9tYWluU3RhdGUpIHtcbiAgZG9tYWluU3RhdGUuY2FwYWJpbGl0aWVzLmZvckVhY2goY2FwYWJpbGl0eSA9PiB7XG4gICAgaWYgKCEgY2FwYWJpbGl0eS5lbmFibGVkICYmIGRvbWFpblN0YXRlLnRvdGFsUG9ydGZvbGlvVmFsdWUgPj0gY2FwYWJpbGl0eS5hY3RpdmF0aW9uVGhyZXNob2xkKSB7XG4gICAgICBjYXBhYmlsaXR5LmVuYWJsZWQgPSB0cnVlO1xuICAgICAgZG9tYWluU3RhdGUuZXZlbnRzLmVtaXQoY2FwYWJpbGl0eS5hY3RpdmF0aW9uRXZlbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVUaWNrID0gKGRvbWFpblN0YXRlOiBEb21haW5TdGF0ZSkgPT4ge1xuICAvLyBUcmFkaW5nIERvbWFpbiBFdmVudHNcbiAgVHJhZGluZ0RvbWFpbi5ydW5DdXJyZW5jeUZsdWN0dWF0aW9ucyhkb21haW5TdGF0ZSk7XG4gIFRyYWRpbmdEb21haW4ucnVuUmFuZG9tTmF0aW9uRXZlbnRzKGRvbWFpblN0YXRlKTtcbiAgVHJhZGluZ0RvbWFpbi5jaGVja0ZvckV4cGlyaW5nTmF0aW9uRXZlbnRzKGRvbWFpblN0YXRlKTtcblxuICAvLyBDdWx0IERvbWFpbiBFdmVudHNcbiAgQ3VsdERvbWFpbi5hZGRGb2xsb3dlcnNUb0N1bHQoZG9tYWluU3RhdGUpO1xuICBDdWx0RG9tYWluLmdlbmVyYXRlUmV2ZW51ZUZyb21DdWx0KGRvbWFpblN0YXRlKTtcblxuICBjaGVja0NhcGFiaWxpdHlFbmFibGVtZW50KGRvbWFpblN0YXRlKTtcbn07XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCB7IGZvcm1hdE51bWJlckZvckRpc3BsYXkgfSBmcm9tICdzcmMvc2hhcmVkJztcblxuZXhwb3J0IGVudW0gRG9tYWluRXJyb3JzIHtcbiAgdHJhZGVGYWlsZWRfSW5zdWZmaWNpZW50RnVuZHMgPSBcIkluc3VmZmljaWVudCBGdW5kc1wiXG59XG50eXBlIFJhbmdlID0ge1xuICBtaW46IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG59XG5leHBvcnQgdHlwZSBJbmZsdWVuY2VFdmVudFR5cGUgPSB7XG4gIG5hbWU6IEluZmx1ZW5jZUV2ZW50VHlwZU5hbWVzLFxuICBzdWNjZXNzUmF0ZTogbnVtYmVyLFxuICBzdWNjZXNzSGVhZGxpbmVzOiBzdHJpbmdbXSxcbiAgZmFpbHVyZUhlYWRsaW5lczogc3RyaW5nW10sXG4gIHN1Y2Nlc3NCYXNlTXVsdGlwbGllcjogUmFuZ2UsXG4gIHN1Y2Nlc3NGbHV4TXVsdGlwbGllcjogUmFuZ2UsXG4gIGZhaWx1cmVCYXNlTXVsdGlwbGllcjogUmFuZ2UsXG4gIGZhaWx1cmVGbHV4TXVsdGlwbGllcjogUmFuZ2UsXG4gIGR1cmF0aW9uOiBSYW5nZSxcbn1cbmV4cG9ydCB0eXBlIEluZmx1ZW5jZUFjdGlvbiA9IHtcbiAgbmFtZTogc3RyaW5nLFxuICBjb3N0OiBudW1iZXIsXG4gIGV2ZW50VHlwZTogSW5mbHVlbmNlRXZlbnRUeXBlLFxufVxuZXhwb3J0IHR5cGUgQ3VycmVuY3kgPSB7XG4gIG5hbWU6IHN0cmluZyxcbiAgZXhjaGFuZ2VSYXRlOiBudW1iZXIsXG4gIHRyZW5kOiBcInVwXCIgfCBcImRvd25cIixcbn1cbmV4cG9ydCB0eXBlIE5hdGlvbiA9IHtcbiAgbmFtZTogc3RyaW5nLFxuICBjdXJyZW5jeTogQ3VycmVuY3ksXG4gIGFjdGl2ZUV2ZW50czogTmF0aW9uRXZlbnRbXSxcbiAgaGlzdG9yaWNhbEV2ZW50czogTmF0aW9uRXZlbnRbXSxcbn1cbmV4cG9ydCB0eXBlIE5hdGlvbkV2ZW50ID0ge1xuICBuYW1lOiBOYXRpb25FdmVudFR5cGVOYW1lcyB8IEluZmx1ZW5jZUV2ZW50VHlwZU5hbWVzLFxuICBldmVudFN0YXJ0SGVhZGxpbmU6IHN0cmluZyxcbiAgZXZlbnRFbmRIZWFkbGluZT86IHN0cmluZyxcbiAgYmFzZU11bHRpcGxpZXI6IG51bWJlcixcbiAgZmx1eE11bHRpcGxpZXI6IG51bWJlcixcbiAgZHVyYXRpb246IG51bWJlcixcbiAgdHJpZ2dlcmVkVGltZTogbnVtYmVyLFxuICBraW5kOiBcInBvc2l0aXZlXCIgfCBcIm5lZ2F0aXZlXCIsXG59XG5leHBvcnQgdHlwZSBUcmFuc2FjdGlvbiA9IHtcbiAgYW1vdW50OiBudW1iZXIsXG4gIHRyYW5zYWN0aW9uVHlwZTogXCJDcmVkaXRcIiB8IFwiRGViaXRcIlxufVxuZXhwb3J0IHR5cGUgQWNjb3VudCA9IHtcbiAga2luZDogXCJ0cmFkaW5nXCIgfCBcInJvb3RcIixcbiAgbmFtZTogc3RyaW5nLFxuICBjdXJyZW5jeTogQ3VycmVuY3ksXG4gIGJhbGFuY2U6IG51bWJlcixcbiAgbGVkZ2VyOiBUcmFuc2FjdGlvbltdLFxufVxuZXhwb3J0IHR5cGUgVHJhZGVMZWRnZXIgPSB7XG4gIHRyYWRlczogVHJhZGVbXVxufVxuZXhwb3J0IHR5cGUgVHJhZGUgPSB7XG4gIHNvdXJjZUN1cnJlbmN5OiBDdXJyZW5jeSxcbiAgZGVzdGluYXRpb25DdXJyZW5jeTogQ3VycmVuY3ksXG4gIHNvdXJjZUFtb3VudDogbnVtYmVyLFxuICBkZXN0aW5hdGlvbkFtb3VudDogbnVtYmVyLFxuICBleGNoYW5nZVJhdGU6IG51bWJlclxufVxuZXhwb3J0IHR5cGUgVHJhZGluZ0RvbWFpblN0YXRlID0ge1xuICB0cmFkZUxlZGdlcjogVHJhZGVMZWRnZXIsXG4gIG5hdGlvbnM6IE5hdGlvbltdLFxuICB0cmFkZUN1cnJlbmNpZXM6IEN1cnJlbmN5W10sXG4gIHRyYWRlQWNjb3VudHM6IEFjY291bnRbXSxcbiAgcm9vdEN1cnJlbmN5OiBDdXJyZW5jeSxcbiAgcm9vdEFjY291bnQ6IEFjY291bnQsXG4gIGV2ZW50czogUGhhc2VyLkV2ZW50cy5FdmVudEVtaXR0ZXIsXG4gIHRvdGFsUG9ydGZvbGlvVmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWNjb3VudChuYW1lOiBzdHJpbmcsIHN0YXJ0aW5nQmFsYW5jZTogbnVtYmVyLCBjdXJyZW5jeTogQ3VycmVuY3ksIGlzUm9vdDogYm9vbGVhbik6IEFjY291bnQge1xuICBsZXQgbmV3QWNjb3VudDogQWNjb3VudCA9ICB7XG4gICAga2luZDogaXNSb290ID8gXCJyb290XCIgOiBcInRyYWRpbmdcIixcbiAgICBuYW1lOiBuYW1lLFxuICAgIGN1cnJlbmN5OiBjdXJyZW5jeSxcbiAgICBiYWxhbmNlOiBzdGFydGluZ0JhbGFuY2UsXG4gICAgbGVkZ2VyOiBbXSxcbiAgfVxuICBpZiAoc3RhcnRpbmdCYWxhbmNlID4gMCkge1xuICAgIG5ld0FjY291bnQubGVkZ2VyLnB1c2goe2Ftb3VudDogc3RhcnRpbmdCYWxhbmNlLCB0cmFuc2FjdGlvblR5cGU6IFwiQ3JlZGl0XCIgfSk7XG4gIH1cbiAgcmV0dXJuIG5ld0FjY291bnQ7XG59XG5cbmZ1bmN0aW9uIGFwcGx5VHJhbnNhY3Rpb25Ub0FjY291bnQoYWNjb3VudDogQWNjb3VudCwgYW1vdW50OiBudW1iZXIsIHRyYW5zYWN0aW9uVHlwZTogXCJDcmVkaXRcIiB8IFwiRGViaXRcIiwgc3RhdGU6IFRyYWRpbmdEb21haW5TdGF0ZSkge1xuICBhY2NvdW50LmxlZGdlci5wdXNoKHthbW91bnQ6IGFtb3VudCwgdHJhbnNhY3Rpb25UeXBlOiBcIkRlYml0XCJ9KTtcbiAgYWNjb3VudC5iYWxhbmNlICs9IHRyYW5zYWN0aW9uVHlwZSA9PSBcIkNyZWRpdFwiID8gYW1vdW50IDogLTEgKiBhbW91bnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvcmRUcmFkZShzb3VyY2U6IEFjY291bnQsIGRlc3RpbmF0aW9uOiBBY2NvdW50LCBzb3VyY2VBbW91bnQ6IG51bWJlciwgc291cmNlVG9EZXN0aW5hdGlvbkV4Y2hhbmdlUmF0ZTogbnVtYmVyLCBzdGF0ZTogVHJhZGluZ0RvbWFpblN0YXRlKSB7XG4gIGlmIChzb3VyY2UuYmFsYW5jZSA+PSBzb3VyY2VBbW91bnQpIHtcbiAgICBsZXQgZGVzdGluYXRpb25BbW91bnQgPSBzb3VyY2VBbW91bnQgKiBzb3VyY2VUb0Rlc3RpbmF0aW9uRXhjaGFuZ2VSYXRlO1xuICAgIGFwcGx5VHJhbnNhY3Rpb25Ub0FjY291bnQoc291cmNlLCBzb3VyY2VBbW91bnQsIFwiRGViaXRcIiwgc3RhdGUpO1xuICAgIGFwcGx5VHJhbnNhY3Rpb25Ub0FjY291bnQoZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uQW1vdW50LCBcIkNyZWRpdFwiLCBzdGF0ZSk7XG5cbiAgICBsZXQgbmV3VHJhZGUgPSB7XG4gICAgICBzb3VyY2VBbW91bnQ6IHNvdXJjZUFtb3VudCxcbiAgICAgIHNvdXJjZUN1cnJlbmN5OiBzb3VyY2UuY3VycmVuY3ksXG4gICAgICBkZXN0aW5hdGlvbkFtb3VudDogZGVzdGluYXRpb25BbW91bnQsXG4gICAgICBkZXN0aW5hdGlvbkN1cnJlbmN5OiBkZXN0aW5hdGlvbi5jdXJyZW5jeSxcbiAgICAgIGV4Y2hhbmdlUmF0ZTogc291cmNlVG9EZXN0aW5hdGlvbkV4Y2hhbmdlUmF0ZVxuICAgIH07XG4gICAgc3RhdGUudHJhZGVMZWRnZXIudHJhZGVzLnB1c2gobmV3VHJhZGUpO1xuXG4gICAgc3RhdGUuZXZlbnRzLmVtaXQoRG9tYWluRXZlbnRzLnRyYWRlQ29tcGxldGVkLCBuZXdUcmFkZSk7XG4gICAgc3RhdGUuZXZlbnRzLmVtaXQoRG9tYWluRXZlbnRzLmFjY291bnRCYWxhbmNlQ2hhbmdlZCwgc291cmNlKTtcbiAgICBzdGF0ZS5ldmVudHMuZW1pdChEb21haW5FdmVudHMuYWNjb3VudEJhbGFuY2VDaGFuZ2VkLCBkZXN0aW5hdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUuZXZlbnRzLmVtaXQoRG9tYWluRXZlbnRzLnRyYWRlRmFpbGVkLCBEb21haW5FcnJvcnMudHJhZGVGYWlsZWRfSW5zdWZmaWNpZW50RnVuZHMpO1xuICB9XG59XG5cbmNvbnN0IE1JTl9TVEFSVElOR19FWENIQU5HRV9SQVRFID0gNTtcbmNvbnN0IE1BWF9TVEFSVElOR19FWENIQU5HRV9SQVRFID0gNDA7XG5jb25zdCBNSU5fQ1VSUkVOQ1lfRVhDSEFOR0VfUkFURSA9IDE7XG5jb25zdCBNQVhfQ1VSUkVOQ1lfRVhDSEFOR0VfUkFURSA9IDk5O1xuXG5mdW5jdGlvbiByYW5kb21EZWNpbWFsQmV0d2VlbihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xufVxuXG5leHBvcnQgdHlwZSBUcmFkaW5nSW5pdE5hdGlvbmFsQ3VycmVuY3kgPSB7IG5hdGlvbjogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nIH07XG5leHBvcnQgdHlwZSBUcmFkaW5nSW5pdERhdGEgPSB7XG4gIHJvb3RDdXJyZW5jeU5hbWU6IHN0cmluZyxcbiAgcm9vdEN1cnJlbmN5U3RhcnRpbmdBbW91bnQ6IG51bWJlcixcbiAgbmF0aW9uczogVHJhZGluZ0luaXROYXRpb25hbEN1cnJlbmN5W11cbn1cbmV4cG9ydCBmdW5jdGlvbiBpbml0VHJhZGluZ0RvbWFpblN0YXRlKGluaXREYXRhOiBUcmFkaW5nSW5pdERhdGEsIGV2ZW50czogUGhhc2VyLkV2ZW50cy5FdmVudEVtaXR0ZXIpOiBUcmFkaW5nRG9tYWluU3RhdGUge1xuICBsZXQgbmF0aW9uczogTmF0aW9uW10gPSBpbml0RGF0YS5uYXRpb25zLm1hcChuID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogbi5uYXRpb24sXG4gICAgICBjdXJyZW5jeTogeyBuYW1lOiBuLmN1cnJlbmN5LCBleGNoYW5nZVJhdGU6IHJhbmRvbURlY2ltYWxCZXR3ZWVuKE1JTl9TVEFSVElOR19FWENIQU5HRV9SQVRFLCBNQVhfU1RBUlRJTkdfRVhDSEFOR0VfUkFURSksIHRyZW5kOiBcInVwXCIgfSBhcyBDdXJyZW5jeSxcbiAgICAgIGFjdGl2ZUV2ZW50czogW10sXG4gICAgICBoaXN0b3JpY2FsRXZlbnRzOiBbXSxcbiAgICB9XG4gIH0pO1xuICBsZXQgY3VycmVuY2llcyA9IG5hdGlvbnMubWFwKG4gPT4gbi5jdXJyZW5jeSk7XG4gIGxldCBhY2NvdW50czogQWNjb3VudFtdID0gY3VycmVuY2llcy5tYXAoYyA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZUFjY291bnQoYy5uYW1lLCAwLCBjLCBmYWxzZSk7XG4gIH0pO1xuICBsZXQgcm9vdEN1cnJlbmN5OiBDdXJyZW5jeSA9IHsgbmFtZTogaW5pdERhdGEucm9vdEN1cnJlbmN5TmFtZSwgZXhjaGFuZ2VSYXRlOiAxLCB0cmVuZDogXCJ1cFwiIH07XG5cbiAgcmV0dXJuIHtcbiAgICBldmVudHMsXG4gICAgbmF0aW9uczogbmF0aW9ucyxcbiAgICB0cmFkZUN1cnJlbmNpZXM6IGN1cnJlbmNpZXMsXG4gICAgdHJhZGVBY2NvdW50czogYWNjb3VudHMsXG4gICAgdHJhZGVMZWRnZXI6IHsgdHJhZGVzOiBbXSB9LFxuICAgIHJvb3RDdXJyZW5jeSxcbiAgICByb290QWNjb3VudDogY3JlYXRlQWNjb3VudChpbml0RGF0YS5yb290Q3VycmVuY3lOYW1lLCBpbml0RGF0YS5yb290Q3VycmVuY3lTdGFydGluZ0Ftb3VudCwgcm9vdEN1cnJlbmN5LCB0cnVlKSxcbiAgICB0b3RhbFBvcnRmb2xpb1ZhbHVlOiBpbml0RGF0YS5yb290Q3VycmVuY3lTdGFydGluZ0Ftb3VudCxcbiAgfVxufVxuXG5mdW5jdGlvbiByZWNhbGN1bGF0ZVRyYWRpbmdQb3J0Zm9saW9WYWx1ZShzdGF0ZTogVHJhZGluZ0RvbWFpblN0YXRlKSB7XG4gIHN0YXRlLnRvdGFsUG9ydGZvbGlvVmFsdWUgPSBzdGF0ZS5yb290QWNjb3VudC5iYWxhbmNlICsgc3RhdGUudHJhZGVBY2NvdW50cy5yZWR1Y2UoKHZhbCwgYWNjb3VudCkgPT4ge1xuICAgIHJldHVybiB2YWwgKyAoYWNjb3VudC5iYWxhbmNlIC8gYWNjb3VudC5jdXJyZW5jeS5leGNoYW5nZVJhdGUpXG4gIH0sIDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuQ3VycmVuY3lGbHVjdHVhdGlvbnMoc3RhdGU6IFRyYWRpbmdEb21haW5TdGF0ZSkge1xuICBzdGF0ZS5uYXRpb25zLmZvckVhY2gobmF0aW9uID0+IHtcbiAgICBsZXQgY3VycmVuY3kgPSBuYXRpb24uY3VycmVuY3k7XG4gICAgbGV0IGZsdXhNdWx0aXBsaWVyID0gbmF0aW9uLmFjdGl2ZUV2ZW50cy5yZWR1Y2UoKGksIGV2ZW50KSA9PiBpICogZXZlbnQuZmx1eE11bHRpcGxpZXIsIDEpO1xuICAgIGxldCBiYXNlTXVsdGlwbGllciA9IG5hdGlvbi5hY3RpdmVFdmVudHMucmVkdWNlKChpLCBldmVudCkgPT4gaSAqIGV2ZW50LmJhc2VNdWx0aXBsaWVyLCAxKTtcbiAgICBsZXQgY2hhbmdlID0gY3VycmVuY3kuZXhjaGFuZ2VSYXRlICogKHJhbmRvbURlY2ltYWxCZXR3ZWVuKDAuOTggKiBmbHV4TXVsdGlwbGllciwgMS4wMiAqIGZsdXhNdWx0aXBsaWVyKSkgKiBiYXNlTXVsdGlwbGllciAtIGN1cnJlbmN5LmV4Y2hhbmdlUmF0ZTtcbiAgICBsZXQgZXhyTWlkcG9pbnQgPSAoTUFYX0NVUlJFTkNZX0VYQ0hBTkdFX1JBVEUgLSBNSU5fQ1VSUkVOQ1lfRVhDSEFOR0VfUkFURSkgLyAyO1xuICAgIGxldCBjaGFuZ2VTY2FsZSA9IChcbiAgICAgIE1hdGguYWJzKGN1cnJlbmN5LmV4Y2hhbmdlUmF0ZSAtIGV4ck1pZHBvaW50KSA8IDJcbiAgICAgIHx8IChjaGFuZ2UgPCAwICYmIGN1cnJlbmN5LmV4Y2hhbmdlUmF0ZSA+IGV4ck1pZHBvaW50KVxuICAgICAgfHwgKGNoYW5nZSA+IDAgJiYgY3VycmVuY3kuZXhjaGFuZ2VSYXRlIDwgZXhyTWlkcG9pbnQpXG4gICAgKSA/IDEgOiAoKGV4ck1pZHBvaW50IC8gMzAuMCkgLyBNYXRoLmFicyhjdXJyZW5jeS5leGNoYW5nZVJhdGUgLSBleHJNaWRwb2ludCkpO1xuICAgIGxldCBzY2FsZWRDaGFuZ2UgPSBjaGFuZ2UgKiBjaGFuZ2VTY2FsZTtcbiAgICBjdXJyZW5jeS50cmVuZCA9IHNjYWxlZENoYW5nZSA+IDAgPyBcInVwXCIgOiBcImRvd25cIjtcbiAgICBjdXJyZW5jeS5leGNoYW5nZVJhdGUgKz0gc2NhbGVkQ2hhbmdlO1xuICAgIGlmIChjdXJyZW5jeS5leGNoYW5nZVJhdGUgPCBNSU5fQ1VSUkVOQ1lfRVhDSEFOR0VfUkFURSkge1xuICAgICAgY3VycmVuY3kuZXhjaGFuZ2VSYXRlID0gTUlOX0NVUlJFTkNZX0VYQ0hBTkdFX1JBVEU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGN1cnJlbmN5LmV4Y2hhbmdlUmF0ZSA+IE1BWF9DVVJSRU5DWV9FWENIQU5HRV9SQVRFKSB7XG4gICAgICBjdXJyZW5jeS5leGNoYW5nZVJhdGUgPSBNQVhfQ1VSUkVOQ1lfRVhDSEFOR0VfUkFURTtcbiAgICB9XG4gIH0pO1xuICBzdGF0ZS5ldmVudHMuZW1pdChEb21haW5FdmVudHMuZXhjaGFuZ2VSYXRlc0NoYW5nZWQpO1xuICByZWNhbGN1bGF0ZVRyYWRpbmdQb3J0Zm9saW9WYWx1ZShzdGF0ZSk7XG59XG5cbnR5cGUgTmF0aW9uRXZlbnRUeXBlTmFtZXMgPSBcIldhclwiIHwgXCJGb3JnaW5nIGZyaWVuZHNoaXBzXCIgfCBcIkdvb2QgZGF5XCIgfCBcIkJhZCBkYXlcIiB8IFwiR3JlYXQgbW9udGhcIiB8IFwiVGVycmlibGUgbW9udGhcIiB8IFwiRmFtaW5lXCIgfCBcIkhpZ2ggcHJvZHVjdGl2aXR5XCIgfCBcIkJhZCB5ZWFyXCIgfCBcIk91dHN0YW5kaW5nIHllYXJcIjtcbnR5cGUgTmF0aW9uRXZlbnRUeXBlID0ge1xuICBraW5kOiBcInBvc2l0aXZlXCIgfCBcIm5lZ2F0aXZlXCIsXG4gIG5hbWU6IE5hdGlvbkV2ZW50VHlwZU5hbWVzLFxuICBldmVudFN0YXJ0SGVhZGxpbmU6IHN0cmluZyxcbiAgZXZlbnRFbmRIZWFkbGluZTogc3RyaW5nLFxuICBiYXNlTXVsdGlwbGllcjogUmFuZ2UsXG4gIGZsdXhNdWx0aXBsaWVyOiBSYW5nZSxcbiAgZHVyYXRpb246IFJhbmdlLFxufVxuY29uc3QgbmF0aW9uRXZlbnRUeXBlczogTmF0aW9uRXZlbnRUeXBlW10gPSBbXG4gIHtcbiAgICBraW5kOiBcIm5lZ2F0aXZlXCIsXG4gICAgbmFtZTogXCJXYXJcIixcbiAgICBldmVudFN0YXJ0SGVhZGxpbmU6IFwiaGFzIGdvbmUgdG8gd2FyIVwiLFxuICAgIGV2ZW50RW5kSGVhZGxpbmU6IFwiaXMgbm8gbG9uZ2VyIGF0IHdhclwiLFxuICAgIGJhc2VNdWx0aXBsaWVyOiB7bWluOiAxLjAxLCBtYXg6IDEuMX0sXG4gICAgZmx1eE11bHRpcGxpZXI6IHttaW46IDEuMCwgbWF4OiAxLjF9LFxuICAgIGR1cmF0aW9uOiB7bWluOiA2MCwgbWF4OiAxMjB9XG4gIH0sXG4gIHtcbiAgICBraW5kOiBcInBvc2l0aXZlXCIsXG4gICAgbmFtZTogXCJGb3JnaW5nIGZyaWVuZHNoaXBzXCIsXG4gICAgZXZlbnRTdGFydEhlYWRsaW5lOiBcImlzIGZvcmdpbmcgc3Ryb25nIGZyaWVuZHNoaXBzXCIsXG4gICAgZXZlbnRFbmRIZWFkbGluZTogXCJhcHBlYXJzIG5vcm1hbFwiLFxuICAgIGJhc2VNdWx0aXBsaWVyOiB7bWluOiAwLjkwLCBtYXg6IDAuOTl9LFxuICAgIGZsdXhNdWx0aXBsaWVyOiB7bWluOiAwLjIsIG1heDogMC40fSxcbiAgICBkdXJhdGlvbjoge21pbjogNjAsIG1heDogMTIwfVxuICB9LFxuICB7XG4gICAga2luZDogXCJuZWdhdGl2ZVwiLFxuICAgIG5hbWU6IFwiRmFtaW5lXCIsXG4gICAgZXZlbnRTdGFydEhlYWRsaW5lOiBcImlzIGV4cGVyaWVuY2luZyBhIGZhbWluZVwiLFxuICAgIGV2ZW50RW5kSGVhZGxpbmU6IFwiaGFzIHN1ZmZpY2llbnQgZm9vZCBhbmQgd2F0ZXJcIixcbiAgICBiYXNlTXVsdGlwbGllcjoge21pbjogMS4wMSwgbWF4OiAxLjF9LFxuICAgIGZsdXhNdWx0aXBsaWVyOiB7bWluOiAxLjAsIG1heDogMS4xfSxcbiAgICBkdXJhdGlvbjoge21pbjogMzAsIG1heDogNjB9XG4gIH0sXG4gIHtcbiAgICBraW5kOiBcInBvc2l0aXZlXCIsXG4gICAgbmFtZTogXCJIaWdoIHByb2R1Y3Rpdml0eVwiLFxuICAgIGV2ZW50U3RhcnRIZWFkbGluZTogXCJpcyBodWdlbHkgcHJvZHVjdGl2ZSByaWdodCBub3dcIixcbiAgICBldmVudEVuZEhlYWRsaW5lOiBcImlzIHJlc3RpbmcgZnJvbSB0aGVpciBwcm9kdWN0aXZpdHkgcHVzaFwiLFxuICAgIGJhc2VNdWx0aXBsaWVyOiB7bWluOiAwLjk5LCBtYXg6IDAuOTl9LFxuICAgIGZsdXhNdWx0aXBsaWVyOiB7bWluOiAwLjcsIG1heDogMS4yfSxcbiAgICBkdXJhdGlvbjoge21pbjogMzAsIG1heDogNjB9XG4gIH0sXG4gIHtcbiAgICBraW5kOiBcInBvc2l0aXZlXCIsXG4gICAgbmFtZTogXCJHb29kIGRheVwiLFxuICAgIGV2ZW50U3RhcnRIZWFkbGluZTogXCJpcyBoYXZpbmcgYSBwYXJ0aWN1bGFybHkgZ29vZCB0aW1lXCIsXG4gICAgZXZlbnRFbmRIZWFkbGluZTogXCJpcyBmZWVsaW5nIGF2ZXJhZ2VcIixcbiAgICBiYXNlTXVsdGlwbGllcjoge21pbjogMC45LCBtYXg6IDAuOTl9LFxuICAgIGZsdXhNdWx0aXBsaWVyOiB7bWluOiAwLjcsIG1heDogMC44fSxcbiAgICBkdXJhdGlvbjoge21pbjogMTAsIG1heDogMjB9XG4gIH0sXG4gIHtcbiAgICBraW5kOiBcIm5lZ2F0aXZlXCIsXG4gICAgbmFtZTogXCJCYWQgZGF5XCIsXG4gICAgZXZlbnRTdGFydEhlYWRsaW5lOiBcInN1cmUgbG9va3MgbGlrZSB0aGV5J3JlIGhhdmluZyBhIGJhZCBkYXlcIixcbiAgICBldmVudEVuZEhlYWRsaW5lOiBcImlzIG9rXCIsXG4gICAgYmFzZU11bHRpcGxpZXI6IHttaW46IDEuMDEsIG1heDogMS4xfSxcbiAgICBmbHV4TXVsdGlwbGllcjoge21pbjogMC43LCBtYXg6IDAuOH0sXG4gICAgZHVyYXRpb246IHttaW46IDEwLCBtYXg6IDIwfVxuICB9LFxuICB7XG4gICAga2luZDogXCJwb3NpdGl2ZVwiLFxuICAgIG5hbWU6IFwiR3JlYXQgbW9udGhcIixcbiAgICBldmVudFN0YXJ0SGVhZGxpbmU6IFwiaXMgZW5qb3lpbmcgc3VjY2VzcyB0aGlzIG1vbnRoXCIsXG4gICAgZXZlbnRFbmRIZWFkbGluZTogXCJzZWVtcyBmaW5lXCIsXG4gICAgYmFzZU11bHRpcGxpZXI6IHttaW46IDAuOSwgbWF4OiAwLjk5fSxcbiAgICBmbHV4TXVsdGlwbGllcjoge21pbjogMC43LCBtYXg6IDAuOH0sXG4gICAgZHVyYXRpb246IHttaW46IDIwLCBtYXg6IDQwfVxuICB9LFxuICB7XG4gICAga2luZDogXCJuZWdhdGl2ZVwiLFxuICAgIG5hbWU6IFwiVGVycmlibGUgbW9udGhcIixcbiAgICBldmVudFN0YXJ0SGVhZGxpbmU6IFwibG9va3MgbGlrZSB0aGV5J3JlIHN0cnVnZ2xpbmcgdGhpcyBtb250aFwiLFxuICAgIGV2ZW50RW5kSGVhZGxpbmU6IFwibG9va3MgbGlrZSB0aGV5J3JlIGRvaW5nIGJldHRlclwiLFxuICAgIGJhc2VNdWx0aXBsaWVyOiB7bWluOiAxLjAxLCBtYXg6IDEuMX0sXG4gICAgZmx1eE11bHRpcGxpZXI6IHttaW46IDAuNywgbWF4OiAwLjh9LFxuICAgIGR1cmF0aW9uOiB7bWluOiAyMCwgbWF4OiA0MH1cbiAgfSxcbiAge1xuICAgIGtpbmQ6IFwicG9zaXRpdmVcIixcbiAgICBuYW1lOiBcIk91dHN0YW5kaW5nIHllYXJcIixcbiAgICBldmVudFN0YXJ0SGVhZGxpbmU6IFwiaXMgb3V0c3RhbmRpbmcgdGhpcyB5ZWFyXCIsXG4gICAgZXZlbnRFbmRIZWFkbGluZTogXCJ1cCB0byB0aGUgdXN1YWxcIixcbiAgICBiYXNlTXVsdGlwbGllcjoge21pbjogMC45LCBtYXg6IDAuOTl9LFxuICAgIGZsdXhNdWx0aXBsaWVyOiB7bWluOiAwLjcsIG1heDogMC44fSxcbiAgICBkdXJhdGlvbjoge21pbjogODAsIG1heDogMTYwfVxuICB9LFxuICB7XG4gICAga2luZDogXCJuZWdhdGl2ZVwiLFxuICAgIG5hbWU6IFwiQmFkIHllYXJcIixcbiAgICBldmVudFN0YXJ0SGVhZGxpbmU6IFwiaXNuJ3QgaGF2aW5nIGEgdmVyeSBnb29kIHllYXJcIixcbiAgICBldmVudEVuZEhlYWRsaW5lOiBcImlzbid0IGRvaW5nIHRvbyBiYWRcIixcbiAgICBiYXNlTXVsdGlwbGllcjoge21pbjogMS4wMSwgbWF4OiAxLjF9LFxuICAgIGZsdXhNdWx0aXBsaWVyOiB7bWluOiAwLjcsIG1heDogMC44fSxcbiAgICBkdXJhdGlvbjoge21pbjogODAsIG1heDogMTYwfVxuICB9LFxuXVxuY29uc3QgUkFORE9NX0VWRU5UX1RIUkVTSE9MRCA9IDAuOTtcbmZ1bmN0aW9uIHJhbmRvbUludGVnZXJCZXR3ZWVuKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICByZXR1cm4gTWF0aC5mbG9vcihyYW5kb21EZWNpbWFsQmV0d2VlbihtaW4sIG1heCkpO1xufVxuZnVuY3Rpb24gc2V0QWN0aXZlRXZlbnRPbk5hdGlvbihldmVudDogTmF0aW9uRXZlbnQsIG5hdGlvbjogTmF0aW9uLCBzdGF0ZTogVHJhZGluZ0RvbWFpblN0YXRlKSB7XG4gIGNvbnNvbGUubG9nKCdzZXRBY3RpdmVFdmVudE9uTmF0aW9uJywgZXZlbnQsIG5hdGlvbilcbiAgbmF0aW9uLmFjdGl2ZUV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgc3RhdGUuZXZlbnRzLmVtaXQoRG9tYWluRXZlbnRzLm5hdGlvbkV2ZW50T2NjdXJyZWQsIG5hdGlvbiwgZXZlbnQuZXZlbnRTdGFydEhlYWRsaW5lKTtcbn1cbmZ1bmN0aW9uIGVuZEFjdGl2ZUV2ZW50T25OYXRpb24oZXZlbnQ6IE5hdGlvbkV2ZW50LCBuYXRpb246IE5hdGlvbiwgc3RhdGU6IFRyYWRpbmdEb21haW5TdGF0ZSkge1xuICBsZXQgaW5kZXggPSBuYXRpb24uYWN0aXZlRXZlbnRzLmluZGV4T2YoZXZlbnQpO1xuICBpZiAoaW5kZXggPj0gMCkge1xuICAgIG5hdGlvbi5hY3RpdmVFdmVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBuYXRpb24uaGlzdG9yaWNhbEV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICBzdGF0ZS5ldmVudHMuZW1pdChEb21haW5FdmVudHMubmF0aW9uRXZlbnRFbmRlZCwgbmF0aW9uLCBldmVudC5ldmVudEVuZEhlYWRsaW5lKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGb3JFeHBpcmluZ05hdGlvbkV2ZW50cyhzdGF0ZTogVHJhZGluZ0RvbWFpblN0YXRlKSB7XG4gIGxldCBub3cgPSBEYXRlLm5vdygpO1xuICBzdGF0ZS5uYXRpb25zLmZvckVhY2gobmF0aW9uID0+IHtcbiAgICBuYXRpb24uYWN0aXZlRXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRyaWdnZXJlZFRpbWUgKyBldmVudC5kdXJhdGlvbioxMDAwIDw9IG5vdykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkV4cGlyaW5nIGFuIGV2ZW50ISEhXCIsIG5vdywgZXZlbnQpO1xuICAgICAgICBlbmRBY3RpdmVFdmVudE9uTmF0aW9uKGV2ZW50LCBuYXRpb24sIHN0YXRlKVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1blJhbmRvbU5hdGlvbkV2ZW50cyhzdGF0ZTogVHJhZGluZ0RvbWFpblN0YXRlKSB7XG4gIGlmIChNYXRoLnJhbmRvbSgpID4gUkFORE9NX0VWRU5UX1RIUkVTSE9MRCkge1xuICAgIGNvbnNvbGUubG9nKFwiQSBSQU5ET00gRVZFTlQgT0NDVVJSRUQhISFcIik7XG4gICAgbGV0IGV2ZW50VHlwZSA9IG5hdGlvbkV2ZW50VHlwZXNbcmFuZG9tSW50ZWdlckJldHdlZW4oMCwgbmF0aW9uRXZlbnRUeXBlcy5sZW5ndGgpXTtcbiAgICBsZXQgY2hvc2VuTmF0aW9uID0gc3RhdGUubmF0aW9uc1tyYW5kb21JbnRlZ2VyQmV0d2VlbigwLCBzdGF0ZS5uYXRpb25zLmxlbmd0aCldO1xuICAgIGlmIChjaG9zZW5OYXRpb24uYWN0aXZlRXZlbnRzLmxlbmd0aCA9PSAwIHx8IChjaG9zZW5OYXRpb24uYWN0aXZlRXZlbnRzLmxlbmd0aCA9PSAxICYmIGNob3Nlbk5hdGlvbi5hY3RpdmVFdmVudHNbMF0ua2luZCA9PSBldmVudFR5cGUua2luZCkpIHtcbiAgICAgIGxldCBldmVudDogTmF0aW9uRXZlbnQgPSB7XG4gICAgICAgIGJhc2VNdWx0aXBsaWVyOiByYW5kb21EZWNpbWFsQmV0d2VlbihldmVudFR5cGUuYmFzZU11bHRpcGxpZXIubWluLCBldmVudFR5cGUuYmFzZU11bHRpcGxpZXIubWF4KSxcbiAgICAgICAgZmx1eE11bHRpcGxpZXI6IHJhbmRvbURlY2ltYWxCZXR3ZWVuKGV2ZW50VHlwZS5mbHV4TXVsdGlwbGllci5taW4sIGV2ZW50VHlwZS5mbHV4TXVsdGlwbGllci5tYXgpLFxuICAgICAgICBuYW1lOiBldmVudFR5cGUubmFtZSxcbiAgICAgICAgZXZlbnRTdGFydEhlYWRsaW5lOiBldmVudFR5cGUuZXZlbnRTdGFydEhlYWRsaW5lLFxuICAgICAgICBldmVudEVuZEhlYWRsaW5lOiBldmVudFR5cGUuZXZlbnRFbmRIZWFkbGluZSxcbiAgICAgICAgZHVyYXRpb246IHJhbmRvbUludGVnZXJCZXR3ZWVuKGV2ZW50VHlwZS5kdXJhdGlvbi5taW4sIGV2ZW50VHlwZS5kdXJhdGlvbi5tYXgpLFxuICAgICAgICB0cmlnZ2VyZWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICBraW5kOiBldmVudFR5cGUua2luZCxcbiAgICAgIH07XG4gICAgICBzZXRBY3RpdmVFdmVudE9uTmF0aW9uKGV2ZW50LCBjaG9zZW5OYXRpb24sIHN0YXRlKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcmFuZG9tQXJyYXlFbGVtZW50ID0gPFQ+KGFycjogVFtdKTogVCA9PiB7XG4gIHJldHVybiBhcnJbcmFuZG9tSW50ZWdlckJldHdlZW4oMCwgYXJyLmxlbmd0aCldO1xufVxuXG5leHBvcnQgY29uc3QgYWRkUmV2ZW51ZVRvUm9vdEFjb3VudCA9IChzdGF0ZTogVHJhZGluZ0RvbWFpblN0YXRlLCByZXZlbnVlQW1vdW50OiBudW1iZXIpID0+IHtcbiAgc3RhdGUucm9vdEFjY291bnQuYmFsYW5jZSArPSByZXZlbnVlQW1vdW50O1xuICBzdGF0ZS5ldmVudHMuZW1pdChEb21haW5FdmVudHMuYWNjb3VudEJhbGFuY2VDaGFuZ2VkLCBzdGF0ZS5yb290QWNjb3VudCk7XG59O1xuXG5cbmV4cG9ydCBjb25zdCBzdGFydFJ1bW9yQWN0aW9uOiBJbmZsdWVuY2VBY3Rpb24gPSB7XG4gIGNvc3Q6IDEwMDAsXG4gIG5hbWU6IFwiU1RBUlQgUlVNT1JcIixcbiAgZXZlbnRUeXBlOiB7XG4gICAgbmFtZTogXCJTdGFydCBSdW1vclwiLFxuICAgIHN1Y2Nlc3NSYXRlOiAwLjkwLFxuICAgIHN1Y2Nlc3NIZWFkbGluZXM6IFtcbiAgICAgIFwiaGFzIHJlcG9ydGVkIGdvb2QgbWFya2V0IGJlaGF2aW9yXCIsXG4gICAgXSxcbiAgICBmYWlsdXJlSGVhZGxpbmVzOiBbXG4gICAgICBcIndhcyBjYXVnaHQgbHlpbmcgYWJvdXQgbmF0aW9uYWwgaW5jb21lXCIsXG4gICAgXSxcbiAgICBzdWNjZXNzQmFzZU11bHRpcGxpZXI6IHttaW46IDAuOTUsIG1heDogMC45OX0sXG4gICAgc3VjY2Vzc0ZsdXhNdWx0aXBsaWVyOiB7bWluOiAwLjcsIG1heDogMC44fSxcbiAgICBmYWlsdXJlQmFzZU11bHRpcGxpZXI6IHttaW46IDEuMDEsIG1heDogMS4wNX0sXG4gICAgZmFpbHVyZUZsdXhNdWx0aXBsaWVyOiB7bWluOiAwLjcsIG1heDogMC44fSxcbiAgICBkdXJhdGlvbjoge21pbjogODAsIG1heDogMTYwfVxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGJyaWJlUG9saXRpY2lhbkFjdGlvbjogSW5mbHVlbmNlQWN0aW9uID0ge1xuICBjb3N0OiAxMDAwMCxcbiAgbmFtZTogXCJCUklCRSBQT0xJVElDSUFOXCIsXG4gIGV2ZW50VHlwZToge1xuICAgIG5hbWU6IFwiQnJpYmVcIixcbiAgICBzdWNjZXNzUmF0ZTogMC43NSxcbiAgICBzdWNjZXNzSGVhZGxpbmVzOiBbXG4gICAgICBcImlzIGRvaW5nIGluZXhwbGljYWJseSB3ZWxsIHRvZGF5XCIsXG4gICAgXSxcbiAgICBmYWlsdXJlSGVhZGxpbmVzOiBbXG4gICAgICBcImlzIHN1ZmZlcmluZyBmcm9tIGEgYnJpYmVyeSBzY2FuZGFsXCIsXG4gICAgXSxcbiAgICBzdWNjZXNzQmFzZU11bHRpcGxpZXI6IHttaW46IDAuOSwgbWF4OiAwLjk5fSxcbiAgICBzdWNjZXNzRmx1eE11bHRpcGxpZXI6IHttaW46IDAuNywgbWF4OiAwLjh9LFxuICAgIGZhaWx1cmVCYXNlTXVsdGlwbGllcjoge21pbjogMS4wMywgbWF4OiAxLjEzfSxcbiAgICBmYWlsdXJlRmx1eE11bHRpcGxpZXI6IHttaW46IDAuNywgbWF4OiAwLjh9LFxuICAgIGR1cmF0aW9uOiB7bWluOiA4MCwgbWF4OiAxNjB9XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgcmlnRWxlY3Rpb25BY3Rpb246IEluZmx1ZW5jZUFjdGlvbiA9IHtcbiAgY29zdDogMTAwMDAwLFxuICBuYW1lOiBcIlJJRyBFTEVDVElPTlwiLFxuICBldmVudFR5cGU6IHtcbiAgICBuYW1lOiBcIlJpZyBFbGVjdGlvblwiLFxuICAgIHN1Y2Nlc3NSYXRlOiAwLjUsXG4gICAgc3VjY2Vzc0hlYWRsaW5lczogW1xuICAgICAgXCJoYWQgYW4gdW5mb3JzZWVuIHVwc2V0IGF0IHRoZSBwb2xscyB0b2RheVwiLFxuICAgIF0sXG4gICAgZmFpbHVyZUhlYWRsaW5lczogW1xuICAgICAgXCJ1bmNvdmVyZWQgZXZpZGVuY2UgdGhhdCB0aGUgbGFzdCBlbGVjdGlvbiB3YXMgcmlnZ2VkXCIsXG4gICAgXSxcbiAgICBzdWNjZXNzQmFzZU11bHRpcGxpZXI6IHttaW46IDAuOCwgbWF4OiAwLjkwfSxcbiAgICBzdWNjZXNzRmx1eE11bHRpcGxpZXI6IHttaW46IDAuNywgbWF4OiAwLjh9LFxuICAgIGZhaWx1cmVCYXNlTXVsdGlwbGllcjoge21pbjogMS4xMCwgbWF4OiAxLjJ9LFxuICAgIGZhaWx1cmVGbHV4TXVsdGlwbGllcjoge21pbjogMC43LCBtYXg6IDAuOH0sXG4gICAgZHVyYXRpb246IHttaW46IDgwLCBtYXg6IDE2MH1cbiAgfSxcbn07XG5cbnR5cGUgSW5mbHVlbmNlRXZlbnRUeXBlTmFtZXMgPSBcIlN0YXJ0IFJ1bW9yXCIgfCBcIkJyaWJlXCIgfCBcIlJpZyBFbGVjdGlvblwiO1xuZXhwb3J0IGNvbnN0IGluZmx1ZW5jZUFjdGlvbnM6IEluZmx1ZW5jZUFjdGlvbltdID0gW1xuICBzdGFydFJ1bW9yQWN0aW9uLFxuICBicmliZVBvbGl0aWNpYW5BY3Rpb24sXG4gIHJpZ0VsZWN0aW9uQWN0aW9uLFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hdGlvbkZyb21BY2NvdW50KHN0YXRlOiBUcmFkaW5nRG9tYWluU3RhdGUsIGFjY291bnQ6IEFjY291bnQpIHtcbiAgcmV0dXJuIHN0YXRlLm5hdGlvbnMuZmluZCgobmF0aW9uKSA9PiBuYXRpb24uY3VycmVuY3kubmFtZSA9PT0gYWNjb3VudC5jdXJyZW5jeS5uYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UnVtb3Ioc3RhdGU6IFRyYWRpbmdEb21haW5TdGF0ZSwgYWNjb3VudDogQWNjb3VudCkge1xuICBzZXRBY3RpdmVOYXRpb25FdmVudEZyb21BY3Rpb24oc3RhdGUsIGFjY291bnQsIHN0YXJ0UnVtb3JBY3Rpb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJpYmVQb2xpdGljaWFuKHN0YXRlOiBUcmFkaW5nRG9tYWluU3RhdGUsIGFjY291bnQ6IEFjY291bnQpIHtcbiAgc2V0QWN0aXZlTmF0aW9uRXZlbnRGcm9tQWN0aW9uKHN0YXRlLCBhY2NvdW50LCBicmliZVBvbGl0aWNpYW5BY3Rpb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnRWxlY3Rpb24oc3RhdGU6IFRyYWRpbmdEb21haW5TdGF0ZSwgYWNjb3VudDogQWNjb3VudCkge1xuICBzZXRBY3RpdmVOYXRpb25FdmVudEZyb21BY3Rpb24oc3RhdGUsIGFjY291bnQsIHJpZ0VsZWN0aW9uQWN0aW9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFjdGl2ZU5hdGlvbkV2ZW50RnJvbUFjdGlvbihzdGF0ZTogVHJhZGluZ0RvbWFpblN0YXRlLCBhY2NvdW50OiBBY2NvdW50LCBhY3Rpb246IEluZmx1ZW5jZUFjdGlvbikge1xuICBpZiAoc3RhdGUucm9vdEFjY291bnQuYmFsYW5jZSA8IGFjdGlvbi5jb3N0KSB7XG4gICAgY29uc29sZS5sb2coYFVuYWJsZSB0byBwZXJmb3JtIGluZmx1ZW5jZSBiZWNhdXNlIGFjY291bnQgYmFsYW5jZSAoJHtmb3JtYXROdW1iZXJGb3JEaXNwbGF5KHN0YXRlLnJvb3RBY2NvdW50LmJhbGFuY2UpfSkgaXMgbGVzcyB0aGFuIHRoZSBhY3Rpb24gY29zdCAoJHtmb3JtYXROdW1iZXJGb3JEaXNwbGF5KGFjdGlvbi5jb3N0KX0pYCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbmF0aW9uID0gZ2V0TmF0aW9uRnJvbUFjY291bnQoc3RhdGUsIGFjY291bnQpO1xuICBpZiAoIW5hdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcigndW5hYmxlIHRvIGZpbmQgbmF0aW9uIGZyb20gYWNjb3VudCcpO1xuICB9XG5cbiAgYWRkUmV2ZW51ZVRvUm9vdEFjb3VudChzdGF0ZSwgLWFjdGlvbi5jb3N0KTtcblxuICBjb25zdCBldmVudCA9IGNyZWF0ZU5hdGlvbkV2ZW50RnJvbUluZmx1ZW5jZUFjdGlvbihhY3Rpb24pO1xuXG4gIHNldEFjdGl2ZUV2ZW50T25OYXRpb24oZXZlbnQsIG5hdGlvbiwgc3RhdGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXRpb25FdmVudEZyb21JbmZsdWVuY2VBY3Rpb24oYWN0aW9uOiBJbmZsdWVuY2VBY3Rpb24pOiBOYXRpb25FdmVudCB7XG4gIGNvbnN0IHN1Y2Nlc3MgPSBNYXRoLnJhbmRvbSgpIDwgYWN0aW9uLmV2ZW50VHlwZS5zdWNjZXNzUmF0ZTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBhY3Rpb24uZXZlbnRUeXBlLm5hbWUsXG4gICAgICBkdXJhdGlvbjogcmFuZG9tSW50ZWdlckJldHdlZW4oYWN0aW9uLmV2ZW50VHlwZS5kdXJhdGlvbi5taW4sIGFjdGlvbi5ldmVudFR5cGUuZHVyYXRpb24ubWF4KSxcbiAgICAgIHRyaWdnZXJlZFRpbWU6IERhdGUubm93KCksXG4gICAgICBiYXNlTXVsdGlwbGllcjogcmFuZG9tRGVjaW1hbEJldHdlZW4oYWN0aW9uLmV2ZW50VHlwZS5zdWNjZXNzQmFzZU11bHRpcGxpZXIubWluLCBhY3Rpb24uZXZlbnRUeXBlLnN1Y2Nlc3NCYXNlTXVsdGlwbGllci5tYXgpLFxuICAgICAgZmx1eE11bHRpcGxpZXI6IHJhbmRvbURlY2ltYWxCZXR3ZWVuKGFjdGlvbi5ldmVudFR5cGUuc3VjY2Vzc0ZsdXhNdWx0aXBsaWVyLm1pbiwgYWN0aW9uLmV2ZW50VHlwZS5zdWNjZXNzRmx1eE11bHRpcGxpZXIubWF4KSxcbiAgICAgIGV2ZW50U3RhcnRIZWFkbGluZTogcmFuZG9tQXJyYXlFbGVtZW50KGFjdGlvbi5ldmVudFR5cGUuc3VjY2Vzc0hlYWRsaW5lcyksXG4gICAgICBraW5kOiBcInBvc2l0aXZlXCIsXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogYWN0aW9uLmV2ZW50VHlwZS5uYW1lLFxuICAgICAgZHVyYXRpb246IHJhbmRvbUludGVnZXJCZXR3ZWVuKGFjdGlvbi5ldmVudFR5cGUuZHVyYXRpb24ubWluLCBhY3Rpb24uZXZlbnRUeXBlLmR1cmF0aW9uLm1heCksXG4gICAgICB0cmlnZ2VyZWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgYmFzZU11bHRpcGxpZXI6IHJhbmRvbURlY2ltYWxCZXR3ZWVuKGFjdGlvbi5ldmVudFR5cGUuZmFpbHVyZUJhc2VNdWx0aXBsaWVyLm1pbiwgYWN0aW9uLmV2ZW50VHlwZS5mYWlsdXJlQmFzZU11bHRpcGxpZXIubWF4KSxcbiAgICAgIGZsdXhNdWx0aXBsaWVyOiByYW5kb21EZWNpbWFsQmV0d2VlbihhY3Rpb24uZXZlbnRUeXBlLmZhaWx1cmVGbHV4TXVsdGlwbGllci5taW4sIGFjdGlvbi5ldmVudFR5cGUuZmFpbHVyZUZsdXhNdWx0aXBsaWVyLm1heCksXG4gICAgICBldmVudFN0YXJ0SGVhZGxpbmU6IHJhbmRvbUFycmF5RWxlbWVudChhY3Rpb24uZXZlbnRUeXBlLmZhaWx1cmVIZWFkbGluZXMpLFxuICAgICAga2luZDogXCJuZWdhdGl2ZVwiLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuaW1wb3J0IFNjZW5lcyBmcm9tICcuL3NjZW5lcyc7XG5pbXBvcnQgKiBhcyBTdHlsZXMgZnJvbSAnc3JjL3NoYXJlZC9zdHlsZXMnO1xuXG5jb25zdCBnYW1lQ29uZmlnOiBHYW1lQ29uZmlnID0ge1xuICB0aXRsZTogJ0N1cnJlbmN5IFRyYWRlcicsXG5cbiAgdHlwZTogUGhhc2VyLkFVVE8sXG5cbiAgd2lkdGg6IFN0eWxlcy53aWR0aCxcbiAgaGVpZ2h0OiBTdHlsZXMuaGVpZ2h0LFxuXG4gIHNjZW5lOiBTY2VuZXMsXG5cbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuICAgIGFyY2FkZToge1xuICAgICAgZGVidWc6IHRydWUsXG4gICAgfSxcbiAgfSxcblxuICBwYXJlbnQ6ICdnYW1lJyxcbiAgYmFja2dyb3VuZENvbG9yOiBTdHlsZXMuYmFja2dyb3VuZENvbG9yLFxufTtcblxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIGdhbWUucmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xufSk7XG4iLCJjb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlNjZW5lcy5TZXR0aW5ncy5Db25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6ICdCb290Jyxcbn07XG5cblxuLyoqXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IGxvYWRzIGFsbCBuZWNlc3NhcnkgYXNzZXRzIHRvIHRoZSBnYW1lIGFuZCBkaXNwbGF5cyBhIGxvYWRpbmcgYmFyLlxuICovXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRHYW1lV2lkdGggPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZS5zY2FsZS53aWR0aDtcbiAgfTtcblxuICBwcml2YXRlIGdldEdhbWVIZWlnaHQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZS5zY2FsZS5oZWlnaHQ7XG4gIH07XG5cbiAgcHVibGljIHByZWxvYWQoKSB7XG4gICAgY29uc3QgaGFsZldpZHRoID0gdGhpcy5nZXRHYW1lV2lkdGgoKSAqIDAuNTtcbiAgICBjb25zdCBoYWxmSGVpZ2h0ID0gdGhpcy5nZXRHYW1lSGVpZ2h0KCkgKiAwLjU7XG5cbiAgICBjb25zdCBwcm9ncmVzc0JhckhlaWdodCA9IDEwMDtcbiAgICBjb25zdCBwcm9ncmVzc0JhcldpZHRoID0gNDAwO1xuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJDb250YWluZXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoaGFsZldpZHRoLCBoYWxmSGVpZ2h0LCBwcm9ncmVzc0JhcldpZHRoLCBwcm9ncmVzc0JhckhlaWdodCwgMHgwMDAwMDApO1xuICAgIGNvbnN0IHByb2dyZXNzQmFyID0gdGhpcy5hZGQucmVjdGFuZ2xlKGhhbGZXaWR0aCArIDIwIC0gcHJvZ3Jlc3NCYXJDb250YWluZXIud2lkdGggKiAwLjUsIGhhbGZIZWlnaHQsIDEwLCBwcm9ncmVzc0JhckhlaWdodCAtIDIwLCAweDg4ODg4OCk7XG5cbiAgICBjb25zdCBsb2FkaW5nVGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gNzUsIGhhbGZIZWlnaHQgLSAxMDAsICdMb2FkaW5nLi4uJykuc2V0Rm9udFNpemUoMjQpO1xuICAgIGNvbnN0IHBlcmNlbnRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCwgJzAlJykuc2V0Rm9udFNpemUoMjQpO1xuICAgIGNvbnN0IGFzc2V0VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gMjUsIGhhbGZIZWlnaHQgKyAxMDAsICcnKS5zZXRGb250U2l6ZSgyNCk7XG5cbiAgICB0aGlzLmxvYWQub24oJ3Byb2dyZXNzJywgKHZhbHVlKSA9PiB7XG4gICAgICBwcm9ncmVzc0Jhci53aWR0aCA9IChwcm9ncmVzc0JhcldpZHRoIC0gMzApICogdmFsdWU7XG5cbiAgICAgIGNvbnN0IHBlcmNlbnQgPSB2YWx1ZSAqIDEwMDtcbiAgICAgIHBlcmNlbnRUZXh0LnNldFRleHQoYCR7cGVyY2VudH0lYCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWQub24oJ2ZpbGVwcm9ncmVzcycsIChmaWxlKSA9PiB7XG4gICAgICBhc3NldFRleHQuc2V0VGV4dChmaWxlLmtleSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWQub24oJ2NvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgbG9hZGluZ1RleHQuZGVzdHJveSgpO1xuICAgICAgcGVyY2VudFRleHQuZGVzdHJveSgpO1xuICAgICAgYXNzZXRUZXh0LmRlc3Ryb3koKTtcbiAgICAgIHByb2dyZXNzQmFyLmRlc3Ryb3koKTtcbiAgICAgIHByb2dyZXNzQmFyQ29udGFpbmVyLmRlc3Ryb3koKTtcblxuICAgICAgdGhpcy5zY2VuZS5zdGFydCgnTWFpbk1lbnUnKTtcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZEFzc2V0cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbCBhc3NldHMgdGhhdCBuZWVkIHRvIGJlIGxvYWRlZCBieSB0aGUgZ2FtZSAoc3ByaXRlcywgaW1hZ2VzLCBhbmltYXRpb25zLCB0aWxlcywgbXVzaWMsIGV0YylcbiAgICogc2hvdWxkIGJlIGFkZGVkIHRvIHRoaXMgbWV0aG9kLiBPbmNlIGxvYWRlZCBpbiwgdGhlIGxvYWRlciB3aWxsIGtlZXAgdHJhY2sgb2YgdGhlbSwgaW5kZXBlZGVudCBvZiB3aGljaCBzY2VuZVxuICAgKiBpcyBjdXJyZW50bHkgYWN0aXZlLCBzbyB0aGV5IGNhbiBiZSBhY2Nlc3NlZCBhbnl3aGVyZS5cbiAgICovXG4gIHByaXZhdGUgbG9hZEFzc2V0cygpIHtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3RyZW5kLXVwJywgJ2Fzc2V0cy90cmVuZC11cC5zdmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3RyZW5kLWRvd24nLCAnYXNzZXRzL3RyZW5kLWRvd24uc3ZnJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdsb2dvLXBuZycsICdhc3NldHMvbG9nby5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xvZ28tc3ZnJywgJ2Fzc2V0cy9sb2dvLnN2ZycpO1xuICAgIHRoaXMubG9hZC5hdWRpbygncm9vdC1tYWtlci1tdXNpYy0xJywgJ2Fzc2V0cy9yb290LW1ha2VyLW11c2ljLTEubXAzJyk7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIERvbWFpbiBmcm9tICdzcmMvZG9tYWluJztcbmltcG9ydCAqIGFzIFRyYWRpbmdEb21haW4gZnJvbSAnc3JjL2RvbWFpbi90cmFkaW5nJztcbmltcG9ydCB7IERvbWFpbkV2ZW50cyB9IGZyb20gJ3NyYy9kb21haW4vZXZlbnRzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAqIGFzIEV4Y2hhbmdlSW50ZXJmYWNlIGZyb20gJy4uL2NvbXBvbmVudHMvZXhjaGFuZ2UtaW50ZXJmYWNlJztcbmltcG9ydCAqIGFzIFN0eWxlcyBmcm9tICdzcmMvc2hhcmVkL3N0eWxlcyc7XG5pbXBvcnQgeyBhZGRIb3Jpem9udGFsU2NyZWVuTGluZSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2xpbmUnO1xuaW1wb3J0IHsgYWRkUmVjdGFuZ2xlIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvcmVjdGFuZ2xlJztcbmltcG9ydCAqIGFzIEN1bHRJbnRlcmZhY2UgZnJvbSAnLi4vY29tcG9uZW50cy9jdWx0LWludGVyZmFjZSc7XG5pbXBvcnQgKiBhcyBUaWNrZXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvdGlja2VyJztcbmltcG9ydCB7IEdhbWVFdmVudHMgfSBmcm9tICdzcmMvc2hhcmVkL2V2ZW50cyc7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuU2NlbmVzLlNldHRpbmdzLkNvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogJ0dhbWUnLFxufTtcblxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIGRvbWFpblN0YXRlOiBEb21haW4uRG9tYWluU3RhdGU7XG4gIHRpY2tlclN0YXRlOiBUaWNrZXIuVGlja2VyU3RhdGU7XG5cbiAgcHVibGljIGJ1eUFtb3VudDogbnVtYmVyID0gMDtcbiAgcHVibGljIHNlbGxBbW91bnQ6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBzZWxlY3RlZEFjY291bnQ6IFRyYWRpbmdEb21haW4uQWNjb3VudDtcblxuICB1c2VybmFtZTogc3RyaW5nO1xuXG4gIGRvbWFpblRpY2tUaW1lID0gMTAwMDsgLy8gbWlsbGlzZWNvbmRzXG4gIHRpbWVTaW5jZUxhc3RUaWNrID0gMDtcbiAgbXVzaWM6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgcHVibGljIGluaXQoZGF0YTogeyB1c2VybmFtZTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLnVzZXJuYW1lID0gZGF0YS51c2VybmFtZSB8fCAnJztcblxuICAgIHRoaXMuZXZlbnRzLm9uKEdhbWVFdmVudHMuYnV5QW1vdW50Q2hhbmdlZCwgKGFtb3VudCkgPT4ge1xuICAgICAgdGhpcy5idXlBbW91bnQgPSBhbW91bnQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLmV2ZW50cy5vbihHYW1lRXZlbnRzLnNlbGxBbW91bnRDaGFuZ2VkLCAoYW1vdW50KSA9PiB7XG4gICAgICB0aGlzLnNlbGxBbW91bnQgPSBhbW91bnQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLmV2ZW50cy5vbihHYW1lRXZlbnRzLnNlbGVjdGVkQWNjb3VudENoYW5nZWQsICh7IGFjY291bnQgfSkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZEFjY291bnQgPSBhY2NvdW50O1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmRvbWFpblN0YXRlID0gRG9tYWluLmluaXREb21haW5TdGF0ZSh7XG4gICAgICByb290Q3VycmVuY3lOYW1lOiAncm9vdCcsXG4gICAgICByb290Q3VycmVuY3lTdGFydGluZ0Ftb3VudDogMTAwLFxuICAgICAgbmF0aW9uczogW1xuICAgICAgICB7IGN1cnJlbmN5OiAnRHVsbGVyJywgbmF0aW9uOiAnQW5kcm9tZWRhJyB9LFxuICAgICAgICB7IGN1cnJlbmN5OiAnV2hlbicsIG5hdGlvbjogJ0NvcmVubmlhJyB9LFxuICAgICAgICB7IGN1cnJlbmN5OiAnUHJhd24nLCBuYXRpb246ICdHcmVhdCBCdXJ0b24nIH0sXG4gICAgICAgIHsgY3VycmVuY3k6ICdQZXN0bycsIG5hdGlvbjogJ01lZGlhbicgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cblxuICAgIHRoaXMubXVzaWMgPSB0aGlzLnNvdW5kLmFkZCgncm9vdC1tYWtlci1tdXNpYy0xJywgeyBsb29wOiB0cnVlLCB2b2x1bWU6IDEgfSk7XG4gICAgdGhpcy5tdXNpYy5wbGF5KCk7XG4gICAgdGhpcy5zb3VuZC5wYXVzZU9uQmx1ciA9IGZhbHNlO1xuXG4gICAgY29uc3QgZXhjaGFuZ2VUYWIgPSB0aGlzLmFkZC50ZXh0KFN0eWxlcy5vZmZzZXQsIFN0eWxlcy50YWJZLCAnRVhDSEFOR0UnLCBTdHlsZXMuc2VsZWN0ZWRUYWIpO1xuICAgIGV4Y2hhbmdlVGFiLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KTtcbiAgICBleGNoYW5nZVRhYi5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xuICAgICAgY3VsdFRhYi5zZXRTdHlsZShTdHlsZXMudW5zZWxlY3RlZFRhYik7XG4gICAgICBleGNoYW5nZVRhYi5zZXRTdHlsZShTdHlsZXMuc2VsZWN0ZWRUYWIpO1xuICAgICAgY3VsdENvbnRhaW5lci5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgIGV4Y2hhbmdlQ29udGFpbmVyLnNldFZpc2libGUodHJ1ZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjdWx0VGFiID0gdGhpcy5hZGQudGV4dChleGNoYW5nZVRhYi54ICsgZXhjaGFuZ2VUYWIud2lkdGggKyBTdHlsZXMub2Zmc2V0ICogMiwgU3R5bGVzLnRhYlksICdDVUxUJywgU3R5bGVzLnVuc2VsZWN0ZWRUYWIpO1xuICAgIGN1bHRUYWIuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgY3VsdFRhYi5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSkub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcbiAgICAgIGV4Y2hhbmdlVGFiLnNldFN0eWxlKFN0eWxlcy51bnNlbGVjdGVkVGFiKTtcbiAgICAgIGN1bHRUYWIuc2V0U3R5bGUoU3R5bGVzLnNlbGVjdGVkVGFiKTtcbiAgICAgIGV4Y2hhbmdlQ29udGFpbmVyLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgY3VsdENvbnRhaW5lci5zZXRWaXNpYmxlKHRydWUpO1xuICAgIH0pO1xuICAgIHRoaXMuZG9tYWluU3RhdGUuZXZlbnRzLm9uKERvbWFpbkV2ZW50cy5jdWx0Q2FwYWJpbGl0eVVubG9ja2VkLCAoKSA9PiB7XG4gICAgICBjdWx0VGFiLnNldFZpc2libGUodHJ1ZSk7XG4gICAgfSk7XG5cblxuXG4gICAgY29uc3QgbG9nbyA9IHRoaXMuYWRkLmltYWdlKFN0eWxlcy5vZmZzZXQgKiAyLCBTdHlsZXMub2Zmc2V0LCAnbG9nby1wbmcnKS5zZXRPcmlnaW4oMCwgMCk7XG4gICAgLy8gbG9nby5zZXRTY2FsZSgwLjMsIDAuMyk7IC8vIG5lY2Vzc2FyeSBmb3IgdGhlIHN2ZyBzdHlsZVxuICAgIGFkZEhvcml6b250YWxTY3JlZW5MaW5lKHRoaXMsIDUwKTtcbiAgICBjb25zdCB1c2VybmFtZVRleHQgPSB0aGlzLmFkZC50ZXh0KFN0eWxlcy5vZmZzZXQsIDcwLCAnVVNFUk5BTUUnLCBTdHlsZXMubGlzdEl0ZW1TdHlsZSk7XG4gICAgYWRkUmVjdGFuZ2xlKHRoaXMsIHVzZXJuYW1lVGV4dC54ICsgdXNlcm5hbWVUZXh0LndpZHRoICsgKFN0eWxlcy5vZmZzZXQgKiAyKSwgNjAsIFN0eWxlcy50cmFkZVBhZ2UudXNlcm5hbWVXaWR0aCwgU3R5bGVzLnRyYWRlUGFnZS51c2VybmFtZUhlaWdodCwgU3R5bGVzLmZvcmVncm91bmRDb2xvckhleCk7XG4gICAgdGhpcy5hZGQudGV4dCh1c2VybmFtZVRleHQueCArIHVzZXJuYW1lVGV4dC53aWR0aCArIChTdHlsZXMub2Zmc2V0ICogMyksIDYwICsgU3R5bGVzLm9mZnNldCAvIDIsIHRoaXMudXNlcm5hbWUsIHsgY29sb3I6IFN0eWxlcy50ZXh0Q29sb3IgfSk7XG5cbiAgICBhZGRIb3Jpem9udGFsU2NyZWVuTGluZSh0aGlzLCAxMDApO1xuICAgIGFkZEhvcml6b250YWxTY3JlZW5MaW5lKHRoaXMsIDcwMCk7XG5cbiAgICBjb25zdCBleGNoYW5nZUNvbnRhaW5lciA9IEV4Y2hhbmdlSW50ZXJmYWNlLmNyZWF0ZUV4Y2hhbmdlSW50ZXJmYWNlKHRoaXMsIHRoaXMuZG9tYWluU3RhdGUpO1xuICAgIGNvbnN0IGN1bHRDb250YWluZXIgPSBDdWx0SW50ZXJmYWNlLmNyZWF0ZUN1bHRJbnRlcmZhY2UodGhpcywgdGhpcy5kb21haW5TdGF0ZSkuc2V0VmlzaWJsZShmYWxzZSk7XG5cbiAgICB0aGlzLnRpY2tlclN0YXRlID0gVGlja2VyLmNyZWF0ZU5ld3NUaWNrZXIodGhpcywgdGhpcy5kb21haW5TdGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XG4gICAgdGhpcy50aW1lU2luY2VMYXN0VGljayArPSBkZWx0YTtcblxuICAgIGlmICh0aGlzLnRpbWVTaW5jZUxhc3RUaWNrID49IHRoaXMuZG9tYWluVGlja1RpbWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0aWNrIScpO1xuICAgICAgdGhpcy50aW1lU2luY2VMYXN0VGljayA9IDA7XG5cbiAgICAgIERvbWFpbi5oYW5kbGVUaWNrKHRoaXMuZG9tYWluU3RhdGUpO1xuICAgIH1cblxuICAgIFRpY2tlci51cGRhdGVTdG9yaWVzKHRoaXMsIHRoaXMudGlja2VyU3RhdGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNYWluTWVudVNjZW5lIH0gZnJvbSAnLi9tYWluLW1lbnUtc2NlbmUnO1xuaW1wb3J0IHsgQm9vdFNjZW5lIH0gZnJvbSAnLi9ib290LXNjZW5lJztcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gJy4vZ2FtZS1zY2VuZSc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgQm9vdFNjZW5lLFxuICBNYWluTWVudVNjZW5lLFxuICBHYW1lU2NlbmUsXG5dO1xuIiwiaW1wb3J0ICogYXMgU3R5bGVzIGZyb20gJ3NyYy9zaGFyZWQvc3R5bGVzJztcbmltcG9ydCAqIGFzIFNoYXJlZCBmcm9tICdzcmMvc2hhcmVkJztcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2J1dHRvbic7XG5pbXBvcnQgeyBjcmVhdGVJbnB1dEJveCB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2lucHV0LWJveCc7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuU2NlbmVzLlNldHRpbmdzLkNvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogJ01haW5NZW51Jyxcbn07XG5cbmV4cG9ydCBjbGFzcyBNYWluTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgcHJpdmF0ZSB1c2VybmFtZTogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBsb2dvWCA9IDMwMDtcbiAgICBjb25zdCB1c2VybmFtZVRleHRYID0gMzc1O1xuICAgIGNvbnN0IHVzZXJuYW1lRmllbGRYID0gNDc1O1xuICAgIGNvbnN0IGxvZ2luQnV0dG9uV2lkdGggPSAxMDA7XG4gICAgY29uc3QgbG9naW5YID0gKFN0eWxlcy53aWR0aCAvIDIpIC0gbG9naW5CdXR0b25XaWR0aCAvIDI7XG4gICAgY29uc3QgbG9naW5ZID0gNTAwO1xuXG4gICAgY29uc3QgbG9nb1kgPSAyMDA7XG4gICAgY29uc3QgdXNlcm5hbWVZID0gNDAwO1xuXG4gICAgdGhpcy5hZGQuaW1hZ2UobG9nb1gsIGxvZ29ZLCAnbG9nby1zdmcnKS5zZXRPcmlnaW4oMCwgMCk7XG5cbiAgICB0aGlzLmFkZC50ZXh0KHVzZXJuYW1lVGV4dFgsIHVzZXJuYW1lWSArIDUsICdVU0VSTkFNRTonKTtcbiAgICBjcmVhdGVJbnB1dEJveCh0aGlzLCB1c2VybmFtZUZpZWxkWCwgdXNlcm5hbWVZLCAodGV4dDogc3RyaW5nKSA9PiB0aGlzLnVzZXJuYW1lID0gdGV4dCwgMTIpO1xuXG4gICAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0dhbWUnLCB7IHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lIH0pO1xuICAgIH07XG4gICAgY3JlYXRlQnV0dG9uKHRoaXMsIGxvZ2luWCwgbG9naW5ZLCAnTE9HSU4nLCBvbkNsaWNrLCBsb2dpbkJ1dHRvbldpZHRoKVxuICB9XG59XG4iLCJcbmV4cG9ydCBlbnVtIEdhbWVFdmVudHMge1xuICBzZWxlY3RlZEFjY291bnRDaGFuZ2VkID0gXCJnYW1lLnNlbGVjdGVkQWNjb3VudENoYW5nZWRcIixcbiAgYnV5QW1vdW50Q2hhbmdlZCA9IFwiZ2FtZS5idXlBbW91bnRDaGFuZ2VkXCIsXG4gIHNlbGxBbW91bnRDaGFuZ2VkID0gXCJnYW1lLnNlbGxBbW91bnRDaGFuZ2VkXCIsXG59XG4iLCJleHBvcnQgY29uc3QgZ2V0R2FtZVdpZHRoID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcbiAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUud2lkdGg7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG4gIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLmhlaWdodDtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXROdW1iZXJGb3JEaXNwbGF5ID0gKG46IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQoYCR7bn1gKTtcbiAgaWYgKGlzTmFOKG51bSkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIG51bS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7c3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnVVNEJywgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyfSkuc3Vic3RyaW5nKDEpO1xufTtcblxuLy8gZXhwb3J0IGNvbnN0IGZvcm1hdE51bWJlckZvckRpc3BsYXkgPSAobjogbnVtYmVyIHwgc3RyaW5nKSA9PiB7XG4vLyAgIHJldHVybiBwYXJzZUZsb2F0KGAke259YCkudG9GaXhlZCgyKTtcbi8vIH07XG4iLCJleHBvcnQgY29uc3QgYmFja2dyb3VuZENvbG9yID0gJyNBMjk3NzEnO1xuZXhwb3J0IGNvbnN0IGZvcmVncm91bmRDb2xvciA9ICcjMkIyNjFDJztcbmV4cG9ydCBjb25zdCB0ZXh0Q29sb3IgPSAnI0NEQ0JDMic7XG5leHBvcnQgY29uc3QgZGV0YWlsRGFya0NvbG9yID0gJyM4MTdDNkEnO1xuZXhwb3J0IGNvbnN0IGRldGFpbExpZ2h0Q29sb3IgPSAnI0YyRTlDQyc7XG5leHBvcnQgY29uc3QgYnV0dG9uVGV4dENvbG9yID0gJyM0RTQ2MjYnO1xuXG5leHBvcnQgY29uc3QgYmFja2dyb3VuZENvbG9ySGV4ID0gMHhBMjk3NzE7XG5leHBvcnQgY29uc3QgZm9yZWdyb3VuZENvbG9ySGV4ID0gMHgyQjI2MUM7XG5leHBvcnQgY29uc3QgdGV4dENvbG9ySGV4ID0gMHhDRENCQzI7XG5leHBvcnQgY29uc3QgZGV0YWlsRGFya0NvbG9ySGV4ID0gMHg4MTdDNkE7XG5leHBvcnQgY29uc3QgZGV0YWlsTGlnaHRDb2xvckhleCA9IDB4RjJFOUNDO1xuZXhwb3J0IGNvbnN0IGJ1dHRvblRleHRDb2xvckhleCA9IDB4NEU0NjI2O1xuXG5leHBvcnQgY29uc3QgbGlzdEl0ZW1TdHlsZSA9IHsgZm9udFNpemU6ICcxNHB4JywgY29sb3I6IHRleHRDb2xvciB9O1xuZXhwb3J0IGNvbnN0IHRyYWRlQW1vdW50VGV4dCA9IHsgZm9udFNpemU6ICcxMnB4JywgY29sb3I6IHRleHRDb2xvciB9O1xuZXhwb3J0IGNvbnN0IGF2YWlsYWJsZVJvb3QgPSB7IGZvbnRTaXplOiAnMTZweCcsIGNvbG9yOiAnIzg5RjY2MycgfTtcbmV4cG9ydCBjb25zdCBidXR0b25MYWJlbFN0eWxlID0geyBmb250U2l6ZTogJzE0cHgnLCBjb2xvcjogZm9yZWdyb3VuZENvbG9yIH07XG5cbmV4cG9ydCBjb25zdCBmb3JlZ3JvdW5kU3R5bGUgPSB7IGNvbG9yOiBmb3JlZ3JvdW5kQ29sb3IgfTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkVGFiID0geyBmb250U2l6ZTogJzE2cHgnLCBjb2xvcjogYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kQ29sb3I6IGJ1dHRvblRleHRDb2xvciB9O1xuZXhwb3J0IGNvbnN0IHVuc2VsZWN0ZWRUYWIgPSB7IGZvbnRTaXplOiAnMTZweCcsIGNvbG9yOiBidXR0b25UZXh0Q29sb3IsIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yIH07XG5cbmV4cG9ydCBjb25zdCBvZmZzZXQgPSAxMDtcblxuZXhwb3J0IGNvbnN0IHdpZHRoID0gMTAyNDtcbmV4cG9ydCBjb25zdCBoZWlnaHQgPSA3Njg7XG5leHBvcnQgY29uc3QgaW5wdXRCb3hXaWR0aCA9IDE1MDtcblxuZXhwb3J0IGNvbnN0IHRyYWRlUGFnZSA9IHtcbiAgY3VycmVuY3lMaXN0OiB7XG4gICAgd2lkdGg6IDcwNyxcbiAgICBoZWlnaHQ6IDUzNCxcbiAgICB4OiBvZmZzZXQsXG4gICAgeTogMTUwLFxuICAgIGl0ZW1Db2xvcjogdGV4dENvbG9yLFxuICAgIGhlYWRlckNvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgaGVhZGVySGVpZ2h0OiA0NSxcbiAgICBsaXN0SXRlbVg6IG9mZnNldCAqIDIsXG4gICAgbGlzdEl0ZW1ZOiAxOTUsXG4gIH0sXG4gIHRyYWRlSW50ZXJmYWNlOiB7XG4gICAgeDogNzA3ICsgMiAqIG9mZnNldCxcbiAgICBleGNoYW5nZVRhYlk6IDE1MCxcbiAgICBpbnB1dEJveFg6IHdpZHRoIC0gb2Zmc2V0IC0gaW5wdXRCb3hXaWR0aCxcbiAgfSxcbiAgdHJhbnNhY3Rpb25XaWR0aDogMjg3LFxuICB1c2VybmFtZVdpZHRoOiAyNTQsXG4gIHVzZXJuYW1lSGVpZ2h0OiAzMCxcbiAgaW5wdXRXaWR0aDogMTQzLFxuICBpbnB1dEhlaWdodDogMzksXG4gIHNlbGVjdGVkTGluZUl0ZW1IZXg6IDB4M0UzRTNELFxufVxuXG5leHBvcnQgY29uc3QgY3VsdFBhZ2UgPSB7XG4gIGZvbGxvd2VyTGlzdDoge1xuICAgIHdpZHRoOiA1ODAsXG4gICAgaGVpZ2h0OiA1MzQsXG4gICAgeDogb2Zmc2V0LFxuICAgIHk6IDE1MCxcbiAgICBpdGVtQ29sb3I6IHRleHRDb2xvcixcbiAgICBoZWFkZXJDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgIGhlYWRlckhlaWdodDogNDUsXG4gICAgbGlzdEl0ZW1YOiBvZmZzZXQgKiAyLFxuICAgIGxpc3RJdGVtWTogMTk1LFxuICB9LFxuICBvcHRpb25zOiB7XG4gICAgbGFiZWxTdHlsZTogYnV0dG9uTGFiZWxTdHlsZSxcbiAgICBidXR0b25PZmZzZXRIZWlnaHQ6IDc1LFxuICAgIGJ1dHRvblg6IDg1MCxcbiAgICBsYWJlbFg6IDYwMCwgLy8gU3R5bGVzLmN1bHRQYWdlLmZvbGxvd2VyTGlzdC53aWR0aCArIFN0eWxlcy5vZmZzZXQgKiAyXG4gIH0sXG4gIGhhcHBpbmVzczoge1xuICAgIHg6IDYwMCxcbiAgICBsYWJlbFk6IDUyNSxcbiAgICBtZXRlclk6IDU1MCxcbiAgICBtZXRlcldpZHRoOiA0MTUsXG4gICAgbWV0ZXJIZWlnaHQ6IDUwLFxuICB9LFxuICBkb25hdGlvbjoge1xuICAgIGxhYmVsWDogNjAwLFxuICAgIGlucHV0WDogODUwLFxuICAgIHk6IDY1MCxcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHRhYlkgPSAxMTc7XG5leHBvcnQgY29uc3QgbGluZUl0ZW1IZWlnaHQgPSAzMDtcblxuZXhwb3J0IGNvbnN0IHRpY2tlcldpZHRoID0gMTAwNDtcbmV4cG9ydCBjb25zdCB0aWNrZXJIZWlnaHQgPSA1MDtcbiJdLCJzb3VyY2VSb290IjoiIn0=