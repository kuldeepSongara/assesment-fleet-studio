export const getContrastColor = (hex) => {
  const rVal = [1, 3];
  const gVal = [3, 5];
  const bVal = [5, 7];
  if (hex < 6) {
    rVal[1] = 2;
    gVal[1] = 3;
    bVal[1] = 4;
  }

  const r = parseInt(hex.slice(rVal[0], rVal[1]), 16);
  const g = parseInt(hex.slice(gVal[0], gVal[1]), 16);
  const b = parseInt(hex.slice(bVal[0], bVal[1]), 16);

  const luminanace = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminanace > 0.5 ? "#000" : "#fff";
};
