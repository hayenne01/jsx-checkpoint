import './assets/style.css';
import imageInSrc from "./assets/imageInSrc.jpg"

function App() {
  return (
    <div className="App">
      <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title">Just another Website</h1>
          <br />
          <img src={imageInSrc} alt='imageInSrc' /> 
          <br />
          <img className='imgpub' src="/imageInPublic.jpg" alt='imageInPublic' />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
        </div>
    );
  }
;

export default App;
