import { Component, OnInit } from '@angular/core';
import { ReversePhoneService } from './reverse-phone.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Phone App';

  constructor(private _rps: ReversePhoneService){}

  ngOnInit(){
    this._rps.getData()
    .subscribe( data => console.log(data))
  }
}
