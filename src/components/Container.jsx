import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import ImageComponent from "./ImageComponent";

const ImageContainer = (props) => {
 
  const originalRows = props.data

  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");
  
  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.data.title.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <>
      <Paper>
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {rows.map((row) => (
                <ImageComponent content={row.data}/>
              ))}
        </List>
      </Paper>
    </>
  );
};

export default ImageContainer   ;
