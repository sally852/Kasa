import data from './../assets/JsonFileP6.json'
import './../styles/appartment-list.css';
import { Link } from 'react-router-dom';



function AppartmentList() {
    return(
        <div className='appartment-list'>
            <ul>
                {data.map((appart) => (
                    <li key={appart.id}>
                       <Link to={`/appart/${appart.id}`}>
                            <img src={appart.cover} alt={appart.title} />
                            <span>{appart.title}</span>
                        </Link>
                    </li>
                ))}
            </ul> 
        </div>
    );
}
export default AppartmentList;