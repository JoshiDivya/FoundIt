import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { createClient } from "pexels";
import { useEffect, useState } from "react";
import Data from "./Data";

const client = createClient(
  "563492ad6f917000010000013be4449d801c4ac68d2ebb0825b6af1a"
);

const VideoGrid = (props) => {
 const videoInfo= props.video;

  // useEffect(() => {
  //   async function getVideos() {
  //     if (query.length > 0) {
  //       const response = await client.video.search({ query, per_page: 20 });
  //       setVideo(response);
  //     }
  //   }
  //   getVideos();
  // });

  return (
    <Card style={{height:'250px'}} >
      <CardMedia
        component="video"
        controls
        src={videoInfo.link}
      ></CardMedia>
      <CardContent>
       
      </CardContent>
    </Card>
  );
};

export default VideoGrid;
