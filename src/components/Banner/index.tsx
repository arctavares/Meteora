export default function Banner () {

    interface Iitems {
        title: string;
        text: string;
        icon: string;
    }

    const items: Iitems[] = [
        {
            title: 'PAGUE PELO PIX',
            text: 'Ganhe 5% OFF em pagamentos via PIX',
            icon: '<i class="bi bi-x-diamond fs-1"></i>'
        },
        {
            title: 'TROCA GRÁTIS',
            text: 'Fique livre para trocar em até 30 dias.',
            icon: '<i class="bi bi-arrow-repeat fs-1"></i>'
        },
        {
            title: 'SUSTENTABILIDADE',
            text: 'Moda responsável, que respeita o meio ambiente.',
            icon: '<i class="bi bi-flower1 fs-1"></i>'
        }
    ]

    function renderItems() {
        return items.map((item) => {
            return (
                <div className="divsFacility  d-flex">
                    <div 
                        dangerouslySetInnerHTML={{ __html: item.icon }} 
                        className="icon"    
                    />
                    <div>
                        <div className="ms-3 mb-1 itemTitle">{item.title}</div>
                        <div className="smallerText ms-3 text-white">{item.text}</div>
                    </div>
                </div>
            )
        })
    }

    return (
        <section className="pb-4 bg-black p-4">
            <h2 className="text-center fs-2 mb-3 text-white">Conheça todas as nossas facilidades</h2>
            <div className="
            d-flex 
            flex-column 
            align-items-center 
            gap-3 
            flex-lg-row 
            justify-content-center
            px-3
            ">
                {renderItems()}
            </div>
        </section>
    )
}