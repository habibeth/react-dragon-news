import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-12'>
            <Link to="/">
                <img src={logo} alt="" className='mx-auto' />
            </Link>
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;