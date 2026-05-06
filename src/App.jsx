import { Routes, Route } from "react-router";
import "./App.css";
import TanstackQuery from "./components/post/TanstackQuery";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<TanstackQuery />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
