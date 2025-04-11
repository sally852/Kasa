import StarRating from './../components/StarRating.js'
import ImageCarousel from './../components/ImageCarousel.js'
import { useParams } from 'react-router-dom'
import data from './../assets/JsonFileP6.json'
import './../styles/appart.css';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Navigate } from 'react-router-dom'




function Appartement (){
    const { id } = useParams();

    const appart = data.find((item) => item.id === id);

    const [isOpenDescription, setIsOpenDescription] = useState(false);
    const [isOpenAmenities, setIsOpenAmenities] = useState(false);

    const handleToggleDescription = () => setIsOpenDescription(!isOpenDescription);
    const handleToggleAmenities = () => setIsOpenAmenities(!isOpenAmenities);

    if (!appart) {
        return <Navigate to="/error" />;
    }
    return (
        <div className='containerr'>

            <ImageCarousel/>
            <div className='part1'> 
                <div className='left'>
                    <p className='title'> {appart.title}</p>
                    <p className='location'>{appart.location}</p>
                    <div className='tags'>
                        <ul>
                            {appart.tags.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='right'>
                    <div className='host'>
                        <p>{appart.host.name}</p>
                        <img src={appart.host.picture} alt={appart.host.name} />
                    </div> 
                    <StarRating/>
                </div>
            </div>

            <div className='container-toggle'> 
                <ul className="list-toggle">  
                    <li className='toggle-list'>
                        <div className="toggle-header">
                            <p>Description</p>
                            <button className="button-toggle" onClick={handleToggleDescription}>
                                {isOpenDescription ? <FaChevronDown size={24}/> : <FaChevronUp size={24}/>}
                            </button>
                        </div>  
                        <div className={`text-toggle ${isOpenDescription ? 'open' : ''}`}>
                           <p>{appart.description}</p>
                        </div> 
                    </li>
                    
                    <li className='toggle-list'>
                        <div className="toggle-header">
                            <p>Amenities</p>
                            <button className="button-toggle" onClick={handleToggleAmenities}>
                                {isOpenAmenities ? <FaChevronDown size={24}/> : <FaChevronUp size={24}/> }
                            </button>
                        </div>
                        <div className={`text-toggle ${isOpenAmenities ? 'open' : ''}`}>
                            <ul className='list-amenities'>
                                {appart.equipments.map((equip, index) => (
                                    <li key={index} className='amentites-list'>{equip}</li>
                                ))}
                            </ul>  
                        </div>
                    </li>
                </ul>
            </div> 

        </div>
    )
}

export default Appartement;















