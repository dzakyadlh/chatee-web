import "bootstrap/dist/css/bootstrap.min.css";
import "./reset.css";
import "./App.css";
import "./assets/styles/buttons.css";

import Landing from "./pages/landing/landing";
import SignIn from "./pages/signin/signin";
import Chats from "./pages/chats/chats";
import Settings from "./pages/settings/settings";

import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
