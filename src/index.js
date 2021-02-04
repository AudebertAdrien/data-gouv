import "./styles/main.scss";

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 8,
  refinedMoonstone: 1,
};

const elvenGauntLetsRecipe = {
  ...elvenShieldRecipe,
  refinedGold: 3,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntLetsRecipe);
