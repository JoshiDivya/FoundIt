import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from '@mui/icons-material/Clear';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const Search = ({term,onSearch}) => {
  const [query, setQuery] = useState(term);


  function handleChange(event) {
    event.preventDefault();
    let term = event.target.value;
    setQuery(term);
    onSearch(term);
  }

  function handleClear() {
    setQuery("");
    onSearch("");
  }



  return (
    <div className="section-header">
      <section className="search-section">
          <FormControl  sx={{ m: 1, width: "100%" }} variant="standard">
            <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
        
            <OutlinedInput
              id="outlined-adornment-search"
              type="text"
              placeholder="Search Here"
              onChange={handleChange}
              value={query}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                  </IconButton>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end"><IconButton onClick={handleClear} type="button"><ClearIcon></ClearIcon></IconButton></InputAdornment>
              }
              label="Search"
            />
          </FormControl>
      </section> 
    </div>
 );
            }

export default Search;

