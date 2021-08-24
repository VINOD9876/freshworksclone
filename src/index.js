import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './components/firstcomponent';
import Belowhome from './components/secondcomponent';
import Belowsecond from './components/thirdcomponent';
import Belowthird from './components/fourthcomponent';
import Belowfive from './components/sixcomponent';
import Belowsix from './components/seventhcomponent';
import Slider from './components/fifthcomponent';

ReactDOM.render(
  <React.StrictMode>
    <Homepage/>
    <Belowhome/>
    <Belowsecond/>
    <Belowthird/>
    <Slider/>
    <Belowfive/>
    <Belowsix/>
  </React.StrictMode>,
  document.getElementById('root')
);


