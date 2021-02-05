import { useState } from "react";

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 8,
  refinedMoonstone: 1,
};

const elvenGauntLetsRecipe = {
  ...elvenShieldRecipe,
  refinedGold: 3,
};

const Products = () => {
  const [products, setProducts] = useState({});
  const [tab, setTab] = useState([0, 1, 2]);
  return (
    <>
      <h3>All product</h3>
      <button onClick={() => setProducts(elvenGauntLetsRecipe)}>
        Elven Gaunt Recipe
      </button>
      <button onClick={() => setProducts(elvenShieldRecipe)}>
        Elven Shield Recipe
      </button>
      <ul>
        {Object.keys(products).map((item) => {
          return (
            <li key={item}>
              {item}: {products[item]}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Products;
