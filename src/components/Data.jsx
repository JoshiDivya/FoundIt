import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

import { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  typography: {
    marginTop: 20, // Set initial marginTop value
    [theme.breakpoints.up("sm")]: {
      marginTop: 40, // Set new marginTop value for screens larger than sm
    },
  },
  cardContentHover: {
    borderColor: "black",
    border: 1,
  },
}));

const Data = (props) => {
  const imageInfo = props.images;
  const [isZoomed, setIsZoomed] = useState(false);
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);
  const [showModel, setShowModel] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const transformStyle = {
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    border: isHovered ? classes.cardContentHover : null,
  };

  function handleClick() {
    setIsZoomed(!isZoomed);
  }

  function handleOpenModel() {
    setShowModel(true);
  }
  function handleCloseModel() {
    setShowModel(false);
  }

  return (
    <>
      <Card style={{ height: "300px" }}>
        <CardMedia
          component="img"
          image={imageInfo.src.medium}
          title={imageInfo.alt}
          onClick={handleOpenModel}
          style={{ ...transformStyle, height: "100%", width: "100%", objectFit: "unset" }}
          // style={{ }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </Card>
      {showModel && (
        <div className="modal">
          <div className="modal-content">
            <img src={imageInfo.src.medium} alt={imageInfo.alt} />
            <h3>{imageInfo.alt}</h3>
            <p>{imageInfo.alt}</p>
            <button onClick={handleCloseModel}>Close</button>
          </div>
        </div>
      )}
    </>
  );

  //         <CardContent>
  //           <Link to={`/${product.id}`}>{product.alt}</Link>
  //         </CardContent>
  //
};

export default Data;
