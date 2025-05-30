import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

const MusicList = (props) => {
  const [musicList, setMusicList] = useState([]);
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.likedSongs.content);

  const fillMusicSection = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + props.query);

      if (response.ok) {
        let data = await response.json();
        setMusicList(data.data);
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fillMusicSection();
  }, []);

  return (
    <>
      <Row>
        <Col sm={10}>
          <div id="rock">
            <h2>{props.title}</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="rockSection">
              {musicList &&
                musicList.slice(0, 4).map((song) => (
                  <Col key={song.id} className="text-center">
                    <img
                      className="img-fluid"
                      src={song.album.cover_medium}
                      alt="track"
                      onClick={() =>
                        dispatch({
                          type: "PLAYING_SONG",
                          payload: {
                            title: song.title,
                            singer: song.artist.name,
                            songImage: song.album.cover_small,
                            songId: song.id,
                          },
                        })
                      }
                    />
                    <p>
                      Track: {song.title}
                      <br />
                      Artist: {song.artist.name}
                    </p>
                    <div className="like-this-song" onClick={() => dispatch({ type: "LIKED_SONG", payload: song.id })}>
                      {likedSongs.includes(song.id) ? <HeartFill /> : <Heart />}
                    </div>
                  </Col>
                ))}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MusicList;
