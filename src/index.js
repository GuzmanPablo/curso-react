import React from 'react';
import { render } from 'react-dom';

import data from './api.json';
import Playlist from './playlist/components/main/index';

const app = document.querySelector('#app')

render(<Playlist data={data} />, app);

