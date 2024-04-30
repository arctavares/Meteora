import CategoryCard from "../CategoryCard"

export default function Categories () {
    
    function renderCards () {
        return [...Array(6)].map(() => {
            return <CategoryCard />
        })
    }
    
    return (
        <>
        <h2 className="text-center">Busque por categoria:</h2>
        {renderCards()}
        </>
    )
}