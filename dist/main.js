"use strict";

var _cliente = _interopRequireDefault(require("c:/Users/gentz/OneDrive/Escritorio/PJS/DesafioES6/src/cliente.js"));

var _impuestos = _interopRequireDefault(require("c:/Users/gentz/OneDrive/Escritorio/PJS/DesafioES6/src/impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuesto = new _impuestos["default"](10000, 5000);
var cliente = new _cliente["default"]("Marcela", impuesto);
cliente.calcularImpuesto();