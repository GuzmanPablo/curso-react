import React from 'react';
import { render } from 'react-dom';

import Home from '../pages/containers/home';
import Data from '../api.json';

render(<Home data={Data} />, document.getElementById('home-container'));
