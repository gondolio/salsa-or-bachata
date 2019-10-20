import React from 'react';
import ReactGA from 'react-ga'; // Google Analytics
import Game from './Game';

function Main() {
  ReactGA.initialize('UA-150417728-1');
  ReactGA.pageview('/main');
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default Main;
