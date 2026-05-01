export const formatPrice = (value) => {
  const n = Number(value) || 0;
  // Output like "8000,00" — 2 decimals with comma as separator.
  return n.toFixed(2).replace(".", ",");
};
