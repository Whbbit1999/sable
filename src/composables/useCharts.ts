import { ChartConfiguration } from 'chart.js'
export default () => {
  const barChartsData: ChartConfiguration = {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
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
  }

  const labels = []
  for (let i = 0; i < 11; ++i) {
    labels.push(i.toString())
  }
  const datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170]
  const datapoints2 = [0, 20, 20, 60, 60, 10, 222, 10, 120, 125, 105, 110, 170]
  const datapoints3 = [0, 20, 20, 602, 602, 102, 22, 10, 120, 125, 105, 110, 170]
  const lineChartData: ChartConfiguration = {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Cubic interpolation (monotone)',
          data: datapoints,
          fill: false,
          cubicInterpolationMode: 'monotone',
          tension: 0.4,
        },
        {
          label: 'Cubic interpolation',
          data: datapoints2,
          fill: false,
          tension: 0.4,
        },
        {
          label: 'Linear interpolation (default)',
          data: datapoints3,
          fill: false,
          tension: 0.2,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Line Chart - Cubic interpolation mode',
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Value',
          },
          suggestedMin: -10,
          suggestedMax: 200,
        },
      },
    },
  }
  return { barChartsData, lineChartData }
}
