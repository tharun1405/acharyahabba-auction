import { useState } from "react";
import "./App.css";
import Screen from "./Screen/Screen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entry from "./Entry/Entry";
import { ToastContainer } from "react-toastify";

function App() {
  const [data, setData] = useState(null);
  return (
    <Router>
      <Routes>
        <Route
          path="/screen"
          element={<Screen data={data} setData={setData} />}
        />
        <Route path="/" element={<Entry data={data} setData={setData} />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
      />
    </Router>
  );
}

export default App;
