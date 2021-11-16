import React from 'react';
import './index.scss';
import Content from '../Movie/Movie';

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-wrapper-header">
        Welcome to the best Movie platform.
      </div>
      <Content />
    </div>
  )
}

export default Home
