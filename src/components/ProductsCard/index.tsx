export default function ProductsCard () {
    return (
        <div className="container col-lg-4 col-md-6 col-12 mb-3">
        <div className="card">
          <img src="https://png.pngtree.com/background/20230618/original/pngtree-lakescape-landscape-nature-scenery-hd-picture-image_3712644.jpg" alt="landscape" className="bd-placeholder-img card-img-top"/>
          <div className="card-body">
            <h5 className="card-title fs-4 fw-bold">Produto</h5>
            <p className="card-text fs-6 mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p className="fs-5 mb-3 fw-bold">R$ 30,00</p>
            <a href="#" className="btn btn-primary moreBtn rounded-0 fw-bold">Ver mais</a>
          </div>
        </div>
    </div>
    )
}