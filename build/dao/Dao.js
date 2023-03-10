"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Connection_1 = require("./Connection");
var Dao = /** @class */ (function () {
    function Dao(createMethod, updateMethod, deleteMethod, readMethod, readAllMethod) {
        this.createMethod = createMethod;
        this.updateMethod = updateMethod;
        this.deleteMethod = deleteMethod;
        this.readMethod = readMethod;
        this.readAllMethod = readAllMethod;
    }
    Dao.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var body, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        body = req.body;
                        return [4 /*yield*/, Connection_1.connection.execute("CALL ".concat(this.createMethod), this.procedureParams(body))];
                    case 1:
                        _a.sent();
                        res.status(201).json(body);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        res.status(500).json(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Dao.prototype.read = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, data, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, Connection_1.connection.execute("CALL ".concat(this.readMethod), [
                                id,
                            ])];
                    case 1:
                        data = (_a.sent())[0][0][0];
                        res.status(200).json(data);
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        console.error(e_2);
                        res.status(500).json(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Dao.prototype.readAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Connection_1.connection.execute("CALL ".concat(this.readAllMethod))];
                    case 1:
                        data = (_a.sent())[0][0];
                        res.status(200).json(data);
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        console.error(e_3);
                        res.status(500).json(e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Dao.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, body, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        body = req.body;
                        return [4 /*yield*/, Connection_1.connection.execute("CALL ".concat(this.updateMethod), __spreadArray([
                                id
                            ], this.procedureParams(body), true))];
                    case 1:
                        _a.sent();
                        res.status(200).json(body);
                        return [3 /*break*/, 3];
                    case 2:
                        e_4 = _a.sent();
                        console.error(e_4);
                        res.status(500).json(e_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Dao.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, Connection_1.connection.execute("CALL ".concat(this.deleteMethod), [id])];
                    case 1:
                        _a.sent();
                        res.status(200).json(id);
                        return [3 /*break*/, 3];
                    case 2:
                        e_5 = _a.sent();
                        console.error(e_5);
                        res.status(500).json(e_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Dao;
}());
exports.default = Dao;
//# sourceMappingURL=Dao.js.map