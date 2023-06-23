function calculateLinesOfCode() {
  const income  = parseInt(document.getElementById("income").value);
  const delays  = parseInt(document.getElementById("delays").value);
  const lines   = parseInt(document.getElementById("lines").value);

  let result = "";

  // if (isNaN(lines)) {
  //   const lineCost = Math.ceil(income / (50 / 100));
  //   const delayPenalty = Math.round(delays * (20 / 3));
  //   const linesNeeded = ;
  //   result += `Кількість рядків коду, яку потрібно написати: ${lineCost}<br>`;
  // }

  document.getElementById("result").innerHTML = result;
}
