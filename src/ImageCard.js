import React, { useState} from "react";
import axios from 'axios';
import styled, {keyframes} from 'styled-components';

const kf = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0.5);
    
  }
  100% {
    transform: scale(1);
    
  }
`


const ImgContainer = styled.div`
transform: scale(0);
animation: ${kf} 1s ease-in-out forwards;
`;

function ImageCard({imgAPI}) {
const [imgURL, setIMGUrl] = useState('')
axios.get(imgAPI)
    .then(success => {
        console.log(success.data[0])
        setIMGUrl(success.data[0])
    })
    
    .catch(fail => console.log('imgURL failed to save'))


return (
    <ImgContainer className='eachImg'>
        <img src={imgURL}></img>
    </ImgContainer>
) 
}


export default ImageCard
