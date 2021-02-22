import { useState, useEffect } from "react";
import axios from "axios";

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products/");
        setProducts(response.data.products);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/products/${id}`
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h3>All products</h3>
      <div className="container">
        <ul>
          {products.map((item) => {
            return (
              <li key={item._id}>
                <div>Name: {item.name}</div>
                <div>Description: {item.description} </div>
                <div>Price: {item.price}</div>
                <div>In stock: {item.inStock}</div>
                <img src={item.imageUrl} alt="" />
                <div>
                  <button onClick={() => handleDelete(item._id)}>
                    Delete product
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default AllProducts;
