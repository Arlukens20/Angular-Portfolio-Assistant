import { Component, OnInit } from '@angular/core';
import { CurrencyServiceService } from 'src/app/Services/currency-service.service';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit {

  constructor(
    private currencyService:CurrencyServiceService
  ) { }

  ngOnInit(): void {
  }

  public currencyA = 0;
  public currencyB = 0;

  currencyList: any[] = ["STN","XAG","XAU","PLN","UGX","GGP","MWK","NAD","ALL","BHD","JEP","BWP","MRU","BMD","MNT","FKP","PYG","AUD","KYD","RWF","WST","SHP","SOS","SSP","BIF","SEK","CUC","BTN","MOP","XDR","IMP","INR","BYN","BOB","SRD","GEL","ZWL","EUR","BBD","RSD","SDG","VND","VES","ZMW","KGS","HUF","BND","BAM","CVE","BGN","NOK","BRL","JPY","HRK","HKD","ISK","IDR","KRW","KHR","XAF","CHF","MXN","PHP","RON","RUB","SGD","AED","KWD","CAD","PKR","CLP","CNY","COP","AOA","KMF","CRC","CUP","GNF","NZD","EGP","DJF","ANG","DOP","JOD","AZN","SVC","NGN","ERN","SZL","DKK","ETB","FJD","XPF","GMD","AFN","GHS","GIP","GTQ","HNL","GYD","HTG","XCD","GBP","AMD","IRR","JMD","IQD","KZT","KES","ILS","LYD","LSL","LBP","LRD","AWG","MKD","LAK","MGA","ZAR","MDL","MVR","MUR","MMK","MAD","XOF","MZN","MYR","OMR","NIO","NPR","PAB","PGK","PEN","ARS","SAR","QAR","SCR","SLL","LKR","SBD","VUV","USD","DZD","BDT","BSD","BZD","CDF","UAH","YER","TMT","UZS","UYU","CZK","SYP","TJS","TWD","TZS","TOP","TTD","THB","TRY","TND"];
  currencyList2: any[] = ["São Tomé and Príncipe dobra", "Silver (troy ounce)", "Gold (troy ounce)", "Polish złoty", "Ugandan shilling", "Guernsey pound", "Malawian kwacha", "Namibian dollar", "Albanian lek", "Bahraini dinar", "Jersey pound", "Botswana pula", "Mauritanian ouguiya", "Bermudian dollar", "Mongolian tögrög", "Falkland Islands pound", "Paraguayan guaraní", "Australian dollar", "Cayman Islands dollar", "Rwandan franc", "Samoan tālā", "Saint Helena pound", "Somali shilling", "South Sudanese pound", "Burundian franc", "Swedish krona", "Cuban convertible peso", "Bhutanese ngultrum", "Macanese pataca", "Special drawing rights", "Manx pound", "Indian rupee", "Belarusian ruble", "Bolivian boliviano", "Surinamese dollar", "Georgian lari", "Zimbabwean dollar", "Euro", "Barbadian dollar", "Serbian dinar", "Sudanese pound", "Vietnamese đồng", "Venezuelan bolívar", "Zambian kwacha", "Kyrgyzstani som", "Hungarian forint", "Brunei dollar", "Bosnia and Herzegovina convertible mark", "Cape Verdean escudo", "Bulgarian lev", "Norwegian krone", "Brazilian real", "Japanese yen", "Croatian kuna", "Hong Kong dollar", "Icelandic króna", "Indonesian rupiah", "South Korean won", "Cambodian riel", "Central African CFA franc", "Swiss franc", "Mexican peso", "Philippine peso", "Romanian leu", "Russian ruble", "Singapore dollar", "United Arab Emirates dirham", "Kuwaiti dinar", "Canadian dollar", "Pakistani rupee", "Chilean peso", "Renminbi", "Colombian peso", "Angolan kwanza", "Comorian franc", "Costa Rican colón", "Cuban peso", "Guinean franc", "New Zealand dollar", "Egyptian pound", "Djiboutian franc", "Netherlands Antillean guilder", "Dominican peso", "Jordanian dinar", "Azerbaijani manat", "Salvadoran colón", "Nigerian naira", "Eritrean nakfa", "Swazi lilangeni", "Danish krone", "Ethiopian birr", "Fijian dollar", "CFP franc", "Gambian dalasi", "Afghan afghani", "Ghanaian cedi", "Gibraltar pound", "Guatemalan quetzal", "Honduran lempira", "Guyanese dollar", "Haitian gourde", "Eastern Caribbean dollar", "Pound sterling", "Armenian dram", "Iranian rial", "Jamaican dollar", "Iraqi dinar", "Kazakhstani tenge", "Kenyan shilling", "Israeli new shekel", "Libyan dinar", "Lesotho loti", "Lebanese pound", "Liberian dollar", "Aruban florin", "Macedonian denar", "Lao kip", "Malagasy ariary", "South African rand", "Moldovan leu", "Maldivian rufiyaa", "Mauritian rupee", "Burmese kyat", "Moroccan dirham", "West African CFA franc", "Mozambican metical", "Malaysian ringgit", "Omani rial", "Nicaraguan córdoba", "Nepalese rupee", "Panamanian balboa", "Papua New Guinean kina", "Peruvian sol", "Argentine peso", "Saudi riyal", "Qatari riyal", "Seychellois rupee", "Sierra Leonean leone", "Sri Lankan rupee", "Solomon Islands dollar", "Vanuatu vatu", "United States dollar", "Algerian dinar", "Bangladeshi taka", "Bahamian dollar", "Belize dollar", "Congolese franc", "Ukrainian hryvnia", "Yemeni rial", "Turkmenistan manat", "Uzbekistani soʻm", "Uruguayan peso", "Czech koruna", "Syrian pound", "Tajikistani somoni", "New Taiwan dollar", "Tanzanian shilling", "Tongan paʻanga", "Trinidad and Tobago dollar", "Thai baht", "Turkish lira", "Tunisian dinar"]

  onChangeA(event: any){
    console.log(event.value);
    this.currencyA = event.value
  }

  onChangeB(event: any){
    console.log(event.value);
    this.currencyB = event.value
  }


  async getList() {
    console.log('GetList')
    this.currencyService.getList().subscribe(data => {

      //Convert the data into a json Obj
      // this.model.response = JSON.stringify(data).toString();
      // let obj = JSON.parse(this.model.response);
      let obj = JSON.parse(JSON.stringify(data).toString())
      console.log(obj)
      })
  }


  convertCurrency(){
    //Make API call. 
    //Multiple factor by amount and then return the amount in the second currency!
    this.currencyService.getConvertor("AUD","CAD").subscribe(data => {

      //Convert the data into a json Obj
      // this.model.response = JSON.stringify(data).toString();
      // let obj = JSON.parse(this.model.response);
      let obj = JSON.parse(JSON.stringify(data).toString())
      console.log(obj)
  })
}
}


//TODO
//Sign up for currency convertor on rapid API.
//Get all currencies and replace the currency List