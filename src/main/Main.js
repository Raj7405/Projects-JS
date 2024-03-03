import Discription from "./Discription";
import "./Main-Css/main.css";
import SmallCard from "./SmallCard";
import Test from "./Test";

function Main() {
  return (
    <>
      <div className="container">
        <div className="left-part">
          <div className="main-video">
            <iframe
              width="763"
              height="523"
              src="https://www.youtube.com/embed/AX6OrbgS8lI"
              title="AUR - TU HAI KAHAN - Raffey - Usama - Ahad (Official Music Video)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="title">
            <h3>
              AUR - TU HAI KAHAN - Raffey - Usama - Ahad (Official Music Video)
            </h3>
          </div>
          <div className="channel-bar">
            <div className="left-bar">
              <div className="channel-icon">
                <img
                  className="channel-img"
                  src="https://yt3.googleusercontent.com/YGbFankSHedSA37Ji8CmDkx8lZfR55p7JG12_bRuu4QizdP0hTyq2MTpOEgv0bykQN-DbKft=s176-c-k-c0x00ffffff-no-rj"
                  alt="channel icon"
                ></img>
              </div>
              <div className="channel-name">
                <div className="name">
                  <h3>
                    AUR <i class="fas fa-music"></i>
                  </h3>
                </div>
              </div>
              <div className="sub-button">
                <button className="button primary-button">subcribe</button>
              </div>
            </div>
            <div className="rigth-bar">
              <div className="like-icon ">
                <button className="like">
                  <i class="fa-solid fa-thumbs-up"></i> 80k
                </button>
                <button className="dislike">
                  <i class="fa-solid fa-thumbs-down"></i>
                </button>
              </div>
              <button className="button">
                <i class="fa-solid fa-share"></i> share
              </button>
              <button className="button">
                <i class="fa-solid fa-download"></i> Download
              </button>
            </div>
          </div>
          <div className="discription">
              <Discription/>
          </div>
          <div className="add-comment">
            <p>20 comments </p>
          </div>
          <div className="comment-section">

            <img className="comment-img" src="https://www.agorapulse.com/blog/wp-content/uploads/sites/2/2017/11/Screen-Shot-2017-11-16-at-12.08.44-AM-1.png" alt="comment section"></img>
          </div>
        </div>
        <div className="rigth-part">
          <div className="sub-menu">
              <div className="sub-menu-button">
                <button><a href="#">All</a></button>
                <button><a href="#">From AUR</a></button>
                <button><a href="#">Related</a></button>
                <button><a href="#">Recently uploaded </a></button>
              </div>
          </div>
        <div className="card-section">
          <div className="cards">
              <SmallCard/>
              <Test/>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
export default Main;
