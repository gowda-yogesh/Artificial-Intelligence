import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Appxyz from './Appxyz.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Appxyz />, document.getElementById('root'));

serviceWorker.unregister();
