import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Data = (props) => {
  const data = props.dataList;

  

  return (
    <Grid container rowSpacing={2} columnSpacing={2} spacing={2} sx={{ p: 2 }}>
      {data.map((item) => (
        <Grid item key={item.id} xs={4} sx={{ height: "250", width: "150" }}>
          <Card variant="outlined" sx={{ maxWidth: "150" }}>
            <CardMedia
              component="img"
              alt={item.alt}
              height="200"
              width="200"
              image={item.src.large}
            />
            <CardContent>
              <Link to={`/${item.id}`}>{item.alt}</Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Data;
