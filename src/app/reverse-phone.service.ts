import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';






@Injectable()
export class ReversePhoneService {
 url = 'https://proapi.whitepages.com/3.0/phone?phone=4848682340&api_key=b0ead43fa0714b2ebf7ea1a31f88e66e'
   
  constructor(private http: HttpClient) { }
  
  userPhoneNum: Number: 0;

  getData (){
    return this.http.get(this.url)
  }

  


}
