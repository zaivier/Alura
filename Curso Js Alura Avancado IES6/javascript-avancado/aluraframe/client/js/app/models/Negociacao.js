class Negociacao{

    constructor(data, quantidade, valor){

        this._data = new Date(data.getTime());
        this._quantiade = quantidade;
        this._valor = valor;

        //congelar instancia para que não possa ser alterada após estaciamento
        Object.freeze(this);       
    }
    
    //get - somente leitura da propriedade do construtor
    get volume() {
    return this._quantiade * this._valor;    
    }

    get data(){
        //neste caso não e retornado um objeto data, e sim um numero gerado que representa a data informada.
        //Impossibilitando alteração.
        return new Date(this._data.getTime());
    }
    get quantidade(){
        return this._quantiade;
    }
    get valor(){
        return this._valor;
    }


}