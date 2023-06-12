// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  ;<nav className="bg-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      alt="wave"
      className="wave-img"
    />
    <h1 className="list">Wave</h1>
    <ul className="bg-container">
      <li>
        <Link to="/" className="list">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="list">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="list">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
}

export default Header
