import {} from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Price from "./page/Price";
import Installment from "./components/Installment";
import Client from "./components/Client";
import "@progress/kendo-theme-material/dist/all.css";
import ForTest from "./components/ForTest";


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Price />} path="/price/:id" />
          <Route element={<ForTest />} path="/test/:id" />
          <Route element={<Installment />} path="/installment" />
          <Route element={<Client />} path="/client" />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
