import ProductsCard from "../ProductsCard"

export default function Products () {

    function renderCards () {
        return [...Array(6)].map(() => {
            return (<ProductsCard />)
        })
    }

    return (
        <div className="container">
        <h2 className="text-center p-4">Produtos que estão bombando!</h2>
        <div className="container row mx-auto">
            {renderCards()}
        </div>
        </div>
    )
}