class Cliente {
  _nombre;
  _impuestos;
  constructor(nombre, impuestos) {
    this._nombre = nombre;
    this._impuestos = impuestos;
  }

  calcularImpuesto() {
    let mba = this.impuestos.monto_bruto_anual;
    let deduc = this.impuestos.deducciones;
    let resultado = ((mba - deduc) * 21) / 100;
    return console.log("Impuesto Total a Pagar: " + "$"+resultado);
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  set impuestos(nuevoImpuesto) {
    this._impuestos = nuevoImpuesto;
  }

  get impuestos() {
    return this._impuestos;
  }
}

export default Cliente;
