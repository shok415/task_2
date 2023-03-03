"use strict";
/* Общие методы используются для вставки текста в header   footer*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.initFooterTitle = exports.initHeaderTitle = void 0;
/*  -
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы
*/
function initHeaderTitle(ticketName, selector) {
    var headerElement = document.querySelector('header');
    var targetItem = headerElement.querySelector(selector);
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}
exports.initHeaderTitle = initHeaderTitle;
function initFooterTitle(ticketName, selector) {
    var headerElement = document.querySelector('footer');
    var targetItem = headerElement.querySelector(selector);
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}
exports.initFooterTitle = initFooterTitle;
//# sourceMappingURL=general.js.map