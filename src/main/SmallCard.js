import './Main-Css/Small_card.css';

function Small_card() {
  return (
    <>
      <div className="card">
        <div className="l-part">
          <iframe
            width="170"
            height="120"
            src="https://www.youtube.com/embed/AX6OrbgS8lI"
            title="AUR - TU HAI KAHAN - Raffey - Usama - Ahad (Official Music Video)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>  
        <div className="r-part">
          <div className="video-title">
            <div className="title">
              <p><b>Uraan - Tu Hai Kahan [lyrics]</b></p>
            </div>
            <div className="Menu-icon">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
          <div className="channel-name">
            <p>AUR</p>
          </div>
          <div className="bottom-card">
            <p id="views">530 views</p>
            <p><i class="fa-solid fa-circle dot"></i></p> 
            <p id="time"> 4 month ago</p>
          </div>
        </div> 
      </div>
    </>
  );
}

export default Small_card;
