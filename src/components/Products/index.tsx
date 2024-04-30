import ProductsCard from "../ProductsCard"

export default function Products () {

    function renderCards () {
        return [...Array(6)].map(() => {
            return <ProductsCard />
        })
    }

    return (
        <>
        <h2 className="text-center">Produtos que estão bombando!</h2>
        <div className="container row mx-auto">
            {renderCards()}

        </div>
        </>
    )
}