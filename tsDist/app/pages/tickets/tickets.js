"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tickets_1 = require("@rest/tickets");
require("@myCss"); // добавлена новая ссылка - ссылка ведет на один файл
require("@assets/styles/tickets.scss");
var ticketInfo_1 = require("../../templates/ticketInfo");
var general_1 = require("@services/general/general");
var ticketInstance;
var ticketPostInstance;
var clientType = "custom";
// init main  data
initApp();
registerConfirmButton();
function initApp() {
    var ticketData = (0, tickets_1.getTicketById)('someId');
    ticketData.then(function (data) {
        ticketInstance = data[0];
        var ticketName = typeof (ticketInstance === null || ticketInstance === void 0 ? void 0 : ticketInstance.name) === "string" ? ticketInstance === null || ticketInstance === void 0 ? void 0 : ticketInstance.name : '';
        (0, general_1.initHeaderTitle)(ticketName, 'h3');
        (0, general_1.initFooterTitle)('Туры по всему миру', 'h2');
        initTicketInfo(ticketInstance);
    });
}
/*  - перенести все методы ниже в раздел services (сюда импортировать и вызывать)
    - Указать в методах возвращающие типы, в теле функции также указать типы чтобы не было ошибок
*/
function initTicketInfo(ticket) {
    var targetElement = document.querySelector('.ticket-info');
    var ticketDescription = ticket === null || ticket === void 0 ? void 0 : ticket.description;
    var ticketOperator = ticket === null || ticket === void 0 ? void 0 : ticket.tourOperator;
    var vipClientType;
    if ("vipStatus" in ticket) {
        vipClientType = ticket.vipStatus;
    }
    var ticketElemsArr = [ticketDescription, ticketOperator, vipClientType];
    var ticketElemTemplate;
    ticketElemsArr.forEach(function (el, i) {
        ticketElemTemplate += (0, ticketInfo_1.initTicketElementTemplate)(el, i);
    });
    targetElement.innerHTML = ticketElemTemplate;
}
function initUserData() {
    var userInfo = document.querySelectorAll('.user-info > p');
    var userInfoObj;
    userInfo.forEach(function (el) {
        var inputDataName = el.getAttribute('data-name');
        if (inputDataName) {
            var inputElems = el.querySelector('input');
            userInfoObj[inputDataName] = inputElems.value;
        }
    });
    console.log('userInfoObj', userInfoObj);
    return userInfoObj;
}
function initPostData(data) {
    initUserData();
    (0, tickets_1.postTicketData)(data).then(function (data) {
        if (data.success) {
        }
    });
}
function registerConfirmButton() {
    var targetEl = document.getElementById('accept-order-button');
    if (targetEl) {
        targetEl.addEventListener('click', function () {
            initPostData(ticketPostInstance);
        });
    }
}
//# sourceMappingURL=tickets.js.map