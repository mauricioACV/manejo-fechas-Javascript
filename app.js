console.clear();
const fechaMesDiaAgno = (agnoMesDia, separador) => {
  const agno = agnoMesDia.split(separador)[0];
  const mes = agnoMesDia.split(separador)[1];
  const dia = agnoMesDia.split(separador)[2];
  const diaMesAgno = `${mes}${separador}${dia}${separador}${agno}`;
  return diaMesAgno;
};
const tiempoUnixHoraCero = (tUnix) => {
  const tUnixHoraCero = new Date(tUnix);
  return tUnixHoraCero.setHours(0, 0, 0, 0);
};
const fecha1 = new Date().toLocaleString(); // --> esto simula la forma en que la data de hotel obtiene la fecha
const fecha2 = new Date("08/26/2021").toLocaleString(); // --> cambiar por la fecha actual
const fecha3 = new Date("2021-08-26").toLocaleString(); // --> cambiar por la fecha actual
//debo cambiar la fecha que recibo desde el input al formato mm/dd/yyyy
const fechaInput = "2021-08-26"; // --> cambiar por la fecha actual
const fechaFormato = fechaMesDiaAgno(fechaInput, "-");
console.log("como viene del input " + fechaInput);
console.log("como la necesito " + fechaFormato);

const fecha1_ = new Date().valueOf();
const fecha2_input = new Date(fechaInput).getTime();
const fecha2_ = new Date(fechaFormato).getTime();

console.log("toLocalString de data hotel " + fecha1);
console.log("toLocalString fecha como viene del input (no sirve) " + fecha3);
console.log("toLocalString fecha input formateada (si sirve) " + fecha2);

const fecha1_tUnixCero = tiempoUnixHoraCero(fecha1_);
const fecha2_input_tUnixCero = tiempoUnixHoraCero(fecha2_input);
const fecha2_tUnixCero = tiempoUnixHoraCero(fecha2_);
console.log(
  "tUnix hora cero como viene del input (no sirve) " + fecha2_input_tUnixCero
);
console.log(
  "tUnix hora cero fecha formateada como la necesito (así sirve) " +
    fecha2_tUnixCero
);
console.log("tUnix hora cero data hotel " + fecha1_tUnixCero);
