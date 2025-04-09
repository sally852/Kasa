import { useParams } from 'react-router-dom'
import data from './../assets/JsonFileP6.json'
import './../styles/appart.css';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


function Appartement (){
    const { id } = useParams();

    const appart = data.find((item) => item.id === id);

    const [isOpenDescription, setIsOpenDescription] = useState(false);
    const [isOpenAmenities, setIsOpenAmenities] = useState(false);

    const handleToggleDescription = () => setIsOpenDescription(!isOpenDescription);
    const handleToggleAmenities = () => setIsOpenAmenities(!isOpenAmenities);

    if (!appart) {
        return <div>No</div>;
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
                    <div className='rating' >
                        {appart.rating}
                    </div>
                </div>
            </div>

            <div className='container-toggle'> 
                <ul>
                    <div className='list-toggle'>
                        <div>
                            <li>
                                <p>Description</p>
                                <button className="button-toggle" onClick={handleToggleDescription}>
                                {isOpenDescription ? <FaChevronDown /> : <FaChevronUp/> }
                                </button>
                            </li>
                            <div className={`text-toggle ${isOpenDescription ? 'open' : ''}`}>
                                <p>{appart.description}</p>
                            </div>
                        </div>
                    <div>
                        <li>
                            <p>Amenities</p>
                            <button className="button-toggle" onClick={handleToggleAmenities}>
                            {isOpenAmenities ? <FaChevronDown/> : <FaChevronUp/> }
                            </button>
                        </li>
                        <div className={`text-toggle ${isOpenAmenities ? 'open' : ''}`}>
                            <p className='equip'>
                                <ul>
                                    {appart.equipments.map((equip, index) => (
                                        <li key={index} >{equip}</li>
                                    ))}
                                </ul>  
                            </p>
                        </div>
                    </div>
                    </div>
                 
                </ul>
            </div> 

        </div>
    )
}

export default Appartement;




function ImageCarousel() {
  const { id } = useParams();
  const appart = data.find((item) => item.id === id);
  const images = appart?.pictures || [];

  const [currentIndex, setCurrentIndex] = useState(0);

 

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-img"
      />

      {images.length > 1 && (
        <>
          <button className="carousel-btn left" onClick={prevImage}>
            &#10094;
          </button>
          <button className="carousel-btn right" onClick={nextImage}>
            &#10095;
          </button>
        </>
      )}

      <div className="carousel-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}








