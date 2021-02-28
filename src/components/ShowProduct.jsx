import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ShowProduct() {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    console.log("useEffect");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/products/${id}`
        );
        setItem(response.data.product);
      } catch (error) {
        console.log("error: ShowProduct");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>show product</h1>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  );
}

export default ShowProduct;
