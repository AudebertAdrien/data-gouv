import { useContext } from "react";
import axios from "axios";
import ReferenceDataContext from "./ReferenceDataContext";

import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

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
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={() => handleDelete(props)}
      >
        Delete
      </Button>
    </div>
  );
}

export default DeleteProduct;
