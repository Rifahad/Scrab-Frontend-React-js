import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminRouter from "./Router/AdminRouter";
import UserRouter from "./Router/UserRouter";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/*" element={<UserRouter />} />
      <Route path="/admin/*" element={<AdminRouter />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
