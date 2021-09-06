import React from 'react';

const TweetsBox = ({body}) => {
    return (
        <div className="my-2 filter drop-shadow-md p-2 h-24 w-full border-b border-blue-400 text-white">
            {body}
        </div>
    );
}

export default TweetsBox;
