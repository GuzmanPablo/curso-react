import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import data from './api.json';
import PlaylistMain from './components/main/index';
import './styles/reset.css';

render(<PlaylistMain data={data} />, document.getElementById('root'));

registerServiceWorker();
