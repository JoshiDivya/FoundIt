import { Button } from "@mui/material";
import { createClient } from "pexels";
import React, { useEffect, useState } from "react";

import Header from "./Header";
import ImageComponent from "./ImageComponent";
import Search from "./Search";
import VideoComponent from "./VideoComponent";
const client = createClient(
  "563492ad6f917000010000013be4449d801c4ac68d2ebb0825b6af1a"
);

export default function Home() {
  const [isVideo, setIsVideo] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [query, setQuery] = useState("nature");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
 

  useEffect(() => {
      getImages()
  }, [query]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchData(a) {
    setIsVideo(a);
    setIsLoading(true);
    console.log(isVideo);
    const response = isVideo
      ? await client.videos.search({ query, per_page: 2 })
      : await client.photos.search({ query, per_page: 20 });
      console.log(response);
    response
      ? setSearchResult(isVideo ? response.videos : response.photos)
      : setError(response.error);
      console.log(searchResult);
    setIsLoading(false);
  }

  function handleSearch(term) {
    setQuery(term); 
   
    isVideo ? getVideos() : getImages();
  }
   
  async function getImages(){
    setIsLoading(true);
    const response = await client.photos.search({ query, per_page: 20 });
    response ? setSearchResult(response.photos) : setError(response.error);
    setIsLoading(false);

  }
  async function getVideos(){
    setIsLoading(true);
    const response = await client.videos.search({ query, per_page: 1 })
    response ? setSearchResult(response.videos) : setError(response.error);
    setIsLoading(false)
  }

  return (
    <>
      <Search term={query} onSearch={handleSearch} />
      <div style={{ height: "100px", alignContent: "center", margin: "5px" }}>
        <Button
          onClick={()=>{setIsVideo(false); getImages()}}
          style={{ marginRight: "10px" }}
          variant="contained"
        >
          Images
        </Button>
        <Button onClick={()=>{setIsVideo(true); getVideos()}} variant="contained">
          Videos
        </Button>
      </div>
      {isLoading ? (
        <p>Loading....</p>
      ) : isVideo ? (
        <VideoComponent videoData={searchResult && searchResult} />
      ) : (
        <ImageComponent imageData={searchResult && searchResult} />
      )}
    </>
  );
}
