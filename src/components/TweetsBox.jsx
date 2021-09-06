import React from 'react';

const TweetsBox = ({body, children}) => {
    return (
        <div className="my-2 filter drop-shadow-md p-2 w-full border-b border-blue-400 text-white">
            {children}
            
            <p className="mt-5">
                {body}
            </p>
        </div>
    );
}

export default TweetsBox;
