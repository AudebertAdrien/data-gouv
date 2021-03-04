import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import DeleteProduct from "./DeleteProduct";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
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
        const response = await axios.get(`${WEBPACK_BASE_URL}/api/products`);
        setProducts(response.data.products);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <>
          <Grid container spacing={3} justify="center">
            {products.map((item) => {
              return (
                <Grid key={item._id} item>
                  <Card>
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
                      <Link to={`show-product/${item._id}`}>Show</Link>
                      <DeleteProduct id={item._id} />
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </>
  );
}

export default AllProducts;
