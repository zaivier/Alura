class NegociacaoController {

    constructor() {

        //ao colocar as propiedade abaixo no constructor, voce não precisar ir para cada interação de submit varrer 
        //o dom para pegar o valor
        //ao utilizar o $ para pegar o queryselector voce deve utilizar o .bind(document) para que seja mantida a assossiação entre document
        //com querySelector    
        let $ = document.querySelector.bind(document);
        this._inputdata = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacao = new ListaNegociacoes();
    }

    adiciona(event) {
        event.preventDefault();       

        this._listaNegociacao.adiciona(_criaNegociacao());
        this._limpaFormulario();
    }

    _criaNegociacao() {
        let data = DateHelper.textoParaData(this._inputdata.value);
        return new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value);
}

    _limpaFormulario() {
        this._inputdata.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';

        this._inputdata.focus();

    }

}