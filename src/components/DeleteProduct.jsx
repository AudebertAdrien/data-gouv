import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import axios from "axios";

function DeleteProduct(props) {
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/products/${id}`
      );
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
        onClick={() => handleDelete(props.id)}
      >
        Delete
      </Button>
    </div>
  );
}

export default DeleteProduct;
