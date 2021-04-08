import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReferenceDataContext from "../ReferenceDataContext";

import DeleteProduct from "./DeleteProduct";

function AllProducts() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { products, setProducts } = useContext(ReferenceDataContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(`${WEBPACK_BASE_URL}/api/products`);
        setProducts(response.data.products);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <>
          <div>
            {products.map((item) => {
              return (
                <div key={item._id}>
                  <div>
                    <div>
                      <div image={item.imageUrl} title={item.name} />
                      <img className="image" src={item.imageUrl} alt="" />
                      <div>
                        <div>{item.name}</div>
                        <div>{item.description}</div>
                      </div>
                    </div>
                    <div>
                      <Link to={`show-product/${item._id}`}>Show</Link>
                      <DeleteProduct id={item._id} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default AllProducts;
