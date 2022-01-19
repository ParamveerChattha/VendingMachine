export const CalculatePrice = (ItemType) => {
  switch (ItemType) {
    case "A":
      return 0.5;
    case "B":
      return 0.75;
    case "C":
      return 1.0;
  }
};
