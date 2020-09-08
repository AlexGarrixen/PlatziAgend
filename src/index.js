import React from 'react';
import { render } from 'react-dom';
import Demo from './components/Demo';
import './styles/index.scss';

const node = document.querySelector('#app');

render(<Demo />, node);
