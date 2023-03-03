function openModal(id) {
    if (id === void 0) { id = null; }
    var template = '<div>Окно</div>';
    var modal = new ModalService(id);
    modal.open(template);
}
function openModalSecond(id) {
    if (id === void 0) { id = null; }
    var template = '<div>Окно 2</div>';
    var modal = new ModalService(id);
    modal.open(template);
}
function removeModal() {
    ModalService.removeById();
}
function removeAll() {
    ModalService.removeAll();
}
var ModalService = /** @class */ (function () {
    function ModalService(id) {
        if (id === void 0) { id = null; }
        var findModal = ModalService.modals.find(function (x) { return x.id == id; });
        if (findModal) {
            ModalService.removeById(id);
        }
        ModalService.modals.push(this);
        this.id = id || String((Math.random() + ModalService.modals.length));
    }
    ModalService.prototype.open = function (template) {
        var dirWrap = document.createElement("div");
        dirWrap.innerHTML = template;
        dirWrap.id = this.id;
        dirWrap.setAttribute('modal-id', this.id);
        dirWrap.classList.add("modal-element");
        document.body.appendChild(dirWrap);
    };
    ModalService.prototype.remove = function () {
        var _a;
        var modalEl = document.getElementById(this.id);
        (_a = modalEl === null || modalEl === void 0 ? void 0 : modalEl.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(modalEl);
    };
    ModalService.removeById = function (id) {
        if (id === void 0) { id = null; }
        var modalId = id;
        var findEl = ModalService.modals.find(function (x) { return x.id === modalId; });
        if (findEl) {
            findEl.remove();
            ModalService.modals = ModalService.modals.filter(function (el) { return el.id !== modalId; });
        }
        else {
            if (Array.isArray(ModalService.modals)) {
                var lastEl = ModalService.modals.pop();
                if (lastEl) {
                    lastEl.remove();
                }
            }
        }
    };
    ModalService.removeAll = function () {
        if (Array.isArray(ModalService.modals)) {
            ModalService.modals.forEach(function (el) {
                ModalService.removeById(el.id);
            });
        }
    };
    ModalService.modals = [];
    return ModalService;
}());
//# sourceMappingURL=modalService.js.map