import React, { useState, useEffect } from "react";
import axios from 'axios'
import {apiKey, imageLib} from './constants';
import ImageGrid from './ImageGrid'
import "./App.css";
import styled from 'styled-components';

const AppDiv = styled.div`
background: rgba(23, 23, 23, .7);
padding: 3%;
${props => (props.searched === true) ? 'width: 70%; margin: 0 auto' : 'width: 100%'}
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  /* ${props => (props.searched === true) ? 'padding: 2%' : null} */
`;

const TextInput = styled.input`
  background: white;
  border: 2px solid black;
  border-radius: 5px;
`;

const IconSpan = styled.span`
  &:hover {
    cursor: pointer;
  }
  i {
    font-size: 1.5rem;
  }
`;

function App() {
const [searchTerm, setSearchTerm] = useState("");
const [searchRequest, setSearchRequest] = useState("");
const [textSize, setTextSize] = useState(1);
const [appWidth, setAppWidth] = useState(false)

  return (
    <AppDiv searched={appWidth} className="App">
      {searchRequest === "" && <h1>Search for NASA Images</h1>}
      {searchRequest === "" && <p>Background image compliments of NASA Photo of The Day</p>}
      <SearchBar searched={appWidth}>
        <label><TextInput type="text" name="search" size={textSize} onChange={event => setSearchTerm(event.target.value)} onMouseOver={() => setTextSize(20)} onMouseLeave={() => setTextSize(searchTerm.length)}></TextInput>
            </label> 
      <IconSpan><i onClick={event => {setSearchRequest(searchTerm); event.preventDefault(); setAppWidth(true)}} className="material-icons">search</i></IconSpan>
      </SearchBar>
      {searchRequest !== "" && <ImageGrid searchRequest={searchRequest}/>}
    </AppDiv>
  );
}

export {App}

