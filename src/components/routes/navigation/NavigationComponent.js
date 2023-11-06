import { Fragment } from 'react'; //a fragment is used in react if you want to render nothing
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as TNNLogo } from '../../../assets/tnn.svg';
import './NavigationStyles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
            <TNNLogo className='Logo' />
        </Link>
        <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            <Link className='nav-link' to='/Sign-in'>
                SIGN IN
            </Link>
            <Link className='nav-link' to='/Signup'>
                SIGN UP
            </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;