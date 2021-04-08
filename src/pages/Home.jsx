import { useState } from "react";
import ReferenceDataContext from "../components/ReferenceDataContext";

import AllProduct from "../components/products/AllProducts";
import CreateProductForm from "../components/products/CreateProductForm";

function Home() {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <h1>Home.jsx</h1>
      <ReferenceDataContext.Provider value={{ products, setProducts }}>
        <CreateProductForm />
        <AllProduct />
      </ReferenceDataContext.Provider>
    </div>
  );
}

export default Home;
