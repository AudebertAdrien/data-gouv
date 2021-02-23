import { useState, useEffect } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 140,
  },
  button: {
    margin: theme.spacing(1),
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get("http://localhost:3000/api/products/");
        setProducts(response.data.products);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
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
      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <Grid container spacing={3} justify="center" className={classes.root}>
          {products.map((item) => {
            return (
              <Grid key={item._id} item>
                <Card className={classes.root} key={item._id}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={item.imageUrl}
                      title={item.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button variant="contained" color="primary">
                      Show item
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
}

export default AllProducts;
