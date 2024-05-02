import CategoryCard from "../CategoryCard"

export default function Categories () {
    
    function renderCards() {
        return [...Array(6)].map((_, index) => {
            return <div key={index} className="col-6 col-md-4 col-xxl-2 h-100"><CategoryCard /></div>;
        });
    }
    
    return (
        <div className="container">
        <h2 className="text-center p-4">Busque por categoria:</h2>
        <div className="row mx-auto">
                {renderCards()}
        </div>
        </div>
    )
}