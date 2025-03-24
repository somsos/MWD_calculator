# Calculador de Propiedades Hidráulicas

## Fuentes

- [Calc Online](https://www.drcalderonlabs.com/Software/Calculador%20Textural.html)

## Preguntas

1. A que te refieres con ejecutable, para escritorio, web o android?

2. No entiendo la hoja de excel, ¿cuales representan la entradas y cuales la salidas?

## Ejemplo de análisis

Por ejemplo para la calculadora que me pasaste seria algo asi:

**Entradas**: Arena y Arcilla

**Salidas**: Marchitez, ...

| % Arena       | % Arcilla     | Marchitez |   ...    |
| ------------- |:-------------:| ---------:| --------:|
| 20            |      30       |      0.17 |      ... |
| 50            |      50       |      0.27 |      ... |

## Pasos

Si tenemos:

- Porcentaje de arena = 20
- Porcentaje de arcilla = 30

Paso 1: Pasar valores de arena y la arcilla al cuadrado

```shell
arena^2   = 20*20 = 400
arcilla^2 = 30*30 = 900
```

Paso 2: Cálculo del acoef

Formula:

```shell
acoef = exp(−4.396 − 0.0715 × arcilla − 4.88 × 10 − 4 × arena^2 − 4.285 × 10 − 5 × arcilla^2 × arcilla)
```

Sustitución:

```shell
exp(−4.396−0.0715×30−4.88×10−4×400−4.285×10−5×400×30) = 0.000711
```

Paso 3 ...

## Ejemplo de código

```js
// Caso 1
let Arena = 20;
let Arcilla = 30;
let PuntoMarchitez = calcWiltingPoint(Arena, Arcilla);


console.log("Resultado:", PuntoMarchitez); // = 0.17


function calcWiltingPoint(percent_sand, percent_clay) {
  let sand_2 = percent_sand * percent_sand;
  let clay_2 = percent_clay * percent_clay;
  let acoef = Math.exp(-4.396 - 0.0715 * percent_clay - 4.88e-4 * sand_2 - 4.285e-5 * sand_2 * percent_clay);
  let bcoef = - 3.140 - 0.00222 * clay_2 - 3.484e-5 * sand_2 * percent_clay;
  let PWP = Math.pow((15.0  / acoef),(1.0 / bcoef));
  let wilting_point = Math.round(PWP * Math.pow(10,2))/Math.pow(10,2) ;
  return wilting_point;
}
```

