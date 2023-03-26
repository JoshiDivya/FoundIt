import { createClient } from "pexels";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search"
import VideoComponent from "./VideoComponent";

const client = createClient(
    "563492ad6f917000010000013be4449d801c4ac68d2ebb0825b6af1a"
  );

const Videos =({term})=>{
  const location = useLocation();
    const [searchResult, setSearchResult] = useState([]);
    const [query, setQuery] = useState('');
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const searchParam = new URLSearchParams(location.search);
      const search = searchParam.get("query");
      if(search.length<1)
      getPopularVideos()
      else
      handleNewQuery(search);
    
    }, [query]);

    async function getPopularVideos(){
        setIsLoading(true);
        const response = await client.videos.popular({ per_page: 5})
        response ? setSearchResult(response.videos) : setError(response.error);
        setIsLoading(false)
      }

      async function handleNewQuery(query){
        setQuery(query)
        if (query.length < 1) {getPopularVideos();}
        else{
          setIsLoading(true);
          const response = await client.videos.search({ query, per_page: 5 })
          response ? setSearchResult(response.videos) : setError(response.error);
          setIsLoading(false);
        }
       
      }

   
    
    return(
        <div>
           <Search term={query} onSearch={handleNewQuery} ></Search>
          
           <div className="section-header search_button_section">
        <div className="search-section search_button_div">
          <Link className="search_button" to="/images">Images</Link>
          <Link className="search_button search_btn_selected" to="/videos?query=rose">Videos</Link>
        </div>
      </div>

      {/* {isLoading} ? <p>Loading....</p> : {searchResult} && <ImageComponent imageData={searchResult}/>
        <ImageComponent/> */}
      {isLoading ? (
        <p>Loading.....</p>
      ) : (
        searchResult && <VideoComponent videoData={searchResult} />
      )}



           {/* {isLoading ? (
        <p>Loading.....</p>
      ) : (
        searchResult && <VideoComponent videoData={}={searchResult}></VideoComponent>
      )}
         */}
        </div>
    )
}

export default Videos;