export class StockPortfolioItem {

    constructor(

    public Ticker: string,
    public Quantity: string,
    public CostBasis:string,
    public stockId:number,
    public price:number
    ){}
}
