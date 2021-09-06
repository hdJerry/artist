import React from 'react';
import { LoaderOverlay } from './Global.style';

const AristCard = ({image, album}) => {

    const [loading, setLoading] = React.useState(true)
    return (
        <div className="w-full md:w-2/5 lg:w-72 h-2/5 lg:h-96 bg-gray-100 opacity-80 xl:opacity-60 m-2 md:m-2 lg:m-3 xl:m-2">
            <div className="relative w-full h-44 overflow-hidden rounded-xl">
            {
                loading && (
                    <LoaderOverlay>
                        <span className="animate-ping relative rounded-full h-10 w-10 bg-blue-400"></span>
                    </LoaderOverlay>
                )
            }
            <img src={image} onLoad={(e) => {
                setLoading(false)
            }} className="w-full h-full object-cover rounded-xl" alt="" />

            </div>

            <p className="text-white mt-2">
                {album}
            </p>
        </div>
    );
}

export default AristCard;
