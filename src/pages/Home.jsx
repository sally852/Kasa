import './../styles/home.css';
import HeaderImage from '../components/HeaderImage.js';
import AppartmentList from '../components/AppartmentList.js'
import homePageImage from './../assets/home-page.png';



function Home() {
  return (
    <div className="home">
      <HeaderImage
       image={homePageImage}
       title= "At home, everywhere, and anywhere"
       showTitle={true} />
      <AppartmentList/>
    </div>
  );
}

export default Home;
