import CategoryCard from "../CategoryCard"

export default function Categories () {
    
    const categories = [
        {
            imgDesktop: 'src/assets/Desktop/categorias/categoria-bolsa.png',
            imgTablet: 'src/assets/Tablet/categorias/categoria-bolsas.png',
            imgMobile: 'src/assets/Tablet/categorias/categoria-bolsas.png',
            text: 'Bolsas'
        },
        {
            imgDesktop: 'src/assets/Desktop/categorias/categoria-calcados.png',
            imgTablet: 'src/assets/Tablet/categorias/categoria-calcados.png',
            imgMobile: 'src/assets/Tablet/categorias/categoria-calcados.png',
            text: 'Calçados'
        },
        {
            imgDesktop: 'src/assets/Desktop/categorias/categoria-calcas.png',
            imgTablet: 'src/assets/Tablet/categorias/categoria-calcas.png',
            imgMobile: 'src/assets/Tablet/categorias/categoria-calcas.png',
            text: 'Calças'
        },
        {
            imgDesktop: 'src/assets/Desktop/categorias/categoria-camiseta.png',
            imgTablet: 'src/assets/Tablet/categorias/categoria-camiseta.png',
            imgMobile: 'src/assets/Tablet/categorias/categoria-camiseta.png',
            text: 'Camisetas'
        },
        {
            imgDesktop: 'src/assets/Desktop/categorias/categoria-casacos.png',
            imgTablet: 'src/assets/Tablet/categorias/categoria-casacos.png',
            imgMobile: 'src/assets/Tablet/categorias/categoria-casacos.png',
            text: 'Casacos'
        },
        {
            imgDesktop: 'src/assets/Desktop/categorias/categoria-oculos.png',
            imgTablet: 'src/assets/Tablet/categorias/categoria-oculos.png',
            imgMobile: 'src/assets/Tablet/categorias/categoria-oculos.png',
            text: 'Óculos'
        }
    ];
    

    function renderCards() {
        return categories.map((category, index) => {
            return (
                <div key={index} className="col-6 col-md-4 col-xxl-2 h-100">
                    <CategoryCard category={category} />
                </div>
            );
        });
    }
    
    return (
        <div className="container">
        <h2 className="text-center p-4 fs-3">Busque por categoria:</h2>
        <div className="row mx-auto">
                {renderCards()}
        </div>
        </div>
    )
}