import { Col, Container, Row } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const Player = () => {
  const playingSong = useSelector((state) => state.playingSong);
  const likedSongs = useSelector((state) => state.likedSongs.content);
  return (
    <>
      <Container fluid className="player fixed-bottom bg-container pt-1">
        <Row className="h-100">
          <Col lg={10} className="offset-lg-2">
            <Row className="h-100 justify-content-start align-items-center">
              <Col md={4} className="d-flex align-items-center gap-3">
                <img className="align-self-center" src={playingSong?.songImage} />
                <div className="justify-content-center">
                  <p className="text-white mb-0">{playingSong.title}</p>
                  <p className="text-white fw-bold mb-0">{playingSong.singer}</p>
                </div>
                {playingSong && <div className="like-this-song text-white">{likedSongs.includes(playingSong.songId) ? <HeartFill /> : <Heart />}</div>}
              </Col>
              <Col sm={6} md={4} className="playerControls">
                <div className="d-flex">
                  <a href="#">
                    <img src="../src/assets/playerbuttons/shuffle.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="../src/assets/playerbuttons/prev.png" alt="prev" />
                  </a>
                  <a href="#">
                    <img src="../src/assets/playerbuttons/play.png" alt="play" />
                  </a>
                  <a href="#">
                    <img src="../src/assets/playerbuttons/next.png" alt="next" />
                  </a>
                  <a href="#">
                    <img src="../src/assets/playerbuttons/repeat.png" alt="repeat" />
                  </a>
                </div>
                <div className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Player;
