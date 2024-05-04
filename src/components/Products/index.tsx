import ProductsCard from "../ProductsCard"

export default function Products () {

    const cards = [
        {
            imgDesktop: 'src/assets/Desktop/produtos/bolsa.png',
            imgTablet: 'src/assets/Tablet/produtos/bolsa.png',
            imgMobile: 'src/assets/Mobile/produtos/bolsa.png',
            title: 'Bolsa coringa',
            text: 'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
            price: 'R$120,00'
        },
        {
            imgDesktop: 'src/assets/Desktop/produtos/calca.png',
            imgTablet: 'src/assets/Tablet/produtos/calca.png',
            imgMobile: 'src/assets/Mobile/produtos/calca.png',
            title: 'Calça jeans básica',
            text: 'Calça jeans azul básica, confortável e versátil. Essencial para o seu guarda-roupa!',
            price: 'R$80,00'
        },
        {
            imgDesktop: 'src/assets/Desktop/produtos/camiseta.png',
            imgTablet: 'src/assets/Tablet/produtos/camiseta.png',
            imgMobile: 'src/assets/Mobile/produtos/camiseta.png',
            title: 'Camiseta casual',
            text: 'Camiseta amarela básica, ótima para o dia a dia. Combina com qualquer estilo!',
            price: 'R$40,00'
        },
        {
            imgDesktop: 'src/assets/Desktop/produtos/jaqueta-jeans.png',
            imgTablet: 'src/assets/Tablet/produtos/jaqueta-jeans.png',
            imgMobile: 'src/assets/Mobile/produtos/jaqueta-jeans.png',
            title: 'Jaqueta jeans clássica',
            text: 'Jaqueta jeans azul clássica, resistente e estilosa. Perfeita para todas as estações!',
            price: 'R$150,00'
        },
        {
            imgDesktop: 'src/assets/Desktop/produtos/oculos.png',
            imgTablet: 'src/assets/Tablet/produtos/oculos.png',
            imgMobile: 'src/assets/Mobile/produtos/oculos.png',
            title: 'Óculos de sol',
            text: 'Óculos de sol preto, armação leve e lentes polarizadas. Proteção e estilo garantidos!',
            price: 'R$90,00'
        },
        {
            imgDesktop: 'src/assets/Desktop/produtos/tenis.png',
            imgTablet: 'src/assets/Tablet/produtos/tenis.png',
            imgMobile: 'src/assets/Mobile/produtos/tenis.png',
            title: 'Tênis esportivo',
            text: 'Tênis esportivo cinza, confortável e moderno. Ideal para praticar atividades físicas!',
            price: 'R$200,00'
        }
    ];
    

    function renderCards () {
        return cards.map((card) => {
            return (<ProductsCard card={card}/>)
        })
    }

    return (
        <div className="container">
        <h2 className="text-center p-4 fs-3">Produtos que estão bombando!</h2>
        <div className="container row mx-auto">
            {renderCards()}
        </div>
        </div>
    )
}