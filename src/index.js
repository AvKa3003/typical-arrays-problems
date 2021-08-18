function min (array) {
  if (!arguments.length || array.length == 0) return 0;
  return array.sort((a, b) => {return a - b;})[0];
}

function max (array) {
  if (!arguments.length || array.length == 0) return 0;
  return array.sort((a, b) => {return a - b;})[array.length - 1];
}

function avg (array) {
  if (!arguments.length || array.length == 0) return 0;
  return array.reduce((result, item) => {return result + item;}, 0)/array.length;
}

exports.min = min;

exports.max = max;

exports.avg = avg;
