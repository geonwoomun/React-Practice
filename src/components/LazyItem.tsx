import React, {lazy, Suspense} from 'react';

export interface Iprops {
    src: string,
    name: string,
}

const LazyImage = lazy(() => import('./LazyImage'));

const LazyItem = ({src, name}: Iprops) => {
    return (
        <div>
            <Suspense fallback={<div>...loading</div>}>
                <LazyImage src={src} name={name}/>
            </Suspense>
            {name}
        </div>
    );
};

export default LazyItem;