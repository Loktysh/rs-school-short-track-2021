/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const len = (`${n}`).split('').length;
  let res = [];
  for (let i = 0; i < len; i++) {
    let cn = (`${n}`).split('');
    cn[i] = '';
    cn = cn.join('');
    res.push(cn);
    res = res.map((e) => parseInt(e, 10));
  }
  return Math.max(...res);
}

module.exports = deleteDigit;
