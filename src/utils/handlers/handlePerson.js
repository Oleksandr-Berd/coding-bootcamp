export const handlePerson = (peopleArr, currentIdx = 0, operation) => {
  const personIdxIncrement =
    currentIdx + 1 === peopleArr.length ? currentIdx === 0 : currentIdx + 1;

  const personIdxDecrement =
    currentIdx - 1 === peopleArr.length
      ? currentIdx === peopleArr.length - 1
      : currentIdx - 1;

const personIdx = operation === "increment" ? personIdxIncrement : personIdxDecrement

  const result = operation ? peopleArr((el, idx) => el[idx] === personIdx) : peopleArr[0];

  return result
};
