import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';


@Injectable()
export class ReversePhoneService {
 
  urlBeginning ='https://proapi.whitepages.com/3.0/phone?phone=';
  userPhoneService = '4848682340';
  apiKey = '&api_key=b0ead43fa0714b2ebf7ea1a31f88e66e';
  url =  this.urlBeginning + this.userPhoneService + this.apiKey;

  constructor(private http: HttpClient) { }

  

  getData (){
    return this.http.get(this.url)
  }
  sendPhoneNum(phoneNum){
    return phoneNum;
  }

  // //take this.http.get(this.url) and pull off some component of the data to display
  // sendPhoneNum(array) {
  //   array.push(item);
  //   return array;
  // }

  // deleteItem(array, index) {
  //   array.splice(index, 1);
  //   return array;
  // }

}
