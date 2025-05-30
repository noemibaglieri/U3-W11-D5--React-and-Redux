import { Col, Row } from "react-bootstrap";
import MusicList from "./MusicList";
import Player from "./Player";

const Home = () => {
  return (
    <>
      <Col sm={12} md={9} className="mainPage offset-md-3">
        <Row>
          <Col sm={9} lg={11} className="mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </Col>
        </Row>
        <MusicList title="Rock Classics" query="Queen" />
        <MusicList title="Pop Culture" query="Ariana Grande" />
        <MusicList title="#HipHop" query="Doja Cat" />
        <Player />
      </Col>
    </>
  );
};

export default Home;
