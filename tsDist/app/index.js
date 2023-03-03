"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toursDataArray = void 0;
var tours_1 = require("@rest/tours");
require("./assets/styles/main.scss");
var img_1 = require("@services/img/img");
var tours_2 = require("./templates/tours");
var modalService_1 = require("@services/modal/modalService");
var general_1 = require("@services/general/general");
exports.toursDataArray = [];
var imagesStore = img_1.images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist
(0, general_1.initHeaderTitle)('Туры', 'h1');
(0, general_1.initFooterTitle)('Туры по всему миру', 'h2');
// init data
var tourData = (0, tours_1.getTours)();
tourData.then(function (data) {
    console.log('call ');
    exports.toursDataArray = data;
    initToursDivElements(data);
});
// init app
/*  - перенести все методы ниже в раздел services (сюда импортировать и вызывать)
-   создать метод initApp который будет здесь вызываться, в теле метода добавить эти имортированные методы
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы чтобы не было ошибок
*/
function initToursDivElements(data) {
    if (Array.isArray(data)) {
        var rootElement = document.querySelector('.main-app');
        var tourWrap = document.createElement('div');
        tourWrap.classList.add('tour-wrap');
        // init click for modal
        initTourElemListener(tourWrap);
        var rootElementData_1 = '';
        data.forEach(function (el, i) {
            rootElementData_1 += (0, tours_2.getTourTemplate)(el, i);
        });
        tourWrap.innerHTML = rootElementData_1;
        rootElement.appendChild(tourWrap);
    }
}
function initTourElemListener(tourWrap) {
    tourWrap.addEventListener('click', function (ev) {
        var targetItem = ev.target;
        var parentItem = targetItem === null || targetItem === void 0 ? void 0 : targetItem.parentNode;
        var realTarget;
        if (targetItem.hasAttribute('data-tour-item-index')) {
            realTarget = targetItem;
        }
        else if (parentItem && parentItem.hasAttribute('data-tour-item-index')) {
            realTarget = parentItem;
        }
        if (realTarget) {
            var dataIndex = realTarget.getAttribute('data-tour-item-index');
            (0, modalService_1.openModal)('order', Number(dataIndex));
        }
    });
}
//# sourceMappingURL=index.js.map