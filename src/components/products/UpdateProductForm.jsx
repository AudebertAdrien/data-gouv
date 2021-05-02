import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Form(props) {
  const [name, setName] = useState(props.item.name);
  const [description, setDescription] = useState(props.item.description);
  const [price, setPrice] = useState(props.item.price);
  const [selectedFiles, setSelectedFiles] = useState(props.item.imageUrl);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("file", selectedFiles[0]);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    try {
      const response = await axios.put(
        `${WEBPACK_BASE_URL}/api/products/${props.item._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (err) {
      console.error(err);
    }
    history.push("/");
  };

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  return (
    <>
      <h3>update</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <input
            defaultValue={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={selectFile}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
