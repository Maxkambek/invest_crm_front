import {} from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Price from "./page/Price";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Price />} path="/price/:id" />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
