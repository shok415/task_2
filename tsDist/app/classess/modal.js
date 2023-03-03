"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var Modal = /** @class */ (function () {
    function Modal(id) {
        if (id === void 0) { id = null; }
        var _this = this;
        this.closeModalHandler = function (ev) {
            var target = ev.target;
            if (target.classList.contains('close-modal')) {
                _this.remove();
            }
        };
        var findModal = Modal.modals.find(function (x) { return x.id == id; });
        if (findModal) {
            Modal.removeById(id);
        }
        Modal.modals.push(this);
        this.id = id || String((Math.random() + Modal.modals.length));
    }
    Modal.prototype.open = function (template) {
        var dirWrap = document.createElement("div");
        dirWrap.innerHTML = template;
        dirWrap.id = this.id;
        dirWrap.setAttribute('modal-id', this.id);
        dirWrap.classList.add("modal-element");
        document.body.appendChild(dirWrap);
    };
    Modal.prototype.remove = function () {
        var el = document.getElementById(this.id);
        if (el) {
            el.removeEventListener('click', this.closeModalHandler);
            el.parentNode.removeChild(el);
        }
    };
    Modal.removeById = function (id) {
        if (id === void 0) { id = null; }
        var modalId = id;
        var findEl = Modal.modals.find(function (x) { return x.id === modalId; });
        if (findEl) {
            findEl.remove();
            Modal.modals = Modal.modals.filter(function (el) { return el.id !== modalId; });
        }
        else {
            if (Array.isArray(Modal.modals)) {
                var lastEl = Modal.modals.pop();
                if (lastEl) {
                    lastEl.remove();
                }
            }
        }
    };
    Modal.removeAll = function () {
        if (Array.isArray(Modal.modals)) {
            Modal.modals.forEach(function (el) {
                Modal.removeById(el.id);
            });
        }
    };
    Modal.modals = [];
    return Modal;
}());
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map