import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bookupdate from "./pages/Bookupdate";
import Bookcreate from "./pages/Bookcreate";
import Bookdelete from "./pages/Bookdelete";
import Bookshow from "./pages/Bookshow";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update/:id" element={<Bookupdate />} />
        <Route path="/create" element={<Bookcreate />} />
        <Route path="/delete/:id" element={<Bookdelete />} />
        <Route path="/book/:id" element={<Bookshow/>} />
      </Routes>
    </>
  );
}

export default App;
