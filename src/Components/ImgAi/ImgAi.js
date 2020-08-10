import React from 'react';
import "./imgai.css";


function ImgAi({ displayImage, coOrdinates }) {

    const { top, right, bottom, left } = coOrdinates;
    return (
        <div /*className="centre"*/>
            <div className="app-imgai-js-img">
                <img
                    id="app-imgai-js-img-details"
                    alt="Not yet set plaes wait"
                    src={displayImage}

                    width="500px"
                    height="auto"
                />
                <div

                    className="app-imgai-js-boundingbox"
                    style={
                        {
                            top: top,
                            right: right,
                            bottom: bottom,
                            left: left
                        }
                    }>
                </div>
            </div>
        </div>
    );
}

export default ImgAi;
