export default function ProductsCard () {
    return (
        <div className="container col-lg-4 col-md-6 col-12 mb-3">
        <div className="card">
          <img src="https://png.pngtree.com/background/20230618/original/pngtree-lakescape-landscape-nature-scenery-hd-picture-image_3712644.jpg" alt="landscape" className="bd-placeholder-img card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">Produto</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p>R$ 30,00</p>
            <a href="#" className="btn btn-primary">Ver mais</a>
          </div>
        </div>
    </div>
    )
}