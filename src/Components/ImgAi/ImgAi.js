import React from 'react';


function ImgAi({ displayImage }) {
    return (
        <div className="centre">
            <div className="app-imgai-js-img">
                <img alt="Not yet set plaes wait" src={displayImage} width="500px" height="auto" />
            </div>
        </div>
    );
}

export default ImgAi;
