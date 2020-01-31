let data = [];
// let options = {
//   chartHeight: '',
//   chartWidth: '',
//   spacing: barSpacing 
// };
//let element = inner.HTML() // where the chart gets rendered into HTML page

//customize:
let barSpacing = 3;

let testData = [[1, 2, 3, 4, 5, 6], [4, 8, 3, 12, 7, 3]]

function drawBarChart(data) {
  let xAxisLength = testData[0].length * barSpacing;
  let yAxisLength = Math.max(...testData);
  let xAxisValues = [];
  let yAxisValues = [];

  function generateXAxis() {
    for (let i = 1; i <= xAxisLength; i++) {
      if (i > 0 && (i) % barSpacing === 0) {
        xAxisValues.push(testData[0][(i / barSpacing) - 1]);
      } else xAxisValues.push(' ')
    }
  }

  function generateYAxis() {
    for (let i = 1; i <= xAxisLength; i++) {
      if (i > 0 && (i) % barSpacing === 0) {
        yAxisValues.push(testData[1][(i / barSpacing) - 1]);
      } else yAxisValues.push(' ')
    }
  }
  return yAxisValues
}


console.log(drawBarChart(testData))

// drawBarChart(data, options, element);
