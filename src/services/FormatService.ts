export const FormatService = {
    monetaryValue(value: number):string{
       return value.toLocaleString('pt-br',{minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})
    },
    limitText(text:string, maxLength:number):string {
        if(text.length < maxLength){
            return text;
        }
        return text.slice(0,50) + '...';
    }
}