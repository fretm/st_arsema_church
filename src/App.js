import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Church from './Pages/Church';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Church />
      </BrowserRouter>
    );
  }
}

export default App;
