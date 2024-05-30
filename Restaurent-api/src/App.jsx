import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Restaurents from "./Restaurents";
import CreateRestaurent from "./CreateRestaurent";
import UpdateRestaurent from "./UpdateRestaurent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Restaurents />}></Route>
          <Route path="/create" element={<CreateRestaurent />}></Route>
          <Route path="/update/:id" element={<UpdateRestaurent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
