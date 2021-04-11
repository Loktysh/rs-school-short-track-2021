/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(m) {
  const res = [...m];
  const len = m.length;
  for (let i = 0; i < len - 1; i++) {
    m[i].map((c, ie) => {
      if (c === 0 && res[i + 1][ie] !== 0) {
        res[i + 1][ie] = 'X';
        return c;
      }
      return c;
    });
  }
  return res.flat().reduce((a, c) => (typeof c !== 'string' ? a + c : a), 0);
}

module.exports = getMatrixElementsSum;
