import React, { useState} from "react";
import axios from 'axios';

function ImageCard({imgAPI}) {
const [imgURL, setIMGUrl] = useState('')
axios.get(imgAPI)
    .then(success => {
        console.log(success.data[0])
        setIMGUrl(success.data[0])
    })
    
    .catch(fail => console.log('imgURL failed to save'))


return (
    <div>
        <img src={imgURL}></img>
    </div>
) 
}


export default ImageCard
