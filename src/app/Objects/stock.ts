export class Stock {
    constructor(
    
    //getInfo values
    public Ticker: string,
    public response: string,
    public longBusinessSummary: string,
    public website: string,
    public targetHighPrice: string,
    public targetLowPrice: string,
    public targetMeanPrice: string, 
    public targetMedianPrice: string,

    //get price values
    public high:string,
    public low:string,
    public volume:string,
    ) { }
}
