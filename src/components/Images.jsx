import { Button, Divider } from "@mui/material";
import { createClient } from "pexels";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageComponent from "./ImageComponent";
import Search from "./Search";

const client = createClient(
  "563492ad6f917000010000013be4449d801c4ac68d2ebb0825b6af1a"
);

function Images() {
  const [searchResult, setSearchResult] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const myState = { name: 'John', age: 30 };

  useEffect(() => {
    getCuratedImages();
  }, []);

  async function getCuratedImages() {
    setIsLoading(true);
    const response = await client.photos.curated({ per_page: 20 });
    response ? setSearchResult(response.photos) : setError(response.error);
    setIsLoading(false);
  }
  async function handleNewQuery(query) {
    setQuery(query);
    if (query.length < 1) {getCuratedImages();}
    else{
      setIsLoading(true);
      const response = await client.photos.search({ query, per_page: 20 });
      response ? setSearchResult(response.photos) : setError(response.error);
      setIsLoading(false);
    }
   
  }

  return (
    <>
      <Search term={query} onSearch={handleNewQuery}></Search>
      <Divider orientation="horizontal" variant="middle"></Divider>
      <div className="section-header search_button_section">
        <div className="search-section">
          <Link className="search_button search_btn_selected" to="/images">Images</Link>
          <Link className="search_button" to="/videos?query=rose">Videos</Link>

        </div>
      </div>

      {/* {isLoading} ? <p>Loading....</p> : {searchResult} && <ImageComponent imageData={searchResult}/>
        <ImageComponent/> */}
      {isLoading ? (
        <p>Loading.....</p>
      ) : (
        searchResult && <ImageComponent imageData={searchResult} />
      )}
    </>
  );
}

export default Images;
