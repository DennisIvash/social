import './header.css'
import logo from '../../img/logo.svg'

function Header() {
    return (
      <div className='header'>
        <img src={logo} />
      </div>
    );
  }

export default Header;