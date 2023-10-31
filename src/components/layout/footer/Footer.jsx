import logo from "../../../assets/consoleBusters.png";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { PiLinkedinLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="footer">
      {/* Footer container */}
      <div className="divFooter">
        {/* Logo div */}
        <div className="LogoDiv">
          <div className="imageLogoDiv">
            <img src={logo} alt="Console Busters" />
          </div>
          <h1>
            Console <span>Busters</span>
          </h1>
        </div>
        {/* Content Div for notes, courses, company, and contact us */}
        <div className="contentDiv">
          <div className="notes commonDiv">
            <h2>Notes</h2>
            <ul>
              <li>
                <a href="#">DSA Supreme 2.0</a>
              </li>
              <li>
                <a href="#">Web Developement</a>
              </li>
              <li>
                <a href="#">System Design</a>
              </li>
            </ul>
          </div>
          <div className="courses commonDiv">
            <h2>Courses</h2>
            <ul>
              <li>
                <a href="#">MERN Stack</a>
              </li>
              <li>
                <a href="#">DSA Using C++</a>
              </li>
              <li>
                <a href="#">DSA Using Java</a>
              </li>
            </ul>
          </div>
          <div className="company commonDiv">
            <h2>Company</h2>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Newsroom</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="address">
            <div className="div">
              <p>9898989898</p>
              <p>manojkumargg@gmail.com</p>
              <p>Tundla, Uttar Pradesh</p>
            </div>
            {/* Social media div */}
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
        </div>

        {/* Copyright and privacy policy div */}
        <div className="CPDiv">
          <div>
            <p>Copyright 2023 Console Busters, Inc. All rights reversed.</p>
          </div>
          <div>
            <a href="#">Privacy policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
