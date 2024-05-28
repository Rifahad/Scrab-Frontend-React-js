import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import UserLayout from "./Layout/UserLayout";
import Pickup from "./Pages/Pickup";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/pickup" element={<Pickup />} />

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
