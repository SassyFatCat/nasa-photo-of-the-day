import React, { useState, useEffect } from "react";
import axios from 'axios'
import {apiKey, imageLib} from './constants';
import ImageGrid from './ImageGrid'
import "./App.css";

function App() {
const [searchTerm, setSearchTerm] = useState("");
const [searchRequest, setSearchRequest] = useState("");


  return (
    <div className="App">
      <h1>Search for NASA Images</h1>
      {searchRequest !== "" && <ImageGrid searchRequest={searchRequest}/>}
      <form>
        <label><input placeholder="Image Search" type="text" name="search" onChange={event => setSearchTerm(event.target.value)}/>
            </label> 
        <input type="submit" value="Search" onClick={event => {setSearchRequest(searchTerm); event.preventDefault()}}/>
      </form>
    </div>
  );
}

export {App}

