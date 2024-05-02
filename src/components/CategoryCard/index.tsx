interface CategoryCardProps {
    category: {
        imgDesktop: string,
        imgTablet: string,
        imgMobile: string,
        text: string,
    }
}

export default function CategoryCard(props: CategoryCardProps) {
    return (
        <div className="col-6 mx-auto g-4 w-100 h-100 d-flex align-items-stretch">
        <div className="col-6 mx-auto g-4 w-100 h-100 mb-4">
            <div className="card h-100">
            <img src={props.category.imgDesktop} alt="landscape" className="bd-placeholder-img card-img-top d-none d-xl-block"/>
            <img src={props.category.imgTablet} alt="landscape" className="bd-placeholder-img card-img-top d-none d-lg-block d-xl-none"/>
            <img src={props.category.imgMobile} alt="landscape" className="bd-placeholder-img card-img-top d-lg-none"/>
            <div className="card-header bg-black text-white">
                <p className="text-center">{props.category.text}</p>
            </div>
            </div>
        </div>
    </div>
    )
}