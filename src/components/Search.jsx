import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Data from "./Data";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { createClient } from "pexels";

const client = createClient(
  "563492ad6f917000010000013be4449d801c4ac68d2ebb0825b6af1a"
);

const Search = () => {
  const [query, setQuery] = useState("nature");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    if (query.length > 0)
      client.photos
        .search({ query, per_page: 10 })
        .then((photos) => setData(photos.photos));
  }

  function handleChange(event) {
    let term = event.target.value;
    setQuery(term);
    fetchData();
  }
  return (
    <div>
      <section className="search-section">
        <div className="search-div">
          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
            <OutlinedInput
              id="outlined-adornment-search"
              type="text"
              placeholder="Search Here"
              onChange={handleChange}
              value={query}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                    onClick={fetchData}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Search"
            />
          </FormControl>
        </div>
      </section>

      <Data dataList={data}></Data>
    </div>
  );
};

export default Search;
