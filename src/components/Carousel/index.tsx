export default function Carousel() {

  const slides = [
    {
      imgMobile: 'src/assets/Mobile/banner1-mobile.png',
      imgTablet: 'src/assets/Tablet/banner1-tablet.png',
      imgDesktop: 'src/assets/Desktop/banner1-desktop.png',
      title: 'title',
      text: 'text',
    },
    {
      imgMobile: 'src/assets/Mobile/banner2-mobile.png',
      imgTablet: 'src/assets/Tablet/banner2-tablet.png',
      imgDesktop: 'src/assets/Desktop/banner2-desktop.png',
      title: 'title',
      text: 'text',
    },
    {
      imgMobile: 'src/assets/Mobile/banner3-mobile.png',
      imgTablet: 'src/assets/Tablet/banner3-tablet.png',
      imgDesktop: 'src/assets/Desktop/banner3-desktop.png',
      title: 'title',
      text: 'text',
    }
  ]

  function renderSlides() {
      return slides.map(slide => {
        return (
          <div className="carousel-item active">
          <img src={slide.imgMobile} className="d-block w-100 img-fluid d-md-none" alt="..." />
          <img src={slide.imgTablet} alt="..." className="img-fluid d-none d-md-block d-xl-none" />
          <img src={slide.imgDesktop} alt="" className="img-fluid d-none d-xl-block w-100"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>{slide.title}</h5>
            <p>{slide.text}</p>
          </div>
        </div>
        )
      })
  }

  return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    {renderSlides()}
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
    )
}