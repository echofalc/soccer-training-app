import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayerScreen from "./components/PlayerScreen";
import { Container, Button } from "react-bootstrap";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            <Route path="/player" element={<PlayerScreen />} />
            <Route path="/player/breathwork" />
            <Route path="/player/drills" />
            <Route path="/player/focus" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
