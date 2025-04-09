import './../styles/HeaderImage.css';

function HeaderImage(props){
    const {title, image, showTitle = true} = props;
   
    return (
        <div className='header-image'>
          <img
            src={image}
            alt=''
            className="header-img"
          />
          {showTitle &&  <h1 className="header-title">{title}</h1> }
        </div>
    );
};

export default HeaderImage;