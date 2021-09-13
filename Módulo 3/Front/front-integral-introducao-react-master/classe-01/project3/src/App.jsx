import arrowDown from './assets/icon-arrow-down.svg'
import iconFacebook from './assets/icon-facebook.svg'
import iconInstagram from './assets/icon-instagram.svg'
import iconPinterest from './assets/icon-pinterest.svg'
import iconTwitter from './assets/icon-twitter.svg'
import logo from "./assets/logo.svg";
import imgEmily from "./assets/image-emily.jpg";
import imgGalleryCone from "./assets/image-gallery-cone.jpg";
import imgGalleryMilk from "./assets/image-gallery-milkbottles.jpg";
import imgGalleryOrange from "./assets/image-gallery-orange.jpg";
import imgGallerySugar from "./assets/image-gallery-sugarcubes.jpg";
import imgGraphicDesign from "./assets/image-graphic-design.jpg";
import imgHeader from "./assets/image-header.jpg";
import imgJennie from "./assets/image-jennie.jpg";
import imgPhoto from "./assets/image-photography.jpg";
import imgStandout from "./assets/image-stand-out.jpg";
import imgThomas from "./assets/image-thomas.jpg";
import imgTransform from "./assets/image-transform.jpg";
import sunny from './assets/sunnyside.png'
import sunnySVG from './assets/sunnyside.svg'
import './App.css';

function App() {
  return (
    <div className="TESTE">
      <header>
        <img className="logo" src={logo} />
        <div className="menu">

          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#" className="button">CONTACT</a>
        </div>

        <h1>WE ARE CREATIVES</h1>

        <img className="arrow" src={arrowDown} />

      </header>

      <div className="div1">
        <div className="div1interna">
          <h2>
            Transform your brand
          </h2>
          <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling
            visuals that do most of the marketing for you.</p>
          <p className="learn">LEARN MORE</p>
        </div>

        <img src={imgTransform} />
      </div>

      <div className="div2">
        <img src={imgStandout} />
        <div className="div2interna">
          <h2>Stand out to the right audience</h2>
          <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.</p>
          <p className="learn">LEARN MORE</p>
        </div>
      </div>

      <div className="div3">
        <div className="div3-1">
          <h2>Graphic Design</h2>
          <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’
            attention.</p>
        </div>

        <div className="div3-2">
          <h2>Photography</h2>
          <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
      </div>

      <div className="client">
        <h2 className="title">CLIENT TESTIMONIALS</h2>

        <div className="pessoas">

          <div className="emily">
            <img src={imgEmily} />
            <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <h2>Emily R.</h2>
            <p>Marketing Director</p>
          </div>

          <div className="thomas">
            <img src={imgThomas} />
            <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable
              experience.</p>
            <h2>Thomas S.</h2>
            <p>Chief Operating Officer</p>
          </div>

          <div className="jennie">
            <img src={imgJennie} />
            <p>Incredible end result!Our sales increased over 400% when we worked with Sunnyside.Highly recommended!</p>
            <h2>Jennie F.</h2>
            <p>Business Owner</p>

          </div>
        </div>
      </div>

      <div className="img-row">
        <img className="img1" src={imgGalleryMilk} />
        <img className="img2" src={imgGalleryOrange} />
        <img className="img3" src={imgGalleryCone} />
        <img className="img4" src={imgGallerySugar} />
      </div>

      <footer>
        <img src={sunnySVG} />
        <div className="itens-footer">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
        </div>

        <div className="icons">
          <img src={iconFacebook} />
          <img src={iconInstagram} />
          <img src={iconTwitter} />
          <img src={iconPinterest} />
        </div>
      </footer>
    </div>
  );
}

export default App;
