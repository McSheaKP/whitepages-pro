import { Component, OnInit } from '@angular/core';
import { ReversePhoneService} from '../reverse-phone.service'
@Component({
  selector: 'app-phonedisplay',
  templateUrl: './phonedisplay.component.html',
  styleUrls: ['./phonedisplay.component.css']
})
export class PhonedisplayComponent implements OnInit {

  constructor(private _rps: ReversePhoneService){

    console.log(this.userPhoneNum);
    

  }

  
  userPhoneNum: String = "";



  ngOnInit(){
    this._rps.getData()
    .subscribe( data => console.log(data))


  }
}
