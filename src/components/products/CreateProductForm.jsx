import axios from "axios";
import { useState, useContext } from "react";
import ReferenceDataContext from "../ReferenceDataContext";

function Form() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const { products, setProducts } = useContext(ReferenceDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("file", selectedFiles[0]);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);

    const res = await axios.post(`${WEBPACK_BASE_URL}/api/products`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setProducts([...products, res.data.product]);
  };

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            defaultValue={name}
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            defaultValue={description}
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <input
            defaultValue={price}
            placeholder="price"
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
    </div>
  );
}

export default Form;
