import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './components/fcomp';
import Belowhome from './components/scomp';
import Belowsecond from './components/tcomp';
import Belowthird from './components/frcomp';
import Belowfourth from './components/fvecomp';
import Belowfive from './components/sixcomp';
import Belowsix from './components/sevencomp';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Homepage/>
    <Belowhome/>
    <Belowsecond/>
    <Belowthird/>
    <Belowfourth/>
    <Belowfive/>
    <Belowsix/>
  </React.StrictMode>,
  document.getElementById('root')
);


