import React from 'react';


function SrcBar({ onSearchInput, onSearchButton }) {
    return (
        <div>
            <h3 className="centre">DETECT THE FACE</h3>
            <br />
            <div className="centre">
                <input
                    className="app-scrbar-js-input"
                    type="search"
                    placeholder="Please enter image url "
                    onChange={onSearchInput}>
                </input>
                <button
                    className="app-scrbar-js-button"
                    onClick={onSearchButton}>
                    Detect
                </button>
            </div>
        </div>
    );
}

export default SrcBar;
