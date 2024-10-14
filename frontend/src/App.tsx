import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./modules/Home.tsx";
import { AuthPage } from "./modules/AuthPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<AuthPage />} />
          <Route path={"/signup"} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
