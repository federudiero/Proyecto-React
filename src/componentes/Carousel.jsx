
import img1 from '../img/celular2.png'
import img2 from '../img/televisor.png'
import img3 from '../img/notebook.png'
import { Link  } from 'react-router-dom';
import '../componentes/css/Carousel.css'
function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
      <Link  to="/category/celulares" ><img src={img1} className="d-block w-100 imgCarousel" alt="..."/></Link>
        <div className="carousel-caption d-none d-md-block divBGCarousel">
          <h5 className='Title'>Smartphone</h5>
          <p>Encuentra el mejor Smartphone</p>
        </div>
      </div>
      <div className="carousel-item">
             <Link  to="/category/televisores" ><img src={img2} className="d-block w-100 imgCarousel" alt="..."/></Link>
        <div className="carousel-caption d-none d-md-block divBGCarousel">
          <h5 className='Title'>SmartTv</h5>
          <p>Encontra los mejores smartTv para tu casa</p>
        </div>
      </div>
      <div className="carousel-item">
      <Link  to="/category/notebook" ><img src={img3} className="d-block w-100 imgCarousel" alt="..."/></Link>
        <div className="carousel-caption d-none d-md-block divBGCarousel">
          <h5 className='Title'>Laptos</h5>
          <p>Laptos la variedad y calidad que necesitas</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  );
}

export default Carousel;