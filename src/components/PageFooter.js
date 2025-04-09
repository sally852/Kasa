import footerImg from './../assets/footer_logo.png'
import './../styles/footer.css'

function PageFooter() {
    return(
        <div className='footer'>
            <img src={footerImg} alt="kasa logo" />
            <p>&copy; 2025 Kasa. All rights reserved.</p>
        </div>
    );
}
export default PageFooter;