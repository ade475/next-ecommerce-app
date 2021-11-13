import Image from 'next/image';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import Layout from '../components/Layout';
import data from '../utils/data';
import useStyles from '../utils/styles';
export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <div>
        <h1>products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid
              item
              key={product.name}
              component={Card}
              md={3}
              sm={6}
              xs={12}
              style={{ display: 'flex' }}>
              <Card
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                }}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    image={product.image}
                    title={product.name}
                    className={classes.Media}
                    style={{ height: '300px' }}></CardMedia>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button size='small' color='primary'>
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
