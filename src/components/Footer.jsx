import "../assets/styles/Footer.css";
import logo from "../assets/img/logo.jpg"
import whatsapp from "../assets/img/whatsapp.png"
import ig from "../assets/img/instagram.png"
import facebook from "../assets/img/facebook.png"
import yt from "../assets/img/youtube.png"

function Footer() {
  return (
    <div>
      <br />
      <br />
      <footer>
        <div className="footer">
          <div className="divIcono">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <label className="label">TTG</label>
          </div>
          <div className="red">
          <div className="redes"><img src={whatsapp} alt="" /></div>
          <div className="redes"><img src={ig} alt="" /></div>
          <div className="redes"><img src={facebook} alt="" /></div>
          <div className="redes"><img src={yt} alt="" /></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
