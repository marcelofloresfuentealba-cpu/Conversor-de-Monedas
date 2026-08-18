const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  convertValue();
  form.reset();
});

const convertValue = async function () {
  try {
    const valor = Number(document.querySelector("#valor").value);
    const moneda = document.querySelector("#moneda").value;
    if (valor && moneda != "sin seleccion") {
      const response = await obtenerDatos(moneda);
      const apiValue = response.serie[0].valor;
      const days = response.serie
        .map((d) => {
          return (setDate = d.fecha.split("T", 1));
        })
        .slice(0, 10)
        .reverse();
      const values = response.serie
        .map((v) => v.valor)
        .slice(0, 10)
        .reverse();
      

      //console.log(apiValue);
      await resultConvertion(valor, apiValue);
      //console.log(response);
      await renderChart(days, values, moneda);
    } else {
      return alert("debe ingresar un valor");
    }
  } catch (error) {
    return alert("error al optener los datos");
  }
};

async function obtenerDatos(moneda) {
  const res = await fetch(`https://mindicador.cl/api/${moneda}`);
  if (!res.ok) {
    throw new Error("error al obtener datos desde la api");
  } else {
    return await res.json();
  }
}

async function resultConvertion(userValue, apiValue) {
  const convertedValue = userValue / apiValue;
  document.querySelector(
    "#resultado"
  ).textContent = `El valor convertido es: ${convertedValue.toFixed(2)}`;
}

let chart;
async function renderChart(days, values, moneda) {
  const ctx = document.getElementById("chart");
  
    if (chart) {
        chart.destroy();
    }

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: days,
      datasets: [
        {
          label: `Valor del ${moneda} en los últimos 10 días`,
          data: values,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
            "rgba(102, 255, 153, 0.2)",
            "rgba(255, 128, 128, 0.2)",
            "rgba(255, 230, 179, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
            "rgb(102, 255, 153)",
            "rgb(255, 128, 128)",
            "rgb(255, 230, 179)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}