import { useParams } from 'react-router-dom'
import data from '../assets/JsonFileP6.json'
import { FaStar } from "react-icons/fa";
function StarRating() {
    const stars = [];
    const { id } = useParams();
    const appart = data.find((item) => item.id === id);
    const rating = appart?.rating || [];
  
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i <= rating ? "#ff6060" : "#e3e3e3"} 
          size={28}
        />
      );
    }
  
    return <div className="star-rating">{stars}</div>;
}
export default StarRating;