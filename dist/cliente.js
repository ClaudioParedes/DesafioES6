"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuestos) {
    _classCallCheck(this, Cliente);

    _defineProperty(this, "_nombre", void 0);

    _defineProperty(this, "_impuestos", void 0);

    this._nombre = nombre;
    this._impuestos = impuestos;
  }

  _createClass(Cliente, [{
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      var mba = this.impuestos.monto_bruto_anual;
      var deduc = this.impuestos.deducciones;
      resultado = (mba - deduc) * 21 / 100;
      return resultado;
    }
  }, {
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  }, {
    key: "impuestos",
    get: function get() {
      return this._impuestos;
    },
    set: function set(nuevoImpuesto) {
      this._impuestos = nuevoImpuesto;
    }
  }]);

  return Cliente;
}();

var _default = Cliente;
exports["default"] = _default;