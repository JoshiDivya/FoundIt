import { makeStyles } from "@material-ui/core";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Data from "./Data";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 0,
    paddingTop: "56.25%", // 16:9 aspect ratio
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "1px solid #ccc",
    borderRadius: theme.spacing(1),
  },
  cardContent: {
    flexGrow: 1,
  },
  title: {
    marginBottom: theme.spacing(1),
  },
  description: {
    color: "#666",
  },
}));

const ImageComponent = ({ imageData }) => {
  const classes = useStyles();
  return (
    <Grid style={{width:'95%',margin:'auto'}} container spacing={2}>
      {imageData.map((imgObj) => (
        <Grid style={{padding:'8px'}} item xs={12} md={6} lg={4} key={imgObj.id}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.root}
              image={imgObj.src.medium}
              title={imgObj.alt}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default ImageComponent;
