import { useState } from "react";
import ReferenceDataContext from "../components/ReferenceDataContext";

import AllProduct from "../components/products/AllProducts";
import CreateProductForm from "../components/products/CreateProductForm";
import LinkPages from "../components/LinkPages";

function Home() {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <LinkPages />
      <h1>Home Page</h1>
      <ReferenceDataContext.Provider value={{ products, setProducts }}>
        <CreateProductForm />
        <AllProduct />
      </ReferenceDataContext.Provider>
    </div>
  );
}

export default Home;
