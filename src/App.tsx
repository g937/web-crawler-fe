import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import MainPage from "./pages/main/MainPage";
import NewsDetailPage from "./pages/news-detail/NewsDetailPage";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <div className="ui-container">
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