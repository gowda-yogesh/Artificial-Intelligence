import React from 'react';
import "./imgai.css";


function ImgAi({ displayImage, coOrdinates }) {

    const { top, right, bottom, left } = coOrdinates;

    return (
        <div className="c">
            <div className="relative">

                <img
                    id="app-imgai-js-img-details"
                    alt="Face"
                    src={displayImage}
                    width="500px"
                    height="auto"
                />
                <div className="boundingbox"
                    style={
                        {
                            top: top,
                            right: right,
                            bottom: bottom,
                            left: left
                        }
                    }
                >

                </div>
            </div>
        </div >
    );
}

export default ImgAi;
