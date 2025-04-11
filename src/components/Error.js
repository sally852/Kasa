import { NavLink } from 'react-router-dom';
import errorImg from './../assets/404.png';
import './../styles/error-page.css';

function Error() {
    return (
       <div className='page-container'>
          <img src={errorImg} alt="error 404"/>
          <p>Oops! The page you are looking for does not exist.</p>
          <NavLink  to="/" > Return to home page</NavLink>
       </div>
    )
 }
 
 export default Error;