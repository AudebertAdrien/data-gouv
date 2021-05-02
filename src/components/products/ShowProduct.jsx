import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import UpdateProductForm from "./UpdateProductForm.jsx";

function ShowProduct() {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${WEBPACK_BASE_URL}/api/products/${id}`
        );
        setItem(response.data.product);
      } catch (error) {
        console.log("error: ShowProduct");
      }
    };
    fetchData();
  }, []);

  const handleModification = () => {
    setShowForm(true);
  };

  return (
    <>
      {showForm ? (
        <div>
          <UpdateProductForm item={item} />
        </div>
      ) : (
        <div>
          <h1>Show product!!!</h1>
          <div>
            <h3>{item.name}</h3>
          </div>
          <div>
            <p>{item.description}</p>
          </div>
          <div>
            <img className="image" src={item.imageUrl} alt={item.name} />
          </div>
          <button onClick={handleModification}>Modify</button>
        </div>
      )}
    </>
  );
}

export default ShowProduct;
