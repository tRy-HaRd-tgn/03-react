export default function computeWinner(cells, sequenceSize = 5, fieldSize = 19) {
  const gap = Math.floor(sequenceSize / 2);

  function compareElements(indexes) {
    let result = true;

    for (let i = 1; i < indexes.length; i++) {
      if (cells[indexes[i]] != null && cells[indexes[i - 1]] != null) {
        result &&=
          cells[indexes[i]].props.currentMove ===
          cells[indexes[i - 1]].props.currentMove;
      } else {
        result = false;
      }
    }

    return result;
  }

  function getSequnceIndexes(index) {
    const res = [[], [], [], []];
    for (let j = 0; j < sequenceSize; j++) {
      res[0].push(j - gap + index);
      res[1].push(fieldSize * (j - gap) + (j - gap) + index);
      res[2].push(-fieldSize * (j - gap) + (j - gap) + index);
      res[3].push(fieldSize * (j - gap) + index);
    }
    return res;
  }
  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRows = getSequnceIndexes(i);
      const winnerIndexes = indexRows.find((row) => compareElements(row));
      if (winnerIndexes) {
        return winnerIndexes;
      }
    }
  }
  return undefined;
}
