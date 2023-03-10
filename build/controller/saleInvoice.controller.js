"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Dao_1 = require("../dao/Dao");
var SaleInvoiceController = /** @class */ (function (_super) {
    __extends(SaleInvoiceController, _super);
    function SaleInvoiceController() {
        return _super.call(this, "createSaleInvoice(?, ?, ?, ?, ?, ?)", "updateSaleInvoice(?, ?, ?, ?, ?, ?, ?)", "deleteSaleInvoice(?)", "getSaleInvoice(?)", "getAllSaleInvoices()") || this;
    }
    SaleInvoiceController.prototype.procedureParams = function (resource) {
        return [
            resource.NIT,
            resource._idEmployee,
            resource._idCashRegister,
            resource.emissionDate,
            resource.expirationDate,
            resource.total,
        ];
    };
    return SaleInvoiceController;
}(Dao_1.default));
exports.default = new SaleInvoiceController();
//# sourceMappingURL=saleInvoice.controller.js.map