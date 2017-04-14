//class estatica
 class DateHelper {

constructor(){

    throw new Erro('DateHelper não pode ser instanciada');
}
   
   static dataParaTexto (data){
                //template string => utiliznado ${} colocar javascript dentro dele q aceita 
                //dentro de uma string  utilizando a craze(``) ao inves do '' 
                return 
                `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
                // data.getDate() 
                // + '/' +(data.getMonth() + 1)  
                // + '/' + data.getFullYear();
    }
   static textoParaData (texto){


        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('Deve estar no formato aaaa-mm-dd'); 

        //utilizando o map, ele irá correr o array e fazer o que está dentro do lambda para cada posição do array;
        //quando colocar os ... quer dizer que o array sera desmembrado
        //AeroFunction => utiliza a flecha do lambda e nao precisa caso esteja na mesma linha de um {} ou return
                return  new Date(...texto.split('-')
                             .map((item, indice) => item - indice % 2));        
    }
    
    
}