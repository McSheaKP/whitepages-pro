import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';


@Injectable()
export class ReversePhoneService {
 
  urlBeginning: String: 'https://proapi.whitepages.com/3.0/phone?phone=';
  userPhoneNum: String: "4848682340";
  apiKey: String: '&api_key=b0ead43fa0714b2ebf7ea1a31f88e66e';
  url =  this.urlBeginning + this.userPhoneNum + this.apiKey;

  constructor(private http: HttpClient) { }


  getData (){
    return this.http.get(this.url)
  }

  


}
