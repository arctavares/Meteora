export default function Subscribe() {
    return (
        <div className="container d-flex justify-content-center">
            <form className="border border-secondary m-3 p-3 text-center w-75">
                <h5>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</h5>
            <div className="input-group my-3">
                <input className="form-control border-secondary rounded-0" type="email" placeholder="Digite seu e-mail" aria-label="Digite seu e-mail" aria-describedby="button-addon2" /> 
                <button type="button" id="button-addon2" className="sendBtn">Enviar</button>
            </div>
        </form>
      </div>
    )
}