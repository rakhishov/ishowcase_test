import './Banner.css'
import banner from '../assets/banner-xs_datejust-36_portrait.jpg'
const Banner = () =>{
    return (
        <div className="banner-container">
            <img src={banner} className='banner' alt="banner" />
        </div>
    )
}

export default Banner;