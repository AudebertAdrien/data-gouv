import axios from "axios";
import { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

function Form(props) {
  const [name, setName] = useState(props.item.name);
  const [description, setDescription] = useState(props.item.description);
  const [price, setPrice] = useState(props.item.price);
  const [selectedFiles, setSelectedFiles] = useState(props.item.imageUrl);
  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("file", selectedFiles[0]);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    try {
      const response = axios.put(
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
  };

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="standard-required"
            label="Name"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <TextField
            required
            id="standard-required"
            label="Description"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <TextField
            required
            id="standard-required"
            label="Price"
            defaultValue={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={selectFile}
        />

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
}

export default Form;
