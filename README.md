Conversor de Monedas Nacional

Este proyecto es una aplicación web que permite convertir un monto en Pesos Chilenos (CLP) a otras monedas (como Dólar, Euro.) consultando datos en tiempo real. Además, incluye una representación gráfica del historial de valor de la moneda seleccionada durante los últimos 10 días.

Descripción

El objetivo de este desafío es validar los conocimientos sobre el consumo de APIs utilizando el método fetch en JavaScript, así como la manipulación dinámica del DOM y la integración de librerías externas.

Funcionalidades principales

* Conversión en tiempo real: Ingresa un monto en CLP y selecciona la moneda de destino para calcular la equivalencia.

* Visualización de datos: Muestra el resultado de la conversión directamente en la interfaz.

* Historial gráfico: Integra una librería de gráficas para visualizar el comportamiento de la moneda seleccionada en los últimos 10 días.

Requerimientos Técnicos

Para cumplir con los criterios de evaluación, el proyecto implementa:

1. Consumo de API: Obtención de tipos de cambio. 

2. Lógica de Negocio: Cálculo preciso de la conversión y actualización del DOM.

3. Selector de Monedas: Implementación de al menos 2 opciones de moneda con funcionamiento correcto para ambas.

4. Manejo de Errores: Uso de try...catch al realizar el fetch para capturar y notificar errores en la interfaz en caso de fallos en la conexión o API.

5. Gráfico de Tendencia: Implementación de un gráfico con el historial de los últimos 10 días utilizando una librería de JavaScript (ej. Chart.js).

Tecnologías Utilizadas

* HTML5 / CSS3
* JavaScript (ES6+)
* API
* Librería de gráficos

Instalación y Ejecución

1. Clona este repositorio en tu máquina local.
2. Abre el archivo index.html en tu navegador.

Estructura de la Interfaz

La aplicación cuenta con:

* Un input para el monto en CLP.
* Un select para elegir la moneda de destino.
* Un botón "Buscar" para procesar la información.
* Un área de visualización para el resultado y el gráfico.