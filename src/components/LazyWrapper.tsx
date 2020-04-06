import React from 'react';
import { images } from '../database/images';
import LazyItem from './LazyItem';

const LazyWrapper = () => {
    return (
        <div>
            {images.map(image => 
                <LazyItem key={image.id} src={image.src} name={image.name}/>)}
        </div>
    );
};

export default LazyWrapper;