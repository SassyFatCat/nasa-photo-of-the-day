import React, { useState, useEffect } from "react";
import axios from 'axios'
import ImageGrid from './ImageGrid'
import "./App.css";
// import {apiKey, aPod} from './constants';

function App() {
const [searchTerm, setSearchTerm] = useState("");
const [searchRequest, setSearchRequest] = useState("");

useEffect(() => {
console.log('requesting new search')
}, [searchRequest])
  return (
    <div className="App">
      {searchRequest !== "" && <ImageGrid />}
      <form>
        <label><input placeholder="Image Search" type="text" name="search" onChange={event => setSearchTerm(event.target.value)}/>
            </label> 
        <input type="submit" value="Search" onClick={event => {setSearchRequest(searchTerm); event.preventDefault()}}/>
      </form>
    </div>
  );
}

export {App}

