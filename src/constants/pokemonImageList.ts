const POKEMON_IMAGE_LIST = Array.from(
  { length: 50 },
  (_, index) => `/images/${index + 1}.png`
);
const POKEMON_COLORS = [
  "#dfa415",
  "#e2ad2c",
  "#e5b644",
  "#e9bf5b",
  "#e5670a",
  "#e87623",
  "#ea853b",
  "#ed9554",
  "#bf0101",
  "#c51a1a",
  "#cc3434",
  "#d24d4d",
  "#d96767",
  "#ff3b3c",
  "#ff4f50",
  "#ff6263",
];

export { POKEMON_IMAGE_LIST, POKEMON_COLORS };
