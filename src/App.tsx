import { Component } from 'react';

import Navbar from './components/navbar/Navbar';

interface AppProps {}

interface AppState {}

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
      </div>
    );
  }
}

export default App;