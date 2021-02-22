import axios from "axios";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:3000/api/products/`);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h3>Create Product Form</h3>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
