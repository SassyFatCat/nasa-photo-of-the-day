import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios'
import "./index.css";
import {dailyImg} from './constants'
import {App} from "./App";

const website = document.querySelector('html');

axios.get(`${dailyImg}`)
    .then(success => website.style.backgroundImage = `url(${success.data.hdurl})`)
    .catch(fail => console.log(fail))

ReactDOM.render(<App />, document.getElementById("root"));
