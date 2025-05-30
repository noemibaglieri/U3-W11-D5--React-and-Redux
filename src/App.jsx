import { Container, Row } from "react-bootstrap";
import "./App.css";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Player from "./components/Player";

function App() {
  return (
    <>
      <Container fluid className="main-sec">
        <Row>
          <SideBar />
          <Home />
        </Row>
      </Container>
      <Player />
    </>
  );
}

export default App;
