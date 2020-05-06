const cumsum = (arr) => {
  let result = arr.flatMap((x,i) => {
    let val = [...arr].splice(0, i+1);
    return val.reduce((acc, val) => acc + val);
  });
  return result;
}

module.exports = cumsum;