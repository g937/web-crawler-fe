import { Component } from "react";

import Navbar from "./components/navbar/Navbar";
import MainPage from "./pages/MainPage";

interface AppProps {}

interface AppState {}

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <div className="ui container">
          <MainPage />
        </div>
      </div>
    );
  }
}

export default App;