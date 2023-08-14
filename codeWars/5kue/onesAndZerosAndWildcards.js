function possibilities(str, result = [[]]) {
  if (str.length === 0) { return result.map(el => el.join('')); }

  if (str[0] === '0' || str[0] === '1') {
    result.map(el => el.push(str[0]))
  }

  if (str[0] === '?') {
    const len = result.length;
    for (let i = 0; i < len; i++) {
      const temp = result[i].slice(0);
      result.push(temp);
    }
    for (let i = 0; i < result.length; i++) {
      (i < result.length / 2) ? result[i].push('0') : result[i].push('1');
    }
  }

  return possibilities(str.substring(1), result);

}

console.log(possibilities('1?1?'));