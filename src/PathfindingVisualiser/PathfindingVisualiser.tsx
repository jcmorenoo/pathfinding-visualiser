import React from 'react';
import 'bulma/css/bulma.css'

import Navbar from '../components/Navbar';

class PathfindingVisualiser extends React.Component {
  
  render() {

    return (
      <React.Fragment>
        <Navbar></Navbar>
        <span>PathfindingVisualiser</span>
      </React.Fragment>
    );
  }
}

export default PathfindingVisualiser;
