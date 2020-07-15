import React, { useState, useEffect } from 'react';
import {apiKey, imageLib} from './constants';
import axios from 'axios';
import ImageCard from './ImageCard';


function ImageGrid({searchRequest}) {
const [imagesObj, setImagesObj] = useState('Initial data');

useEffect(() => {
axios.get(`${imageLib}${searchRequest}`)
    .then(success => {
        console.log(success);
        let total = success.data.collection.items.filter(x => x.href.includes('https://images-assets.nasa.gov/image') ? true : false);
        let twentyImages = total.splice(0, total.length - (total.length - 20)).map(x => x.href);
        console.log(twentyImages)
        
    })
    .catch(fail => console.log('it failed'))
    
}, [searchRequest])

console.log(imagesObj)

return (
    <div>
        <h1>IMAGE GRID</h1>
        <ImageCard />
    </div>
)
}


export default ImageGrid