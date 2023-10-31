import { MdRocketLaunch } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";

const Home = () => {
  return (
    <div className="home">
      {/* Svg Div */}
      <div className="svgHome">
        <h1>
          Console <span>Busters</span>
        </h1>
        <p>for a better future</p>
        <span>
          <MdRocketLaunch />
        </span>
      </div>
      {/* ELearning Div */}
      <div className="ELearningDiv">
        <div className="div1">
          <p className="p1">{"Let's"}</p>
          <p className="p2">E-learning</p>
          <p className="p3">at your home</p>
        </div>
        <div className="div2">
          <div className="card">
            <a
              href="https://github.com/BCAPATHSHALA/DSA-SUPREME-2-0-NOTES"
              target="blank"
            >
              DSA SUPREME 2.0 NOTES
            </a>
          </div>
          <div className="card">
            <a
              href="https://github.com/BCAPATHSHALA/DSA-SUPREME-2-0-NOTES"
              target="blank"
            >
              MERN STACK DEVELOPMENT NOTES
            </a>
          </div>
          <div className="card">
            <a
              href="https://github.com/BCAPATHSHALA/DSA-SUPREME-2-0-NOTES"
              target="blank"
            >
              FREE COURSES COMMING SOON
            </a>
          </div>
        </div>
      </div>
      {/* Discord Server */}
      <a
        href="https://discord.com/invite/naQUPVWvSs"
        target="blank"
        className="discordDiv"
      >
        <p>
          <BsDiscord className="icon" />
          Join Our{" "}
          <span>
            Consle <span>Buster</span>
          </span>{" "}
          Discord Server
        </p>
      </a>
    </div>
  );
};

export default Home;
