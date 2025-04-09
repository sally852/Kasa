import './../styles/body.css'
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


function Body (){

    const [isOpenReliability, setIsOpenReliability] = useState(false);
    const [isOpenRespect, setIsOpenRespect] = useState(false);
    const [isOpenService, setIsOpenService] = useState(false);
    const [isOpenSecurity, setIsOpenSecurity] = useState(false);

    const handleToggleReliability = () => setIsOpenReliability(!isOpenReliability);
    const handleToggleRespect = () => setIsOpenRespect(!isOpenRespect);
    const handleToggleService = () => setIsOpenService(!isOpenService);
    const handleToggleSecurity = () => setIsOpenSecurity(!isOpenSecurity);

    return(
        <div className='toggle-container'>
            <ul>
                <li>
                    <p>Reliability</p>
                    <button  className="toggle-button" onClick={handleToggleReliability}>
                        {isOpenReliability ? <FaChevronDown/> : <FaChevronUp/> } 
                    </button> 
                </li>
                <div className={`toggle-text ${isOpenReliability ? 'open' : ''}`}>
                    <p>The listings posted on Kasa guarantee total reliability. The photos match the accommodations, and all information is regularly checked by our teams.
                    </p>
                </div>
                <li>
                    <p>Respect</p>
                    <button className="toggle-button" 
                    onClick={handleToggleRespect}>
                      {isOpenRespect ? <FaChevronDown/> : <FaChevronUp/> } 
                    </button>
                </li>
                <div className={`toggle-text ${isOpenRespect ? 'open' : ''}`}>
                    <p>Kindness is one of the founding values of Kasa. Any discriminatory behavior or disturbance to the neighborhood will result in exclusion from our platform.
                    </p>
                </div>
                <li>
                    <p>Service</p>
                    <button className="toggle-button" 
                    onClick={handleToggleService}>
                      {isOpenService ? <FaChevronDown/> : <FaChevronUp/> }
                    </button>
                </li>
                <div className={`toggle-text ${isOpenService ? 'open' : ''}`}>
                    <p>At Kasa, providing excellent service is a core value. We strive to ensure every guest and host feels supported and respected. Any behavior that disrupts the experience of others or violates community standards may result in removal from our platform.</p>
                </div>
                <li>
                    <p>Security</p>
                    <button className="toggle-button" onClick={handleToggleSecurity}>
                      {isOpenSecurity ? <FaChevronDown/> : <FaChevronUp/> }
                    </button>
                </li>
                <div className={`toggle-text ${isOpenSecurity  ? 'open' : ''}`}>
                    <p>Safety is Kasa’s top priority. For both our hosts and travelers, each listing meets the safety criteria established by our services. By leaving a rating for both the host and the guest, it allows our teams to ensure that the standards are being respected. We also organize workshops on home safety for our hosts.</p>
                </div>
            </ul>
        </div>
    );
};
export default Body;