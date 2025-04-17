import StarRating from './../components/StarRating.js'
import ImageCarousel from './../components/ImageCarousel.js'
import { useParams } from 'react-router-dom'
import data from './../assets/JsonFileP6.json'
import './../styles/appart.css';
import { Navigate } from 'react-router-dom'
import ToggleText from '../components/ToggleText';




function Appartement (){
    const { id } = useParams();
    const appart = data.find((item) => item.id === id);

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
                <ToggleText
                    title= "Description"
                    text = {appart.description}
                />
                <ToggleText
                    title= "Amenities"
                    text = {appart.equipments.map((equip, index) => (
                        <li key={index} className='amentites-list'>{equip}</li>
                    ))}
                />
            </div>
        </div>
    )
}

export default Appartement;















