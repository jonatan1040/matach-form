import "./App.css";
import { useState, useEffect } from "react";
import * as Realm from "realm-web";
import Form from "./Components/Form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuccessPage from "./Components/SuccessPage/SuccessPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/SuccessPage" element={<SuccessPage />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
