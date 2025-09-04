import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import myProfile from '../assets/myProfile.png';
import './Home.css';
import { Link } from 'react-scroll';
import Akash_FSD from '../assets/Akash_FSD'
import { FaDownload ,FaEnvelope} from 'react-icons/fa';

const Home = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'React Developer', 'React-Native Developer', 'Software Engineer'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="profile">
          <img src={myProfile} alt="Profile" className="profile-image" />
          <h1>Akash Chouhan</h1>
          <div className="typewriter">
            <p>I am {text}<Cursor /></p>
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <a href={Akash_FSD} download className="btn">Download Resume  <FaDownload/></a>
            <Link
    to="contact"
    smooth={true}
    duration={500}
    offset={-100}
    className="btn btn-secondary"
  >
    Contact Me <FaEnvelope/>
  </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;






