import './../styles/about.css';
import HeaderImage from '../components/HeaderImage.js';
import AppartmentList from '../components/AppartmentList.js'
import aboutPageImage from './../assets/about-page.png';
import Body from './../components/Body.js'

function About(){
    return (
        <div className='about'>
           <HeaderImage
                image={aboutPageImage}
                showTitle={false} 
            />
            <Body/>
        </div>
    );
};

export default About;