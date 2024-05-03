interface Card {
  imgDesktop: string;
  imgTablet: string;
  imgMobile: string;
  title: string;
  text: string;
  price: string;
}


interface ProductsCardProps {
  card: Card;
}

const ProductsCard: React.FC<ProductsCardProps> = ({ card }) => {
    return (
        <div className="container col-lg-4 col-md-6 col-12 mb-3">
        <div className="card">
          <img src={card.imgDesktop} alt="landscape" className="bd-placeholder-img card-img-top d-none d-xl-block"/>
          <img src={card.imgTablet} alt="landscape" className="bd-placeholder-img card-img-top d-none d-lg-block d-xl-none"/>
          <img src={card.imgMobile} alt="landscape" className="bd-placeholder-img card-img-top d-lg-none"/>
          <div className="card-body">
            <h5 className="card-title fs-4 fw-bold">{card.title}</h5>
            <p className="card-text fs-6 mb-3">{card.text}</p>
            <p className="fs-5 mb-3 fw-bold">{card.price}</p>
            <a href="#" className="btn btn-primary moreBtn rounded-0 fw-bold">Ver mais</a>
          </div>
        </div>
    </div>
    )
}

export default ProductsCard;