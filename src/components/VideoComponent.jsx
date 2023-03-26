import { Card, CardMedia, Grid } from "@mui/material";


const VideoComponent=({videoData})=>{
    return(
      <Grid  style={{width:'95%',margin:'auto'}} container spacing={3}>
      {videoData.map((video) => (
        <Grid style={{padding:'8px'}} item key={video.id} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="iframe"
              height="auto"
              src={video.video_files[0].link}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
   )
}
export default VideoComponent;




 
