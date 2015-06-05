import React from 'react';
import PopUpComponent from './components/PopUpComponent';
import StoryComponent from './components/StoryComponent';

const socket = io.connect('http://localhost:3000');

React.render(<PopUpComponent />,document.getElementById("container"));
