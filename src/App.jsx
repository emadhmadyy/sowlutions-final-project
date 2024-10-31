import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import Error from "./pages/error";
import Playlists from "./pages/playlists";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/not-found" element={<Error />} />
        <Route path="/playlists" element={<Playlists />} />
      </Routes>
    </Router>
  );
};

export default App;
