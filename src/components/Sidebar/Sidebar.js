import './Sidebar.scss';
import { Link, NavLink } from 'react-router-dom';
import Logotipo from '../../assets/images/IsotipoTransparente.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={Logotipo} alt="logo"></img>
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" className="home-link" to="/">
        <FontAwesomeIcon icon={faHome} color="adadad"></FontAwesomeIcon>
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="adadad"></FontAwesomeIcon>
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="adadad"></FontAwesomeIcon>
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar;