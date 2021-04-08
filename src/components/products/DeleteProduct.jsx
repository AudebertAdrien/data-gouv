import { useContext } from "react";
import axios from "axios";
import ReferenceDataContext from "../ReferenceDataContext";

function DeleteProduct(props) {
  const { products, setProducts } = useContext(ReferenceDataContext);

  const handleDelete = async (props) => {
    try {
      const response = await axios.delete(
        `${WEBPACK_BASE_URL}/api/products/${props.id}`
      );
      setProducts(products.filter((item) => props.id !== item._id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={() => handleDelete(props)}>Delete</button>
    </div>
  );
}

export default DeleteProduct;
