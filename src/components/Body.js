
import ToggleText from './ToggleText';


function Body (){

    return(
        <div className='toggle-container'>
            <ToggleText
            title= "Reliability"
            text = "The listings posted on Kasa guarantee total reliability. The photos match the accommodations, and all information is regularly checked by our teams."
            />
            <ToggleText
            title= "Respect"
            text = "Kindness is one of the founding values of Kasa. Any discriminatory behavior or disturbance to the neighborhood will result in exclusion from our platform."
            />
             <ToggleText
            title= "Service"
            text = "At Kasa, providing excellent service is a core value. We strive to ensure every guest and host feels supported and respected. Any behavior that disrupts the experience of others or violates community standards may result in removal from our platform."
            />
             <ToggleText
            title= "Security"
            text = "Safety is Kasa’s top priority. For both our hosts and travelers, each listing meets the safety criteria established by our services. By leaving a rating for both the host and the guest, it allows our teams to ensure that the standards are being respected. We also organize workshops on home safety for our hosts."
            />
            
        </div>
    );
};
export default Body;