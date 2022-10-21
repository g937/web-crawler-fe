import { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import MainPage from "./pages/main/MainPage";
import NewsDetailPage from "./pages/news-detail/NewsDetailPage";

interface AppProps {}

interface AppState {}

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <div className="ui container" style={{paddingBottom: "1rem"}}>
          <Routes>
            <Route path="/news/:id" element={<NewsDetailPage />} />
            <Route path="/news" element={<MainPage />} />

            <Route path="*" element={<Navigate to="/news" replace />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;