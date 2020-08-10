import React from 'react';


function SrcBar({ onSearchInput, onSearchButton }) {
    return (
        <div>
            <h3 className="centre">This Amezing app will detect the Face in the picture</h3>
            <div className="centre">
                <input
                    className="app-scrbar-js-input"
                    type="search"
                    placeholder="Please enter the value "
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
