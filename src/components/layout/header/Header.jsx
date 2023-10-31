import { TbBrandYoutubeFilled } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { PiLinkedinLogoFill } from "react-icons/pi";
import logo from "../../../assets/consoleBusters.png";

const Header = () => {
  return (
    <div className="header">
      {/* Logo div for logo */}
      <div className="LogoDiv">
        <div className="imageLogoDiv">
          <img src={logo} alt="Console Busters" />
        </div>
        <h1>
          Console <span>Busters</span>
        </h1>
      </div>
      {/* Navigation div to navigate to page */}
      <div className="navigateDiv">
        <ul>
          <li>Home</li>
          <li>Notes</li>
          <li>About Us</li>
        </ul>
      </div>
      {/* Social media div to build the connection */}
      <div className="mediaDiv">
        <a
          href="https://github.com/BCAPATHSHALA"
          target="blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/manojoffcialmj"
          target="blank"
          rel="noreferrer"
        >
          <PiLinkedinLogoFill />
        </a>
        <a
          href="https://www.youtube.com/@ConsoleBusters"
          target="blank"
          rel="noreferrer"
        >
          <TbBrandYoutubeFilled />
        </a>
      </div>
    </div>
  );
};

export default Header;
