let Arena = 20;
let Arcilla = 30;
let PuntoMarchitez = calcWiltingPoint(Arena, Arcilla);
console.log("Resultado:", PuntoMarchitez); //

function calcWiltingPoint(percent_sand, percent_clay) {
  let sand_2 = percent_sand * percent_sand;
  let clay_2 = percent_clay * percent_clay;
  let acoef = Math.exp(-4.396 - 0.0715 * percent_clay - 4.88e-4 * sand_2 - 4.285e-5 * sand_2 * percent_clay);
  let bcoef = - 3.140 - 0.00222 * clay_2 - 3.484e-5 * sand_2 * percent_clay;
  let PWP = Math.pow((15.0  / acoef),(1.0 / bcoef));
  let wilting_point = Math.round(PWP * Math.pow(10,2))/Math.pow(10,2) ;
  return wilting_point;
}