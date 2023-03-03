"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openModal = void 0;
var modal_1 = require("../../classess/modal");
var index_1 = require("../../index"); // ссылка на массив с данными
// Определить типы для метода (возвращающие и для переменных в теле функции)
function openModal(type, i) {
    var _a;
    var data = index_1.toursDataArray[i];
    var tourId = (_a = data[i]) === null || _a === void 0 ? void 0 : _a.id;
    var modalInfo = {};
    switch (type) {
        case "order":
            var modalTemplate = "\n      <div> \n      <p data-moda-id=\"tour-modal\" class=\"close-modal\">x</p>\n      <p>".concat(data.name, "</p>\n      <p>").concat(data.description, "</p>\n       \n       <div data-tour-id=").concat(tourId, " class=\"ticket-submit\">\n       <a href=\"/ticket.html\">\u041A\u0443\u043F\u0438\u0442\u044C \u0431\u0438\u043B\u0435\u0442</a>\n</div>\n     </div>\n  ");
            var modal = new modal_1.Modal('tour-modal');
            modal.open(modalTemplate);
            break;
    }
}
exports.openModal = openModal;
//# sourceMappingURL=modalService.js.map