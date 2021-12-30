import Cliente from "./cliente.mjs";
import Impuestos from "./impuestos.mjs";

let impuesto = new Impuestos(10000, 5000);
let cliente = new Cliente("Marcela", impuesto);

cliente.calcularImpuesto();

