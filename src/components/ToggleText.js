import './../styles/toggle.css'
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


function ToggleText (props) {
    const {title, text} = props;
    
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => setIsOpen(!isOpen);

    return(
        <div className='toggle-container'>
            <div className='toggle'>
                <p>{title}</p>
                <button  className="toggle-button" onClick={handleToggle}>
                    {isOpen ? <FaChevronDown/> : <FaChevronUp/> } 
                </button> 
            </div>
            <div className={`toggle-text ${isOpen ? 'open' : ''}`}>
                <p>{text}</p>
            </div>
        </div>
    );
}
export default ToggleText ;